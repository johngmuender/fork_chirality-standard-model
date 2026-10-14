#!/usr/bin/env python3
"""Recompute every closed-form number in the GUM Unified Master Manuscript (draft of 2026-09-06).

Standard library only. Run from anywhere:

    python3 gum/review/verify_manuscript.py > gum/review/verification-report.md

Each check prints a row: id | claim in the manuscript | recomputed value | status.
Status codes: OK reproduced; ~ reproduced to the quoted rounding; X does not reproduce;
! internally inconsistent; N depends on an integral the manuscript marks [N]; -> a
consequence the manuscript does not draw. Equation numbers refer to the manuscript.
"""
import math

# ----------------------------------------------------------------------------- constants
HBARC_MEV_FM = 197.3269804          # MeV fm
HBARC_EV_M = HBARC_MEV_FM * 1e6 * 1e-15  # eV m
HBAR_GEV_S = 6.582119569e-25         # GeV s
C = 299792458.0                      # m/s
GF = 1.1663788e-5                    # GeV^-2
MT_PAPER, MT_PDG = 172.5, 172.57     # GeV
MW_PAPER, MW_PDG = 80.4, 80.3692
MZ = 91.1876
MH_PAPER, MH_PDG = 125.25, 125.20
MTAU, MMU, ME = 1776.86, 105.6583755, 0.51099895   # MeV
MB, MC, MS = 4.18, 1.27, 0.0935      # GeV
VEV = 246.22                         # GeV
GAMMA_H_SM = 4.1e-3                  # GeV
OM_DE, OM_M, OM_R = 0.69, 0.31, 9.1e-5
H0_KM_S_MPC = 67.4
MPC = 3.0856775814913673e22          # m
GPC = 1e3 * MPC
L_PLANCK = 1.616255e-35              # m
E_PLANCK_GEV = 1.220890e19
GEV2_TO_CM2 = 0.3893793721e-27
MN = 0.939                           # nucleon mass GeV
FN = 0.30                            # Higgs-nucleon coupling
DM2_21, DM2_31 = 7.5e-5, 2.51e-3     # eV^2 (NO)

rows = []


def row(cid, claim, value, status):
    rows.append((cid, claim, value, status))


def simpson(f, a, b, n=2000):
    if n % 2:
        n += 1
    h = (b - a) / n
    s = f(a) + f(b)
    for i in range(1, n):
        s += (4 if i % 2 else 2) * f(a + i * h)
    return s * h / 3


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


def sci(x, d=2):
    return f"{x:.{d}e}"


# ----------------------------------------------------------------------------- 5. knot energetics
c6 = (2 / math.pi) * simpson(lambda x: 2 * math.sin(x / 2) * math.sin(x) ** 2, 0, math.pi)
row("5.1", "Eq. (30): C6/(Λm̃) = 64/(15π) = 1.3581 from the Haar average",
    f"{c6:.4f} numerically; 64/(15π) = {64/(15*math.pi):.4f}", "OK")
# compacton energy: E = (32π/15) m̃² R*³ with R*³ = 2Λ/(π² m̃)
comp = (32 * math.pi / 15) * 2 / math.pi ** 2
row("5.2", "The BPS compacton f0 = 2 arccos(r/R*) carries E = C6 (not stated, implied)",
    f"E/(Λm̃) = (32π/15)(2/π²) = {comp:.4f} = C6", "OK")
m_over_c6 = (64 / (9 * math.pi)) / (64 / (15 * math.pi))
row("5.3", "Prop. 7: M = (64/9π)Λm̃ against Eq. (30) C6 = (64/15π)Λm̃",
    f"M/C6 = {m_over_c6:.4f} = 5/3; Prop. 5's κ²g_tot ratio (35/24)/(7/8) = {(35/24)/(7/8):.4f}: the 5/3 is the halo's share, consistent but unstated", "~")
cfrak = 64 * math.sqrt(2) / (9 * math.pi)
row("5.4", "Prop. 5: 𝔠 = 64√2/(9π) ≈ 3.2011 ≥ 2√2; ħ = E/ω with ω = ω0/√2",
    f"𝔠 = {cfrak:.4f}; √2·M/(Λm̃) = {math.sqrt(2)*64/(9*math.pi):.4f}; 2√2 = {2*math.sqrt(2):.4f}", "OK")
# Theorem 8
j = 0.5
w = 1 / (j * (1 - j))
V2 = 1 / (1 - j)
row("5.5", "Theorem 8: w j(1−j) = 1, V² = 1/(1−j); j = 1/2 → w = 4, V = √2",
    f"w = {w:.1f}, V = {math.sqrt(V2):.4f}; half-integers in (0,1): only 1/2", "OK")
windows = {(1, 1): None, (1, 2): None, (1, 3): None, (2, 3): None, (3, 3): None, (3, 1): None}
txt = []
for (a, b) in windows:
    jmax = 2 * a / (a + b)
    txt.append(f"(a,b)=({a},{b}): j < {jmax:.3f}{' ✓ j=1/2 inside' if jmax > 0.5 else ' ✗ j=1/2 excluded'}")
