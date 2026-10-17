#!/usr/bin/env python3
"""verify_r3.py -- independent recomputation of the closed-form numbers printed in
revision 3 of the GUM Unified Master Manuscript (gum/manuscript/gum-unified-master-manuscript-r3.md),
plus a cross-reference audit of its labels and a consistency pass against the r3 primer.

Standard library only.  Usage:
    python3 -I gum/review/r3/verify_r3.py > gum/review/r3/r3-verification-report.md

Every check records the value r3 prints, the value recomputed here from r3's own stated inputs
(Table 10), and a verdict: PASS (agrees within the stated rounding), FAIL (does not), or NOTE
(informational: a derived quantity, a provenance remark, or an issue that is not a number).
"""
import math, re, sys, os

ROOT = os.path.dirname(os.path.abspath(__file__))
R3 = os.path.join(ROOT, "..", "..", "manuscript", "gum-unified-master-manuscript-r3.md")
R2 = os.path.join(ROOT, "..", "..", "manuscript", "gum-unified-master-manuscript-r2.md")
PRIMER = os.path.join(ROOT, "..", "..", "primer", "gum-primer-r3.md")
for i, a in enumerate(sys.argv):
    if a == "--r3": R3 = sys.argv[i + 1]
    if a == "--r2": R2 = sys.argv[i + 1]
    if a == "--primer": PRIMER = sys.argv[i + 1]

CHECKS = []
SECTION = [""]

def section(title):
    SECTION[0] = title
    CHECKS.append(("__section__", title))

def fmt(x):
    if isinstance(x, str): return x
    if x is None: return "—"
    if isinstance(x, int): return str(x)
    ax = abs(x)
    if ax == 0: return "0"
    if 1e-3 <= ax < 1e5: return ("%.4g" % x)
    return ("%.3e" % x)

def check(cid, where, what, printed, computed, tol=None, rel=None, note=""):
    if rel is not None: ok = abs(computed - printed) <= rel * abs(printed)
    elif tol is not None: ok = abs(computed - printed) <= tol
    else: ok = abs(computed - printed) <= 0.5 * 10 ** (math.floor(math.log10(abs(printed))) - 2) if printed else computed == 0
    CHECKS.append(dict(id=cid, where=where, what=what, printed=printed, computed=computed,
                       verdict="PASS" if ok else "FAIL", note=note))
    return computed

def note(cid, where, what, printed, computed, text):
    CHECKS.append(dict(id=cid, where=where, what=what, printed=printed, computed=computed, verdict="NOTE", note=text))

def fail(cid, where, what, printed, computed, text):
    CHECKS.append(dict(id=cid, where=where, what=what, printed=printed, computed=computed, verdict="FAIL", note=text))

# ------------------------------------------------------------------ numerics
def bisect(f, a, b, n=200):
    fa = f(a)
    for _ in range(n):
        m = 0.5 * (a + b); fm = f(m)
        if (fm > 0) == (fa > 0): a, fa = m, fm
        else: b = m
    return 0.5 * (a + b)

def simpson(f, a, b, n=2000):
    if n % 2: n += 1
    h = (b - a) / n
    s = f(a) + f(b)
    for i in range(1, n):
        s += (4 if i % 2 else 2) * f(a + i * h)
    return s * h / 3

def log2(x): return math.log(x, 2)

# ------------------------------------------------------------------ inputs (Table 10)
hc_eVum = 1.23984198           # eV um
hbarc_eVm = 1.973269804e-7     # eV m
hbar_eVs = 6.582119569e-16     # eV s
hbarc_GeVm = 1.973269804e-16   # GeV m
c = 299792458.0
alpha_em = 1 / 137.035999
me, mmu, mtau = 0.51099895, 105.6583755, 1776.86            # MeV
mu_q, md_q, ms_q, mc_q, mb_q = 2.16, 4.70, 93.5, 1273.0, 4183.0  # MeV
mt, MW, MZ, Mh, vev = 172.57, 80.3692, 91.1876, 125.20, 246.22   # GeV
GF = 1.1663788e-5                                            # GeV^-2
Gamma_h = 4.1                                                # MeV
lP = 1.616255e-35
H0_kmsMpc = 67.4
Mpc = 3.0856775814913673e22
H0 = H0_kmsMpc * 1e3 / Mpc                                   # s^-1
Om, Ode, Orad = 0.31, 0.69, 9.1e-5
rhoDE_eV4 = (2.3e-3) ** 4                                    # eV^4
dm21, dm31 = 7.5e-5, 2.51e-3                                 # eV^2
vM = 369.8e3
sigma_str = 0.19                                             # GeV^2
mfrak = 1.9; mfrak_lo, mfrak_hi = 1.5, 2.3
eps_e_lo, eps_e_hi = 8e-6, 3e-3
A_fr, dA_fr, B_fr, dB_fr = 5.6, 0.9, 5.7, 1.2
A_halo, dA_halo, k_far, dk_far = 3.05, 0.09, 0.1065, 0.0032
nu_c, Mgain = 12, 100.0
p_ref = 24.6e-6                                              # m
archival = 4.19e-17
hbar_c_Jm = 1.054571817e-34 * c                              # J m
eV = 1.602176634e-19

# ================================================================== 1. tilt and Weinberg angle
section("Sec. 4.1 and 8.3: condensate tilt (Prop. 7) and the Weinberg-angle landing (Prop. 30)")

def tilt_x(m):   # root of sin x / x = 1/m on (0, pi), x = 2 theta_c
    return bisect(lambda x: math.sin(x) / x - 1.0 / m, 1e-9, math.pi - 1e-9)

tilt = {}
for m in (mfrak_lo, mfrak, mfrak_hi):
    x = tilt_x(m); th = x / 2
    tilt[m] = dict(x=x, theta=th, sin=math.sin(th), sin2=math.sin(th) ** 2, cos=math.cos(th), eps=1 - math.cos(th),
                   fpp=1 - x / math.tan(x))
t = tilt[mfrak]
check("T1", "Eq. (26), Prop. 7", "sin theta_c at m=1.9", 0.79, t["sin"], tol=0.005)
check("T2", "Prop. 7", "theta_c (deg) at m=1.9", 52.6, math.degrees(t["theta"]), tol=0.05)
check("T3", "Prop. 7", "sin^2 theta_c at m=1.9", 0.63, t["sin2"], tol=0.005)
check("T4", "Prop. 7 / H.3", "sin theta_c at m=1.5 (lower end, printed 0.68; 0.79-0.11)", 0.68, tilt[mfrak_lo]["sin"], tol=0.005)
check("T5", "Prop. 7 / H.3", "sin theta_c at m=2.3 (upper end, printed 0.85; 0.79+0.06)", 0.85, tilt[mfrak_hi]["sin"], tol=0.005)
note("T6", "Prop. 7 proof", "second derivative sign 1 - x cot x at the root (must be > 0)", ">0", t["fpp"],
     "positive at all three margins: %s" % ", ".join("%.3f" % tilt[m]["fpp"] for m in tilt))
old = {m: math.sqrt(1 - 1 / m) for m in tilt}
note("T7", "correction 37", "superseded law sqrt(1-1/m) at m=1.5,1.9,2.3", "0.69 +/- 0.11", old[mfrak],
     "gives %.3f, %.3f, %.3f: the parents' symmetric +/-0.11 was itself a rounding of (-0.11, +0.06)" % (old[mfrak_lo], old[mfrak], old[mfrak_hi]))
# model dependence of the gap term in Eq. (25)
cos_alt = 1 / mfrak   # if the gap term were Delta^2 (1 - cos theta) instead of Delta^2 theta^2 / 2
note("T8", "Eq. (25)", "tilt if the gap term were Delta_s^2(1-cos theta) instead of (1/2)Delta_s^2 theta^2", "0.79 (Eq. 26)",
     math.sqrt(1 - cos_alt ** 2),
     "Eq. (25) writes the gap energy as the small-angle form (1/2)Delta^2 theta^2 but solves it at theta_c = 0.92 rad; "
     "with a periodic gap energy Delta^2(1-cos theta) the stationarity condition becomes cos theta_c = 1/m and "
     "sin theta_c = %.3f (theta_c = %.1f deg); with Delta^2 sin^2 theta there is no interior minimum. The 0.79 is the correct "
     "minimum of Eq. (25) as written, but the result is model-dependent at the 10%% level through the form of the gap term, "
     "which should be stated or carried into the band." % (math.sqrt(1 - cos_alt ** 2), math.degrees(math.acos(cos_alt))))

eps_t = {m: tilt[m]["eps"] for m in tilt}
s2w = {m: 0.25 * (1 - eps_t[m] / 3) for m in tilt}
check("W1", "Eq. (78)", "epsilon_tilt = 1 - cos theta_c at m=1.9", 0.39, eps_t[mfrak], tol=0.005)
check("W2", "Eq. (78)", "epsilon_tilt upper (0.39+0.09=0.48) at m=2.3", 0.48, eps_t[mfrak_hi], tol=0.006)
check("W3", "Eq. (78)", "epsilon_tilt lower (0.39-0.13=0.26) at m=1.5", 0.26, eps_t[mfrak_lo], tol=0.008)
check("W4", "Eq. (78)", "sin^2 theta_w central", 0.217, s2w[mfrak], tol=0.0005)
check("W5", "H.3", "sin^2 theta_w band end at m=1.5 (printed 0.228)", 0.228, s2w[mfrak_lo], tol=0.0006)
check("W6", "H.3", "sin^2 theta_w band end at m=2.3 (printed 0.210)", 0.210, s2w[mfrak_hi], tol=0.0006)
onshell = 1 - MW ** 2 / MZ ** 2
check("W7", "Sec. 8.3", "on-shell 1 - MW^2/MZ^2", 0.2232, onshell, tol=0.00005)
def m_for_s2w(target):
    eps = 3 * (1 - 4 * target); th = math.acos(1 - eps); x = 2 * th
    return x / math.sin(x)
check("W8", "Prop. 30", "margin m at which the band reaches the on-shell value", 1.66, m_for_s2w(onshell), tol=0.006)
check("W9", "Prop. 30", "margin m needed for the MSbar value 0.2312", 1.40, m_for_s2w(0.2312), tol=0.006)
vth = math.sqrt(s2w[mfrak] / (1 - s2w[mfrak]))
check("W10", "Prop. 30", "implied modulus vartheta", 0.527, vth, tol=0.0015)
check("W11", "Prop. 30", "M_Z/M_W = sqrt(1+vartheta^2)", 1.130, math.sqrt(1 + vth ** 2), tol=0.0015)
check("W12", "Prop. 30", "observed M_Z/M_W", 1.1346, MZ / MW, tol=0.0001)
note("W13", "Prop. 30", "the correction form (1/4)(1 - eps/3)", "asserted", None,
     "r3 says so itself; note that the landing's position depends on both the asserted 1/3 and on the gap-term form of Eq. (25) "
     "(check T8): the three tilt laws in play give 0.227 (quartic Landau), 0.217 (Eq. 25 as written) and %.3f (periodic gap), "
     "all within +/-0.013 of the on-shell value, so the landing is robust but its central value is not yet a prediction." % (0.25 * (1 - (1 - 1 / mfrak) / 3)))

