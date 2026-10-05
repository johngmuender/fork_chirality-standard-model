'use client';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import {
  NativeSelect,
  NativeSelectOption,
} from '@/components/ui/native-select';
import {
  useInView,
  useMotion,
  useSceneClock,
} from '@/components/exhibit-motion';
import {
  isorotate,
  knotSamples,
  shellReadout,
  type KnotSample,
} from '@/lib/gum-knot';

type Props = { kappa: number };
type Viewer = {
  update: (kappa: number, haloOnly: boolean) => void;
  tick: (t: number, dt: number) => void;
  turn: (angle: number) => void;
  reset: () => void;
  inspect: (shell: number) => void;
};

const RADIUS = 1;
const SHELLS = 8;
const PER_SHELL = 72;

function haloLengthInRadii(kappa: number) {
  return (0.8 * kappa) / Math.sqrt(1 - kappa * kappa);
}

/** The isorotating degree-one texture, rendered as an instanced field of arrows on concentric shells. */
export default function KnotExplorer({ kappa }: Props) {
  const container = useRef<HTMLDivElement>(null);
  const api = useRef<Viewer | null>(null);
  const latest = useRef(kappa);
  const { enabled } = useMotion();
  const motion = useRef(enabled);
  const [haloOnly, setHaloOnly] = useState(false);
  const haloRef = useRef(false);
  const [unavailable, setUnavailable] = useState(false);
  const [shell, setShell] = useState(3);
  const shellRef = useRef(3);
  const [announcement, setAnnouncement] = useState('');
  const reading = useRef(false);
  const ready = useInView(container, true);
  useSceneClock(container, (t, dt) => api.current?.tick(t, dt), !unavailable);
  useEffect(() => {
    latest.current = kappa;
    motion.current = enabled;
    haloRef.current = haloOnly;
    api.current?.update(kappa, haloOnly);
  }, [kappa, haloOnly, enabled]);
  useEffect(() => {
    shellRef.current = shell;
    api.current?.inspect(shell);
  }, [shell]);
  useEffect(() => {
    const element = container.current;
    if (!element || !ready) return;
    let disposed = false;
    let mounted = true;
    const cleanups: Array<() => void> = [];
    const own = <T extends { dispose: () => void }>(resource: T): T => {
      cleanups.push(() => resource.dispose());
      return resource;
    };
    const release = () => {
      if (disposed) return;
      disposed = true;
      api.current = null;
      for (const cleanup of cleanups.reverse()) {
        try {
          cleanup();
        } catch {
          /* Finish releasing the remaining resources. */
        }
      }
      cleanups.length = 0;
    };
    const teardown = () => {
      mounted = false;
      release();
    };
    const fail = () => {
      release();
      queueMicrotask(() => {
        if (mounted) setUnavailable(true);
      });
    };
    try {
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'low-power',
      });
      cleanups.push(() => renderer.domElement.remove());
      cleanups.push(() => renderer.forceContextLoss());
      own(renderer);
      let shaderFailed = false;
      renderer.debug.checkShaderErrors = true;
      renderer.debug.onShaderError = () => {
        if (shaderFailed || disposed) return;
        shaderFailed = true;
        queueMicrotask(() => {
          if (mounted) fail();
        });
      };
      cleanups.push(() => {
        renderer.debug.onShaderError = null;
      });
      renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.3;
      renderer.domElement.setAttribute('role', 'img');
      renderer.domElement.setAttribute(
        'aria-label',
        'Isorotating hedgehog texture. Blue and green arrows inside the core show the vector part of the texture; copper arrows outside show the evanescent halo. Drag to turn, or use the controls and shell selector below.',
      );
      element.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 60);
      camera.position.set(3.4, 2.2, 6.6);
      const controls = own(new OrbitControls(camera, renderer.domElement));
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.rotateSpeed = 0.55;
      controls.enableDamping = false;
      controls.saveState();
      const group = new THREE.Group();
      scene.add(group);
      scene.add(new THREE.HemisphereLight('#c7e4ff', '#16263c', 2.4));
      const key = new THREE.DirectionalLight('#e8f4ff', 3.6);
      key.position.set(3, 6, 5);
      scene.add(key);
      const rim = new THREE.PointLight('#edaf76', 45, 20);
      rim.position.set(-4, 1, -3);
      scene.add(rim);

      const samples: KnotSample[] = knotSamples(
        RADIUS,
        haloLengthInRadii(latest.current),
        SHELLS,
        PER_SHELL,
      );
      const arrow = own(new THREE.ConeGeometry(0.035, 0.16, 7));
      arrow.translate(0, 0.08, 0);
      const material = own(
        new THREE.MeshStandardMaterial({ metalness: 0.35, roughness: 0.3 }),
      );
      const arrows = own(
        new THREE.InstancedMesh(arrow, material, samples.length),
      );
      group.add(arrows);
      const dummy = new THREE.Object3D();
      const up = new THREE.Vector3(0, 1, 0);
      const direction = new THREE.Vector3();
      const quaternion = new THREE.Quaternion();
      const colour = new THREE.Color();
      const core = new THREE.Mesh(
        own(new THREE.SphereGeometry(RADIUS, 36, 24)),
        own(
          new THREE.MeshBasicMaterial({
            color: '#8bbcff',
            wireframe: true,
            transparent: true,
            opacity: 0.08,
          }),
        ),
      );
      group.add(core);
      const centre = new THREE.Mesh(
        own(new THREE.SphereGeometry(0.07, 16, 12)),
        own(new THREE.MeshBasicMaterial({ color: '#f4d592' })),
      );
      group.add(centre);
      const haloShell = new THREE.Mesh(
        own(new THREE.SphereGeometry(1, 36, 24)),
        own(
          new THREE.MeshBasicMaterial({
            color: '#f1a17d',
            wireframe: true,
            transparent: true,
            opacity: 0.05,
          }),
        ),
      );
      group.add(haloShell);
      const marker = new THREE.Mesh(
        own(new THREE.SphereGeometry(1, 24, 16)),
        own(
          new THREE.MeshBasicMaterial({
            color: '#ffffff',
            wireframe: true,
            transparent: true,
            opacity: 0.18,
          }),
        ),
      );
      group.add(marker);
      const frame = new THREE.Line(
        own(new THREE.BufferGeometry()).setFromPoints(
          Array.from({ length: 129 }, (_, i) => {
            const a = (i / 128) * Math.PI * 2;
            return new THREE.Vector3(
              2.7 * Math.cos(a),
              -2.4,
              2.7 * Math.sin(a),
            );
          }),
        ),
        own(
          new THREE.LineBasicMaterial({
            color: '#466381',
            transparent: true,
            opacity: 0.25,
          }),
        ),
      );
      scene.add(frame);

      let dragging = false,
        holdUntil = 0,
        phase = 0,
        haloLength = haloLengthInRadii(latest.current),
        onlyHalo = haloRef.current;
      const draw = () => {
        if (disposed || shaderFailed || document.hidden) return;
        try {
          renderer.render(scene, camera);
        } catch {
          fail();
        }
      };
      const sync = () => {
        samples.forEach((s, i) => {
          const halo =
            s.r < RADIUS
              ? 0
              : (Math.exp(-(s.r - RADIUS) / haloLength) * RADIUS) / s.r;
          const inCore = s.r < RADIUS;
          const vector = isorotate(s.pi, phase);
          const length = inCore ? Math.hypot(...vector) : halo * 0.6;
          if (inCore && onlyHalo) {
            dummy.scale.setScalar(0.0001);
          } else {
            dummy.scale.setScalar(Math.max(0.0001, length));
          }
          dummy.position.set(s.position[0], s.position[1], s.position[2]);
          if (length > 1e-4) {
            direction.set(vector[0], vector[1], vector[2]).normalize();
            quaternion.setFromUnitVectors(up, direction);
            dummy.quaternion.copy(quaternion);
          }
          dummy.updateMatrix();
          arrows.setMatrixAt(i, dummy.matrix);
          colour.set(
            inCore ? (s.sigma < 0 ? '#83c7ff' : '#82d6b2') : '#f0a588',
          );
          arrows.setColorAt(i, colour);
        });
        arrows.instanceMatrix.needsUpdate = true;
        if (arrows.instanceColor) arrows.instanceColor.needsUpdate = true;
        haloShell.scale.setScalar(RADIUS + haloLength);
      };
      const update = (nextKappa: number, nextHaloOnly: boolean) => {
        if (disposed) return;
        haloLength = haloLengthInRadii(nextKappa);
        onlyHalo = nextHaloOnly;
        samples.forEach((s) => {
          s.halo =
            s.r < RADIUS
              ? 0
              : (Math.exp(-(s.r - RADIUS) / haloLength) * RADIUS) / s.r;
        });
        sync();
        draw();
      };
      const resize = () => {
        if (disposed) return;
        const w = element.clientWidth,
          h = element.clientHeight;
        if (!w || !h) return;
        try {
          renderer.setSize(w, h, false);
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          draw();
        } catch {
          fail();
        }
      };
      const observer = new ResizeObserver(resize);
      cleanups.push(() => observer.disconnect());
      observer.observe(element);
      const start = () => {
        dragging = true;
      };
      const end = () => {
        dragging = false;
        holdUntil = performance.now() + 3500;
      };
      const lost = (event: Event) => {
        event.preventDefault();
        fail();
      };
      renderer.domElement.addEventListener('webglcontextlost', lost);
      cleanups.push(() =>
        renderer.domElement.removeEventListener('webglcontextlost', lost),
      );
      controls.addEventListener('start', start);
      cleanups.push(() => controls.removeEventListener('start', start));
      controls.addEventListener('end', end);
      cleanups.push(() => controls.removeEventListener('end', end));
      controls.addEventListener('change', draw);
      cleanups.push(() => controls.removeEventListener('change', draw));
      api.current = {
        update,
        tick: (t, dt) => {
          if (disposed) return;
          phase = t * 0.9;
          if (!dragging && !reading.current && performance.now() > holdUntil) {
            group.rotation.y += dt * 0.06;
          }
          sync();
          controls.update();
          draw();
        },
        turn: (angle) => {
          group.rotation.y += angle;
          holdUntil = performance.now() + 3500;
          draw();
        },
        reset: () => {
          group.rotation.set(0, 0, 0);
          controls.reset();
          holdUntil = performance.now() + 2000;
          draw();
        },
        inspect: (index) => {
          const radius = ((index + 0.5) / SHELLS) * RADIUS * 2.6;
          marker.scale.setScalar(radius);
          holdUntil = performance.now() + 5000;
          draw();
        },
      };
      resize();
      update(latest.current, haloRef.current);
      api.current.inspect(shellRef.current);
    } catch {
      fail();
    }
    return teardown;
    // The scene is built once per mount; later prop changes flow through api.current.
  }, [ready]);
  const readout = shellReadout(
    ((shell + 0.5) / SHELLS) * RADIUS * 2.6,
    RADIUS,
    haloLengthInRadii(kappa),
  );
  return (
    <div
      className="three-view"
      onFocusCapture={() => {
        reading.current = true;
      }}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          reading.current = false;
      }}
    >
      <div className="three-scene-heading">
        <span>THE ISOROTATING KNOT</span>
        <strong>
          {SHELLS * PER_SHELL} <small>field arrows</small>
        </strong>
      </div>
      <div
        className="three-canvas"
        ref={container}
        data-unavailable={unavailable}
      />
      {unavailable && (
        <output className="webgl-fallback">
          3D is unavailable here. The flat section, the shell readout and every
          number below remain available.
        </output>
      )}
      <div className="root-readout" aria-live="off">
        <span>DRAG TO TURN · THE CLOCK TURNS THE ARROWS ABOUT THE 3-AXIS</span>
        <strong>
          κ = {kappa.toFixed(3)} · halo length{' '}
          {haloLengthInRadii(kappa).toFixed(2)} R*
        </strong>
      </div>
      <div className="three-toolbar">
        <Button
          variant="ghost"
          size="sm"
          disabled={unavailable}
          onClick={() => api.current?.turn(-Math.PI / 7)}
        >
          ↶ Turn left
        </Button>
        <Button
          variant="ghost"
          size="sm"
          disabled={unavailable}
          onClick={() => api.current?.turn(Math.PI / 7)}
        >
          Turn right ↷
        </Button>
        <Button
          variant="ghost"
          size="sm"
          disabled={unavailable}
          onClick={() => api.current?.reset()}
        >
          Reset view
        </Button>
      </div>
      <label className="root-isolate" htmlFor="halo-only">
        <Switch
          id="halo-only"
          checked={haloOnly}
          disabled={unavailable}
          onCheckedChange={setHaloOnly}
        />{' '}
        Show only the halo
      </label>
      <div className="root-inspector">
        <label htmlFor="shell-inspect">
          Inspect a shell · keyboard or pointer
        </label>
        <NativeSelect
          id="shell-inspect"
          value={shell}
          onChange={(event) => {
            const index = Number(event.target.value);
            setShell(index);
            const r = shellReadout(
              ((index + 0.5) / SHELLS) * RADIUS * 2.6,
              RADIUS,
              haloLengthInRadii(kappa),
            );
            setAnnouncement(
              `Shell ${index + 1} at ${r.r.toFixed(2)} core radii, ${r.region}: profile angle ${r.f.toFixed(2)}, σ_P ${r.sigma.toFixed(2)}, vector magnitude ${r.piMagnitude.toFixed(2)}, halo amplitude ${r.halo.toFixed(2)}.`,
            );
          }}
        >
          {Array.from({ length: SHELLS }, (_, i) => (
            <NativeSelectOption key={i} value={i}>
              Shell {i + 1} · r = {(((i + 0.5) / SHELLS) * 2.6).toFixed(2)} R*
              {((i + 0.5) / SHELLS) * 2.6 < 1 ? ' · core' : ' · halo'}
            </NativeSelectOption>
          ))}
        </NativeSelect>
        <output htmlFor="shell-inspect" aria-live="off">
          r = {readout.r.toFixed(2)} R* · {readout.region}
          <br />f = {readout.f.toFixed(3)} · σ_P = {readout.sigma.toFixed(3)} ·
          |π| = {readout.piMagnitude.toFixed(3)}
          <br />
          halo amplitude {readout.halo.toFixed(3)}
        </output>
        <output className="sr-only" aria-live="polite">
          {announcement}
        </output>
        <p>
          Shells sample the compacton profile f₀(r) = 2 arccos(r/R*) inside the
          core and the evanescent halo outside. The white wireframe marks the
          inspected shell; it does not change the texture.
        </p>
      </div>
      <p className="three-caption">
        A mathematical texture on S³ drawn over three-dimensional parameter
        space. Arrows show π = sin f(r) x̂, turned about the 3-axis by the
        isorotation; the drawing is not the electron’s shape, whose core sits at
        the structural scale.
      </p>
    </div>
  );
}