row("5.6", "Prop. 4: window j < 2a/(a+b); j = 1/2 needs 3a > b", "; ".join(txt), "->")
# Lemma 4 / E_tot at the closure
efield = 0.5 * (1 / math.sqrt(2) + math.sqrt(2))   # in units of ê0
etot = efield / (1 - j / 2)
row("5.7", "Theorem 8 closure energy: E_field(V=√2) = 3ê0/(2√2), E_tot = E_field/(1−j/2)",
    f"E_field = {efield:.4f} ê0, E_tot = {etot:.4f} ê0 = √2 ê0; with ê0 = C6 this is {etot*64/(15*math.pi):.3f} Λm̃, not (64/9π) = {64/(9*math.pi):.3f}: the printed M includes the halo factor 5/3", "~")
# band edge, halo lengths
hw0 = ME / (1 / math.sqrt(2)) * 1e3   # keV
lam_c = HBARC_EV_M / (ME * 1e6)
row("5.8", "Electron band edge ħω0 = Mc²/κ = 722.7 keV; ħ/(Mc) = 3.862e-13 m",
    f"ħω0 = {hw0:.1f} keV; ħ/(Mc) = {sci(lam_c,3)} m", "OK")
kap = 1 / math.sqrt(2)
row("5.9", "λ_halo three ways: Eq. (38) κħ/(Mc); evanescent c_ψ/(ω0√(1−κ²)) = (ħ/Mc)/√(1−κ²); earlier draft (ħ/Mc)κ/√(1−κ²)",
    f"{sci(kap*lam_c,3)} m; {sci(lam_c/math.sqrt(1-kap**2),3)} m; {sci(lam_c*kap/math.sqrt(1-kap**2),3)} m — factor 2 spread; Eq. (59) equates the second form to the first", "!")
# SDiff modes
row("5.10", "Theorem 9 proof: SDiff modes √ε ħω0 ≈ 1–40 keV for ε ∈ [1.5e-6, 3e-3]",
    f"{math.sqrt(1.5e-6)*hw0:.2f}–{math.sqrt(3e-3)*hw0:.1f} keV; shape modes ħc/R at R = 1e-15 m: {HBARC_MEV_FM:.0f} MeV", "OK")

# ----------------------------------------------------------------------------- 3. vacuum, pitch, transparency
m3 = 0.047
qinv = HBARC_EV_M / m3
p = 2 * math.pi * qinv
row("3.1", "Eq. (16): q⁻¹ = ħc/m3 ≈ 4.2 μm, p = 2π/q ≈ 26 μm (1σ 11–65 μm)",
    f"q⁻¹ = {qinv*1e6:.2f} μm, p = {p*1e6:.1f} μm; 1σ from m3 ∈ [0.019, 0.115] eV: p ∈ [{2*math.pi*HBARC_EV_M/0.115*1e6:.1f}, {2*math.pi*HBARC_EV_M/0.019*1e6:.1f}] μm", "OK")
L = 1 * GPC
lam0 = 26e-6
dn_coh = 0.1 * lam0 / L
dn_app = math.sqrt(0.1) * lam0 / (math.pi * L)
row("3.2", "Eq. (17)/App. F: coherent Bragg bound Δn ≲ 0.1 λ0/L ≈ 1e-31 (R < 0.1 at L = 1 Gpc)",
    f"0.1λ0/L = {sci(dn_coh)}; from R = (πΔnL/λ0)² < 0.1: Δn < {sci(dn_app)}", "OK")
q = 1 / qinv
eps_lo, eps_hi, s2 = 1.5e-6, 3e-3, 0.69 ** 2
dn_lo = eps_lo * s2 * (q * 1e-35) ** 4
dn_hi = eps_hi * s2 * (q * 1e-26) ** 4
row("3.3", "Eq. (55): Δn(q) = ε sin²θc (qa)⁴ ∈ [1e-126, 1e-87] for a ∈ [1e-35, 1e-26] m",
    f"q = {sci(q)} m⁻¹; qa ∈ [{sci(q*1e-35,1)}, {sci(q*1e-26,1)}]; Δn ∈ [{sci(dn_lo,1)}, {sci(dn_hi,1)}] (one decade above the printed ends; margin to 1e-31 still > 54 decades)", "~")
row("3.4", "Theorem 5 + Bell timing: c_L ≳ 1e4 c ⇒ P_L/P_⊥ = η(c/c_L)³ ≲ 1e-12",
    f"(1e-4)³ = {sci(1e-12,0)}; with the satellite-era bound c_L > 1e6 c it would be {sci(1e-18,0)}", "OK")

# ----------------------------------------------------------------------------- 4. capacity and the cliff
chi = 0.8 * 2 ** 26 / 4
row("4.1", "Eq. (24): χ_max ≳ F_trunc 2²⁶/4 ≈ 1.3e7 (53 qubits, 26|27 cut, F_trunc ≳ 0.8)",
    f"{sci(chi)}", "OK")
cases = [("ion/atom zone, a=1e-26", 1e-10, 1e-26, 232), ("SC die, a=1e-26", 1e-6, 1e-26, 245),
         ("ion/atom zone, a=1e-35", 1e-10, 1e-35, 322), ("SC die, a=1e-35", 1e-6, 1e-35, 336)]