# ================================================================== 2. normalization audit
section("Sec. 6.1-6.4: Bogomolny constant, compacton inertia and the normalization audit (Prop. 19)")
I1 = simpson(lambda chi: math.sin(chi / 2) * math.sin(chi) ** 2, 0, math.pi)
check("N1", "Eq. (57) / H.2", "int_0^pi sin(chi/2) sin^2 chi dchi = 16/15", 16 / 15, I1, rel=1e-6)
C6 = 64 / (15 * math.pi)
check("N2", "Eq. (57)", "C6/(Lambda m_V) = (2/pi)*2*(16/15) = 64/(15 pi)", C6, (2 / math.pi) * 2 * I1, rel=1e-6)
check("N3", "H.2", "C6 numerically 1.358", 1.358, C6, tol=0.0005)
I2 = simpson(lambda x: x * x * 4 * x * x * (1 - x * x), 0, 1)
check("N4", "H.2", "int_0^1 x^2 sin^2 f0 dx with sin^2 f0 = 4x^2(1-x^2) equals 8/35", 8 / 35, I2, rel=1e-6)
i0 = (32 * math.pi / 3) * (8 / 35) * (2 / math.pi ** 2)
check("N5", "Prop. 19(i)", "compacton inertia i0 = 512/(105 pi)", 512 / (105 * math.pi), i0, rel=1e-9)
check("N6", "Prop. 19(i)", "i0 numerically", 1.552, i0, tol=0.0005)
e0 = C6
bench_corr = e0 / (2 * i0)
check("N7", "Prop. 19(ii)", "halo-free bench value e0/(2 i0) in the corrected normalization = 7/16", 7 / 16, bench_corr, rel=1e-9)
check("N8", "Prop. 19(ii)", "same with the master's coefficient (i0 halved) = 7/8", 7 / 8, e0 / (2 * i0 / 2), rel=1e-9)
check("N9", "Prop. 19(ii)", "halo value (5/3)*(7/16) = 35/48", 35 / 48, bench_corr * 5 / 3, rel=1e-9)
check("N10", "Sec. 6.4", "(35/24)/(7/8) = 5/3", 5 / 3, (35 / 24) / (7 / 8), rel=1e-9)
check("N11", "Sec. 6.4", "M/C6 = (64/9pi)/(64/15pi) = 5/3", 5 / 3, (64 / (9 * math.pi)) / C6, rel=1e-9)
ehat = 64 / (9 * math.pi)
c_inh = math.sqrt(2 * ehat * ehat)
check("N12", "Sec. 6.4", "inherited c = sqrt(2 e i) with e = i = 64/(9pi) equals 64 sqrt2/(9 pi) = 3.2011", 3.2011, c_inh, tol=0.0001)
c_corr = math.sqrt(2 * ehat * 2 * ehat)
check("N13", "Prop. 19(iii)", "c at fixed e_tot with doubled inertia = 128/(9 pi) = 4.527", 4.527, c_corr, tol=0.0005)
check("N14", "Prop. 19(iii)", "w_u^2 = e/(2i) after doubling = 1/4", 0.25, ehat / (2 * 2 * ehat), rel=1e-9)
check("N15", "Prop. 19(iii)", "bound 2 sqrt2 -> 4 if it scales with the inertia (x sqrt2)", 4.0, 2 * math.sqrt(2) * math.sqrt(2), rel=1e-9)
kappa2 = lambda muc_over_mV2: 0.25 / (4 * muc_over_mV2 + 0.25)   # w_u^2 m_V^2 / m^2 with m^2 = 4 mu_c + m_V^2/4
check("N16", "Prop. 19(iv)", "kappa^2 at mu_c = m_V^2/16 (Branch A) = 1/2", 0.5, kappa2(1 / 16), rel=1e-9)
check("N17", "Prop. 19(iv)", "kappa^2 at mu_c = 3 m_V^2/16 (Branch B) = 1/4", 0.25, kappa2(3 / 16), rel=1e-9)
check("N18", "Sec. 6.4", "binding depth 1 - kappa (percent)", 29.3, 100 * (1 - 1 / math.sqrt(2)), tol=0.05)
check("N19", "Table 2", "Branch B halo factor kappa/sqrt(1-kappa^2) at kappa=1/2", 1 / math.sqrt(3), 0.5 / math.sqrt(0.75), rel=1e-9)
note("N20", "Theorem 14 / Prop. 19", "w = c^2/(e0 i0 g) = 4 is invariant under the rescaling c -> sqrt2 c, i0 -> 2 i0", 4, 4,
     "the corrected closure constants satisfy the (1,1) Routhian identity w j(1-j) = 1 at j = 1/2 exactly as the inherited ones did; "
     "the 'at fixed e_tot' convention is self-consistent, but kappa = 1/sqrt2 is itself an inherited [N] solution value, so Branch A "
     "is a choice that preserves the stakes, not a derivation (r3 says as much; the closure K-3 item 'the integrals on the corrected halo' is where it is decided)")

# ================================================================== 3. spin flag dilations
section("Sec. 6.3: Theorem 14, Prop. 17 and the dilation law of Flag F9")
def dilation(a, b, j=0.5):
    rhs = b * j / (2 - j)
    if rhs >= a: return None
    return math.exp(math.atanh(rhs / a) / a)
check("F1", "Eq. (62)", "V at j=1/2 for (1,1) = sqrt2", math.sqrt(2), dilation(1, 1), rel=1e-9)
check("F2", "Flag F9 / correction 45", "V at j=1/2 for (1,2) = sqrt5", math.sqrt(5), dilation(1, 2), rel=1e-9)
check("F3", "Flag F9", "V at j=1/2 for (3,1)", 1.04, dilation(3, 1), tol=0.005)
note("F4", "Flag F9", "(1,3) at j=1/2", "no solution", None, "window j < 2a/(a+b) = 1/2 excludes j = 1/2 (tanh argument reaches 1): %s" % dilation(1, 3))
for (a, b, w) in ((1, 1, 1.0), (3, 1, 1.5), (1, 3, 0.5), (1, 2, 2 / 3)):
    check("F5-%d%d" % (a, b), "Eq. (63)", "window 2a/(a+b) for (%d,%d)" % (a, b), w, 2 * a / (a + b), rel=1e-9)
# Theorem 14 algebra: V^2 - 1 = j^2 w and V^2 + 1 = j(2-j) w  ->  w j (1-j) = 1
j = 0.5; w = 4.0
check("F6", "Eq. (62)", "w j (1-j) at w=4, j=1/2", 1.0, w * j * (1 - j), rel=1e-9)
check("F7", "Eq. (62)", "V^2 = 1/(1-j) at j=1/2", 2.0, 1 / (1 - j), rel=1e-9)

# ================================================================== 4. bridge and neutrino window
section("Sec. 8.2, 4.2, H.4, H.5: the flavor bridge, the neutrino window and the pitch")
lnA = 2 * math.log(mtau / mmu)
check("B1", "Eq. (73)", "2 ln(m_tau/m_mu) = 5.645 (r1/r2 printed 5.644)", 5.645, lnA, tol=0.0006)
X = (lnA - A_halo) / k_far
check("B2", "Eq. (73)", "X = (5.645-3.05)/0.1065", 24.36, X, tol=0.006)
sX = math.sqrt((dA_halo / k_far) ** 2 + (X * dk_far / k_far) ** 2)
check("B3", "Eq. (73) / H.4", "uncorrelated sigma_X", 1.12, sX, tol=0.006)
a_ = dA_halo / k_far; b_ = X * dk_far / k_far
rho_needed = (0.90 ** 2 - a_ ** 2 - b_ ** 2) / (2 * a_ * b_)
check("B4", "H.4", "correlation that would give +/-0.90", -0.36, rho_needed, tol=0.006)
eX = math.exp(-X)
check("B5", "H.4", "e^{-X}", 2.62e-11, eX, rel=0.006)
m3 = mtau * 1e6 * eX
check("B6", "Eq. (73)", "m3 = m_tau e^{-X} (eV), printed 0.0466 -> 0.047", 0.0466, m3, tol=0.00006)
check("B7", "Eq. (73)", "1 sigma upper m3 e^{+1.12}", 0.143, m3 * math.exp(sX), tol=0.0006)
check("B8", "Eq. (73)", "1 sigma lower m3 e^{-1.12}", 0.015, m3 * math.exp(-sX), tol=0.0006)
check("B9", "Sec. 2.6 / H.4", "m3 with the master's halo hbar/(sqrt2 m c)", 0.066, m3 * math.sqrt(2), tol=0.0006)
check("B10", "Table 2", "Branch B m3 at fixed integrals = sqrt3 x 0.0466", 0.081, m3 * math.sqrt(3), tol=0.0006)
def sum_nu(m3v, dm21=dm21, dm31=dm31):
    m1 = math.sqrt(max(m3v ** 2 - dm31, 0.0)); m2 = math.sqrt(m1 ** 2 + dm21); return m1, m2, m1 + m2 + m3v
floor = math.sqrt(dm31)
check("B11", "Prop. 8", "oscillation floor sqrt(dm31^2)", 0.0501, floor, tol=0.00005)
check("B12", "H.5", "Sigma m_nu at the floor (m1 -> 0)", 0.059, math.sqrt(dm21) + floor, tol=0.0006)
m1u, m2u, Su = sum_nu(0.143)
check("B13", "Stake S18", "Sigma m_nu at m3 = 0.143 eV", 0.41, Su, tol=0.006)
note("B14", "H.5 vs primer answer (12.7)", "m1 at m3 = 0.143 eV: paper prints 0.133, primer prints 0.134", 0.133, m1u,
     "computed %.4f; both are roundings of the same number, harmonize to one" % m1u)
m1b, m2b, Sb = sum_nu(m3 * math.sqrt(3))
check("B15", "Table 2", "Branch B Sigma m_nu", 0.21, Sb, tol=0.006)
check("B16", "Table 2", "Branch B pitch (um) = hc/m3_B", 15.4, hc_eVum / (m3 * math.sqrt(3)), tol=0.06)
m1_lcdm = bisect(lambda m1: m1 + math.sqrt(m1 ** 2 + dm21) + math.sqrt(m1 ** 2 + dm31) - 0.064, 0, 0.05)
m3_lcdm = math.sqrt(m1_lcdm ** 2 + dm31)
check("B17", "Prop. 8 / H.5", "m1 at Sigma = 0.064 eV", 0.0041, m1_lcdm, tol=0.00006)
check("B18", "Prop. 8 / H.5", "m2 at Sigma = 0.064 eV", 0.0096, math.sqrt(m1_lcdm ** 2 + dm21), tol=0.00006)
check("B19", "Prop. 8", "m3 at Sigma = 0.064 eV", 0.0503, m3_lcdm, tol=0.00006)
check("B20", "Eq. (28)", "pitch at the floor (um)", 24.75, hc_eVum / floor, tol=0.006)
check("B21", "Eq. (28)", "pitch at the LCDM bound (um)", 24.66, hc_eVum / m3_lcdm, tol=0.006)
check("B22", "Eq. (28)", "pitch at m3 = 0.143 eV (um)", 8.7, hc_eVum / 0.143, tol=0.06)
h_eVs = 2 * math.pi * hbar_eVs
check("B23", "Eq. (28)", "frequency at the floor (THz)", 12.1, floor / h_eVs / 1e12, tol=0.06)
check("B24", "Eq. (28) / H.5", "frequency at the unrounded band edge 0.1426 eV (THz)", 34.5, m3 * math.exp(sX) / h_eVs / 1e12, tol=0.06)
check("B25", "H.5", "withdrawn cap m3 = 0.057 eV -> pitch (um)", 21.8, hc_eVum / 0.057, tol=0.06)
check("B26", "H.5", "withdrawn cap -> Sigma m_nu", 0.113, sum_nu(0.057)[2], tol=0.0006)
check("B27", "Sec. 8.1 / H.5", "generator on neutrinos m3 e^{-A/2} (meV)", 3.0, 1e3 * m3 * math.exp(-A_fr / 2), tol=0.2)
check("B28", "H.5", "solar floor sqrt(dm21^2) (meV)", 8.7, 1e3 * math.sqrt(dm21), tol=0.06)
check("B29", "H.5", "inverted-ordering Sigma (m3 -> 0)", 0.10, math.sqrt(dm31 - dm21) + math.sqrt(dm31), tol=0.005)
lam_tau = hbarc_eVm / (mtau * 1e6)
q_ref = 2 * math.pi / p_ref
note("B30", "Sec. 7.2", "q lambda_halo,tau: printed 2.6e-11 (= e^{-X}, i.e. at the bridge pitch 26.6 um)", 2.6e-11, q_ref * lam_tau,
     "at the reference pitch 24.6 um used in the depth formulas it is %.2e (X = %.2f); the two reference pitches (bridge central value "
     "26.6 um versus the floor-truncated 24.6 um) are used consistently but should be named where they differ" % (q_ref * lam_tau, -math.log(q_ref * lam_tau)))

