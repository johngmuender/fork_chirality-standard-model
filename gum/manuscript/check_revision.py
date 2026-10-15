#!/usr/bin/env python3
"""Numbers of the GUM Unified Master Manuscript, revision 2 (2026-10-14).

Every closed-form number that revision 2 prints and that differs from, or is new relative to,
the draft of 2026-09-06 is recomputed here with the standard library only:

    python3 gum/manuscript/check_revision.py > gum/manuscript/revision-numbers.md
"""
import math

HBARC_EV_M = 197.3269804e-9            # eV m
HC_EV_UM = 1.23984198                  # eV μm
HBAR_EV_S = 6.582119569e-16
C = 299792458.0
GF = 1.1663788e-5                      # GeV^-2
VEV = 246.22
MH = 125.20
MW, MZ = 80.3692, 91.1876
MT = 172.57
ME, MMU, MTAU = 0.51099895, 105.6583755, 1776.86          # MeV
MU_Q, MD_Q, MS_Q, MC_Q, MB_Q = 2.16, 4.70, 93.5, 1273.0, 4183.0  # MeV (MS-bar current masses)
GAMMA_H_SM = 4.1e-3                    # GeV
L_PLANCK = 1.616255e-35
MPC = 3.0856775814913673e22
H0 = 67.4 * 1e3 / MPC                  # s^-1
OM_DE, OM_M, OM_R = 0.69, 0.31, 9.1e-5
DM2_21, DM2_31 = 7.5e-5, 2.51e-3       # eV²
RHO_DE0 = (2.3e-3) ** 4                # eV⁴ (natural units)
GEV2_TO_CM2 = 0.3893793721e-27

rows = []


def row(cid, what, value):
    rows.append((cid, what, value))


def sci(x, d=2):
    return f"{x:.{d}e}"


def bisect(f, lo, hi, it=200):
    flo = f(lo)
    for _ in range(it):
        mid = 0.5 * (lo + hi)
        fm = f(mid)
        if (fm < 0) == (flo < 0):
            lo, flo = mid, fm
        else:
            hi = mid
    return 0.5 * (lo + hi)


# ----------------------------------------------------------------- the structural scale
a_vals = {N: L_PLANCK * math.sqrt(N / (12 * math.pi)) for N in (6, 12, 60)}
row("A1", "ℓ_s from M_Pl² = N_eff ħc/(12π ℓ_s²) with the measured G",
    "; ".join(f"N_eff={N}: ℓ_s = {a/L_PLANCK:.2f} ℓ_P = {sci(a,1)} m" for N, a in a_vals.items()))
E_QG2 = 1.3e11
row("A2", "Photon-timing bound on the structural scale (Fermi-LAT, E_QG,2 > 1.3e11 GeV)",
    f"ℓ_s |ξ_γ|^(1/2) < ħc/E_QG,2 = {sci(HBARC_EV_M*1e-9/E_QG2,1)} m; at ℓ_s = ℓ_P the quadratic term (kℓ_s)² at 1 TeV is {sci((1e12/HBARC_EV_M*L_PLANCK)**2,1)}")
hw0_weak = 80.4e9  # eV
om0 = hw0_weak / HBAR_EV_S
for lg in (1.5e-27, 7e-28):
    row("A3", f"Matter–light cone difference (c_ψ−c)/c = (ℓ_g ω0/c)²/8 at the weak gap, ℓ_g = {lg:.1e} m",
        f"{sci((lg*om0/C)**2/8,1)}")

# ----------------------------------------------------------------- the exact cliff
def n_at_fidelity(F, N, M):
    """n at which F_max(n) = 1 − exp(−2M/α(n)) equals F, with α = (2^{n+1}−2)/N and M = ln(3GD)."""
    alpha = 2 * M / (-math.log(1 - F))
    return math.log2(N * alpha + 2) - 1


width = math.log2(math.log(0.1) / math.log(0.9))
row("B1", "Exact 90%→10% cliff width log2[ln(0.1)/ln(0.9)] (CP^N geodesic-ball volume)", f"{width:.2f} qubits, independent of N_eff and of M")
for M in (10, 100, 1000):
    N = 1e68
    row("B2", f"Cliff location offsets above log2 N_eff for M = ln(3GD) = {M}",
        f"n(F=0.9) − log2N = {n_at_fidelity(0.9, N, M)-math.log2(N):+.1f}; n(F=0.5) − log2N = {n_at_fidelity(0.5, N, M)-math.log2(N):+.1f}; n(F=0.1) − log2N = {n_at_fidelity(0.1, N, M)-math.log2(N):+.1f}")