txt = []
for name, V, a, printed in cases:
    N = V / a ** 3
    txt.append(f"{name}: log2 N_dof = {math.log2(N):.1f} (Table 6 prints {printed}: +{printed-math.log2(N):.1f})")
row("4.2", "Corollary 2 / Table 6: n_max ≈ log2 N_dof + O(log2 log(GD/δ))", "; ".join(txt), "OK")
c_over_H0 = C / (H0_KM_S_MPC * 1e3 / MPC)
Vh = 4 / 3 * math.pi * c_over_H0 ** 3
row("4.3", "Corollary 2: Hubble volume gives n_max ≈ 520–610",
    f"V_H = {sci(Vh)} m³; log2(V_H/a³) = {math.log2(Vh/1e-78):.0f} (a=1e-26) to {math.log2(Vh/1e-105):.0f} (a=1e-35)", "OK")


def n_at_fidelity(F, N, M, c0):
    """Smallest n at which Eq. (25) can no longer be met at Fubini-Study radius δ = arccos√F."""
    delta = math.acos(math.sqrt(F))
    ratio = 1 + M / math.log(c0 / delta)      # log(3GD/δ)/log(c0/δ) with M = ln(3GD/c0)
    return math.log2(N * ratio + 2) - 1


txt = []
for M in (10, 100, 1000):
    N = 1e68
    n90 = n_at_fidelity(0.9, N, M, math.pi / 2)
    n10 = n_at_fidelity(0.1, N, M, math.pi / 2)
    txt.append(f"M={M}: n(F=0.9) = {n90:.1f}, n(F=0.1) = {n10:.1f}, width {n10-n90:.2f}")
asym = math.log2(math.log(math.pi / 2 / math.acos(math.sqrt(0.9))) / math.log(math.pi / 2 / math.acos(math.sqrt(0.1))))
exact = math.log2(math.log(0.1) / math.log(0.9))
row("4.4", "Prop. 16: the 90%→10% cliff spans Δn_cliff ≈ log2 ln(3GD/c0) ≈ 6 qubits",
    "; ".join(txt) + f"; asymptotic width log2[ln(c0/δ90)/ln(c0/δ10)] = {asym:.2f} qubits at c0 = π/2; with the exact CP^N ball volume (covering number ≥ sin^−2N δ, no c0) the width is log2[ln0.1/ln0.9] = {exact:.2f} qubits. The paper's 6 is the span from n0+1 to the 10% point, not the 90→10 width", "X")
# with c0 = 1 the F=0.1 point is never reached (δ_min ≤ c0 < 1.249)
row("4.5", "Prop. 16 as printed needs c0 ≥ 1.249 rad for F_max to fall below 0.1",
    f"δ(F=0.1) = {math.acos(math.sqrt(0.1)):.3f} rad; with c0 = O(1) < 1.249 the formula floors at F = cos²c0", "!")
row("4.6", "Definition 4 counts N_dof = V/a³ cells; each cell carries u (3) and Q̃ (3) and their rates",
    f"12 real numbers per cell shift n_max by log2 12 = {math.log2(12):.1f} qubits; the O(log2 log) term absorbs it", "~")
# mirror-circuit feasibility
n = 250
layers = math.ceil(2 * math.sqrt(n))
gates = layers * n / 2
eps_needed = -math.log(0.1) / gates
row("4.7", "S16 protocol at n = 250: d ≥ 2√n layers of two-qubit gates",
    f"{layers} layers ≈ {gates:.0f} two-qubit gates; F = 0.1 needs ε₂ ≲ {sci(eps_needed,1)} per gate (best 2025 platforms ≈ 1e-3)", "->")
row("4.8", "Register-volume dependence of the ceiling (not drawn in the paper)",
    f"spreading the same register from 1e-10 to 1e-3 m³ raises n_max by log2(1e7) = {math.log2(1e7):.1f} qubits; a 1 m³ photonic network by {math.log2(1e10):.1f}", "->")

# ----------------------------------------------------------------------------- 7. electroweak and strong numbers
def delta_rho(mt):
    return 3 * GF * mt ** 2 / (8 * math.sqrt(2) * math.pi ** 2)


row("7.1", "Eq. (50)/(64): Δρ_top = 3G_F m_t²/(8√2π²) ≈ 0.0093",
    f"{delta_rho(MT_PAPER):.5f} (m_t = 172.5); {delta_rho(MT_PDG):.5f} (PDG 172.57)", "OK")


def gamma_top(mt, mw, vtb=1.0):
    r = (mw / mt) ** 2
    return GF * mt ** 3 / (8 * math.sqrt(2) * math.pi) * vtb ** 2 * (1 - r) ** 2 * (1 + 2 * r)


