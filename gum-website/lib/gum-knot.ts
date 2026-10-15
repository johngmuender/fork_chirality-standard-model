import { assertFinite } from './gum-constants.ts';
import { compactonProfile } from './gum-particle.ts';

/**
 * Geometry of the degree-one hedgehog texture P̃ = exp(i f(r) x̂·σ) = cos f + i sin f x̂·σ,
 * written as P̃ = σ_P + iπ·σ, and of the isorotation that turns π about the 3-axis.
 * These are mathematical textures for the explorer, not drawings of a physical electron.
 */
export type Vec3 = [number, number, number];

/** σ_P = cos f(r) and π = sin f(r) x̂ at a point. */
export function hedgehog(x: number, y: number, z: number, radius: number) {
  assertFinite('hedgehog', x, y, z, radius);
  const r = Math.hypot(x, y, z);
  const f = compactonProfile(r, radius);
  const s = Math.sin(f);
  const unit: Vec3 = r === 0 ? [0, 0, 1] : [x / r, y / r, z / r];
  return {
    r,
    f,
    sigma: Math.cos(f),
    pi: [s * unit[0], s * unit[1], s * unit[2]] as Vec3,
  };
}

/** Isorotation: e^{iωtσ₃/2} P̃ e^{−iωtσ₃/2} rotates π about the 3-axis by ωt and leaves σ_P fixed. */
export function isorotate([x, y, z]: Vec3, phase: number): Vec3 {
  assertFinite('isorotation', x, y, z, phase);
  const c = Math.cos(phase),
    s = Math.sin(phase);
  return [c * x - s * y, s * x + c * y, z];
}

/** Topological density b_P = −(1/2π²r²) sin²f f′ for the hedgehog. */
export function topologicalDensity(r: number, radius: number) {
  assertFinite('density', r, radius);
  if (r <= 0 || r >= radius) return 0;
  const f = compactonProfile(r, radius);
  const derivative = -2 / Math.sqrt(radius * radius - r * r);
  return -(Math.sin(f) ** 2 * derivative) / (2 * Math.PI ** 2 * r * r);
}

/** The degree ∫ b_P d³x, which must be 1 for the hedgehog (numerical midpoint rule). */
export function degree(radius: number, samples = 20000) {
  assertFinite('degree', radius);
  if (radius <= 0 || !Number.isInteger(samples) || samples < 100)
    throw new RangeError('A positive radius and enough samples are required.');
  let total = 0;
  const h = radius / samples;
  for (let i = 0; i < samples; i++) {
    const r = (i + 0.5) * h;
    total += topologicalDensity(r, radius) * 4 * Math.PI * r * r * h;
  }
  return total;
}

/** The evanescent halo outside the core: exp(−(r − R⋆)/λ) · (R⋆ / r), normalised to 1 at the core edge. */
export function haloAmplitude(r: number, radius: number, haloLength: number) {
  assertFinite('halo', r, radius, haloLength);
  if (radius <= 0 || haloLength <= 0)
    throw new RangeError('Positive lengths required.');
  if (r < radius) return 0;
  return (Math.exp(-(r - radius) / haloLength) * radius) / r;
}

export type KnotSample = {
  position: Vec3;
  pi: Vec3;
  sigma: number;
  r: number;
  halo: number;
  shell: number;
};

/** Points on concentric shells, each a Fibonacci sphere, inside the core and across the halo. */
export function knotSamples(
  radius: number,
  haloLength: number,
  shells = 7,
  perShell = 64,
  outerFactor = 2.6,
): KnotSample[] {
  assertFinite('samples', radius, haloLength, outerFactor);
  if (
    !Number.isInteger(shells) ||
    shells < 2 ||
    !Number.isInteger(perShell) ||
    perShell < 4
  )
    throw new RangeError('At least two shells of four points are required.');
  const golden = Math.PI * (3 - Math.sqrt(5));
  const samples: KnotSample[] = [];
  for (let s = 0; s < shells; s++) {
    const fraction = (s + 0.5) / shells;
    const r = fraction * radius * outerFactor;
    for (let i = 0; i < perShell; i++) {
      const y = 1 - (2 * (i + 0.5)) / perShell;
      const ring = Math.sqrt(1 - y * y);
      const theta = golden * i;
      const position: Vec3 = [
        r * ring * Math.cos(theta),
        r * y,
        r * ring * Math.sin(theta),
      ];
      const field = hedgehog(position[0], position[1], position[2], radius);
      samples.push({
        position,
        pi: field.pi,
        sigma: field.sigma,
        r,
        halo: haloAmplitude(r, radius, haloLength),
        shell: s,
      });
    }
  }
  return samples;
}

/** Shell readout for the keyboard inspector: profile angle, |π|, σ_P and halo amplitude at radius r. */
export function shellReadout(r: number, radius: number, haloLength: number) {
  const f = compactonProfile(r, radius);
  return {
    r,
    f,
    sigma: Math.cos(f),
    piMagnitude: Math.abs(Math.sin(f)),
    halo: haloAmplitude(r, radius, haloLength),
    region: r < radius ? 'core' : 'halo',
  };
}