row("B3", "Closed form of the midpoint offset: δn_50 = log2(2M/ln2) − 1", "; ".join(f"M={M}: {math.log2(2*M/math.log(2))-1:.1f}" for M in (10, 100, 1000)))
regs = [("ion/atom zone", 1e-10), ("superconducting die", 1e-6)]
for name, V in regs:
    for a, lab in ((L_PLANCK, "ℓ_P"), (1.5e-27, "1.5e-27 m")):
        N = V / a ** 3
        row("B4", f"Dense-storage midpoint n_50 for {name} (V = {V:.0e} m³) at ℓ_s = {lab}, M = 100, 12 numbers per cell",
            f"log2(V/ℓ_s³) = {math.log2(N):.1f}; +log2 12 = {math.log2(12*N):.1f}; n_50 = {n_at_fidelity(0.5, 12*N, 100):.0f}")
row("B5", "Hosting-knob shifts", f"+{math.log2(1e3):.1f} qubits per 10³ in V or A; +{math.log2(1e10):.1f} for a 1 m³ photonic network relative to 10⁻¹⁰ m³")
n = 300
row("B6", "Gate budget for a return probability e⁻⁷ at n_q = 300", f"all-to-all log-depth scrambler ≈ n log2 n = {n*math.log2(n):.0f} gates ⇒ ε₂ ≲ {7/(n*math.log2(n)):.1e}; 2D nearest-neighbour ≈ n^{{3/2}} ⇒ ε₂ ≲ {7/n**1.5:.1e}")

# ----------------------------------------------------------------- knots: window, halo, modes
eps_e = (8e-6, 3e-3)
species = [("μ", MMU), ("τ", MTAU), ("d", MD_Q), ("u", MU_Q), ("s", MS_Q), ("c", MC_Q), ("b", MB_Q), ("t", MT * 1e3)]
parts = []
for name, m in species:
    f = (ME / m) ** (4 / 3)
    parts.append(f"ε_{name} ∈ [{sci(eps_e[0]*f,1)}, {sci(eps_e[1]*f,1)}]")
row("C1", "Per-species near-BPS lift from ε_e ∈ [8e-6, 3e-3] and ε ∝ m̃^{-4/3} (M ∝ Λm̃ at fixed Λ)", "; ".join(parts))
row("C2", "Fourth charged-lepton candidate and its lift", f"m_4 = m_e e^{{-(A+2B)/2}} = {ME*1e6*math.exp(-8.5):.0f} eV; ε_4/ε_e = e^{{(4/3)·8.5}} = {math.exp(4/3*8.5):.1e}; ε_4 ≥ {8e-6*math.exp(4/3*8.5):.2f} for ε_e ≥ 8e-6")
hw0_e = ME * 1e3 * math.sqrt(2)  # keV
row("C3", "Electron band edge and SDiff modes √ε_e ħω0", f"ħω0 = {hw0_e:.1f} keV; modes {math.sqrt(eps_e[0])*hw0_e:.1f}–{math.sqrt(eps_e[1])*hw0_e:.1f} keV")
kap = 1 / math.sqrt(2)
halo = {name: HBARC_EV_M / (m * 1e6) for name, m in [("e", ME), ("μ", MMU), ("τ", MTAU), ("d", MD_Q), ("t", MT * 1e3)]}
row("C4", "Halo length λ_halo = (c_ψ/c)(ħ/Mc)·κ/√(1−κ²) = (c_ψ/c)ħ/Mc at κ = 1/√2",
    "; ".join(f"{k}: {sci(v,3)} m" for k, v in halo.items()))
gam_jr = math.sqrt(1 + 1.9 * 0.69 ** 2)
for a, lab in ((L_PLANCK, "ℓ_P"), (1.5e-27, "1.5e-27 m")):
    row("C5", f"Right-handed admixture ε_R = (ℓ_s/λ_halo,e)^γ_JR at ℓ_s = {lab} (γ_JR = {gam_jr:.3f})", sci((a / halo['e']) ** gam_jr, 1))