gt = gamma_top(MT_PAPER, MW_PAPER)
row("7.2", "Eq. (73): Γ_t ≈ 1.42 GeV, τ ≈ 4.6e-25 s (0.14 fm/c)",
    f"LO formula gives Γ_t = {gt:.3f} GeV (PDG masses {gamma_top(MT_PDG, MW_PDG):.3f}); the 1.42 is the NLO-QCD value; τ = {sci(HBAR_GEV_S/1.42)} s = {HBAR_GEV_S/1.42*C*1e15:.3f} fm/c", "~")
sigma = 0.19
tau_had = HBAR_GEV_S / math.sqrt(sigma)
row("7.3", "Eq. (74): τ_had = ħ/√σ ≈ 1.5e-24 s (0.45 fm/c) > 3τ_decay",
    f"{sci(tau_had)} s = {tau_had*C*1e15:.3f} fm/c; ratio to τ_decay = {tau_had/(HBAR_GEV_S/1.42):.2f}", "OK")
row("7.4", "Strong sector: σ = 0.19 GeV² → α' = 1/(2πσ) = 0.84 GeV⁻², 0.96 GeV/fm, 1.5e5 N",
    f"α' = {1/(2*math.pi*sigma):.3f}; σ/(ħc) = {sigma/(HBARC_MEV_FM*1e-3):.3f} GeV/fm = {sigma/(HBARC_MEV_FM*1e-3)*1e9*1.602176634e-19/1e-15:.2e} N", "OK")
g2 = 8 * MW_PAPER ** 2 * GF / math.sqrt(2)
row("7.5", "App. H: g² = 8M_W²G_F/√2 → g ≈ 0.65, α_w ≈ 1/30; y_t = √2 m_t/v = 0.991",
    f"g = {math.sqrt(g2):.4f}, α_w = 1/{4*math.pi/g2:.1f}; y_t = {math.sqrt(2)*MT_PAPER/VEV:.3f}", "OK")
row("7.6", "App. H: M_Z/M_W = √(1+ϑ²) = 1.141 at ϑ = 0.55 against 1.134",
    f"{math.sqrt(1+0.55**2):.4f} vs PDG {MZ/MW_PDG:.4f}; ϑ²/(1+ϑ²) = {0.55**2/(1+0.55**2):.4f}", "OK")
txt = []
for s in (0.58, 0.69, 0.80):
    e_tilt = 1 - math.cos(math.asin(s))
    txt.append(f"sinθc={s}: ε_tilt={e_tilt:.3f}, sin²θw={0.25*(1-e_tilt/3):.4f}")
row("7.7", "Eq. (78): sin²θw = ¼(1 − ε_tilt/3) = 0.232 ± 0.012 with ε_tilt = 1 − cosθc ≈ 0.22 at sinθc = 0.69",
    "; ".join(txt) + f"; ε_tilt = 0.22 corresponds to sinθc = {math.sin(math.acos(0.78)):.2f}, not 0.69; central value should read 0.227; MS-bar 0.2312 and on-shell 0.2230 both inside the band", "!")
row("7.8", "Prop. 27: N_ν = 3[1 + O(ε)] ∈ [2.991, 3.000] vs LEP 2.9963 ± 0.0074",
    f"3(1 − 3e-3) = {3*(1-3e-3):.3f}; LEP central is {(2.9963-3)/0.0074:.2f}σ below 3", "OK")
row("7.9", "Prop. 31(1): 2M_W = 160.8 > M_h = 125.25; Γ_h = 4.1 MeV vs CMS 3.2 +2.4 −1.7",
    f"2M_W = {2*MW_PAPER:.1f} (PDG {2*MW_PDG:.1f}) > {MH_PDG}; kinematics only; the width needs the loop-induced gg, γγ channels the text does not derive", "~")
# EDM
qlam_d = q * HBARC_EV_M / (4.7e6) / math.sqrt(2)
theta = 3e-3 * 1e-13 * qlam_d * 1.0
row("7.10", "Eq. (67)-(68): θ̄_eff ≲ 1e-23 → |d_n| ≲ 1e-39 e·cm",
    f"qλ_halo,d = {sci(qlam_d,1)}; θ̄ ≤ 3e-3·1e-13·{sci(qlam_d,1)} = {sci(theta,1)}; d_n = 3.6e-16·θ̄ = {sci(3.6e-16*theta,1)} e·cm. Current bounds 1.8e-26 (n), 4.1e-30 (e); SM CKM background ≈ 1e-32 (n): an absolute 1e-39 stake is not adjudicable", "->")
gam_jr = math.sqrt(1 + 1.9 * s2)
eps_r = (1e-26 / (kap * lam_c)) ** gam_jr
row("7.11", "Eq. (66): ε_R ≲ (a/λ_halo)^γ_JR ≲ 1e-13, γ_JR = √(1 + 𝔪 sin²θc)",
    f"γ_JR = {gam_jr:.3f}; (1e-26/{sci(kap*lam_c,2)})^γ = {sci(eps_r,1)} at a = 1e-26 m; at a = ℓ_P: {sci((L_PLANCK/(kap*lam_c))**gam_jr,1)}", "OK")