# ================================================================== 5. Bragg passage
section("Sec. 4.3-4.7, Appendix E: the cosmological Bragg passage, the trough and the locking length")
cH0 = c / H0
check("P1", "Cor. 2 / H.6", "c/H0 (m)", 1.372e26, cH0, rel=0.002)
cpH = cH0 / p_ref
check("P2", "H.6", "c/(p H0) at p = 24.6 um", 5.58e30, cpH, rel=0.003)
Pi_coef = (math.pi ** 2 / 2) * cpH
check("P3", "H.6", "Pi_0 coefficient (pi^2/2) c/(pH0)", 2.75e31, Pi_coef, rel=0.003)
Pi_bound = math.log(1 / 0.9)
check("P4", "Eq. (31)", "Pi at R = 0.1 = ln(1/0.9)", 0.105, Pi_bound, tol=0.0006)
dn_bound = math.sqrt(Pi_bound / Pi_coef)
check("P5", "Eq. (31)", "transparency bound Delta n/n", 6.2e-17, dn_bound, rel=0.01)
check("P6", "Sec. 4.3 / E.3", "adiabatic threshold Pi = 1", 1.9e-16, math.sqrt(1 / Pi_coef), rel=0.03)
check("P7", "Sec. 4.3", "p H0 / c", 1.8e-31, 1 / cpH, rel=0.03)
check("P8", "E.2", "resonant path at the bound (m)", 8.5e9, dn_bound * cH0, rel=0.02)
check("P9", "E.2", "resonant path in pitches", 3.5e14, dn_bound * cH0 / p_ref, rel=0.02)
check("P10", "Sec. 4.3", "resonant path for Delta n = 1e-31 (um)", 14, 1e-31 * cH0 * 1e6, tol=0.5)
check("P11", "Prop. 10 / H.6", "dipole shift of the edge (um)", 0.030, p_ref * 1e6 * vM / c, tol=0.0006)
check("P12", "Prop. 12 / H.6", "advected pitch line v_M/p (GHz)", 15.0, vM / p_ref / 1e9, tol=0.06)
dv = math.pi * p_ref * dn_bound ** 2 / (4 * 1e-3 ** 2)
check("P13", "Prop. 11 / H.6", "de Vries rate at 1 mm (rad/m)", 7.4e-32, dv, rel=0.03)
check("P14", "H.6", "same per Hubble length (rad)", 1.0e-5, dv * cH0, rel=0.03)
lam23 = c / 23e9
check("P15", "Sec. 4.6", "rotation at 23 GHz per Hubble length (rad)", 6e-8, dv * cH0 * (1e-3 / lam23) ** 2, rel=0.05)
check("P16", "Sec. 4.6", "ratio of rates across 23-353 GHz", 240, (353 / 23) ** 2, rel=0.03)
check("P17", "E.4", "amorphous bound with prefactor pi^2", 4e-17, math.sqrt(0.1 / (math.pi ** 2 * cpH)), rel=0.08)
check("P18", "E.4", "amorphous bound with prefactor 1", 1.3e-16, math.sqrt(0.1 / cpH), rel=0.04)
sin2 = tilt[mfrak]["sin2"]
def l_lock(dn, s2=sin2, eps=eps_e_hi):
    return (dn / (eps * s2)) ** 0.25 / q_ref
check("P19", "Eq. (33)", "l_lock at the transparency bound (nm)", 1.7, l_lock(dn_bound) * 1e9, tol=0.05)
check("P20", "Cor. 3", "l_lock at the archival limit 4.2e-17 (nm)", 1.5, l_lock(archival) * 1e9, tol=0.05)
check("P21", "Sec. 4.4", "l_lock with r2's tilt (sin^2 = 0.69^2), printed 1.8 nm", 1.8, l_lock(dn_bound, s2=0.69 ** 2) * 1e9, tol=0.05)
check("P22", "Sec. 4.4", "percent lowering from the corrected tilt", 7, 100 * (1 - (0.69 ** 2 / sin2) ** 0.25), tol=0.5)
check("P23", "Cor. 3", "Delta n at l_lock = l_P", 5e-121, eps_e_hi * sin2 * (q_ref * lP) ** 4, rel=0.12)

# numerical Landau-Zener check of Theorem 7 / Eq. (E1): contra-directional coupled modes with a linear sweep
def lz_reflectance(Pi, phase_total=200.0):
    s = math.pi / Pi                       # g_c = 1 units: Pi = pi g^2/|delta'|
    L = math.sqrt(phase_total / s)
    N = int(80 * s * L * L); h = 2 * L / N
    Lt = 0.6 * L                           # smooth taper of the coupling far outside the resonance: removes the
    def rhs(l, y):                         # Fresnel-tail truncation error (~1/(2 sqrt(pi s) L)) of a sharp window
        A, B = y; e = complex(math.cos(s * l * l), -math.sin(s * l * l)) * math.exp(-(l / Lt) ** 6)
        return (1j * e * B, -1j * e.conjugate() * A)
    def integrate(y):
        l = -L
        for _ in range(N):
            k1 = rhs(l, y)
            k2 = rhs(l + h / 2, (y[0] + h / 2 * k1[0], y[1] + h / 2 * k1[1]))
            k3 = rhs(l + h / 2, (y[0] + h / 2 * k2[0], y[1] + h / 2 * k2[1]))
            k4 = rhs(l + h, (y[0] + h * k3[0], y[1] + h * k3[1]))
            y = (y[0] + h / 6 * (k1[0] + 2 * k2[0] + 2 * k3[0] + k4[0]), y[1] + h / 6 * (k1[1] + 2 * k2[1] + 2 * k3[1] + k4[1]))
            l += h
        return y
    c1 = integrate((1 + 0j, 0j)); c2 = integrate((0j, 1 + 0j))
    M21, M22 = c1[1], c2[1]
    Bm = -M21 / M22                          # B(+L) = 0 with A(-L) = 1
    AL = c1[0] + c2[0] * Bm
    cons = abs(AL) ** 2 - (1 - abs(Bm) ** 2)  # |A|^2 - |B|^2 conserved: |A(L)|^2 = 1 - |B(-L)|^2
    return abs(Bm) ** 2, cons
for Pi in (0.105, 0.5, 1.0, 2.0):
    R, cons = lz_reflectance(Pi)
    check("P24-%.3g" % Pi, "Theorem 7 / E.1", "numerical R from Eq. (E1) at Pi = %.3g versus 1 - e^{-Pi}" % Pi, 1 - math.exp(-Pi), R, rel=0.002,
          note="flux conservation residual %.1e" % cons)
note("P25", "E.3", "sudden-regime value R = Pi at the bound is 5 percent high", 0.05, Pi_bound / (1 - math.exp(-Pi_bound)) - 1, "")

# ================================================================== 6. structural scale, hosting table, mirror protocol
section("Sec. 5.5-5.9, 9.6, H.7: structural scale, Table 1, the cliff and the mirror budget")
width = log2(math.log(0.1) / math.log(0.9))
check("S1", "Eq. (46)", "cliff width log2(ln0.1/ln0.9)", 4.45, width, tol=0.005)
for M, off in ((10, 3.9), (100, 7.2), (1000, 10.5)):
    check("S2-%d" % M, "Prop. 14", "midpoint offset log2(2M/ln2)-1 at M=%d" % M, off, log2(2 * M / math.log(2)) - 1, tol=0.05)
check("S3", "Cor. 7", "mirror-bound 90-10 span log2 9", 3.2, log2(9), tol=0.05)
off100 = log2(2 * Mgain / math.log(2)) - 1
ls_ceiling = hbarc_GeVm / 1.3e11
check("S4", "Eq. (52) / H.7", "photon-timing ceiling l_s at |xi|=1 (m)", 1.52e-27, ls_ceiling, rel=0.005)
check("S5", "H.7", "ceiling at |xi| = 1/12 (m)", 5.3e-27, ls_ceiling * math.sqrt(12), rel=0.01)
rows = {  # name: (N_eff at l_s), printed log2 range at lP, printed n50 at lP, printed log2 at ceiling, n50 at ceiling
    "H_V": (lambda ls: [nu_c * V / ls ** 3 for V in (1e-10, 1e-6)], (317, 330), (324, 338), (238, 251), (245, 258)),
    "H_A": (lambda ls: [nu_c * A / ls ** 2 for A in (1e-8, 1e-4)], (208, 221), (215, 229), (155, 169), (162, 176)),
    "H_R": (lambda ls: [nu_c * 300 * (lq / ls) ** 3 for lq in (1e-8, 1e-4)], (279, 319), (286, 326), (199, 239), (207, 246)),
}
for name, (f, lg_P, n50_P, lg_c, n50_c) in rows.items():
    for ls, lg, n50, tag in ((lP, lg_P, n50_P, "l_P"), (1.5e-27, lg_c, n50_c, "1.5e-27 m")):
        vals = [log2(x) for x in f(ls)]
        for k in range(2):
            check("S6-%s-%s-%d" % (name, tag.replace(" ", ""), k), "Table 1", "%s log2 N_eff at %s (end %d)" % (name, tag, k), lg[k], vals[k], tol=0.5)
            check("S7-%s-%s-%d" % (name, tag.replace(" ", ""), k), "Table 1", "%s n_50 at %s (end %d)" % (name, tag, k), n50[k], vals[k] + off100, tol=0.5)