q_pitch = 2 * math.pi / 24.6e-6
eps_d_hi = 3e-3 * (ME / MD_Q) ** (4 / 3)
eps_R_P = (L_PLANCK / halo['e']) ** gam_jr
theta = eps_d_hi * eps_R_P * q_pitch * halo['d']
row("C6", "Composite strong-CP angle θ̄_eff ≤ ε_d ε_R (qλ_halo,d) at ℓ_s = ℓ_P", f"qλ_halo,d = {sci(q_pitch*halo['d'],1)}; θ̄ ≤ {sci(theta,1)}; d_n ≤ 3.6e-16·θ̄ = {sci(3.6e-16*theta,1)} e·cm (SM CKM background ≈ 1e-32; bounds 1.8e-26 n, 4.1e-30 e)")
row("C7", "Top halo scale and core correction in Δρ_top", f"λ_halo,t = {sci(halo['t'],2)} m; (m_t ℓ_s c/ħ)² at ℓ_P = {sci((MT*1e9/HBARC_EV_M*L_PLANCK)**2,1)}")

# ----------------------------------------------------------------- electroweak angle
def s2w(sin_tc):
    return 0.25 * (1 - (1 - math.cos(math.asin(sin_tc))) / 3)


band = [s2w(s) for s in (0.80, 0.69, 0.58)]
row("D1", "sin²θ_w = ¼(1 − ε_tilt/3), ε_tilt = 1 − cosθ_c, sinθ_c = 0.69 ± 0.11",
    f"central {band[1]:.4f}; band [{band[0]:.4f}, {band[2]:.4f}] ⇒ 0.227 ± 0.009; on-shell 1 − M_W²/M_Z² = {1-(MW/MZ)**2:.4f}; MS-bar(M_Z) 0.2312")
vartheta = math.sqrt(band[1] / (1 - band[1]))
row("D2", "Mixing modulus and mass ratio at the corrected centre", f"ϑ = {vartheta:.3f}; M_Z/M_W = √(1+ϑ²) = {math.sqrt(1+vartheta**2):.4f} vs {MZ/MW:.4f}")

# ----------------------------------------------------------------- pitch, trough, locking length
m3_lo, m3_hi = math.sqrt(DM2_31), 0.057
row("E1", "Pitch window p = hc/m3 for m3 ∈ [√Δm²₃₁, 0.057] eV", f"[{HC_EV_UM/m3_hi:.1f}, {HC_EV_UM/m3_lo:.1f}] μm; edge frequency c/p ∈ [{C/(HC_EV_UM/m3_lo*1e-6)/1e12:.1f}, {C/(HC_EV_UM/m3_hi*1e-6)/1e12:.1f}] THz")
p = 24.6e-6
dn_bound = math.sqrt(2 * p * H0 / (math.pi ** 2 * C) * math.log(1 / 0.9))
row("E2", "Cosmological-passage transparency bound Δn/n̄ ≤ [2pH0/(π²c) ln(1/(1−R))]^{1/2}, R = 0.1, p = 24.6 μm", sci(dn_bound, 2))
eps_vac, s2 = 3e-3, 0.69 ** 2
l_lock = (dn_bound / (eps_vac * s2)) ** 0.25 / q_pitch
row("E3", "Locking length ℓ_lock = √(γ/4μ_c) bounded by the trough: Δn = ε sin²θ_c (q ℓ_lock)⁴ ≤ 6e-17", f"ℓ_lock ≲ {sci(l_lock,1)} m (ε = 3e-3); Δn at ℓ_lock = ℓ_P: {sci(eps_vac*s2*(q_pitch*L_PLANCK)**4,1)}")
row("E4", "Bridge logarithm and m3 (single halo formula, yardstick ħ/m_τc)", f"L = {(5.644-3.05)/0.1065:.2f}; m3 = m_τc² e^−L = {MTAU*1e6*math.exp(-(5.644-3.05)/0.1065):.4f} eV; 1σ [{MTAU*1e6*math.exp(-(5.644-3.05)/0.1065-0.9):.3f}, {MTAU*1e6*math.exp(-(5.644-3.05)/0.1065+0.9):.3f}]")


def sum_nu(m3):
    m1 = math.sqrt(max(m3 ** 2 - DM2_31, 0))
    return m1 + math.sqrt(m1 ** 2 + DM2_21) + m3


row("E5", "Σm_ν window from the floor-truncated m3 ∈ [0.0503, 0.057]", f"[{sum_nu(m3_lo):.4f}, {sum_nu(m3_hi):.4f}] eV; DESI DR2+CMB 0.064 eV ⇒ m3 ≤ {bisect(lambda m: sum_nu(m)-0.064, m3_lo, 0.06):.4f} eV")
row("E6", "Generator applied to neutrinos (excluded)", f"m2 = m3 e^{{-A/2}} = {0.0503*math.exp(-2.8)*1e3:.1f} meV < √Δm²₂₁ = {math.sqrt(DM2_21)*1e3:.1f} meV")