# ----------------------------------------------------------------------------- 7.1 lepton generator and bridge
lnt = math.log(MTAU / MMU)
lnm = math.log(MMU / ME)
A, B = 5.6, 5.7
row("7.12", "Eq. (39): ½A = 2.80 vs ln(m_τ/m_μ) = 2.822; ½(A+B) = 5.65 vs ln(m_μ/m_e) = 5.332; (A+B)/A = 2.02 vs 1.889",
    f"ln(m_τ/m_μ) = {lnt:.4f}, ln(m_μ/m_e) = {lnm:.4f}, ratio {lnm/lnt:.4f}; A/2 = {A/2:.2f}, (A+B)/2 = {(A+B)/2:.2f}, (A+B)/A = {(A+B)/A:.3f}. Two fitted-or-computed numbers (A, B) against two mass ratios; the third comparison is not independent", "N")
m4 = ME * 1e6 * math.exp(-8.5)
row("7.13", "App. H: the p = 3 candidate: ε₃ = ε_e e^{(4/3)·8.5}; closure fails for ε_e ≳ 8e-6",
    f"ln(m_e/m_4) = (A+2B)/2 = {(A+2*B)/2:.2f}; a fourth charged lepton would sit at m_4 = {m4:.0f} eV; ε₃/ε_e = {math.exp(4/3*8.5):.2e}; 8e-6 × that = {8e-6*math.exp(4/3*8.5):.2f}", "OK")
scal = (MTAU / ME) ** (4 / 3)
row("7.14", "ε ∝ m̃^{-4/3} across the lepton tower against the admission window ε ∈ [1.5e-6, 3e-3]",
    f"ε_e/ε_τ = (m_τ/m_e)^{{4/3}} = {scal:.2e} (window width {3e-3/1.5e-6:.0f}); if ε_τ ≥ 1.5e-6 then ε_e ≥ {1.5e-6*scal:.3f}: outside the window. The window must be species-specific; the text does not say whose", "!")
Lb = (5.644 - 3.05) / 0.1065
m3b = MTAU * 1e6 * math.exp(-Lb)
row("7.15", "Eq. (40): ln(1/qλ_halo) = (5.644−3.05)/0.1065 = 24.36 ± 0.90 ⇒ m3 = 0.047 eV, 1σ [0.019, 0.115]",
    f"L = {Lb:.3f}; e^−L = {sci(math.exp(-Lb))}; m_τc² e^−L = {m3b:.4f} eV; ±0.90 → [{MTAU*1e6*math.exp(-Lb-0.9):.3f}, {MTAU*1e6*math.exp(-Lb+0.9):.3f}] eV", "OK")
lam_tau = HBARC_EV_M / (MTAU * 1e6)
row("7.16", "Eq. (40) presumes λ_halo,τ = ħ/(m_τc); Eq. (38) says λ_halo = ħ/(√2 Mc)",
    f"with Eq. (38): m3 = ħc/(λ e^L) = {HBARC_EV_M/(lam_tau/math.sqrt(2)*math.exp(Lb)):.3f} eV (the 09-28 revision's erratum E1 value); the manuscript's 0.047 needs λ_halo,τ = {sci(lam_tau,3)} m or the ζ_ν = 1/√2 factor the revision introduces", "!")
# Σm_ν
def sum_nu(m3v):
    m1sq = m3v ** 2 - DM2_31
    if m1sq < 0:
        return None
    m1 = math.sqrt(m1sq)
    return m1 + math.sqrt(m1 ** 2 + DM2_21) + m3v


row("7.17", "S1: oscillation floor truncates m3 to [0.050, 0.057] eV ⇒ Σm_ν ∈ [0.058, 0.11] eV (NO)",
    f"√Δm²₃₁ = {math.sqrt(DM2_31):.4f} eV; Σ(m3=0.0501) = {sum_nu(0.0501):.4f}; Σ(0.057) = {sum_nu(0.057):.4f}; DESI DR2+CMB ΛCDM bound 0.064 ⇒ m3 ≤ {bisect(lambda m: sum_nu(m)-0.064, 0.0502, 0.06):.4f} eV", "OK")
m2_gen = m3 * math.exp(-A / 2)
row("7.18", "If the lepton generator also ordered the neutrinos (not claimed): m2 = m3 e^{-A/2}",
    f"m2 = {m2_gen*1e3:.1f} meV < solar floor √Δm²₂₁ = {math.sqrt(DM2_21)*1e3:.1f} meV: the generator cannot be the neutrino spectrum; the manuscript gives no mechanism for m1, m2", "->")

# ----------------------------------------------------------------------------- 8. cosmology
def w_de(n, om):
    return -n / (1 - (1 - n) * om)


def wa_de(n, om=OM_DE):
    w0 = w_de(n, om)
    return -3 * n * (1 - n) * w0 * om * (1 - om) / (1 - (1 - n) * om) ** 2


def q0(n, om=OM_DE):
    return 0.5 * (1 + 3 * w_de(n, om) * om)


def omega_de_of_a(n, a):
    """Self-consistent Ω_DE(a) for ρ_DE ∝ H^{2(1-n)} in a flat matter+radiation+family universe."""
    h2 = OM_M * a ** -3 + OM_R * a ** -4 + OM_DE
    for _ in range(200):
        h2 = OM_M * a ** -3 + OM_R * a ** -4 + OM_DE * h2 ** (1 - n)
    return OM_DE * h2 ** (1 - n) / h2, math.sqrt(h2)