vP = [log2(nu_c * V / lP ** 3) for V in (1e-10, 1e-6)]
check("S8", "Table 1", "Schmidt n** = 2 log2 N_eff at l_P, low end", 634, 2 * vP[0], tol=0.5)
check("S9", "Table 1", "Schmidt high end", 661, 2 * vP[1], tol=0.5)
vc = [log2(nu_c * V / 1.5e-27 ** 3) for V in (1e-10, 1e-6)]
check("S10", "Table 1", "Schmidt at the ceiling, low end", 475, 2 * vc[0], tol=0.5)
check("S11", "Table 1", "Schmidt at the ceiling, high end", 502, 2 * vc[1], tol=0.5)
check("S12", "Table 1", "knob step log2(1000)", 9.97, log2(1000), tol=0.005)
check("S13", "Table 1 caption / H.7", "shift for a pi/l_s cutoff on a volume row: 3 log2 pi", 5.0, 3 * log2(math.pi), tol=0.05)
note("S14", "Table 1 caption", "'every entry at l_P is about 5 qubits lower' with the pi cutoff", 5.0, 2 * log2(math.pi),
     "true for the volume (H_V, Schmidt) and extent (H_R) rows; the cut-hosting row H_A scales as l_s^-2 and moves by 2 log2 pi = %.1f qubits" % (2 * log2(math.pi)))
check("S15", "Sec. 5.6", "log2 12", 3.58, log2(12), tol=0.005)
for N, r in ((6, 0.40), (12, 0.56), (60, 1.26)):
    check("S16-%d" % N, "Eq. (88)", "l_s/l_P = sqrt(N/12pi) at N=%d" % N, r, math.sqrt(N / (12 * math.pi)), tol=0.005)
check("S17", "Sec. 9.6", "with the pi cutoff, low end 1.25", 1.25, math.pi * math.sqrt(6 / (12 * math.pi)), tol=0.006)
check("S18", "Sec. 9.6", "with the pi cutoff, high end 3.96", 3.96, math.pi * math.sqrt(60 / (12 * math.pi)), tol=0.006)
check("S19", "Sec. 9.1 / H.7", "zero-point ledger hbar c / l_P^4 (J/m^3)", 5e113, hbar_c_Jm / lP ** 4, rel=0.1)
check("S20", "Sec. 9.1 / H.7", "same at 1.5e-27 m", 6e81, hbar_c_Jm / 1.5e-27 ** 4, rel=0.05)
check("S21", "Sec. 6.1", "Bragg gap pi hbar c / l_s at the ceiling (eV)", 4e20, math.pi * hbarc_eVm / 1.5e-27, rel=0.05)
check("S22", "Sec. 6.1", "Bragg gap at l_P (eV)", 4e28, math.pi * hbarc_eVm / lP, rel=0.05)
check("S23", "Sec. 5.9", "l_s from cosmic rays at 3e20 eV (m)", 2e-27, math.pi * hbarc_eVm / 3e20, rel=0.05)
k_TeV = 1e3 / hbarc_GeVm
check("S24", "Sec. 5.9 / H.7", "(k l_P)^2 at 1 TeV", 7e-33, (k_TeV * lP) ** 2, rel=0.05)
check("S25", "Sec. 5.9", "orders of magnitude between l_P and the timing ceiling", 8, math.log10(1.5e-27 / lP), tol=0.1)
om_MeV = 1e6 / hbar_eVs
cone = lambda lg, E_eV: (lg * (E_eV / hbar_eVs) / c) ** 2 / 8
check("S26", "Sec. 2.3 / H.7", "(c_psi-c)/c for an MeV gap at l_g = 1.5e-27 m", 7e-30, cone(1.5e-27, 1e6), rel=0.05)
check("S27", "Sec. 2.3 / H.7", "same for the weak gap 80.4 GeV", 5e-20, cone(1.5e-27, 80.4e9), rel=0.08)
check("S28", "Sec. 2.3", "l_g for 1e-20 (m)", 7e-28, 1.5e-27 * math.sqrt(1e-20 / cone(1.5e-27, 80.4e9)), rel=0.03)
check("S29", "H.7", "n log2 n at n=300", 2469, 300 * log2(300), tol=0.6)
check("S30", "H.7", "n^{3/2} at n=300", 5196, 300 ** 1.5, tol=0.6)
check("S31", "Sec. 5.7", "two-qubit budget all-to-all 7/2469", 2.8e-3, 7 / (300 * log2(300)), rel=0.02)
check("S32", "Sec. 5.7", "two-qubit budget 2D 7/5196", 1.3e-3, 7 / 300 ** 1.5, rel=0.04)
check("S33", "C.5", "e^{-7}", 9e-4, math.exp(-7), rel=0.02)
check("S34", "C.5", "shots for 3 percent at the floor", 1.2e6, 1 / (0.03 ** 2 * math.exp(-7)), rel=0.02)
check("S35", "Eq. (43)", "chi_max >= 0.8 x 2^26 / 4", 1.3e7, 0.8 * 2 ** 26 / 4, rel=0.04)
check("S36", "C.1", "same with F_trunc = 0.5", 8e6, 0.5 * 2 ** 26 / 4, rel=0.05)
VH = 4 * math.pi / 3 * cH0 ** 3
check("S37", "Cor. 8", "log2(Hubble volume / l_P^3)", 609, log2(VH / lP ** 3), tol=0.6)
check("S38", "Sec. 5.7 / H.7", "log2(12 V / l_P^3) at V = 1e-10 m^3", 317.1, vP[0], tol=0.06)
check("S39", "H.7", "same at 1e-6", 330.4, vP[1], tol=0.06)
check("S40", "H.7", "midpoint offset at M=100", 7.17, off100, tol=0.006)
check("S41", "Prop. 27 / Appendix G", "core correction (m_t l_P c/hbar)^2", 2e-34, ((mt / hbarc_GeVm) * lP) ** 2, rel=0.05)

# ================================================================== 7. the relaxation family
section("Sec. 9.2-9.7, 10.2, Appendix D: relaxation family, lag bounds, birefringence profile and positivity")
def h_of(a, n):
    base = Om * a ** -3 + Orad * a ** -4
    if n >= 1: return math.sqrt(base + Ode)
    return bisect(lambda h: h * h - base - Ode * h ** (2 * (1 - n)), math.sqrt(base), 3 * math.sqrt(base) + 3, 300)
def Ode_of(a, n):
    h = h_of(a, n); return Ode * h ** (2 * (1 - n)) / (h * h)
def w_of(a, n): return -n / (1 - (1 - n) * Ode_of(a, n))
def wa_formula(n, O=Ode):
    w0 = -n / (1 - (1 - n) * O); D = 1 - (1 - n) * O
    return -3 * n * (1 - n) * w0 * O * (1 - O) / D ** 2
def q0_of(n, O=Ode): return 0.5 * (1 + 3 * (-n / (1 - (1 - n) * O)) * O)
check("R1", "Eq. (83)", "n_min = (1/Omega_DE - 1)/2", 0.22, 0.5 * (1 / Ode - 1), tol=0.005)
table4 = {0.25: (-0.52, 0.27, -0.04, 6e-3), 0.5: (-0.76, 0.29, -0.29, 4e-5), 0.75: (-0.91, 0.16, -0.44, 3e-7), 0.9: (-0.97, 0.06, -0.50, 1e-8), 1.0: (-1, 0, -0.54, 2e-9)}
a_rec = 1 / 1101.0
for n, (w0p, wap, q0p, fp) in table4.items():
    w0 = -n / (1 - (1 - n) * Ode)
    check("R2-%g" % n, "Table 4", "w_0 at n=%g" % n, w0p, w0, tol=0.006)
    check("R3-%g" % n, "Table 4", "w_a (derivative) at n=%g" % n, wap, wa_formula(n), tol=0.006)
    check("R4-%g" % n, "Table 4", "q_dec,0 at n=%g" % n, q0p, q0_of(n), tol=0.006)
    h = h_of(a_rec, n); frac = Ode * h ** (2 * (1 - n)) / (Om * a_rec ** -3)
    check("R5-%g" % n, "Table 4", "rho_DE/rho_m at z=1100 for n=%g" % n, fp, frac, rel=0.3)
h0 = h_of(a_rec, 0.0) if False else None
base_rec = Om * a_rec ** -3 + Orad * a_rec ** -4
check("R6", "Cor. 9 / Table 4", "n=0 member: rho_DE/rho_m at recombination", 2.9, (Ode * base_rec / (1 - Ode)) / (Om * a_rec ** -3), tol=0.06)
check("R7", "Prop. 41", "n=1/2 triple w_0", -0.763, -0.5 / (1 - 0.5 * Ode), tol=0.0006)
check("R8", "Prop. 41", "n=1/2 triple w_a", 0.285, wa_formula(0.5), tol=0.0006)
check("R9", "Prop. 41", "n=1 q_dec,0", -0.535, q0_of(1.0), tol=0.0006)
# numerical confirmation of Props. 36 and 38 at n = 1/2
n = 0.5; da = 1e-4
lnrho = lambda a: (2 * (1 - n)) * math.log(h_of(a, n))
w_num = -1 - (lnrho(1 + da) - lnrho(1 - da)) / (2 * da) / 3        # continuity: dln rho/dln a = -3(1+w)
check("R10", "Prop. 36 (numerical)", "w_0 from d ln rho_DE/d ln a at n=1/2", -0.5 / (1 - 0.5 * Ode), w_num, tol=0.001)
wa_num = -(w_of(1 + da, n) - w_of(1 - da, n)) / (2 * da)
check("R11", "Prop. 38 (numerical)", "w_a = -dw/da at a=1, n=1/2", wa_formula(0.5), wa_num, tol=0.001)
note("R12", "Sec. 9.5 (r2 text)", "w(z=1) at n=1/2 along the family", -0.61, w_of(0.5, 0.5), "")
hz = {}
for n in (0.5, 0.75, 0.9, 0.95, 1.0):
    hz[n] = dict(h3=h_of(0.25, n), h2=h_of(1 / 3, n), h77=h_of(1 / 8.7, n), hrec=h_of(a_rec, n), h1=h_of(0.5, n))
for n, hp in ((0.5, 4.82), (0.75, 4.62), (0.9, 4.56), (0.95, 4.55), (1.0, 4.53)):
    check("R13-%g" % n, "D.4", "h(3) at n=%g" % n, hp, hz[n]["h3"], tol=0.006)
check("R14", "D.4", "h(2) at n=1/2", 3.26, hz[0.5]["h2"], tol=0.006)
check("R15", "D.4", "h(2) at n=0.8", 3.08, h_of(1 / 3, 0.8), tol=0.006)
check("R16", "D.3", "h_rec", 2.34e4, hz[1.0]["hrec"], rel=0.003)
brk = {}
for n, bp in ((0.5, 1.19), (0.75, 0.47), (0.9, 0.16), (0.95, 0.079)):
    brk[n] = hz[n]["h3"] ** (1 - n) - 1
    check("R17-%g" % n, "D.4", "[h(3)^{1-n} - 1] at n=%g" % n, bp, brk[n], tol=0.006)
eps_b = {}
for n, bp in ((0.5, 7.9e-6), (0.75, 2.0e-5), (0.9, 5.7e-5), (0.95, 1.2e-4)):
    eps_b[n] = 1e-6 / (k_far * brk[n])
    check("R18-%g" % n, "Eq. (91)", "|eps_nu| bound at n=%g" % n, bp, eps_b[n], rel=0.03)