# ----------------------------------------------------------------- cosmology
def w_de(n, om):
    return -n / (1 - (1 - n) * om)


def omega_de(n, a):
    h2 = OM_M * a ** -3 + OM_R * a ** -4 + OM_DE
    for _ in range(300):
        h2 = OM_M * a ** -3 + OM_R * a ** -4 + OM_DE * h2 ** (1 - n)
    return OM_DE * h2 ** (1 - n) / h2, math.sqrt(h2)


def wa_deriv(n):
    w0 = w_de(n, OM_DE)
    return -3 * n * (1 - n) * w0 * OM_DE * (1 - OM_DE) / (1 - (1 - n) * OM_DE) ** 2


def cpl_fit(n, zmax=2.0, steps=200):
    """Least-squares CPL (w0, wa) to the family's w(a) over z ∈ [0, zmax], uniform in a."""
    xs, ys = [], []
    for i in range(steps + 1):
        a = 1 / (1 + zmax) + (1 - 1 / (1 + zmax)) * i / steps
        om, _ = omega_de(n, a)
        xs.append(1 - a)
        ys.append(w_de(n, om))
    N = len(xs)
    sx, sy = sum(xs), sum(ys)
    sxx, sxy = sum(x * x for x in xs), sum(x * y for x, y in zip(xs, ys))
    wa = (N * sxy - sx * sy) / (N * sxx - sx * sx)
    w0 = (sy - wa * sx) / N
    return w0, wa


def chi2(w0, wa, fit, rho=-0.9):
    x = (w0 - fit[0]) / fit[1]
    y = (wa - fit[2]) / fit[3]
    return (x * x + y * y - 2 * rho * x * y) / (1 - rho * rho)


def sigma_equiv(c2):
    pval = math.exp(-c2 / 2)
    return bisect(lambda s: math.erfc(s / math.sqrt(2)) - pval, 0, 60)


fits = {"Pantheon+": (-0.838, 0.055, -0.62, 0.205), "Union3": (-0.667, 0.088, -1.09, 0.29), "DESY5": (-0.752, 0.057, -0.86, 0.215)}
for nn in (0.5, 0.75, 0.9, 0.95, 1.0):
    w0d, wad = w_de(nn, OM_DE), wa_deriv(nn)
    w0f, waf = cpl_fit(nn)
    parts = [f"derivative CPL ({w0d:.3f}, {wad:+.3f}); fitted over z<2 ({w0f:.3f}, {waf:+.3f})"]
    for name, fit in fits.items():
        c2 = chi2(w0f, waf, fit)
        parts.append(f"{name}: Δχ² = {c2:.0f} ({sigma_equiv(c2):.1f}σ)")
    row("F1", f"Family member n = {nn} against DESI DR2 + CMB + SN (Gaussian CPL proxy, ρ = −0.9)", "; ".join(parts))
for nn in (0.5, 0.75, 0.9, 0.95):
    _, hrec = omega_de(nn, 1 / 1101)
    parts = []
    for z in (1.0, 3.0, 7.7):
        _, hz = omega_de(nn, 1 / (1 + z))
        parts.append(f"β(z={z})/β_rec = {(hz**(2*(1-nn))-1)/(hrec**(2*(1-nn))-1):.1e}")
    row("F2", f"Birefringence accrued since redshift z relative to recombination, n = {nn}", "; ".join(parts))
for nn in (0.5, 0.75, 0.9, 0.95):
    _, h3 = omega_de(nn, 0.25)
    lever = h3 ** (1 - nn) - 1
    eps_bound = 1e-6 / (0.1065 * lever)
    chi_inv = 2 * RHO_DE0 / (eps_bound * m3_lo) ** 2
    row("F3", f"Pitch-lag bound from δμ/μ < 1e-6 at z = 3, n = {nn}", f"h(3)^{{1−n}} − 1 = {lever:.3f}; |ε_ν| = |δq₀/q_eq| < {sci(eps_bound,1)}; soft-mode stiffness 𝒳⁻¹ > 2ρ_DE,0/(ε_ν q*)² = {sci(chi_inv,1)} eV²; neutrino-mass drift |m3(z=3)/m3(0) − 1| < {sci(eps_bound*lever,1)}")