def ede(n, z=1100):
    """ρ_DE/ρ_m at redshift z with the self-consistent H of Eq. (49), radiation included."""
    a = 1 / (1 + z)
    om, h = omega_de_of_a(n, a)
    return OM_DE * (h * h) ** (1 - n) / (OM_M * a ** -3)


txt = []
for n, printed in ((0, (0, 0, 0.5, 2.2)), (0.25, (-0.52, 0.27, -0.04, 9e-3)), (0.5, (-0.76, 0.29, -0.29, 3e-5)),
                   (0.75, (-0.91, 0.16, -0.44, 1e-7)), (0.9, (-0.97, 0.06, -0.50, 3e-9)), (1, (-1, 0, -0.54, 0))):
    txt.append(f"n={n}: w0={w_de(n, OM_DE):.3f} wa={wa_de(n):.3f} q0={q0(n):.3f} ρDE/ρm(1100)={ede(n):.1e} [printed {printed}]")
row("8.1", "Table 4 / Eq. (60): the family at Ω_DE = 0.69", "; ".join(txt) + "; w0, wa, q0 reproduce; the last column agrees to a factor 2–4 (the paper's matter-era estimate ignores radiation; the n = 0 entry is the fixed-background value Ω_DE/Ω_m)", "~")
row("8.2", "Eq. (46): n_min = ½(Ω_DE⁻¹ − 1) ≈ 0.22", f"{0.5*(1/OM_DE-1):.4f}", "OK")


txt = []
for n in (0.5, 0.75, 1.0):
    parts = []
    for z in (0.5, 1.0, 2.0):
        om, _ = omega_de_of_a(n, 1 / (1 + z))
        parts.append(f"w(z={z})={w_de(n, om):.2f}")
    txt.append(f"n={n}: " + ", ".join(parts))
row("8.3", "Direction of the family's evolution (not tabulated in the paper)", "; ".join(txt) + ". In the family w rises toward 0 in the past; DESI DR2 prefers w below −1 in the past and above −1 today", "->")


def chi2_cpl(w0, wa, fit, rho=-0.9):
    x = (w0 - fit[0]) / fit[1]
    y = (wa - fit[2]) / fit[3]
    return (x * x + y * y - 2 * rho * x * y) / (1 - rho * rho)


def sigma_equiv(chi2):
    """Two-parameter Δχ² to a Gaussian-equivalent significance."""
    pval = math.exp(-chi2 / 2)
    return bisect(lambda s: math.erfc(s / math.sqrt(2)) - pval, 0, 40)


fits = {"DESI DR2 + CMB + Pantheon+": (-0.838, 0.055, -0.62, 0.205), "DESI DR2 + CMB + DESY5": (-0.752, 0.057, -0.86, 0.215)}
txt = []
for name, fit in fits.items():
    parts = []
    for n in (0.5, 0.75, 0.9, 1.0):
        c2 = chi2_cpl(w_de(n, OM_DE), wa_de(n), fit)
        parts.append(f"n={n}: Δχ²={c2:.0f} ({sigma_equiv(c2):.1f}σ)")
    txt.append(f"{name}: " + ", ".join(parts))
row("8.4", "S19 status: the family against the DESI DR2 CPL posteriors (Gaussian proxy, ρ(w0,wa) = −0.9 assumed)",
    "; ".join(txt) + ". The ΛCDM end (n=1) reproduces DESI's quoted 2.8σ/4.2σ; every n < 1 member is further away. The family's best point is its empty member", "->")
# birefringence tomography
txt = []
for n in (0.5, 0.75, 0.9):
    _, hrec = omega_de_of_a(n, 1 / 1101)
    parts = []
    for z in (1.0, 3.0, 7.0):
        _, hz = omega_de_of_a(n, 1 / (1 + z))
        ratio = (hz ** (2 * (1 - n)) - 1) / (hrec ** (2 * (1 - n)) - 1)
        parts.append(f"β(z={z:.0f})/β_CMB = {ratio:.1e}")
    txt.append(f"n={n}: " + ", ".join(parts))
row("8.5", "Prop. 20 (not drawn): rotation accrued since redshift z, β(z) ∝ ρ_DE(z) − ρ_DE(0) ∝ H(z)^{2(1−n)} − 1",
    "; ".join(txt) + ". GUM's birefringence is a recombination-era effect; the reionization bump (z≈7) and any z<5 polarized source should show ≲1e-2 of the CMB rotation", "->")
# induced gravity fixes a
txt = []
for N in (6, 12, 60):
    a_ind = L_PLANCK * math.sqrt(N / (12 * math.pi))
    txt.append(f"N_eff={N}: a = {a_ind/L_PLANCK:.2f} ℓ_P = {sci(a_ind,1)} m")
row("8.6", "Eq. (75): M_Pl² = N_eff ħc/(12π a²) with the measured G (not inverted in the paper)",
    "; ".join(txt) + ". The gravity closure pins a to the Planck decade, the bottom of the quoted range [1e-35, 1e-26] m", "->")