note("R19", "correction 50", "bound at n=1/2 computed with LCDM's h(3) instead of the member's own", 8.3e-6, 1e-6 / (k_far * (hz[1.0]["h3"] ** 0.5 - 1)), "the primer's answer (14.9) prints 8.3e-6 for this")
q_eq = 0.0503
for n, sp in ((0.5, 3.6e2), (0.75, 55), (0.9, 6.7), (0.95, 1.6)):
    check("R20-%g" % n, "Eq. (92)", "X^-1 bound (eV^2) at n=%g" % n, sp, 2 * rhoDE_eV4 / (eps_b[n] * q_eq) ** 2, rel=0.03)
eps_pitch = math.sqrt(2 * rhoDE_eV4 / q_eq ** 2) / q_eq
check("R21", "Sec. 9.7", "Delta mu/mu at z=3 for a pitch-scale stiffness X^-1 = q_eq^2, n=1/2", 4e-4, k_far * eps_pitch * brk[0.5], rel=0.08)
check("R22", "Sec. 9.7", "q_eq^2 (eV^2)", 2.5e-3, q_eq ** 2, rel=0.02)
check("R23", "Sec. 9.7", "sqrt of the n=1/2 stiffness bound (eV)", 20, math.sqrt(2 * rhoDE_eV4 / (eps_b[0.5] * q_eq) ** 2), tol=1.5)
check("R24", "Sec. 10.2 / D.3", "crossing-rate Gamma_0/H_0 = sqrt(c/(p H0))", 2e15, math.sqrt(cpH), rel=0.2)
for n, ap in ((0.5, 150), (0.75, 12), (0.9, 2.7), (0.95, 1.7)):
    check("R25-%g" % n, "D.3", "h_rec^{1-n} at n=%g (printed as 'about')" % n, ap, hz[n]["hrec"] ** (1 - n), rel=0.05)
check("R26", "D.3", "h(3)^{1/2} at n=1/2", 2.2, hz[0.5]["h3"] ** 0.5, tol=0.03)
drift = lambda eps, n, h: (1 + eps * h ** (1 - n)) / (1 + eps)
check("R27", "D.4", "m3(2)/m3(0) for (0.5,-0.2) with the member's h(2)", 0.80, drift(-0.2, 0.5, hz[0.5]["h2"]), tol=0.006)
check("R28", "D.4", "same with h(2) = 3.0 (r1's 0.82)", 0.82, drift(-0.2, 0.5, 3.0), tol=0.006)
check("R29", "D.4", "(0.8,-0.3)", 0.89, drift(-0.3, 0.8, h_of(1 / 3, 0.8)), tol=0.006)
check("R30", "D.4", "(0.8,-0.5)", 0.75, drift(-0.5, 0.8, h_of(1 / 3, 0.8)), tol=0.006)
zfail = lambda eps, n: bisect(lambda z: abs(eps) * h_of(1 / (1 + z), n) ** (1 - n) - 1, 0.1, 5000, 200)
check("R31", "D.4", "redshift where |eps| h^{1-n} = 1 for (0.5,-0.2)", 12, zfail(-0.2, 0.5), tol=1.0)
check("R32", "D.4", "same for (0.8,-0.3)", 80, zfail(-0.3, 0.8), tol=5.0)
prof = {}
for n, pp in ((0.5, 6e-4), (0.75, 1.8e-2), (0.9, 0.11), (0.95, 0.18)):
    e = 2 * (1 - n); prof[n] = (hz[n]["h77"] ** e - 1) / (hz[n]["hrec"] ** e - 1)
    check("R33-%g" % n, "Eq. (97)", "beta(7.7)/beta_rec at n=%g" % n, pp, prof[n], rel=0.06)
check("R34", "Sec. 10.2", "n -> 1 limit ln h(7.7)/ln h_rec", 0.26, math.log(hz[1.0]["h77"]) / math.log(hz[1.0]["hrec"]), tol=0.006)
for n in (0.9, 0.95):
    e = 2 * (1 - n); r3v = (hz[n]["h3"] ** e - 1) / (hz[n]["hrec"] ** e - 1)
    note("R35-%g" % n, "Sec. 10.2", "beta(3)/beta_rec at n=%g (printed: below 0.1)" % n, "<0.1", r3v, "times 0.342 deg = %.3f deg" % (0.342 * r3v))
cond = (0.05 / 2.3e-3) ** 4
check("R36", "Sec. 10.2", "condensate scale (0.05 eV)^4 / rho_DE,0", 2.2e5, cond, rel=0.02)
thr = {}
for n, tp, mp in ((0.5, 8e4, 3), (0.75, 5e2, 4e2), (0.9, 26, 8e3), (0.95, 10, 2e4)):
    thr[n] = 2 * hz[n]["hrec"] ** (2 * (1 - n)) / ((mfrak - 1) * sin2)
    check("R37-%g" % n, "Sec. 10.2", "positivity threshold / rho_DE,0 at n=%g" % n, tp, thr[n], rel=0.08)
    check("R38-%g" % n, "Sec. 10.2", "margin at n=%g (one significant figure)" % n, mp, cond / thr[n], rel=0.2)
check("R39", "correction 53", "margin at n=0.8 ('three orders' holds for n >~ 0.8)", 1e3, cond / (2 * h_of(a_rec, 0.8) ** 0.4 / ((mfrak - 1) * sin2)), rel=0.2)
# the tilt-response coefficient of Eq. (96): Eq. (26) gives d ln sin^2 theta / d ln m = S(x), not 1/(m-1)
def S_of(m):
    x = tilt_x(m); return x * math.sin(x) ** 2 / ((1 - math.cos(x)) * (math.sin(x) - x * math.cos(x)))
for m in (mfrak_lo, mfrak, mfrak_hi):
    fail("R40-%g" % m, "Eq. (96)", "tilt-response coefficient at m=%g: printed 1/(m-1), Eq. (26) gives S(x) = x sin^2x/[(1-cos x)(sin x - x cos x)]" % m,
         1 / (m - 1), S_of(m),
         "Eq. (96) carries the sensitivity d ln sin^2 theta_c / d ln m of the superseded Landau law sin^2 theta = 1 - 1/m (which is 1/(m-1)); "
         "differentiating Eq. (26) gives S = %.3f at m = %g (ratio %.2f). The sign and the profile Eq. (97) are unchanged; the positivity "
         "thresholds of Sec. 10.2 scale by S(m-1) = %.2f" % (S_of(m), m, S_of(m) * (m - 1), S_of(m) * (m - 1)))
# Sec. 10.2's positivity margins assume gamma q*^2 = (0.05 eV)^4; with X^-1 = gamma sin^2 theta_0 (the curvature of Eq. (25) in q,
# which is what Eq. (96) uses) that is a soft-mode stiffness Eq. (92) excludes.  The same chain bounds the lag-driven birefringence.
Xinv_cond = sin2 * 0.05 ** 4 / q_eq ** 2
for n in (0.5, 0.75, 0.9, 0.95):
    Xmin = 2 * rhoDE_eV4 / (eps_b[n] * q_eq) ** 2
    fail("R50-%g" % n, "Sec. 10.2 vs Eq. (92)", "stiffness implied by the positivity-margin paragraph (eV^2) against the Eq. (92) lower bound at n=%g" % n, Xmin, Xinv_cond,
         "the 'condensate scale (0.05 eV)^4' used for the margins is X^-1 = %.1e eV^2, i.e. the pitch-scale stiffness that Sec. 9.7 itself excludes four-hundred-fold; "
         "Eq. (92) requires at least %.3g eV^2 at this n, a factor %.1e stiffer" % (Xinv_cond, Xmin, Xmin / Xinv_cond))
    dsin2 = eps_b[n] ** 2 * sin2 * hz[n]["hrec"] ** (2 * (1 - n)) / (mfrak - 1)
    beta_max = alpha_em / (4 * math.pi) * dsin2
    fail("R51-%g" % n, "Prop. 47 with Prop. 43 and cross-lock X6", "upper bound on |beta| (rad) per unit kappa_chi |chi_3|/(m sqrt(gamma)) at n=%g; r3 prints no magnitude" % n, 5.97e-3, beta_max,
         "Delta sin^2 theta_c since recombination <= eps_max^2 sin^2 theta_0 h_rec^{2(1-n)}/(m-1) = %.1e once X^-1 obeys Eq. (92); the observed 0.342 deg = 5.97e-3 rad "
         "would need kappa_chi |chi_3|/(m sqrt gamma) >= %.1e, while positivity of W_2 + W_chi bounds |chi_3|/(m sqrt gamma) by about 1/sqrt2; "
         "a coupling linear in delta q instead of quadratic would give at most %.1e rad" % (dsin2, 5.97e-3 / beta_max, alpha_em / (4 * math.pi) * eps_b[n] * hz[n]["hrec"] ** (1 - n)))
# the CPL proxy of Table 5
post = {"Pantheon+": (-0.838, 0.055, -0.62, 0.205), "Union3": (-0.667, 0.088, -1.09, 0.29), "DESY5": (-0.752, 0.057, -0.86, 0.215)}
def cpl_fit(n, npts=400):
    xs = []; ys = []
    for i in range(npts + 1):
        a = 1 / 3 + (1 - 1 / 3) * i / npts
        xs.append(1 - a); ys.append(-1.0 if n >= 1 else w_of(a, n))
    N = len(xs); sx = sum(xs); sy = sum(ys); sxx = sum(x * x for x in xs); sxy = sum(x * y for x, y in zip(xs, ys))
    wa = (N * sxy - sx * sy) / (N * sxx - sx * sx); w0 = (sy - wa * sx) / N
    return w0, wa
def chi2(w0, wa, key, rho=-0.9):
    m0, s0, ma, sa = post[key]; d0 = (w0 - m0) / s0; da = (wa - ma) / sa
    return (d0 * d0 - 2 * rho * d0 * da + da * da) / (1 - rho * rho)
def erfc(x):
    return math.erfc(x)
def sigma_equiv(c2):
    p = math.exp(-c2 / 2)
    return bisect(lambda s: math.erfc(s / math.sqrt(2)) - p, 0, 40)
table5 = {0.5: ((-0.764, 0.313), (176, 79, 146)), 0.75: ((-0.910, 0.206), (45, 28, 40)), 0.9: ((-0.969, 0.092), (15, 17, 20)),
          0.95: ((-0.985, 0.048), (11, 15, 18)), 1.0: ((-1, 0), (9, 15, 19))}
for n, ((w0p, wap), (cP, cU, cD)) in table5.items():
    w0, wa = cpl_fit(n)
    check("R41-%g" % n, "Table 5", "fitted w_0 at n=%g" % n, w0p, w0, tol=0.004)
    check("R42-%g" % n, "Table 5", "fitted w_a at n=%g" % n, wap, wa, tol=0.006)
    for key, cp in (("Pantheon+", cP), ("Union3", cU), ("DESY5", cD)):
        c2 = chi2(w0, wa, key)
        check("R43-%g-%s" % (n, key), "Table 5", "Delta chi^2 (%s) at n=%g" % (key, n), cp, c2, tol=max(0.6, 0.03 * cp),
              note="%.1f sigma-equivalent (two parameters)" % sigma_equiv(c2))
