import { StrictMode } from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, expect, it, vi } from 'vitest';
import { MotionProvider } from '@/components/exhibit-motion';
import { shellReadout } from '@/lib/gum-knot';
import * as THREE from 'three';

const hardware = vi.hoisted(() => ({
  fail: true,
  failAt: '',
  observers: [] as Array<{
    callback: () => void;
    disconnect: ReturnType<typeof vi.fn>;
  }>,
  renderers: [] as Array<{
    domElement: HTMLCanvasElement;
    render: ReturnType<typeof vi.fn>;
    dispose: ReturnType<typeof vi.fn>;
    forceContextLoss: ReturnType<typeof vi.fn>;
    debug: { checkShaderErrors: boolean; onShaderError: (() => void) | null };
  }>,
}));
// Replace only the GPU boundary. React, Three geometry and OrbitControls remain real.
vi.mock('three', async (importOriginal) => ({
  ...(await importOriginal<typeof import('three')>()),
  WebGLRenderer: class {
    domElement = document.createElement('canvas');
    debug = {
      checkShaderErrors: true,
      onShaderError: null as (() => void) | null,
    };
    render = vi.fn((_scene: THREE.Scene, _camera: THREE.Camera) => {
      if (hardware.failAt === 'render') throw new Error('draw failed');
    });
    dispose = vi.fn();
    forceContextLoss = vi.fn();
    setPixelRatio = vi.fn(() => {
      if (hardware.failAt === 'pixel') throw new Error('setup failed');
    });
    setSize = vi.fn(() => {
      if (hardware.failAt === 'size') throw new Error('resize failed');
    });
    constructor() {
      if (hardware.fail) throw new Error('WebGL unavailable');
      hardware.renderers.push(this);
    }
  },
}));
import KnotExplorer from '@/components/knot-explorer';

const settle = async () => {
  await act(async () => {
    await Promise.resolve();
  });
};
const halo = (kappa: number) => (0.8 * kappa) / Math.sqrt(1 - kappa * kappa);

beforeEach(() => {
  hardware.fail = true;
  hardware.failAt = '';
  hardware.renderers.length = 0;
  hardware.observers.length = 0;
  vi.stubGlobal(
    'ResizeObserver',
    class {
      constructor(public callback: () => void) {
        hardware.observers.push(this);
      }
      observe() {}
      disconnect = vi.fn();
    },
  );
});

it('keeps the shell readout when WebGL cannot initialise', async () => {
  const kappa = 1 / Math.SQRT2;
  const view = render(
    <StrictMode>
      <MotionProvider>
        <KnotExplorer kappa={kappa} />
      </MotionProvider>
    </StrictMode>,
  );
  await settle();
  expect(screen.getByText(/3D is unavailable here/)).toBeTruthy();
  for (const name of ['↶ Turn left', 'Turn right ↷', 'Reset view']) {
    expect(
      (screen.getByRole('button', { name }) as HTMLButtonElement).disabled,
    ).toBe(true);
  }
  const selector = screen.getByLabelText(
    'Inspect a shell · keyboard or pointer',
  );
  if (!(selector instanceof HTMLSelectElement))
    throw new Error('Missing native shell selector');
  expect(selector.disabled).toBe(false);
  expect(selector.options).toHaveLength(8);
  fireEvent.change(selector, { target: { value: '6' } });
  expect(selector.value).toBe('6');
  const expected = shellReadout((6.5 / 8) * 2.6, 1, halo(kappa));
  const readout = view.container.querySelector('output[for="shell-inspect"]');
  expect(readout?.textContent).toContain('r = ' + expected.r.toFixed(2));
  expect(readout?.textContent).toContain(expected.region);
  expect(
    view.container.querySelector('output[aria-live="polite"]')?.textContent,
  ).toContain('Shell 7');
  expect(view.container.querySelector('canvas')).toBeNull();
});

it('handles a context-loss event and disposes the renderer on unmount', async () => {
  hardware.fail = false;
  const view = render(
    <StrictMode>
      <MotionProvider>
        <KnotExplorer kappa={0.7} />
      </MotionProvider>
    </StrictMode>,
  );
  await settle();
  const renderer = hardware.renderers.at(-1)!;
  expect(renderer).toBeTruthy();
  expect(renderer.render).toHaveBeenCalled();
  const lost = new Event('webglcontextlost', { cancelable: true });
  fireEvent(renderer.domElement, lost);
  await settle();
  expect(lost.defaultPrevented).toBe(true);
  expect(screen.getByText(/3D is unavailable here/)).toBeTruthy();
  expect(
    (screen.getByRole('button', { name: 'Reset view' }) as HTMLButtonElement)
      .disabled,
  ).toBe(true);
  view.unmount();
  for (const instance of hardware.renderers) {
    expect(instance.dispose).toHaveBeenCalledOnce();
    expect(instance.forceContextLoss).toHaveBeenCalledOnce();
    expect(instance.domElement.isConnected).toBe(false);
  }
});

it.each(['pixel', 'size', 'render'])(
  'releases partial setup after a %s failure',
  async (failAt) => {
    hardware.fail = false;
    hardware.failAt = failAt;
    vi.spyOn(HTMLElement.prototype, 'clientWidth', 'get').mockReturnValue(800);
    vi.spyOn(HTMLElement.prototype, 'clientHeight', 'get').mockReturnValue(600);
    const view = render(
      <StrictMode>
        <MotionProvider>
          <KnotExplorer kappa={0.7} />
        </MotionProvider>
      </StrictMode>,
    );
    await settle();
    expect(screen.getByText(/3D is unavailable here/)).toBeTruthy();
    expect(view.container.querySelector('canvas')).toBeNull();
    view.unmount();
    for (const renderer of hardware.renderers) {
      expect(renderer.dispose).toHaveBeenCalledOnce();
      expect(renderer.forceContextLoss).toHaveBeenCalledOnce();
    }
    for (const observer of hardware.observers)
      expect(observer.disconnect).toHaveBeenCalledOnce();
  },
);

it('redraws the texture when κ changes and releases geometry on unmount', async () => {
  hardware.fail = false;
  const disposeGeometry = vi.spyOn(THREE.BufferGeometry.prototype, 'dispose');
  const disposeInstances = vi.spyOn(THREE.InstancedMesh.prototype, 'dispose');
  const view = render(
    <MotionProvider>
      <KnotExplorer kappa={0.6} />
    </MotionProvider>,
  );
  await settle();
  const renderer = hardware.renderers.at(-1)!;
  const calls = renderer.render.mock.calls.length;
  view.rerender(
    <MotionProvider>
      <KnotExplorer kappa={0.9} />
    </MotionProvider>,
  );
  await settle();
  expect(renderer.render.mock.calls.length).toBeGreaterThan(calls);
  expect(
    view.container.querySelector('.root-readout strong')?.textContent,
  ).toContain('κ = 0.900');
  view.unmount();
  expect(renderer.dispose).toHaveBeenCalledOnce();
  expect(disposeInstances).toHaveBeenCalledOnce();
  expect(disposeGeometry.mock.calls.length).toBeGreaterThanOrEqual(5);
});