a_p = L_PLANCK
txt = []
for name, V, a, printed in cases[:2]:
    N = V / a_p ** 3
    txt.append(f"{name.split(',')[0]}: log2(V/ℓ_P³) + 6 ≈ {math.log2(N)+6:.0f}")
row("8.7", "Consequence for S16 at a = ℓ_P", "; ".join(txt) + f"; Δn(q) at a = ℓ_P: {sci(3e-3*s2*(q*a_p)**4,1)}; ε_R: {sci((a_p/(kap*lam_c))**gam_jr,1)}", "->")
# LIV bound on a
E_QG2 = 1.3e11  # GeV, quadratic photon dispersion bound (Fermi-LAT, GRB 090510)
a_liv = HBARC_MEV_FM * 1e-3 * 1e-15 / E_QG2
row("8.8", "Doublet dispersion O(k⁴a²) in Eq. (28) read as a photon time-of-flight term with O(1) coefficient",
    f"GRB bound E_QG,2 > 1.3e11 GeV ⇒ a < ħc/E_QG,2 = {sci(a_liv,1)} m: the top decade of the quoted a-range is excluded unless the coefficient is suppressed; at a = ℓ_P the term is (ka)² = {sci((5.07e18*L_PLANCK)**2,1)} at 1 TeV", "->")

# ----------------------------------------------------------------------------- 8.4 sterile knot dark matter
M_N = MTAU * 1e-3
y = M_N / VEV
beta3 = (1 - 4 * M_N ** 2 / MH_PAPER ** 2) ** 1.5
gam_dirac = y ** 2 * MH_PAPER / (8 * math.pi) * beta3
gam_tau = GF * (MTAU * 1e-3) ** 2 * MH_PAPER / (4 * math.sqrt(2) * math.pi) * beta3
row("8.9", "Prop. 30: N0 couples to h with g = M/v; a τ-mass pair channel h → N0N̄0 (not computed in the paper)",
    f"y = {y:.2e}; Γ(h→N0N̄0) = {gam_dirac*1e3:.3f} MeV Dirac ({gam_dirac/2*1e3:.3f} Majorana) = Γ(h→ττ) = {gam_tau*1e3:.3f} MeV ⇒ BR_inv = {gam_dirac/(GAMMA_H_SM+gam_dirac):.3f} (Dirac) / {gam_dirac/2/(GAMMA_H_SM+gam_dirac/2):.3f} (Majorana); ATLAS 95% limit 0.107, HL-LHC reach ≈ 0.025", "->")
mu_red = M_N * MN / (M_N + MN)
coup = FN * MN * y / (VEV * MH_PAPER ** 2)
sig_si = mu_red ** 2 / math.pi * coup ** 2 * GEV2_TO_CM2
row("8.10", "Direct detection of N0 (Higgs portal, f_N = 0.3)",
    f"σ_SI ≈ {sci(sig_si,1)} cm² at 1.78 GeV, four decades below the 2025 low-mass limits and below the solar-neutrino fog", "->")


def sigma_v_portal(mchi, yy, x_f=20.0):
    v2 = 6 / x_f
    tot = 0.0
    for mf, nc in ((MC, 3), (MS, 3), (MTAU * 1e-3, 1), (MB, 3)):
        if mf >= mchi:
            continue
        yf = mf / VEV
        tot += nc * yy ** 2 * yf ** 2 * mchi ** 2 * v2 / (8 * math.pi * ((4 * mchi ** 2 - MH_PAPER ** 2) ** 2 + MH_PAPER ** 2 * GAMMA_H_SM ** 2)) * (1 - mf ** 2 / mchi ** 2) ** 1.5
    return tot * GEV2_TO_CM2 * C * 100  # cm³/s


sv = sigma_v_portal(M_N, y)
row("8.11", "Prop. 30: freeze-in requires a feeble vertex; the stated y = M/v is not feeble",
    f"⟨σv⟩(N0N̄0 → ff̄ via h) ≈ {sci(sv,1)} cm³/s against the thermal 2.2e-26: a Yukawa-coupled 1.78 GeV fermion thermalises (Γ/H ≫ 1 at T ≈ 100 GeV) and freezes out {sci(2.2e-26/sv,0)} times overabundant unless pair processes are pinch-suppressed; h → ττ at the SM rate shows charged knot pairs are not", "!")
Fp = 2.1e-8
row("8.12", "Eq. (77): the relic density is a fit through F_pinch",
    f"Ω h² = 0.120 at F_pinch = {Fp}; the prediction content is M_N0 ≈ m_τ and sterility, not the abundance; Ω_N1/Ω_N0 = (m_μ/m_τ)³ = {(MMU/MTAU)**3:.1e}", "N")