check("R44", "Sec. 9.5", "DESY5 proxy at n=0.96", 18.2, chi2(*cpl_fit(0.96), "DESY5"), tol=0.3)
check("R45", "Sec. 9.5", "DESY5 proxy at n=0.95", 18.3, chi2(*cpl_fit(0.95), "DESY5"), tol=0.3)
best = min(((chi2(*cpl_fit(nn / 1000), "DESY5"), nn / 1000) for nn in range(880, 1001, 5)))
note("R46", "Sec. 9.5 / correction 48", "least-disfavored member under the DESY5 proxy", "n ~ 0.96", best[1], "Delta chi^2 = %.2f, against %.2f at n = 1" % (best[0], chi2(-1, 0, "DESY5")))
check("R47", "D.2", "proxy sigma for LCDM with Pantheon+ (DESI: 2.8)", 2.6, sigma_equiv(chi2(-1, 0, "Pantheon+")), tol=0.15)
check("R48", "D.2", "proxy sigma for LCDM with DESY5 (DESI: 4.2)", 4.0, sigma_equiv(chi2(-1, 0, "DESY5")), tol=0.15)
check("R49", "D.2", "proxy sigma for LCDM with Union3 (DESI: 3.8)", 3.5, sigma_equiv(chi2(-1, 0, "Union3")), tol=0.15)

# ================================================================== 8. electroweak, flavor, strong, electron, clock
section("Secs. 7-8, Appendices G-H: electroweak, flavor, strong-sector, electron, clock and dark-sector numbers")
drho = 3 * GF * mt ** 2 / (8 * math.sqrt(2) * math.pi ** 2)
check("E1", "Eq. (76)", "Delta rho_top = 3 G_F m_t^2/(8 sqrt2 pi^2)", 0.0093, drho, tol=0.00006)
g_w = math.sqrt(8 * MW ** 2 * GF / math.sqrt(2))
check("E2", "H.3", "g from G_F and M_W", 0.653, g_w, tol=0.0006)
check("E3", "H.3", "1/alpha_w = 4 pi / g^2", 29.5, 4 * math.pi / g_w ** 2, tol=0.06)
check("E4", "Prop. 30(1)", "2 M_W (GeV)", 160.7, 2 * MW, tol=0.06)
check("E5", "Sec. 8.3 / H.9", "y_t = sqrt2 m_t / v", 0.991, math.sqrt(2) * mt / vev, tol=0.0006)
check("E6", "Sec. 9.8", "m_tau/v", 7.2e-3, mtau * 1e-3 / vev, rel=0.01)
check("E7", "Sec. 9.8", "m_e/v", 2e-6, me * 1e-3 / vev, rel=0.05)
BR_tt = 0.0632; G_tt = BR_tt * Gamma_h
check("E8", "Eq. (93)", "Gamma(h -> tau tau) = 6.3 percent of 4.1 MeV", 0.26, G_tt, tol=0.006)
check("E9", "Prop. 44", "BR(h -> invisible), Dirac, from Table 10 inputs (printed 5.9 percent)", 5.9, 100 * G_tt / (Gamma_h + G_tt), tol=0.12,
      note="5.96 percent from the stated inputs 4.1 MeV and 0.26 MeV; 5.9 needs the unrounded SM width 4.07 MeV and BR 6.27 percent")
check("E10", "Prop. 44", "BR(h -> invisible), Majorana", 3.1, 100 * (G_tt / 2) / (Gamma_h + G_tt / 2), tol=0.1)
gJR = math.sqrt(1 + mfrak * sin2)
check("E11", "Eq. (77)", "gamma_JR = sqrt(1 + m sin^2 theta_c)", 1.48, gJR, tol=0.005)
check("E12", "Sec. 8.3 (r2)", "gamma_JR with the old tilt 0.69", 1.38, math.sqrt(1 + mfrak * 0.69 ** 2), tol=0.005)
lam_e = hbarc_eVm / (me * 1e6)
epsR = (lP / lam_e) ** gJR
check("E13", "Prop. 28 / H.3", "epsilon_R at l_P (H.3 prints 6.7e-34, text 7e-34)", 6.7e-34, epsR, rel=0.06,
      note="sensitive to the rounding of gamma_JR: 1.48 gives 7.6e-34, the unrounded %.4f gives %.2e" % (gJR, epsR))
check("E14", "Prop. 28", "epsilon_R at 0.4 l_P", 2e-34, (0.4 * lP / lam_e) ** gJR, rel=0.2)
check("E15", "Prop. 28", "epsilon_R at 1.26 l_P", 9e-34, (1.26 * lP / lam_e) ** gJR, rel=0.1)
check("E16", "Prop. 28", "epsilon_R at the timing ceiling", 4e-22, (1.5e-27 / lam_e) ** gJR, rel=0.1)
check("E17", "Prop. 28 (r2)", "r2's 1.3e-31 from gamma = 1.38", 1.3e-31, (lP / lam_e) ** math.sqrt(1 + mfrak * 0.69 ** 2), rel=0.1)
lam_d = hbarc_eVm / (md_q * 1e6)
check("E18", "H.3", "q lambda_halo,d at p = 24.6 um", 1.07e-8, q_ref * lam_d, rel=0.01)
eps_d_hi = eps_e_hi * (me / md_q) ** (4 / 3)
theta_bar = eps_d_hi * epsR * q_ref * lam_d
check("E19", "Eq. (79)", "theta_bar_eff upper bound", 1.1e-45, theta_bar, rel=0.1)
check("E20", "Prop. 31 / H.3", "|d_n| with 2.4e-16 e cm per unit theta_bar", 3e-61, 2.4e-16 * theta_bar, rel=0.15)
note("E21", "Prop. 31", "coefficient d_n/theta_bar", "2.4e-16 (r3) vs 3.6e-16 (master)", None,
     "both appear in the literature (chiral estimate 3.6e-16; 2.4e-16 is a common midpoint); state the source once since the two revisions differ")
# species windows, Table 3
species = {"mu": (mmu, 6.5e-9, 2.5e-6), "tau": (mtau, 1.5e-10, 5.7e-8), "d": (md_q, 4.2e-7, 1.6e-4), "u": (mu_q, 1.2e-6, 4.4e-4),
           "s": (ms_q, 7.7e-9, 2.9e-6), "c": (mc_q, 2.4e-10, 8.9e-8), "b": (mb_q, 4.8e-11, 1.8e-8), "t": (mt * 1e3, 3.4e-13, 1.3e-10)}
for name, (m, lo, hi) in species.items():
    f = (me / m) ** (4 / 3)
    check("E22-%s-lo" % name, "Table 3", "lower window end for %s" % name, lo, eps_e_lo * f, rel=0.04)
    check("E22-%s-hi" % name, "Table 3", "upper window end for %s" % name, hi, eps_e_hi * f, rel=0.04)
check("E23", "H.4", "ln(m_tau/m_mu)", 2.8224, math.log(mtau / mmu), tol=0.00006)
check("E24", "H.4", "ln(m_mu/m_e)", 5.3316, math.log(mmu / me), tol=0.00006)
check("E25", "H.4", "quotient of the two logarithms", 1.889, math.log(mmu / me) / math.log(mtau / mmu), tol=0.0006)
check("E26", "Sec. 8.1", "(A+B)/A", 2.02, (A_fr + B_fr) / A_fr, tol=0.006)
check("E27", "Sec. 8.1", "sigma of (A+B)/2", 0.75, math.sqrt(dA_fr ** 2 + dB_fr ** 2) / 2, tol=0.006)
check("E28", "Sec. 8.1", "relative half-width of A/2 (percent)", 16, 100 * dA_fr / A_fr, tol=0.6)
check("E29", "Sec. 8.1 / H.9", "p=3 rung m_e e^{-(A+2B)/2} (eV)", 104, me * 1e6 * math.exp(-(A_fr + 2 * B_fr) / 2), tol=1.0)
check("E30", "Sec. 8.1 / H.9", "epsilon_3 at eps_e = 8e-6", 0.67, eps_e_lo * math.exp((4 / 3) * 8.5), tol=0.01)
check("E31", "Sec. 8.1", "fraction of r1's window [1.5e-6, 3e-3] above 8e-6 in log measure (percent)", 78, 100 * math.log(3e-3 / 8e-6) / math.log(3e-3 / 1.5e-6), tol=0.6)
check("E32", "Prop. 29", "N_nu lower end 3(1 - 3e-3)", 2.991, 3 * (1 - 3e-3), tol=0.0006)
Gt_LO = GF * mt ** 3 / (8 * math.pi * math.sqrt(2)) * (1 - MW ** 2 / mt ** 2) ** 2 * (1 + 2 * MW ** 2 / mt ** 2)
check("E33", "Prop. 33", "leading-order top width (GeV)", 1.48, Gt_LO, tol=0.01)
hbar_GeVs = hbar_eVs * 1e-9
check("E34", "Prop. 33", "tau_decay = hbar/1.42 GeV (s)", 4.6e-25, hbar_GeVs / 1.42, rel=0.02)
check("E35", "Prop. 33", "same in fm/c", 0.14, hbar_GeVs / 1.42 * c * 1e15, tol=0.005)
check("E36", "Prop. 33", "tau_had = hbar/sqrt(sigma) (s)", 1.5e-24, hbar_GeVs / math.sqrt(sigma_str), rel=0.02)
check("E37", "Prop. 33", "same in fm/c", 0.45, hbar_GeVs / math.sqrt(sigma_str) * c * 1e15, tol=0.005)
check("E38", "Sec. 8.4 / H.9", "Regge slope 1/(2 pi sigma) (GeV^-2)", 0.84, 1 / (2 * math.pi * sigma_str), tol=0.005)
check("E39", "H.9", "sigma/(hbar c) (GeV/fm)", 0.96, sigma_str / (hbarc_GeVm * 1e15), tol=0.006)
check("E40", "H.9", "string tension in newtons", 1.5e5, sigma_str / (hbarc_GeVm * 1e15) * 1e9 * eV / 1e-15, rel=0.03)
check("E41", "Sec. 8.4", "epsilon_dress = (0.17/1.7)^2", 1e-2, (0.17 / 1.7) ** 2, rel=0.01)
# anomaly sums, Eq. (80)
Y = {"Q": 1 / 6, "uc": -2 / 3, "dc": 1 / 3, "L": -1 / 2, "ec": 1.0}
check("E42", "Eq. (80)", "[SU(3)]^2 U(1): 2Y_Q + Y_uc + Y_dc", 0.0, 2 * Y["Q"] + Y["uc"] + Y["dc"], tol=1e-12)
check("E43", "Eq. (80)", "[SU(2)]^2 U(1): 3Y_Q + Y_L", 0.0, 3 * Y["Q"] + Y["L"], tol=1e-12)
check("E44", "Eq. (80)", "grav^2 U(1): 6Y_Q + 3Y_uc + 3Y_dc + 2Y_L + Y_ec", 0.0, 6 * Y["Q"] + 3 * Y["uc"] + 3 * Y["dc"] + 2 * Y["L"] + Y["ec"], tol=1e-12)
check("E45", "Eq. (80)", "[U(1)]^3", 0.0, 6 * Y["Q"] ** 3 + 3 * Y["uc"] ** 3 + 3 * Y["dc"] ** 3 + 2 * Y["L"] ** 3 + Y["ec"] ** 3, tol=1e-12)
check("E46", "Eq. (80)", "charge tiling 3(2/3) + 3(-1/3) - 1 + 0", 0.0, 3 * (2 / 3) + 3 * (-1 / 3) - 1, tol=1e-12)
check("E47", "Prop. 35", "(N-1)(N-2)/2 at N=3", 1, (3 - 1) * (3 - 2) / 2, tol=1e-12)
# electron scales, band edges, positronium, channeling
for name, m, lp in (("e", me, 3.86e-13), ("mu", mmu, 1.87e-15), ("tau", mtau, 1.11e-16)):
    check("E48-%s" % name, "Prop. 23", "halo length hbar/(m c) for %s (m)" % name, lp, hbarc_eVm / (m * 1e6), rel=0.005)