# ----------------------------------------------------------------- the Higgs portal and the sterile knot
M_N = MTAU * 1e-3
y = M_N / VEV
beta3 = (1 - 4 * M_N ** 2 / MH ** 2) ** 1.5
gam_dirac = y ** 2 * MH / (8 * math.pi) * beta3
row("G1", "h → N0 N̄0 at Yukawa strength y = m_τ/v", f"y = {y:.2e}; Γ = {gam_dirac*1e3:.3f} MeV (Dirac), {gam_dirac/2*1e3:.3f} MeV (Majorana); BR_inv = {gam_dirac/(GAMMA_H_SM+gam_dirac):.3f} / {gam_dirac/2/(GAMMA_H_SM+gam_dirac/2):.3f}; SM BR(h→ZZ*→4ν) ≈ 0.0011; ATLAS 95% limit 0.107; HL-LHC reach ≈ 0.025")


def sigma_v_portal(mchi, yy, x_f=20.0):
    v2 = 6 / x_f
    tot = 0.0
    for mf, nc in ((MC_Q * 1e-3, 3), (MS_Q * 1e-3, 3), (MTAU * 1e-3, 1), (MB_Q * 1e-3, 3)):
        if mf >= mchi:
            continue
        yf = mf / VEV
        tot += nc * yy ** 2 * yf ** 2 * mchi ** 2 * v2 / (8 * math.pi * ((4 * mchi ** 2 - MH ** 2) ** 2 + MH ** 2 * GAMMA_H_SM ** 2)) * (1 - mf ** 2 / mchi ** 2) ** 1.5
    return tot * GEV2_TO_CM2 * C * 100


sv = sigma_v_portal(M_N, y)
row("G2", "Higgs-portal annihilation of a 1.78 GeV Dirac knot (p-wave, x_f = 20)", f"⟨σv⟩ ≈ {sci(sv,1)} cm³/s; thermal relic needs 2.2e-26 ⇒ overabundant by {sci(2.2e-26/sv,0)} unless a dressing channel N0N̄0 → ℓ⁺ℓ⁻ supplies ⟨σ_d v⟩ ≈ 2e-26")
p_ann = 3.5e-28  # cm³ s⁻¹ GeV⁻¹ (Planck 2018 p_ann bound)
row("G3", "CMB energy-injection bound on an s-wave leptonic channel at 1.78 GeV (f_eff ≈ 0.5)", f"⟨σv⟩ < p_ann·m/f_eff = {sci(p_ann*M_N/0.5,1)} cm³/s, {2.2e-26/(p_ann*M_N/0.5):.0f}× below the thermal value: an s-wave dressing channel is excluded, a p-wave one is not")
mu_red = M_N * 0.939 / (M_N + 0.939)
coup = 0.3 * 0.939 * y / (VEV * MH ** 2)
row("G4", "Direct detection of N0 through the portal", f"σ_SI ≈ {sci(mu_red**2/math.pi*coup**2*GEV2_TO_CM2,1)} cm² at 1.78 GeV, under the solar-neutrino fog")

# ----------------------------------------------------------------- uniformity constraints on the frustration integrals
phase = ME * 1e6 * 1.602176634e-19 / 1.054571817e-34 * 1e-9
row("H1", "Electron interferometry across pitch cells (1 ns flight, 1e-2 rad floor)", f"phase per unit δm/m = {sci(phase,1)} rad ⇒ cell-to-cell δm_e/m_e < {sci(1e-2/phase,1)}")
row("H2", "Optical-lattice-clock site comparison", "δν/ν ≈ 1e-18 across μm spacings ⇒ δm_e/m_e < 1e-18 cell to cell (transition frequencies ∝ m_e α² at fixed α)")
row("H3", "Implied constraint on the frustration integrals", f"δA_cell < 1e-18 (clocks), δA_cell < {sci(1e-2/phase,1)} (interferometry), since δ ln m_e = −δA − ½δB for the p = 2 class")

# ----------------------------------------------------------------- near-field null test
r = 10.0
eps0 = 8.8541878128e-12
dE = 1e-9 * 1e-3 / (4 * math.pi * eps0 * r ** 3)
row("I1", "Transverse-completion precursor that F-G forbids: 1 nC bunch kicked 1 mm, sensors at 10 m", f"ΔE_C = {sci(dE,1)} V/m inside 0 < t < r/c = {r/C*1e9:.1f} ns; radiation pulse {sci(1e-9*(C*1e-3/1e-9)/(4*math.pi*eps0*C**2*r),1)} V/m at r/c")

print("# Numbers of revision 2 of the GUM Unified Master Manuscript\n")
print("Generated by `gum/manuscript/check_revision.py` (standard library only). Rows are the numbers the revision prints that differ from, or are new relative to, the draft of 2026-09-06.\n")
print("| # | Quantity | Value |")
print("|---|---|---|")
for cid, what, value in rows:
    print(f"| {cid} | {what} | {value} |")
