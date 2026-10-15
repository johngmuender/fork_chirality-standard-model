/** SI and natural-unit constants used by the GUM exhibits (CODATA 2018 values). */
export const lightSpeed = 299792458; // m s⁻¹
export const hbar = 1.054571817e-34; // J s
export const planck = 6.62607015e-34; // J s
export const electronVolt = 1.602176634e-19; // J
export const hcEvMetre = 1.23984198e-6; // eV·m
export const hbarCEvMetre = hcEvMetre / (2 * Math.PI); // ≈ 1.973e-7 eV·m
export const electronMassEv = 510998.95; // eV
export const muonMassEv = 105.6583755e6; // eV
export const tauMassEv = 1776.86e6; // eV
export const protonMassEv = 938.27208816e6; // eV
export const cmbDipoleSpeed = 369.8e3; // m s⁻¹, Solar motion relative to the CMB
export const metresPerMegaparsec = 3.085677581491367e22;
export const siderealDay = 86164.0905; // s
export const earthRotationRate = (2 * Math.PI) / siderealDay; // rad s⁻¹
export const hubbleConstant = 67.4; // km s⁻¹ Mpc⁻¹ (Planck 2018)
export const matterFraction = 0.315;

/** Convert a Hubble rate in km s⁻¹ Mpc⁻¹ to s⁻¹. */
export function hubbleToSi(kmPerSecondPerMegaparsec: number) {
  if (
    !Number.isFinite(kmPerSecondPerMegaparsec) ||
    kmPerSecondPerMegaparsec <= 0
  )
    throw new RangeError('A positive Hubble rate is required.');
  return (kmPerSecondPerMegaparsec * 1e3) / metresPerMegaparsec;
}

/** Angular frequency (rad s⁻¹) of a rest energy or gap given in eV: ω = E/ħ. */
export function frequencyFromEnergy(energyEv: number) {
  if (!Number.isFinite(energyEv) || energyEv <= 0)
    throw new RangeError('A positive energy in eV is required.');
  return (energyEv * electronVolt) / hbar;
}

export function assertFinite(label: string, ...values: number[]) {
  for (const value of values)
    if (!Number.isFinite(value))
      throw new RangeError(label + ': finite numbers are required.');
}