check("E49", "Prop. 27", "lambda_halo,t (m)", 1.14e-18, hbarc_GeVm / mt, rel=0.005)
for name, m, ep in (("e (keV)", me * 1e3, 722.7), ("mu (MeV)", mmu, 149.42), ("tau (GeV)", mtau * 1e-3, 2.513)):
    check("E50-%s" % name.split()[0], "Sec. 7.3 / H.8", "band edge sqrt2 M c^2 for %s" % name, ep, math.sqrt(2) * m, rel=0.0005)
check("E51", "Eq. (71)", "positronium line (m_e/4)(4 - kappa^-2) at kappa = 1/sqrt2 (keV)", 255.5, me * 1e3 / 4 * (4 - 2), tol=0.05)
check("E52", "Prop. 25", "kappa read back from E_gamma = 255.5 keV", 1 / math.sqrt(2), (4 - 4 * 255.5 / (me * 1e3)) ** -0.5, rel=0.001)
hcMeVm = 1.239842e-12; me2 = 0.261120
for name, a_lat, pp in (("Si", 5.431, 80.87), ("Ge", 5.658, 84.26), ("diamond", 3.567, 53.12)):
    row = a_lat / math.sqrt(2) * 1e-10
    check("E53-%s" % name, "Eq. (68)", "channeling p_1 c for %s (MeV)" % name, pp, me2 * row / hcMeVm, tol=0.006)
check("E54", "Prop. 22", "Ge/Si momentum ratio 4.001/3.840", 4.001 / 3.840, 5.658 / 5.431, rel=0.0003)
check("E55", "Theorem 15", "hbar c / R at R = 1e-15 m (MeV)", 197, hbarc_GeVm * 1e3 / 1e-15, tol=0.5)
check("E56", "Theorem 15", "soft mode sqrt(eps) x 722.7 keV at eps = 8e-6 (keV)", 2, math.sqrt(eps_e_lo) * 722.7, tol=0.1)
check("E57", "Theorem 15", "same at eps = 3e-3 (keV)", 40, math.sqrt(eps_e_hi) * 722.7, tol=0.6)
check("E58", "Theorem 15", "reduced Compton wavelength (m)", 3.86e-13, hbarc_eVm / (me * 1e6), rel=0.005)
check("E59", "Prop. 24", "electron-interferometer bound 1e-2 rad / (1 ns x m_e c^2/hbar)", 1.3e-14, 1e-2 / (1e-9 * me * 1e6 / hbar_eVs), rel=0.03)
# near field, kinematics, misc
k_e = 8.9875517923e9
check("E60", "Sec. 3.4", "Coulomb update of a 1 nC dipole moved 1 mm at 10 m (V/m)", 9e-6, k_e * 1e-9 * 1e-3 / 10 ** 3, rel=0.02)
check("E61", "Sec. 3.4 / correction 67", "radiation pulse q dx/(4 pi eps c^2 r tau^2) (V/m)", 1e-2, k_e * 1e-9 * 1e-3 / (c ** 2 * 10 * 1e-18), rel=0.02)
check("E62", "Sec. 3.4", "r/c at 10 m (ns)", 33, 10 / c * 1e9, tol=0.5)
check("E63", "Sec. 3.4", "r/c_L at 10 m, c_L = 1e4 c (ps)", 3, 10 / (1e4 * c) * 1e12, tol=0.4)
check("E64", "Prop. 5 / F.1", "full sidereal swing at 100 m (ns)", 0.8, 2 * 100 * vM * 0.99 / c ** 2 * 1e9, tol=0.03)
check("E65", "Prop. 5", "v_M threshold c^2/c_L for c_L = 1e4 c (km/s)", 30, c / 1e4 / 1e3, tol=0.1)
Om_earth = 2 * math.pi / 86164.0905
rot = 0.5 * Om_earth * 370e3 * 1e4 * 60 / c ** 2
check("E66", "F.2", "rotation term (ps)", 90, rot * 1e12, tol=1.5)
check("E67", "F.2", "c_L bound (units of c)", 2e5, 1e4 / (100e-12 + rot) / c, rel=0.15)
check("E68", "Sec. 5.8", "disconnection window 10 km / (1e4 c) (ns)", 3.3, 1e4 / (1e4 * c) * 1e9, tol=0.05)
check("E69", "Prop. 4", "longitudinal leak (1/2)(1e-4)^3", 5e-13, 0.5 * 1e-12, rel=0.01)
check("E70", "Cor. 4", "1e-6/kappa_far", 9e-6, 1e-6 / k_far, rel=0.05)
check("E71", "Sec. 9.7", "10-25 percent lighter neutrinos need |eps| ~ 0.2-0.5: ratio to the n=1/2 bound (orders of magnitude)", 4, math.log10(0.2 / eps_b[0.5]), tol=0.5)
check("E72", "Sec. 8.4", "line tension pi f^2 ln kappa with f = 0.17 GeV needs ln kappa =", math.log(0.19 / (math.pi * 0.17 ** 2)), math.log(sigma_str / (math.pi * 0.17 ** 2)), rel=1e-9,
      note="sigma = 0.19 GeV^2 needs ln kappa_q = %.2f, kappa_q = %.1f at f_q = 0.17 GeV; a plausible but unstated vortex-core ratio" % (math.log(sigma_str / (math.pi * 0.17 ** 2)), sigma_str / (math.pi * 0.17 ** 2)))

# ================================================================== 9. cross-reference audit of r3
section("Cross-reference audit of r3 (labels, equations, tables, corrections, citations)")
txt = open(R3, encoding="utf-8").read()
body, _, refs = txt.partition("\n# References")
main_text, _, appK = body.partition("\n# Appendix K")
def nums_in(s):
    out = []
    for part in re.split(r",\s*|\s+and\s+", s):
        m = re.match(r"(\d+)\s*[–-]\s*(\d+)$", part.strip())
        if m: out += list(range(int(m.group(1)), int(m.group(2)) + 1))
        elif part.strip().isdigit(): out.append(int(part.strip()))
    return out
tags = [int(t) for t in re.findall(r"\\tag\{(\d+)\}", txt)]
note("X1", "equations", "numbered equations \\tag{n} in the main text (plus six lettered appendix tags)", "98 in sequence", len(tags),
     "max %d; duplicates %s; gaps %s" % (max(tags), sorted({t for t in tags if tags.count(t) > 1}) or "none",
                                         sorted(set(range(1, max(tags) + 1)) - set(tags)) or "none"))
if sorted(set(tags)) != list(range(1, max(tags) + 1)) or len(tags) != len(set(tags)):
    fail("X1b", "equations", "equation numbering is not 1..N without repeats", "1..N", len(tags), "")
app_tags = re.findall(r"\\tag\{([A-Z]\d+)\}", txt)
note("X2", "equations", "appendix-lettered tags", "B1 B2 D1 E1 E2 F1", " ".join(app_tags), "")
eqrefs = set()
for m in re.finditer(r"Eqs?\.\s*\(([^)]*)\)(?:\s*[–-]\s*\((\d+)\))?", txt):
    inner = m.group(1).replace("(", "").replace(")", "")
    ns = nums_in(inner)
    if m.group(2) and ns: ns = list(range(ns[-1], int(m.group(2)) + 1)) + ns
    eqrefs.update(n for n in ns if n)
bad = sorted(n for n in eqrefs if n > max(tags))
(fail if bad else note)("X3", "equations", "equation references beyond the last tag", "none", str(bad or "none"), "")
kinds = ("Theorem", "Proposition", "Lemma", "Corollary", "Definition", "Conjecture")
counts = {}
for k in kinds:
    defined = sorted({int(n) for n in re.findall(r"\*\*%s (\d+) \(" % k, txt)})
    counts[k] = defined
    refs_k = set()
    for m in re.finditer(r"\b%ss?\s+((?:\d+)(?:(?:,\s*|\s*and\s*|\s*[–-]\s*)\d+)*)" % k, main_text):
        refs_k.update(nums_in(m.group(1)))
    dangling = sorted(n for n in refs_k if n not in defined)
    gaps = sorted(set(range(1, max(defined) + 1)) - set(defined)) if defined else []
    (fail if (dangling or gaps) else note)("X4-%s" % k, "statements", "%s labels defined 1..%d" % (k, max(defined) if defined else 0),
                                           "consecutive, all references resolve", len(defined),
                                           "gaps %s; dangling references %s" % (gaps or "none", dangling or "none"))
flags = sorted({int(n) for n in re.findall(r"\*\*Flag F(\d+) \(", txt)})
flag_refs = {int(n) for n in re.findall(r"Flag F(\d+)", txt)}
(fail if (flags != list(range(1, 12)) or max(flag_refs) > 11) else note)("X5", "flags", "Flags F1..F11 defined; references within range", "F1..F11", "%s; max ref F%d" % (flags, max(flag_refs)), "")
table_rows_S = re.findall(r"^\| S(\d+)(?: \[RG\])? \|", txt, flags=re.M)
table_rows_K = re.findall(r"^\| K-(\d+) \|", txt, flags=re.M)
check("X6", "Table 9", "stake rows S1..S29 in order", 29, len(table_rows_S), tol=0, note="order %s" % ("1..29 consecutive" if [int(s) for s in table_rows_S] == list(range(1, 30)) else table_rows_S))
check("X7", "Table 8", "closure rows K-1..K-27 in order", 27, len(table_rows_K), tol=0, note="order %s" % ("1..27 consecutive" if [int(s) for s in table_rows_K] == list(range(1, 28)) else table_rows_K))
non_table = "\n".join(l for l in main_text.splitlines() if not l.startswith("|"))
s_refs = sorted({int(n) for n in re.findall(r"\bStakes?\s+S(\d+)", non_table)} | {int(n) for n in re.findall(r"\(S(\d+)\)", non_table)})
k_refs = sorted({int(n) for n in re.findall(r"\bK-(\d+)\b", non_table)})
x_refs = sorted({int(n) for n in re.findall(r"\bX(\d+)\b", non_table)})
(fail if (s_refs and s_refs[-1] > 29) else note)("X8", "stakes", "stake references in the prose (outside tables and Appendix K)", "<= S29", "max S%d" % (s_refs[-1] if s_refs else 0), "")
(fail if (k_refs and (k_refs[-1] > 27 or k_refs[0] < 1)) else note)("X9", "closures", "closure references in the prose", "K-1..K-27", "K-%d..K-%d" % (k_refs[0], k_refs[-1]), "")
(fail if (x_refs and x_refs[-1] > 8) else note)("X10", "cross-locks", "cross-lock references", "X1..X8", "max X%d" % x_refs[-1], "")
captions = sorted({int(n) for n in re.findall(r"^\*Table (\d+)\.", txt, flags=re.M)})
table_refs = {int(n) for n in re.findall(r"\bTables?\s+(\d+)", txt)}
(fail if (captions != list(range(1, 13)) or max(table_refs) > 12) else note)("X11", "tables", "Table captions 1..12 and references", "1..12", "%s; max ref %d" % (captions, max(table_refs)), "")
corr_items = [int(n) for n in re.findall(r"^\*\*(\d+)\.\*\* ", txt, flags=re.M)]
corr_refs = set()
for m in re.finditer(r"corrections?\s+((?:\d+)(?:(?:,\s*|\s*and\s*|\s*[–-]\s*)\d+)*)", txt):
    corr_refs.update(nums_in(m.group(1)))