# ----------------------------------------------------------------------------- 6. Prop. 18 dimensional check
row("6.1", "Eq. (57): E_grad = 4π a_ψ ∫ r²(πp/r²)² dr = 4π³a_ψp²/r_b",
    "a_ψ has units energy/length (from Jω² = 2a_ψk² + m̃²), so Eq. (57) has units energy/length², not energy; the gradient (πp/r²) is not the stated ∂_rψ ≈ πp/r_b. With Δψ = πp spread over a shell of radius r_b: E_grad ≈ 4π a_ψ π²p² r_b and E_pot ≈ (2π/3)m̃²π²p²r_b³ both grow with r_b, so no interior minimum at λ_halo follows from the printed balance", "X")
row("6.2", "Eq. (59): balance of (57) and (58) gives r_b⁴ = 6a_ψ/m̃², which has units of length²",
    f"the conclusion r_b* ≈ λ_halo is asserted by matching, not derived; K-10 is then not 'variationally proven' as printed", "X")

# ----------------------------------------------------------------------------- new-experiment estimates
r = 10.0
Qc, dx = 1e-9, 1e-3
eps0 = 8.8541878128e-12
dE_coul = Qc * dx / (4 * math.pi * eps0 * r ** 3)
a_kick = C * 1e-3 / 1e-9
E_rad = Qc * a_kick / (4 * math.pi * eps0 * C ** 2 * r)
row("E.1", "Gauss-law precursor: a 1 nC bunch kicked by 1 mm in 1 ns, sensors at 10 m",
    f"Coulomb update ΔE = {sci(dE_coul,1)} V/m arriving at r/c_L ≤ {r/(1e4*C)*1e12:.1f} ps (c_L ≥ 1e4 c) versus the radiation pulse {sci(E_rad,1)} V/m at r/c = {r/C*1e9:.1f} ns", "->")
row("E.2", "On-axis longitudinal radiation search", f"P_L ≤ 1e-12 P_⊥ (Bell timing) ⇒ 1 μW per MW; a 1e-15 null pushes c_L > {sci((1e15)**(1/3),0)} c", "->")
phase_per_x = ME * 1e6 * 1.602176634e-19 / 1.054571817e-34 * 1e-9
row("E.3", "Electron interferometry across pitch cells: phase = (δm c²/ħ) t for t = 1 ns",
    f"{sci(phase_per_x,1)} rad per unit δm/m ⇒ a 1e-2 rad phase floor bounds cell-to-cell δm_e/m_e < {sci(1e-2/phase_per_x,1)}; optical lattice clocks bound it at 1e-18 across μm spacings", "->")
kappa_far = 0.1065
row("E.4", "Pitch drift and the lepton mass ratios (not drawn): d ln m_e/d ln q = κ_far (from A(q) in Eq. 40 with Σ(2) = 2A + B)",
    f"d ln m_e/d ln q = {kappa_far}, d ln m_μ/d ln q = {kappa_far/2}; quasar δμ/μ < 1e-6 at z ≈ 2–4 ⇒ |δq/q*(z=3) − δq/q*(0)| < {1e-6/kappa_far:.1e}; for n = 1/2 the lag scales as H^{{1/2}} so (δq/q*)₀ < {1e-6/kappa_far/(omega_de_of_a(0.5, 0.25)[1]**0.5-1):.1e}", "->")
rho_de0 = (2.3e-3) ** 4  # eV^4
qstar = m3
for label, stiff in (("χ⁻¹ ≈ q*² (pitch-scale stiffness)", qstar ** 2), ("χ⁻¹ ≈ (1 GeV)²", 1e18)):
    dq = math.sqrt(2 * rho_de0 / stiff) / qstar
    row("E.5", f"Eq. (44) with {label}: today's lag δq/q* = √(2ρ_DE/χ⁻¹)/q*",
        f"δq/q* = {sci(dq,1)} ⇒ δμ/μ(z=3) ≈ {sci(kappa_far*dq*(omega_de_of_a(0.5, 0.25)[1]**0.5-1),1)} for n = 1/2 (bound 1e-6)", "->")
row("E.6", "LiteBIRD low-ℓ versus high-ℓ EB rotation", "GUM: β_reion/β_rec ≲ 1e-2 for n ≤ 0.9 (row 8.5); axion-like models with m_a ≫ H(z_reion) give equal rotations", "->")
row("E.7", "Isorotating bench: extract (a,b) from the dilation law V(j)", "Prop. 4 gives tanh(a ln V) = bj/[a(2−j)]; at j = 1/2: V = √2 for (1,1), V = 1.24 for (1,2); (1,3) has no solution", "->")

# ----------------------------------------------------------------------------- report
print("# Verification report for the GUM Unified Master Manuscript (draft 2026-09-06)\n")
print("Generated by `gum/review/verify_manuscript.py`. Status: OK reproduced; ~ reproduced to the quoted rounding; X does not reproduce; ! internally inconsistent; N rests on an integral the manuscript marks [N]; -> a consequence the manuscript does not draw.\n")
print("| # | Claim | Recomputation | Status |")
print("|---|---|---|---|")
for cid, claim, value, status in rows:
    print(f"| {cid} | {claim} | {value} | {status} |")
counts = {}
for *_rest, status in rows:
    counts[status] = counts.get(status, 0) + 1
print("\nTotals: " + ", ".join(f"{k} {v}" for k, v in sorted(counts.items())) + ".")