(fail if (corr_items != list(range(1, 68)) or max(corr_refs) > 67) else note)("X12", "Sec. 11.6", "corrections 1..67 listed once each; references within range", "1..67", "%d items, max ref %d" % (len(corr_items), max(corr_refs)), "")
check("X13", "abstract", "'thirty-one of them new' = 67 - 36", 31, 67 - 36, tol=0)
bib = [int(n) for n in re.findall(r"^(\d+)\. ", refs, flags=re.M)]
cited = set()
for m in re.finditer(r"\[(\d+(?:;\s*\d+)*)\]", body):
    cited.update(int(x) for x in re.split(r";\s*", m.group(1)))
uncited = sorted(set(bib) - cited); dangling = sorted(n for n in cited if n not in bib)
(fail if (dangling or bib != list(range(1, len(bib) + 1))) else note)("X14", "References", "bibliography 1..%d; every citation resolves" % len(bib), "resolves", len(bib),
                                                                      "dangling %s; never cited %s; entries flagged 'to be verified': %d" % (dangling or "none", uncited or "none", refs.count("to be verified")))
note("X15", "statements", "statement counts", "", "", "; ".join("%s %d" % (k, len(v)) for k, v in counts.items()))
pos_table8 = txt.find("| K-1 |"); pos_abs = txt.find("### Abstract")
note("X16", "Table 8 vs abstract", "closure dispositions (manual count from Table 8)", "10 executed/closed, 4 consistency, 3 CJ, 1 partial, 9 posed", "10 + 4 + 3 + 1 + 9 = 27",
     "executed/closed: K-1, 5, 6, 12, 15, 16, 18, 21, 23, 26; consistency: K-11, 13, 14, 20; conjectures: K-19, 24, 25; partial: K-3; posed: K-2, 4, 7, 8, 9, 10, 17, 22, 27")

# ================================================================== 10. provenance of the cited companion files and of ref. [9]
section("Provenance: companion files and the analysis that r3 cites as ref. [9]")
repo = os.path.abspath(os.path.join(ROOT, "..", "..", ".."))
found = {}
for dp, dn, fn in os.walk(repo):
    if ".git" in dp or "node_modules" in dp: continue
    for f in fn:
        if f in ("check_r3.py", "build_r3.py"): found.setdefault(f, []).append(os.path.relpath(os.path.join(dp, f), repo))
    for d in dn:
        if d == "analysis": found.setdefault("analysis/", []).append(os.path.relpath(os.path.join(dp, d), repo))
for name in ("check_r3.py", "build_r3.py", "analysis/"):
    (note if name in found else fail)("V1-%s" % name.strip("/"), "front matter / ref. [9] / Appendix H", "cited companion file or directory `%s` present in the repository" % name,
                                       "present", "present at %s" % found[name] if name in found else "absent",
                                       "" if name in found else "r3 says every closed-form number is recomputed by this file (Appendix H) or that ref. [9] lives in `analysis/`; neither exists on any branch of this repository at the time of this audit")
note("V2", "Secs. 4.5, 9.5, 9.7, ref. [9]", "numbers that depend on the absent analysis", "Table 6; archival limits 5.5e-17, 4.8e-17, 4.2e-17; pipeline reproductions -8.02, -4.95, -13.71; 'lag of 40-80 percent'",
     "unverifiable here", "the only review in this repository (gum/review/) recomputed the 2026-09-06 master and produced r2; it contains no Spitzer stacking and no distance fit, so ref. [9]'s description does not match it")
note("V3", "Sec. 4.5", "internal plausibility of the archival limits", "", "",
     "a 95 percent limit Delta n/n < 5.5e-17 corresponds to Pi = %.3f, co-handed depth %.1f percent and unpolarized depth %.1f percent, consistent with a 2 percent systematic floor at 2 sigma; "
     "4.8e-17 and 4.2e-17 correspond to unpolarized depths %.1f and %.1f percent" % (
         Pi_coef * 5.5e-17 ** 2, 100 * (1 - math.exp(-Pi_coef * 5.5e-17 ** 2)), 50 * (1 - math.exp(-Pi_coef * 5.5e-17 ** 2)),
         50 * (1 - math.exp(-Pi_coef * 4.8e-17 ** 2)), 50 * (1 - math.exp(-Pi_coef * 4.2e-17 ** 2))))
r2txt = open(R2, encoding="utf-8").read() if os.path.exists(R2) else ""
if r2txt:
    r2S = re.findall(r"^\| S(\d+)", r2txt, flags=re.M)
    check("V4", "Appendix K.4 / Sec. 11.3", "r2 stake rows (r3 says twenty-seven)", 27, len(r2S), tol=0, note="labels present: S31 %s, S32 %s" % ("31" in r2S, "32" in r2S))
    r2K = re.findall(r"^\| (K-[A-Za-z0-9-]+)", r2txt, flags=re.M)
    note("V5", "Appendix K.4", "r2 closure rows", "24 (= 27 - 3 restored)", len(r2K), " ".join(r2K))
    for s, where in (("V = 1.24", "correction 45"), ("$\\Gamma_r\\propto H$, $n = \\tfrac12$", "correction 49"), ("further from the data than", "correction 48"),
                     ("twenty-six orders", "correction 58"), ("h(3) = 4.52", "correction 50"), ("Varadhan", "correction 57"), ("satisfies by three orders", "correction 53"),
                     ("3\\times10^{-3}$ V/m", "correction 67"), ("6.8\\ (0.9)", "correction 67"), ("\\sqrt{1-1/\\mathfrak{m}}", "correction 37"), ("0.227\\pm0.009", "correction 38")):
        note("V6-%s" % where.split()[-1], where, "r3's characterization of r2 checked against the r2 text", "present in r2", "found" if s in r2txt else "NOT FOUND", s)
    note("V7", "correction 67", "r3: 'r2's companion files cited non-existent gum/manuscript/ paths'", "", "gum/manuscript/check_revision.py and revision-numbers.md exist on branch gum_v51_manuscript_review_1",
         "the paths r2 cites exist in this repository; the r3 agent appears to have worked from the uploaded manuscript alone")

# ================================================================== 11. primer consistency
section("Primer r3 versus paper r3: shared numbers")
if os.path.exists(PRIMER):
    ptxt = open(PRIMER, encoding="utf-8").read()
    expect = ["sin θ_c = 0.79", "52.6°", "0.217 (+0.010/−0.007)", "0.2232", "24.36 ± 1.12", "[0.015, 0.143]", "4.45 qubits", "324–338", "1.7 nm", "1.5 nm", "255.5 keV",
              "128/(9π) ≈ 4.527", "35/48", "7/16", "√5 ≈ 2.24", "5.9% or 3.1%", "0.11%", "80.87", "84.26", "53.12", "15 GHz", "6.2×10⁻¹⁷", "4.2×10⁻¹⁷", "n > 0.949",
              "7.6–16.6", "0.0501", "0.0503", "0.064 eV", "[0.059, 0.41]", "8.7–24.7 µm", "24.66–24.75 µm", "𝔪 = 1.9 ± 0.4", "ε_tilt = 0.39", "γ_JR = 1.48", "7×10⁻³⁴",
              "7.9×10⁻⁶", "1.2×10⁻⁴", "3.6×10² eV²", "1.6 eV²", "6×10⁻⁴", "0.18 (n = 0.95)", "ϑ = 0.527", "1.130", "Δχ² ≈ +217", "0.342°", "0.215°", "twenty-seven closures",
              "twenty-nine of them", "sixty-seven corrections", "√2Mc²", "722.7", "149.42", "2.513", "1.552", "3.2011", "2√2", "0.26 MeV", "0.13 MeV"]
    missing = [s for s in expect if s not in ptxt]
    (fail if missing else note)("Q1", "primer", "%d key printed values of the paper present in the primer" % len(expect), "all present", "%d missing" % len(missing), "; ".join(missing) if missing else "")
    legacy = {"0.69": "superseded tilt", "1.24": "superseded (1,2) dilation", "0.227": "superseded Weinberg landing", "±0.90": "superseded bridge error", "0.057": "withdrawn cap", "4.52": "LCDM h(3) as r2 printed it", "1.38": "superseded gamma_JR"}
    for s, what in legacy.items():
        lines = [l for l in ptxt.splitlines() if s in l]
        ctx = all(("WHAT CHANGED" in l or "r1" in l or "r2" in l or "master" in l or "old" in l or "superseded" in l or "SLIP" in l or "against" in l or "answer" in l.lower() or "withdrawn" in l or "inherited" in l or "looked like" in l) for l in lines)
        (note if ctx else fail)("Q2-%s" % s, "primer", "legacy value %s (%s) appears only in historical context" % (s, what), "historical only", "%d lines, %s" % (len(lines), "all historical" if ctx else "CHECK"), "")
    note("Q3", "primer answer (12.7) vs paper H.5", "m1 at m3 = 0.143 eV", "primer 0.134, paper 0.133", round(m1u, 4), "harmonize")

# ================================================================== report
def esc(s): return str(s).replace("|", "\\|").replace("\n", " ")
rows = [c for c in CHECKS if not (isinstance(c, tuple))]
nP = sum(1 for c in rows if c["verdict"] == "PASS"); nF = sum(1 for c in rows if c["verdict"] == "FAIL"); nN = sum(1 for c in rows if c["verdict"] == "NOTE")
out = []
out.append("# Verification report: GUM Unified Master Manuscript, revision 3\n")
out.append("Generated by `gum/review/r3/verify_r3.py` (standard-library Python) from the inputs of r3's Table 10. "
           "Verdicts: PASS = the recomputed value agrees with the printed one within its rounding; FAIL = it does not, or a cited object is absent; NOTE = informational.\n")
out.append("**Summary: %d PASS, %d FAIL, %d NOTE (%d checks).**\n" % (nP, nF, nN, len(rows)))
if nF:
    out.append("## Failures and absences\n")
    out.append("| id | where | quantity | printed | recomputed | note |\n|---|---|---|---|---|---|")
    for c in rows:
        if c["verdict"] == "FAIL":
            out.append("| %s | %s | %s | %s | %s | %s |" % (c["id"], esc(c["where"]), esc(c["what"]), esc(fmt(c["printed"])), esc(fmt(c["computed"])), esc(c["note"])))
    out.append("")
out.append("## All checks\n")
for c in CHECKS:
    if isinstance(c, tuple):
        out.append("\n### %s\n" % c[1]); out.append("| id | where | quantity | printed | recomputed | verdict | note |\n|---|---|---|---|---|---|---|")
    else:
        out.append("| %s | %s | %s | %s | %s | %s | %s |" % (c["id"], esc(c["where"]), esc(c["what"]), esc(fmt(c["printed"])), esc(fmt(c["computed"])), c["verdict"], esc(c["note"])))
sys.stdout.write("\n".join(out) + "\n")
sys.stderr.write("verify_r3: %d PASS, %d FAIL, %d NOTE\n" % (nP, nF, nN))
