# THE GUM MATERIAL PRIMER
## What Keeps the Books? A First Book on the GUM Program
### DRAFT for review — for honors high-school and first-year undergraduate readers

*(Companion-at-introductory-level to the GUM paper "What Material Could Possess Quantum Mechanics as Its Coarse-Grained Bookkeeping? — Geometrische Umdeutung Mechanik: An Inverse Umdeutung, Its Theorems, Its Corrections, and the Experiments That Can Retire It." Sixteen chapters in eight parts, a glossary, answer notes, and a final project. Every chapter maps onto sections of the paper; the map is printed at the end of the front matter, so that a reader who finishes the primer can open the paper and know where to stand.)*

---

## A LETTER TO YOU, BEFORE PAGE ONE

Dear reader,

This primer teaches you a theory that might be wrong — and that has already been caught being wrong, by itself, in print.

Most of the physics you know is *settled*. When your textbook says that energy is conserved or that light travels at 299,792,458 meters per second, it reports results tested millions of times. You can lean on them like a handrail.

This primer is different. It teaches a *speculative research program* called **GUM** — *Geometrische Umdeutung Mechanik*, German for roughly "the geometric reinterpretation of mechanics." GUM proposes that empty space is not empty, and that light, electrons, mass, charge, quantum mechanics itself, the three families of particles, and even the accelerating expansion of the universe are the bookkeeping of one underlying thing, which GUM calls **the material**.

Is that true? **Nobody knows.** GUM is not accepted by the physics community, and most of its decisive tests have not been run. What makes it worth your time is this: GUM writes down, in advance and in public, exactly which results would prove it wrong — thirty of them, each with the instrument that will deliver the verdict. One concerns quantum computers of a few hundred qubits; one, the far-infrared spectra of distant galaxies; one, the expansion of the universe, where current data already lean against it.

And the second half of the first sentence: the paper this primer accompanies is a *revision*. When it tried to turn an earlier draft's predictions into rigorous mathematics, some of them broke. A prediction about electricity turned out to predict nothing. A headline about quantum computers turned out to be true but untestable. A spectral line turned out to be a broad trough, and a limit was wrong by fifteen powers of ten. The revision prints all of it — fifteen numbered corrections, with reasons — and, since this primer was written, two errata to its own first printing as well. You will meet each one in boxes labeled **WHAT CHANGED**.

So this primer has three subjects, braided on every page. **Physics** — real physics: waves, springs, spinning things, light, quantum mechanics — always marked, and true whatever happens to GUM. **How honest science handles a bold idea** — derivations you can check, error bars, "consistent with" sorted from "predicts," and bets placed in public. **How a theory corrects itself** — because a theory that has never been wrong about anything has usually never said anything.

**What you need:** comfortable algebra, basic trigonometry, vectors as arrows, and a first honors physics course. No calculus; where a professional would use it, this primer uses "rate of change" language and says so. Sections and problems marked ★ go one level deeper; skip them freely on a first pass. **What you need even more:** patience with not-knowing, and a taste for the question *"but how would anyone find out?"*

One promise: **this primer never lets you mistake speculation for fact.** The machinery for keeping that promise is on the next page.

— GUM

---

## THE RULES OF THIS PRIMER: NINE TAGS, A DEATH LIST, AND A CORRECTIONS LIST

Every important claim wears a tag. The tags are the primer's immune system; by the end you will be tagging claims yourself.

**⬛ REAL PHYSICS.** Textbook-true whether GUM lives or dies.

**🟩 PROVEN [the paper writes DF].** Follows *by logic and mathematics* from GUM's starting rules. PROVEN means the derivation is airtight, not that nature agrees; a perfect derivation from a wrong model is still wrong about the world.

**🟨 PROVEN-WITH-WINDOW [DW].** Derived with stated approximations and the size of the wiggle room *written down*.

**🟦 COMPUTED [CAL].** A derived mechanism whose rate comes from a calculation.

**🟪 BORROWED [IM].** Established physics imported from elsewhere, or a constant GUM cannot compute and takes from measurement.

**🟥 GUESS [CJ].** A conjecture inside the speculation. Nothing may be quietly built on it; it is lit up like a road flare.

**🟧 POSED.** A computation GUM *owes*, with named deliverables and a named kill. GUM has twenty-six of these **posed closures**, labeled K-0, K-3, K-N, and so on.

**⬜ NUMBER NOT SHOWN [N].** A value quoted from a calculation not reproduced in the paper. All of them were inherited from the earlier draft, whose bookkeeping the revision found inconsistent, so every ⬜ number is under audit (Chapter 3).

**🟫 RE-GRADED [RG].** A claim whose grade the revision *changed*, with the reason printed at the point of change.

**The death list.** Thirty **stakes** (S1–S30) — results that would kill a claim — including a standing battery of "if this is ever seen, GUM is dead" conditions (S7). A theory that cannot tell you how to kill it is not being brave; it is being slippery.

**The corrections list.** Fifteen numbered corrections to GUM's own earlier draft. Each appears in a **WHAT CHANGED** box: what was claimed, what was found, what the change costs or buys. Read those boxes slowly; they are where you watch self-correction actually happen. The paper also prints two **errata** to its own first printing (E1–E2), found while this primer was being written; you will meet them in Chapters 2 and 12.

**Reading tracks.** *Honors high-school:* everything except ★ sections; do the TRY THIS experiments and the plain CHEW ON THIS problems. *Undergraduate:* everything. Both: keep a notebook. Physics enters through the hand.

**The map to the paper.** Chapter 1 → paper §I. Chapters 2–3 → §II (and §VI A). Chapter 4 → §II C–D, §III A–B, F. Chapter 5 → §III C–D, Appendices B, F. Chapter 6 → §III E, §IV, Appendix E. Chapter 7 → §V A–C, Appendix C. Chapter 8 → §V D–H, Appendices C, F. Chapter 9 → §VI A–B, §VII A. Chapter 10 → §VI B–E. Chapter 11 → §VII B–C. Chapter 12 → §VIII A–B, §II F. Chapter 13 → §VIII C–E, Appendix G. Chapter 14 → §IX, Appendix D. Chapter 15 → §X. Chapter 16 → §XI–XII and the paper's tables.

---
# PART I — THE QUESTION

# CHAPTER 1 — THE OLDEST QUESTION AND A NEW WAY TO ASK IT

**What you'll be able to do after this chapter:** (1) Tell the "what is everything made of?" story and say precisely where it stops. (2) Explain what the aether was, why it was a good idea, and the two different reasons it died. (3) State Heisenberg's 1925 move and GUM's inversion of it, one sentence each. (4) Say what GUM means by *material*, and why its paper changed its word from "substrate." (5) State the GUM wager in its exact, deliberately humble form. (6) Explain why a theory that publishes its own corrections deserves more attention, not less.

## 1.1 The "made of" ladder

Ask a two-year-old's question about your desk, over and over: *what is it made of?* Wood. Cells. Molecules. Atoms — a tiny nucleus with electrons around it (Rutherford found the nucleus in 1911 by bouncing alpha particles off gold foil). The nucleus: protons and neutrons. Those, it turned out in the 1960s and 70s: **quarks**, held together by gluons.

And quarks? Electrons? Here the ladder, as far as anyone can measure, **stops**. In every experiment ever done — including collisions probing distances below 10⁻¹⁹ m — the electron behaves as a perfect point. Hold on to that; Chapter 11 turns it into one of GUM's sharpest constraints.

The twentieth century's answer is strange, and you should feel its strangeness. At the bottom there is no *stuff*. There are **fields**, one kind per kind of particle, and **rules** — quantum mechanics — for how they behave. The rulebook is the **Standard Model**, the most accurate theory ever built; some of its predictions match experiment to better than a part in a billion. ⬛ REAL PHYSICS — all of the above.

And yet the Standard Model makes three confessions. **The unexplained numbers:** about nineteen values must be measured and typed in by hand; nobody can derive why the muon is 206.77 times heavier than the electron. **The triplication:** the electron has two heavier copies that seem to be *for nothing* ("Who ordered that?" asked I. I. Rabi). **The rules themselves:** why quantum mechanics, why one speed limit, why is the energy of empty space nearly zero when the theory's own math says it should be enormous? The Standard Model *assumes* these answers.

## 1.2 The aether: a good idea that died twice

⬛ Light is a wave, and in the nineteenth century every known wave was a wave *in something*. So light must be a wave in the **luminiferous aether** — not a silly idea, the responsible one. The best design, James MacCullagh's (1839), stored energy only when *twisted*, never when stretched or sheared, and reproduced reflection, refraction, and polarization with astonishing exactness.

**Death one: a theorem.** In an ordinary continuum — one made of simple, featureless *points* — the rules of mechanics forbid energy that depends on twist alone. Lord Kelvin built models with hidden spinning flywheels to fake it, and they worked only by giving up ordinary rigidity. **Remember the exact premise that failed: "made of featureless points."** Chapter 4 turns on it.

**Death two: redundancy.** If Earth moves through an aether at 30 km/s, light should run faster downstream than across the stream.

**TRY THIS (thought version).** A river flows at 4 m/s; you swim at 5 m/s. Crossing straight over and back (100 m each way), you must angle upstream, so your crossing speed is √(5² − 4²) = 3 m/s: 66.7 s. Your friend swims 100 m upstream and back: 100/1 + 100/9 = 111.1 s. **Cross-stream always wins** — if there is a current. Michelson and Morley (1887) raced light along two perpendicular arms. The result: **a perfect tie**, now confirmed to better than a part in a billion billion.

Lorentz and FitzGerald proposed that motion through the aether squeezes rods and slows clocks by exactly enough to hide the wind — a conspiracy, unless rods and clocks are *patterns held together by the aether*, in which case it is just mechanics (John Bell later taught relativity this way on purpose). Then Einstein derived everything from two postulates with no aether at all. The aether was not disproven; it was *made redundant*.

**Two morals.** (1) The best design died of a theorem whose key premise was a modeling choice. (2) The program died of redundancy, which is fatal only until something in physics turns out to *need* an underlying something. GUM claims both morals have expired.

## 1.3 The inversion

In 1925, a 23-year-old Werner Heisenberg, recovering from hay fever on the island of Helgoland, made the founding move of quantum mechanics: **stop picturing the electron's orbit, and build the theory only from measurable quantities.** He called it an *Umdeutung* — a reinterpretation. Imagine describing football purely by the statistics of final scores, refusing ever to say where the ball *is*. Absurd — and for quantum physics, **it worked.** Rules first, "stuff" never.

**GUM runs Heisenberg's move backward.** It readmits the trajectory, demotes quantum mechanics to *bookkeeping*, and asks, in the paper's words:

> **"What material could possess the quantum formalism as its coarse-grained bookkeeping, and what would such a material be unable to hide?"**

The second half is the scientific half. A material that keeps the books must leave fingerprints — a speed, a size, a limit, a handedness. GUM's job is to name them before anyone looks, and to say where to look.

## 1.4 The word "material"

GUM's earlier draft said "substrate." The revised paper says **material**, in the oldest sense — Latin *materia*, "that of which things are made." It does **not** mean a substance sitting inside a pre-existing space and time. In GUM, space, time, geometry, and force are *response descriptions* of the material: bookkeeping of how it behaves when you blur out fine detail.

Why "material"? Because continuum mechanics gives the word exactly the right technical meanings: a **material frame** (where the material is at rest), **material points** (labels that stay attached to the same bit of stuff), and a **material description** (bookkeeping in which each bit's trajectory is primary). GUM needs all three.

GUM's levels of description:

- **Level 0 — the material.** GUM asserts only that it exists, with a structure of *adjacency* (what is next to what) and *succession* (what comes after what).
- **Level 1 — the continuum description.** Two fields on a parameter space (x, t): a **displacement** (how far each "grain" is pushed from its rest spot) and an **orientation** (which way each grain's little painted face points). Mathematically, a chiral micropolar or **Cosserat** continuum. It is *local*: every equation relates neighboring places and times. Chapter 5 shows that this locality has teeth.
- **Level 2 — the quantum description.** Bookkeeping of knots in those fields and of the fields' jitter.
- **Level 3 — the Standard-Model description.** Bookkeeping of how the knots respond.

Honest sentence: deriving level 1 from level 0 — including distance itself — is GUM's deepest 🟧 POSED closure, **K-0**. GUM has not done it and starts at level 1. If you picture a block of jelly filling the room, that is the level-1 picture: useful, allowed, and not the ontology.

## 1.5 The wager — memorize its exact shape

> **GUM's wager is that a single material is the cheapest object whose response descriptions include the quantum kinematic frame, exact electromagnetism, a topological account of charge and statistics, and the skeleton of the electroweak, strong, and flavor sectors — and that every claim GUM makes about it is either a theorem of its postulates or a stake with a signed kill. GUM does not assert that the vacuum *is* this material. GUM asserts that it is arranged to be efficiently wrong about whether it is.**

*"Cheapest"* is a comparison, falsifiable by inventing something cheaper. *"Theorem"* means checkable derivation — checking them, at your level, is this primer. *"Stake with a signed kill"* is the death list. Nothing says "true."

Two numbers make it real. **Stake S16 (re-graded):** if the material stores quantum states the way GUM argues a local material must (Chapter 8), a specific scramble-and-unscramble test on quantum computers will fail abruptly somewhere near 234–329 qubits, and the failure point will move when the chip gets bigger. **Stake S19:** dark energy, in GUM, was *less* negative-pressured in the past; the DESI survey currently prefers the opposite, and GUM has printed in advance that a three-sigma confirmation retires its dark-energy sector (Chapter 14).

## 1.6 A theory that caught itself

The paper is a revision, written by trying to prove each of the earlier draft's claims rigorously. Three headline claims did not survive in their original form.

- The earlier draft's "most direct test" was an electric signature of a second, faster speed in the material. A locality theorem showed that in the only well-behaved version of the theory, electric and magnetic fields are *exactly* Maxwell's whatever that speed is. The prediction was withdrawn, and the speed moved to the timing of quantum correlations (Chapters 5 and 8).
- The quantum-computer headline was a correct theorem that no experiment can test. It was replaced by a testable hypothesis and a protocol (Chapter 8).
- A predicted spectral line near 26 µm sat outside the draft's own allowed range, is really a broad trough with one sharp edge, and came with a limit too strong by fifteen powers of ten (Chapter 6).

None of this makes GUM's *conclusions* more likely. It should make you trust GUM's *process*: the same machinery that will one day tell the world whether GUM is wrong about nature has already told GUM where it was wrong about itself. Chapter 16 hands that machinery to you.

**NUMBERS TO HOLD.** Electron pointlike to < 10⁻¹⁹ m. GUM's structural scale: ℓ_s ≲ 1.5×10⁻²⁷ m, from gamma-ray-burst timing (Chapter 8). Standard Model dials: about 19. GUM: 30 stakes, 26 posed closures, 15 corrections (plus 2 errata).

**CHEW ON THIS.** (1.1) Write the "made of" ladder, circle the rung where it stops, and write the sentence the Standard Model puts there instead. (1.2) With a 5 m/s swimmer, at what river speed does the upstream-and-back trip take *twice* as long as the cross-stream trip? (1.3) Write Heisenberg's move and GUM's inversion as two sentences with the same grammatical shape. (1.4) A friend says, "So GUM says space is filled with some stuff, like a crystal." Correct the friend in two sentences using *that of which things are made* and *response description*. (1.5) Which opening stake, S16 or S19, would you rather see decided first, and why? (1.6) Name one advantage and one danger of a theory publishing a list of its own mistakes.

---
# PART II — THE MATERIAL, LEVEL ONE

# CHAPTER 2 — SPRINGS, WAVES, AND FORBIDDEN FREQUENCIES

**What you'll be able to do after this chapter:** (1) Compute the speed of sound in a steel rod and say why that calculation is the spirit of GUM. (2) Explain a band gap with a necklace of beads and springs. (3) Derive Einstein's energy–momentum relation from "mass is a forbidden frequency." (4) Explain why GUM's matter has a speed limit a hair *faster* than light's — and why "harmless" needs a second look. (5) Compute the length of the skin that surrounds every particle, including the √2 the earlier draft got wrong.

## 2.1 The sound-in-steel move

⬛ Sound runs along a steel rod at v = √(stiffness/density) = √(2×10¹¹ Pa / 7850 kg m⁻³) ≈ 5,050 m/s. Nobody calls that a constant of nature; it is a property of steel. **GUM's bet is that all of fundamental physics is that move.** The speed of light, Planck's constant, particle masses, charge — each is, in GUM, a stiffness, an inertia, a gap, or a pure number from the shape of a knot. When a formula looks frightening, ask: *which stiffness, which inertia, which shape?*

## 2.2 Necklaces and band gaps

⬛ Beads joined by springs carry waves when shaken slowly. Alternate heavy and light beads and the graph of frequency against wavenumber splits into two branches: an **acoustic** branch starting at zero frequency, and an **optical** branch that starts at a nonzero frequency ω₀ and cannot vibrate below it. Allowed frequencies form **bands**; forbidden ones, **gaps**; the minimum ω₀ is a **band edge**. Every periodic structure — crystal, photonic crystal, concert-hall panel — has them.

**STEP-UP — the playground swing.** Push slower than a swing's natural rhythm and it sloshes along; push much faster and it barely moves. A band edge is a whole structure with a floor below which no traveling wave exists.

## 2.3 Mass is a forbidden frequency

GUM's continuum has a gapped branch, **B3**, on which grains turn *relative to* their neighbors (Chapter 3). Its small oscillations obey **ω² = ω₀² + c_ψ²k²**, where c_ψ is the branch's limiting speed — equal to c to extraordinary precision (§2.4). Multiply by ħ² (E = ħω, p = ħk):

**E² = (ħω₀)² + (pc)² → E² = (mc²)² + (pc)², with m ≡ ħω₀/c².**

Einstein's relation, read off a dispersion curve. ⬛ The identity is textbook-true (polaritons obey it). 🟩 GUM reads it literally: **rest energy is the admission price of a branch that does not start at zero.** De Broglie's λ = h/p, relativistic momentum (★ problem 2.4), and time dilation all follow from wave kinematics on such a branch.

One refinement Chapter 10 needs: a *free quantum* of B3 sits exactly at the edge, but a *particle* in GUM is a knot whose internal clock ticks *inside* the gap, a fixed fraction below the edge. Both are "mass as forbidden frequency."

## 2.4 A second light cone, a hair wider

🟩 The revision found something the earlier draft missed. In GUM's continuum, matter's limiting speed is not quite light's. The paper's Proposition 1 gives **c_ψ² = c² + m̃²/(4ρ₀)**, where m̃² is the gap stiffness and ρ₀ the density. Write m̃² = Jω₀² and J = ρ₀ℓ_g², where ℓ_g is the grains' *radius of gyration* (about ℓ_s for grains of the structural size). The fractional excess is then (ℓ_g ω₀/c)²/8. For an MeV-scale gap and ℓ_g = 1.5×10⁻²⁷ m, that is about 10⁻²⁹, far inside the ⬛ vacuum-Cherenkov and photon-decay limits of 10⁻¹⁵–10⁻²⁰.

**A harmless oddity that wasn't.** The excess grows as the *square* of the gap, and Chapter 13 identifies the vacuum's gapped branch with the weak interaction, gapped near 80 GeV. Put that in and the estimate rises to about 5×10⁻²⁰ — right at the experimental edge (★ problem 2.6). The first printing of the revised paper had called the excess "harmless," using an MeV gap and a slipped power of ten (10⁻³⁶). Writing this primer caught it, and the paper now prints it as **erratum E2** and turns it into a constraint: the grains' radius of gyration must satisfy **ℓ_g ≲ 7×10⁻²⁸ m** — either they are lighter in rotation than their size suggests, or ℓ_s sits about a factor of two below its timing bound. The habit to learn: print the harmless oddities, and *recheck* them.

## 2.5 The evanescent skin

⬛ Drive a chain below its band edge and you get not a wave but an exponentially dying **skin**. At driving frequency ω = κω₀ (κ < 1) its length is **λ_skin = c_ψ/(ω₀√(1 − κ²))**. This skin is the **halo** of every particle in GUM, and, because it dies exponentially, the shape of every short-range force (Yukawa's 1935 argument as the acoustics of a material).

Chapter 10 puts a knot's clock at κ = 1/√2 with rest energy Mc² = κħω₀, so ħω₀ = √2 Mc² and

**λ_halo = (c_ψ/c) · ħ/(Mc)** — the reduced Compton wavelength, to within the hair of §2.4.

**WHAT CHANGED.** The earlier draft printed ħ/(√2Mc), smaller by √2: it used κ where the decay formula needs κ/√(1 − κ²). This length is the yardstick Chapter 12 uses to turn a computed logarithm into a neutrino mass, so the revision puts "check which yardstick the inherited numbers used" on its owed-work list (audit K-N, §3.6). In Chapter 12 you will watch this √2 catch a slip in the revised paper's first printing — now its erratum E1.

**NUMBERS TO HOLD.** Steel rod ≈ 5 km/s. ħ/(m_e c) = 3.86×10⁻¹³ m. Matter-cone excess (ℓ_g ω₀/c)²/8: ~10⁻²⁹ for an MeV gap, ~5×10⁻²⁰ for 80 GeV; bounds 10⁻¹⁵–10⁻²⁰; hence ℓ_g ≲ 7×10⁻²⁸ m (erratum E2). The material's lattice gaps sit near πħc/ℓ_s ≳ 4×10²⁰ eV — particle masses are gap physics, never lattice physics.

**CHEW ON THIS.** (2.1) Aluminum rod: stiffness 7×10¹⁰ Pa, density 2700 kg m⁻³. Compute v. (2.2) From E² = (mc²)² + (pc)², show E ≈ mc² + p²/2m when p ≪ mc. (2.3) In the necklace picture, explain in two sentences why a frequency inside the gap makes a skin, not a wave. (2.4 ★) From ω² = ω₀² + c²k², show v_g v_p = c² and derive p = γmv. (2.5 ★) At κ = 1/√2, evaluate κ and κ/√(1 − κ²), and explain where the earlier draft's √2 went. (2.6 ★) With ℓ_g = 1.5×10⁻²⁷ m and ħ = 6.58×10⁻¹⁶ eV·s, compute (ℓ_g ω₀/c)²/8 for ħω₀ = 1 MeV and 80 GeV. How small must ℓ_g be for the second to sit below 10⁻²⁰?

---

# CHAPTER 3 — GRAINS WITH FACES: THE CONTINUUM DESCRIPTION

**What you'll be able to do after this chapter:** (1) Say what a Cosserat continuum is and why ordinary elasticity is not enough. (2) Explain *objectivity* and why GUM's order parameter is the *relative* rotation. (3) Name the four sectors of GUM's stored energy and their jobs. (4) Name the four voices B1–B4 and state the one relation that makes light *exactly* lightlike. (5) Recite GUM's import list. (6) Explain the normalization audit GUM posed against itself.

## 3.1 From springs to grains that can turn

⬛ Ordinary elasticity uses one field, the displacement u(x, t); energy depends on strain. Rotate a small neighborhood rigidly and nothing is strained, so *there is no stiffness against twisting at a point* — exactly the theorem that killed MacCullagh.

In 1909 Eugène and François Cosserat gave each point an **orientation** — a little frame, like a grain with a painted face — free to turn independently. That adds the **micro-rotation** φ(x, t) and two new strains: the **relative rotation** ψ = φ − ½ curl u (the grain's turn *relative to its local lattice*, whose own rotation is ½ curl u) and the **wryness** Γ = ∇φ (how much neighboring grains disagree). ⬛ Real materials need this bookkeeping: liquid crystals, granular packings, bone, foams, 3D-printed chiral lattices.

**STEP-UP — the stadium card stunt.** In a card stunt, ordinary elasticity notices only spectators leaving their seats. A Cosserat description also notices someone *turning their card* while the neighbors don't. GUM's claim is that light is a wave of synchronized card-turning.

GUM's orientation lives in SU(2), the *double cover* of rotations: a grain remembers the difference between turning 360° and 720° (Chapter 9's belt trick).

## 3.2 Objectivity: the rule with teeth

If energy depended on *absolute* orientation, rigidly rotating the whole material would change it — but no experiment in a sealed box detects a rigid rotation of the box. ⬛ This requirement is **objectivity**. GUM's fix: build the potential energy only from the **relative texture** P̃ = R̃[u]†Q̃ — the grain orientation with the lattice's own rotation undone. The paper calls this Flag F10′, the material's *gauge principle*: absolute orientation is redundant, as absolute phase is in electromagnetism.

**Lemma 1, at your level.** Rotate everything by a small angle ω. Strain is unchanged (a rigid rotation is not a strain). The lattice rotation ½ curl u and the grain rotation φ both shift by ω, so ψ does not change. The wryness ∇φ does not change (the gradient of a constant is zero). 🟩 You have proved the paper's Lemma 1.

Because the principle was adopted *in order to* forbid a photon mass (Chapter 4), GUM does not claim to *explain* masslessness with it — only the consequences nobody asked for. Chapter 16 makes that distinction the center of GUM's self-audit.

## 3.3 The stored energy, sector by sector

Kinetic energy: ½ρ₀u̇² for moving grains plus ½Jω² for grains spinning at angular velocity ω (J is rotational inertia per volume). Stored energy W = W₂ + W_χ + W₄ + W₆₊₀:

- **W₂ — the Hookean floor.** Six stiffnesses (λ, µ, µ_c, α, β, γ) penalizing strain, relative rotation, and wryness; they set wave speeds. µ_c penalizes relative rotation only; make it large and grains are **locked** to their lattice (postulate P4). 🟩
- **W_χ — the handedness.** Three chiral constants; the *only* mirror-odd sector, and so the source of every parity-violating effect in GUM. Chapter 6 shows it can twist the vacuum into a helix.
- **W₄ — anti-collapse armor.** The Skyrme term; without it no static 3D knot is stable (Chapter 9). 🟩
- **W₆₊₀ — the star sector.** A penalty on the **topological density** b_P (knotting per volume) plus a potential of strength m̃_V: knots with sharp edges and computable masses. 🟩

**NUMBERS TO HOLD (dimensional skeleton).** Λ (energy^½ length^{3/2}), m̃_V (energy^½ length^{−3/2}), J (energy × time² × length⁻³). Λm̃_V is an energy — the material's rest-energy unit; (Λ/m̃_V)^{1/3} is a length; Λ√J is an *action*: (E^½L^{3/2})(E^½TL^{−3/2}) = E·T, the unit of Planck's constant.

## 3.4 The four voices — and one exact equation

Small vibrations about the calm, locked state sort six fields into four branches:

- **B1 — longitudinal:** compression waves, c_L = √((λ + 2µ)/ρ₀). Where Gauss's law lives (Chapter 5) and — the revision's big relocation — the speed at which quantum bookkeeping updates (Chapter 8).
- **B2± — the transverse doublet:** displacement and orientation turning together. **The photon.**
- **B3± — relative rotation:** ω² = ω₀² + c_ψ²k², the gapped branch where particles live.
- **B4 — longitudinal micro-rotation:** another gapped branch, enlisted by the weak interaction (Chapter 13).

🟩 **The paper's Proposition 1:** light obeys ω = ck *exactly*, at every wavelength, with grains perfectly locked (ψ = 0), **if and only if µ/ρ₀ = γ_eff/(2J) ≡ c²** — shear stiffness over density equals twist stiffness over rotational inertia, with γ_eff = γ + β (Chapter 4 says why β joins γ). Two ways of making a transverse wave must share one speed; then the equations factor cleanly into "light" times "a gapped wave."

**WHAT CHANGED.** The earlier draft thought light's exact speed required a slow "cone-locking flow" over enormous ranges of energy. One stiffness relation does it exactly. GUM does not derive that relation; it *imports* it (🟪) and poses "derive the cone condition" as 🟧 K-16. By GUM's own audit, "light is exactly lightlike" is therefore *circular*; the credit goes to unasked-for consequences, like the wider matter cone of §2.4.

## 3.5 The import list

A theory is measured by what it borrows. GUM's level 1 has six stiffnesses, two inertias, three chiral constants, four topological constants, and a structural scale ℓ_s. GUM *fixes* the doublet speed to c; *imports* the cone condition (K-16), the longitudinal speed c_L (bounded below by quantum timing, Chapter 8), and a longitudinal constraint called the Gauss completion (Chapter 5, K-18); *fixes one relation* among Λ, J, and ħ (Chapter 10) — one, not two; *imports* ℓ_s (bounded above by photon timing), the dark-energy index n (Chapter 14), α, the weak mixing modulus (Chapter 13), and an order-one pitch factor ζ_ν (Chapter 6); and *computes* the rest as ⬜ numbers. A proposal that cannot recite its imports is not doing physics.

**TRY THIS (kitchen chirality).** Put a clear glass of corn syrup between two polarizing filters (polarized sunglasses and a phone screen work). Rotate one filter and watch the colors shift: a chiral substance telling light its handedness — the tabletop ancestor of W_χ.

## 3.6 A theory checks its own arithmetic: the audit K-N

Writing GUM's equations carefully exposed **four places where the earlier draft disagreed with itself** (paper §II F): (1) a rotational kinetic coefficient off by a factor of 2; (2) a band edge set by m̃_V alone, when the true gap stiffness is **m̃² = 4µ_c + ¼m̃_V²**, including the locking stiffness; (3) the halo √2 of §2.5; (4) a stiffness restriction, "P5," that turns out to be unnecessary (Chapter 4). Items 1, 2, and 4 change no core number. Item 3 may change one — the neutrino mass — because the halo is the yardstick Chapter 12 uses.

The revision cannot settle item 3, because the inherited ⬜ calculations are not reproduced. So it poses a closure against itself: 🟧 **K-N, the normalization audit.** Deliverables: recompute every ⬜ number in one consistent convention, and redo the neutrino inversion. Kill: a corrected one-sigma neutrino band lying entirely below 0.050 eV retires the neutrino stake S1. Nobody checks the arithmetic of a speculative theory unless the theory makes it easy. Hold on to the name K-N.

**CHEW ON THIS.** (3.1) Show, one line each, that a rigid rotation leaves ψ and ∇φ unchanged but changes φ. (3.2) Redo [Λ√J] = E·T unaided, and check that m̃/√J is a frequency. (3.3) Which voice carries (a) a compression pulse, (b) light, (c) an electron at rest, (d) a weak decay? (3.4) Correct "GUM derives the speed of light" in two sentences using *fixes* and *imports*. (3.5 ★) The locking energy is 2µ_c|ψ|² and the potential's quadratic part ⅛m̃_V²|ψ|². Show they sum to ½m̃²|ψ|² with m̃² = 4µ_c + ¼m̃_V². (3.6) Why is "light is exactly lightlike" circular under GUM's audit, and what consequence of the same postulate is not?

---
# PART III — LIGHT, CHARGE, AND THE SECOND SPEED

# CHAPTER 4 — LIGHT FROM TWIST

**What you'll be able to do after this chapter:** (1) Diagnose why MacCullagh's aether fails and what rescues it. (2) Show that half of Maxwell's equations are *identities* once E and B are orientation variables. (3) Explain the other half as spinning grains with inertia. (4) Explain why one of the earlier draft's postulates was unnecessary. (5) Say why GUM refuses to call the photon's masslessness an "explanation."

## 4.1 MacCullagh's ghost, and the loophole

MacCullagh's energy was W_MC = ½κ|curl u|², a penalty on local twisting of the displacement. Chapter 1 left it dead of a theorem; Chapter 3 built a continuum whose points are *not* featureless. Put them together.

🟩 **Theorem 2 of the paper (the Cauchy no-go).** In an ordinary continuum, objectivity forces the energy to depend on strain alone. A rigid rotation shifts the twisting part of the displacement gradient (Lemma 1), so MacCullagh's energy is objective only if κ = 0.

🟩 **Theorem 3 (the micropolar rescue).** The *same* energy written for the orientation field, ¼γ|curl φ|², is objective in a Cosserat continuum (the wryness is objective), coexists with ordinary shear rigidity, and balances angular momentum through *couple stresses* — twisting forces an ordinary material lacks. In the photon doublet, displacement and orientation turn together exactly, so light carries MacCullagh's energy at every wavelength.

The aether program failed not because light-as-response is impossible but because the right continuum had not been invented. GUM calls this its cleanest result, and it holds whatever the vacuum is made of: a theorem about MacCullagh, not about the world.

**WHAT CHANGED.** The earlier draft presented this marriage as unprecedented. It had two precedents: Kelvin's gyrostatic model (1889), which realized MacCullagh's twist stiffness with hidden rotors but without rigidity, and Böhmer, Downes, and Vassiliev (2011), who derived Maxwell-like equations from a purely rotational continuum. The revision cites both and states what is new: the objectivity diagnosis and the coexistence of twist stiffness with a rigid lattice. **Crediting predecessors is part of honest bookkeeping.**

## 4.2 Half of Maxwell for free

Let the vector potential *be* the grain orientation: **A ≡ κ_B φ**, and define **B ≡ curl A, E_φ ≡ −∂A/∂t.** Two pencil-checkable identities (⬛ the divergence of a curl vanishes; curl commutes with ∂/∂t) give:

- **div B = 0.** No magnetic monopoles — not forbidden but *meaningless*: B is a curl, and curls have no divergence.
- **curl E_φ = −∂B/∂t.** Faraday's law, identically: E and B are two views of one field.

⬛ Textbooks make the same move with potentials. GUM's twist is that A is a physical angle you could, in principle, point at.

**STEP-UP — the weathervane field.** One weathervane per grain: E is how *fast* each vane swings; B is how much neighbors *disagree*. If the disagreement pattern changes, some vanes must be swinging. Faraday's law is a law of looking.

## 4.3 The other half: light exists because spinning grains have inertia

**Ampère–Maxwell** is the orientation field's torque balance: rotational inertia J resists spinning, twist stiffness pushes back, and ∂E_φ/∂t = c² curl B with 🟩 **c² = γ_eff/(2J)** — a stiffness over an inertia, like sound in steel. Maxwell's famous "displacement current" is the term Jφ̈: **light exists because spinning grains have inertia.** The wave's energy, ½Jφ̇² + ¼γ_eff|curl φ|², equals ½ε\*(E² + c²B²) with ε\* = J/κ_B² (the paper's Theorem 4).

**Gauss's law** is missing. It lives in the longitudinal voice B1, where GUM stops rewriting Maxwell and makes a physical claim — Chapter 5.

## 4.4 Re-choosing your reference

"Grain rotated by angle φ" presupposes a reference for "unrotated" at each point. Re-choosing it by a *time-independent* pattern shifts φ by a gradient and changes nothing physical: ⬛ that is gauge invariance, understood as bookkeeping. But the revision notices what the earlier draft glossed over: *time-dependent* re-choices are **not** free in GUM, because they shift the longitudinal sector, which is physical. How the material fixes them turns out to be a theorem — Chapter 5.

## 4.5 P5, revisited: a stiffness that hides

The wryness has a twisting part (stiffness γ) and a symmetric part (stiffness β). Fearing that β would spoil gauge invariance, the earlier draft *postulated* that β acts only longitudinally ("P5").

🟩 **Proposition 5 of the paper says the fear was unfounded.** For any divergence-free orientation pattern that dies away at infinity,

**∫(symmetric wryness)² d³x = ½∫|curl φ|² d³x.**

So in the transverse sector β merely adds to γ — hence γ_eff = γ + β in the speed of light — and is invisible to magnetostatics, radiation, and dispersion. (★ Proof: split ∇φ into symmetric and antisymmetric parts; the antisymmetric part squared is ½|curl φ|²; two integrations by parts give ∫|∇φ|² = ∫(|curl φ|² + (div φ)²); set div φ = 0 and subtract.)

One subtlety the paper prints: outside a solenoid (a region with a hole), boundary terms make the field-free outside seem to store energy ∝ β × flux²; for a smooth material the inside compensates exactly. A "mysterious energy in a field-free region" is often a boundary term — always ask what the rest of space contributes.

**WHAT CHANGED.** P5 is gone from the transverse sector. Its real subject, the longitudinal orientation, is now governed by a precisely stated constraint (Chapter 5). One assumption fewer, one clearer one in its place.

## 4.6 What the masslessness theorem does not explain

🟩 **Theorem 1:** a uniform co-rotation of grains and lattice costs no energy, so light has no gap — no mass — at any order in the potential. (Every objective variable vanishes for a uniform co-rotation, and long-wavelength light *is* one.)

GUM grades it carefully. Objectivity was *adopted to kill* an unwanted mass term, as gauge symmetry historically was, so the theorem does not *explain* masslessness. Credit goes to what the same principle forces unasked: **(1) light is achiral** at tree level (left- and right-circular light travel identically, up to (kℓ_s)² corrections); **(2) vacuum photons are exactly stable** (ω = ck lies below the B3 curve, and a lightlike arrow cannot split into two timelike ones); **(3) no gapless charged wave exists** (net winding pays the locked tension). These are standing inverse kills: a photon mass, forbidden vacuum birefringence, or a massless charged particle executes the sector (battery S7).

**WHAT CHANGED.** The earlier draft listed a *fourth* consequence: a measurable departure from Maxwell's theory caused by the finite longitudinal speed c_L. Chapter 5 shows that every local version keeping Gauss's law has none. GUM keeps the theorem, drops the word "explain," and drops one of its own boasts.

**NUMBERS TO HOLD.** Photon mass < 10⁻¹⁸ eV. c² = γ_eff/(2J). Light's energy density ½ε\*(E² + c²B²), ε\* = J/κ_B².

**CHEW ON THIS.** (4.1 ★) From B = curl A and E_φ = −∂A/∂t, verify both homogeneous Maxwell equations in three lines. (4.2) Using Lemma 1 (a rigid rotation by ω shifts ½ curl u by ω), show in two lines that ½κ|curl u|² changes under rigid rotation unless κ = 0. (4.3) If J doubled at fixed γ_eff, what would happen to c? What is the displacement current in GUM's language? (4.4 ★) For φ = (0, sin kx, 0), show div φ = 0, then compute the symmetric wryness squared and ½|curl φ|² and show they are equal at every point. (4.5) List the three unasked-for consequences of objectivity and the observation that would kill each.

---
# CHAPTER 5 — THE SECOND SPEED, AND THE THEOREM THAT RETRACTED A PREDICTION

**What you'll be able to do after this chapter:** (1) Explain why a static electric field cannot be a rate of turning, and where GUM's longitudinal field comes from. (2) Say what "completing" the longitudinal sector means, and name the two candidates. (3) State the defect-current theorem. (4) State the locality dichotomy and explain the "velocity gauge." (5) Explain why the earlier draft's "most direct test" became a null test, and where the second speed went.

## 5.1 A static field cannot be a rate

🟩 **Proposition 2.** With E_φ = −κ_B φ̇, a static field E₀ needs φ̇ = −E₀/κ_B forever: an orientation turning without end. Electrostatics needs a second piece of E that is not the rate of anything.

GUM takes it from the longitudinal voice B1. The **frame-connection scalar** Φ_c obeys a *wave* equation at the longitudinal speed c_L, sourced by the density of charge-winding ρ_q (Chapter 6):

**(1/c_L²) ∂²Φ_c/∂t² − ∇²Φ_c = ρ_q/ε\*,  and  E = E_φ − ∇Φ_c.**

For a charge at rest, Φ_c is the ordinary Coulomb potential. The paper keeps two longitudinal jobs strictly apart: this scalar, sourced by *winding*, and a pressure-like field that keeps the stiff B1 sector unsqueezed around knot *cores* (Chapter 7 uses it). Conflating them would make every particle's charge proportional to its mass.

## 5.2 The missing sentence

A *moving* charge must twist the grains through some "torque current" J_φ, and the earlier draft never said exactly how. Specifying it is **completing** the longitudinal sector (paper Definition 1):

- **Transverse completion (T):** the grains feel only the transverse (curl-carrying) part of the current — the earlier draft's implicit reading.
- **Gauss completion (G):** the grains feel the full current, corrected by how Φ_c changes: J_φ = j_q − ε\* ∂(∇Φ_c)/∂t. Every piece is local.

The **defect current** is the difference between what the grains feel and what exact Maxwell theory would need. It vanishes for (G) by construction.

## 5.3 Every possible departure has one shape

🟩 **Theorem 5 (defect representation).** For *any* completion, E and B obey Maxwell's equations exactly — with the real sources *plus* the conserved defect current. Every possible deviation from Maxwell — every precursor, anomaly, or extra radiation — is the ordinary retarded field of that one current. An open-ended question ("how does GUM differ from Maxwell?") becomes a single one ("what is the defect current?").

## 5.4 The locality dichotomy

🟩 **Theorem 6(i): the transverse completion is acausal.** Splitting a current into transverse and longitudinal parts is *global*: the transverse part here depends on the current everywhere, instantly. In textbook Coulomb-gauge electrodynamics that hidden instantaneous piece is cancelled by an equally instantaneous Coulomb potential. In (T) the potential is Φ_c, which travels at finite c_L, so the cancellation fails: if a charge changes its motion at t = 0, then at points farther than c_L·t — which no signal could yet have reached — the field has *already changed*. That is instantaneous signaling in the material's frame. **(T) is ruled out at every finite c_L** (at c_L = ∞ it is ordinary Coulomb gauge).

🟩 **Theorem 6(ii): the Gauss completion is exactly Maxwell.** The defect current is zero, so E and B are *exactly* the retarded Maxwell fields for **every** c_L. The two pieces E_φ and −∇Φ_c each spread at c_L, but outside the light cone they cancel, and their sum spreads at c.

**STEP-UP — noise-cancelling headphones.** Noise and anti-noise each reach your ear; their sum is silence. In (G), E_φ and −∇Φ_c each race out at c_L and cancel perfectly outside the light cone. What you can measure never outruns light.

⬛ In Maxwell's theory the potentials are not unique ("gauges"): in *Coulomb gauge* the scalar potential updates instantly; in *Lorenz gauge* it travels at c; in the **velocity gauge** (studied systematically by J. D. Jackson in 2002) it travels at any chosen speed v — and E and B are identical in all of them. 🟩 The Gauss completion's constraint on the grains is *precisely* the velocity-gauge condition with v = c_L. **The material realizes one gauge, the velocity gauge with speed c_L, in which the grain orientation *is* the vector potential.** Gauge freedom belongs to the bookkeeping; the material has made its choice.

## 5.5 The second speed goes quiet

🟩 **Corollary 1.** In (G), no measurement coupling to charges through electric and magnetic forces, or to radiation through E and B, can ever determine c_L. GUM adopts (G) as **Flag F-G** — and grades it *circular*, since it was adopted to recover Gauss's law. Deriving it from GUM's energy is posed closure 🟧 **K-18**.

## 5.6 ★ The energy fine print

An accountant's question — *who pays?* — exposed a catch. If the longitudinal energy is ordinary and positive, an oscillating dipole makes Φ_c radiate at c_L, carrying power (paper Proposition 3)

**P_L/P_M = ½(c/c_L)³**

relative to ordinary dipole radiation. But in (G) the charge does exactly Maxwell's work, no more. So at least one holds: **(a)** the longitudinal energy is not always positive (like the unphysical scalar photons of Lorenz-gauge quantum electrodynamics); **(b)** the charge feels a tiny extra drag of relative size ½(c/c_L)³ — at most 5×10⁻¹³ for c_L ≥ 10⁴c, far below any measurement; or **(c)** c_L = ∞, which would break the use Chapter 8 makes of c_L. Which one GUM's energy realizes is part of K-18.

## 5.7 The near-field experiment, re-graded

The earlier draft's "most direct ontological test" was a piece of the near field arriving at c_L. Under (G) there is none. 🟫 **Stake S15 is re-graded: GUM's core predicts *no* electromagnetic precursor; a near-field experiment tests F-G.**

⬛ Such experiments are cheap, and two groups (Kholmetskii and collaborators; de Sangro and collaborators) have reported contested near-field anomalies. For a charge in uniform motion Maxwell's field already points at its present position, so only *abrupt* changes discriminate. The paper's protocol: an abrupt source; battery-powered sensors 10–100 m away with optical readout (no connecting wires); picosecond time transfer; and a blinded analysis of the window before light could arrive, binned in *sidereal* time.

Why sidereal? 🟩 **Proposition 4 (lab-frame ordering).** If the lab moves at v_M through the material, an influence traveling at c_L in the material frame arrives on lab clocks at

**t_lab = γ r (1/c_L − v_M·n̂/c²).**

If v_M·n̂ > c²/c_L, it arrives *before it left*, by lab clocks — not a paradox for a theory with a preferred frame, just kinematics. As Earth rotates, n̂ swings relative to v_M and the arrival time oscillates with the sidereal day.

**TRY THIS.** For c_L = 10⁴c, compute c²/c_L and compare it with Earth's orbital speed (30 km/s) and our speed relative to the microwave background (370 km/s). Then compute the day-to-night swing 2rv_M/c² for r = 100 m: about 0.8 ns.

A surviving pre-light signal would retire F-G — and *measure* our velocity through the material. Worth doing; it now tests a flag, not the core.

## 5.8 What the retraction teaches

**WHAT CHANGED.** The earlier draft predicted that the finite longitudinal speed would show up in electromagnetism, as a near-field precursor and as extra radiation of relative power (c/c_L)³. The revision proved that the only local completion keeping Gauss's law is Maxwell's theory in the velocity gauge — exactly Maxwell for every c_L. The precursor is withdrawn (S15 is a null test); the (c/c_L)³ "radiation" is an internal exchange or a tiny leak.

Three lessons. First, the retraction was forced by GUM's own principle — **locality** — taken seriously. Second, it did not make GUM unfalsifiable: c_L *moved* into the timing of quantum correlations, where the bookkeeping of Chapter 7 updates at c_L and faces a sharper test (Chapter 8, Stake S28). Third, it made GUM *more* honest about circularity: F-G is labeled circular, and what it buys — a material that realizes one gauge — has consequences the energy must deliver.

**NUMBERS TO HOLD.** c_L ≳ 10⁴c (Chapter 8). Leak ≤ ½(10⁻⁴)³ = 5×10⁻¹³. Our speed relative to the CMB: 369.8 km/s. Sidereal swing at 100 m: ≈ 0.8 ns.

**CHEW ON THIS.** (5.1) Explain in two sentences why a static field cannot be a rate of turning. (5.2) In (T), a charge jiggles at t = 0. Describe the field at a point farther than c_L·t, and say why this is fatal. (5.3) Tabulate the speed at which the scalar potential updates in Coulomb, Lorenz, and velocity gauges. What travels at c in all three? (5.4) Compute ½(c/c_L)³ for c_L = 10⁴c and 10⁵c. (5.5) Compute the sidereal swing for r = 1 km. (5.6) "GUM withdrew its best test, so it's unfalsifiable." Answer in four sentences: what was withdrawn, why, where the second speed went, and what would now kill it.

---
# CHAPTER 6 — CHARGE IS A CONE; THE VACUUM IS A HELIX; THE SKY HAS A TROUGH

**What you'll be able to do after this chapter:** (1) Build a charge from paper and explain why charge is quantized, conserved, and Coulombic. (2) Explain the Aharonov–Bohm effect as holonomy. (3) Say why α = 1/137 is borrowed. (4) Derive the vacuum's helical instability in four lines. (5) Compute the vacuum's pitch window from the neutrino mass. (6) Explain why a photon crossing an expanding universe is swept *through* a mirror, and what trough that leaves in galaxy spectra. (7) State what the helix cannot do.

## 6.1 TRY THIS — build a charge (five minutes: a paper disc, scissors, tape)

Cut a 90° wedge from a paper disc and tape the edges: the paper pops into a **cone**. Four facts, four echoes. **(1) Quantized:** the removed angle (the *Frank angle*) is locked in by the tape; no bending changes it. → Charge quantization. **(2) Conserved, and located at a point:** all the "wrongness" is at the tip; two cones cancel only against a *negative* wedge (an inserted sliver, making a saddle). → Charge conservation; creation only in pairs. **(3) Felt far away:** parallel lines drawn before coning *converge* afterwards. → In GUM a rotational defect strains the orientation field with a far field falling as 1/r²: 🟩 **Coulomb's law as the elastic far field of a conical defect.** **(4) Like repels, unlike attracts:** like-handed defects pile up distortion; opposite ones partly cancel it.

⬛ You have built a **disclination**. In GUM the electron is a knot (Chapter 9) *dressed* by a disclination, and e is a Frank angle. Charge is **triple-locked** — disclination winding, knot degree, and a phase-winding integer are three independent whole numbers guarding it. The cone does *not* give the coupling's strength, α.

## 6.2 Aharonov–Bohm as holonomy

⬛ An electron circling a thin solenoid acquires a phase shift although the magnetic field is zero all along its path. GUM's reading is **holonomy**: carry a reference frame around a loop enclosing a twist defect and it returns rotated, though every patch along the way was flat. ⬛ The Foucault pendulum does the same: after one sidereal day its swing plane has turned by 360° × sin(latitude), not because anything pushed it but because of the geometry of its loop. Dictionary: loop on a sphere → loop around a flux; enclosed solid angle → enclosed flux; swing plane → quantum phase, Δφ = qΦ_B/ħ. 🟩 Under the Gauss completion of Chapter 5 this holonomy is exactly the gauge-invariant textbook one.

**STEP-UP.** Walk an arrow around a big triangle on a basketball, keeping it locally straight. It comes back rotated. The surface did it.

## 6.3 The honest hole: α is borrowed

α = e²/(4πε₀ħc) ≈ 1/137.036 compares a defect's self-energy with the stiffness of torsion waves. That is dimensionally secure and structurally plausible — one stiffness hierarchy would make α small, c large, and gravity weak together — and quantitatively *unclaimed*: 🟪 BORROWED. A framework that derived light and charge and then *claimed* α with a pretty formula should lose your trust right there. GUM forbids numerology and offers a fingerprint instead (Chapter 10).

## 6.4 The helical instability, in four lines

Let a soft angle θ tilt along a helix of wavenumber q. The free energy per volume (paper Eq. 25) is

**f(θ, q) = sin²θ(−χq + ½γq²) + ½Δ²θ²,**

with χ the chiral gain, γ the twist stiffness, Δ the tilt gap. (1) Minimizing over q: q\* = χ/γ (⬛ Dzyaloshinskii's result; cholesterics obey it). (2) Substitute: f = −(χ²/2γ)sin²θ + ½Δ²θ². (3) Small θ: f ≈ ½(Δ² − χ²/γ)θ². (4) **The vacuum twists itself into a helix iff χ² > γΔ².** 🟩

In GUM's gapped relative-rotation sector the criterion fails. The helix forms instead on the star sector's "almost free" manifold — reshapings that barely change a knot's energy, lifted only by a small parameter ε — where all ingredients are equally small and their ratio, the margin 𝔪 = χ̄²/(γ̄Δ̄²), is a pure number: 𝔪 = 1.9 ± 0.4 ⬜. Double twist gains about twice a single helix's chiral energy but cannot fill space, so for margins between 1 and a few the winner is an **amorphous double-twist network**: helical locally, directionless overall. ⬛ Its laboratory original is the **blue phases** of cholesteric liquid crystals, including the disordered "blue fog." GUM's claim (🟨, Flag F13) is that the vacuum is a blue fog, with tilt sin θ_c = √(1 − 1/𝔪) = 0.69 ± 0.11 ⬜.

## 6.5 The pitch window

The neutrino turns out to be the helix's *pitch quantum* (Chapter 12), written with an honest order-one factor ζ_ν: **m₃c² = ζ_ν ħqc, so p = 2π/q = ζ_ν hc/(m₃c²).** ⬛ Oscillations put the heaviest neutrino at m₃ ≥ √(Δm²₃₁) ≈ 0.0503 eV; GUM's own stake caps it at 0.057 eV. With hc = 1.23984 eV·µm, 🟩 **Proposition 6: p/ζ_ν ∈ [21.8, 24.7] µm** — a photonic structure at 12.2–13.8 THz, in the far infrared. If the standard cosmological neutrino bound holds, the window shrinks to [24.5, 24.7] µm.

**WHAT CHANGED.** The earlier draft quoted about 26 µm, from m₃ = 0.047 eV — *below* the 0.050 eV floor that the same draft used to trim its own neutrino prediction. The revision fixes the window.

## 6.6 A photon swept through a mirror

⬛ A cholesteric helix is a strange mirror: light along its axis, with wavelength near the pitch, is reflected if its circular polarization matches the helix's handedness and transmitted otherwise. The reflected band runs from n_o·p to n_e·p; its fractional width is Δn/n̄. (That is why some beetles shine in only one circular polarization.)

The earlier draft treated the universe as a static slab of such material. The revision noticed the essential error: **a photon crossing the universe is redshifted**, so it is swept *through* the mirror's band. Light observed today at λ_obs had wavelength λ_obs/(1 + z) at redshift z, and matches the band edge λ_edge = n̄p exactly once, at 1 + z_r = λ_obs/λ_edge — if the source is farther than that.

The fraction reflected during that single crossing is a classic: the **Landau–Zener** problem (1932) of a system swept through a resonance. 🟩 **Theorem 7:**

**R = 1 − e^{−Π},  Π = (π²/2)(Δn/n̄)² · c/(pH),**

with H the expansion rate at the crossing. Slow sweep and strong coupling (large Π): mostly reflected. Fast sweep (small Π): mostly transmitted.

**STEP-UP — the radio dial.** Turn a dial slowly past a station and you lock on; spin it fast and you hear a blip. Cosmic expansion turns the dial for every photon.

## 6.7 The trough and its fingerprints

Light from a galaxy at redshift z_s observed between λ_edge and λ_edge(1 + z_s) crossed the band; light outside that range never did. So its spectrum carries a circularly polarized **trough** (🟩 **Proposition 7**) with five fingerprints: **(1) a fixed blue edge** at λ_edge = n̄p for *every* source, near or far — ordinary features redshift, this one is made here; **(2) a red end** at λ_edge(1 + z_s), so farther sources have longer troughs; **(3) a depth that fades redward**, because H was larger at earlier crossings; **(4) a handedness**, fixed by the vacuum's (Chapter 15); **(5) a dipole:** we move at 369.8 km/s through the cosmic frame, so λ_edge(n̂) = n̄p(1 − v·n̂/c), shifting the edge by ±0.030 µm for p = 24.6 µm.

⬛ Astronomers know a cousin: the **Gunn–Peterson trough**, quasar light absorbed blueward of the hydrogen Lyman-α line by gas along the way. For an unpolarized source the trough's intensity is 1 − R/2 and its circular polarization R/(2 − R); at the largest allowed coupling (§6.8) the dip is about 5% deep and about 5% circularly polarized. JWST's mid-infrared spectrograph reaches 28 µm (the edge, plus troughs of sources out to z_s ≈ 0.15); Spitzer's reached 38 µm, with thousands of archived galaxy spectra. The test: stack spectra and demand an edge fixed across redshift, a length growing as 1 + z_s, and a sky dipole — three controls no instrument artifact satisfies at once. 🟫 **Stake S22, re-graded:** the kill is a stacked non-detection at the depth implied by the helix's coupling to light, a number GUM still owes (🟧 **K-11**).

## 6.8 The transparency bound, corrected

The universe is visibly transparent near 25 µm. Requiring R ≤ 0.1 at every crossing (tightest today, when H is smallest), 🟩 **Corollary 2** gives **Δn/n̄ ≲ 6.2×10⁻¹⁷.**

**WHAT CHANGED.** The earlier draft's bound was 10⁻³¹ — fifteen orders stronger — because it let a photon stay in resonance over a gigaparsec. Redshift allows only a resonant path of about (Δn/n̄) × c/H: for Δn = 10⁻³¹ that is about 14 µm, *less than one pitch*. The old bound asked the helix to reflect light it could never hold.

A separate lesson from the disordered case: if the fog's helices point every which way, one tilted at angle θ reflects at n̄p·cos θ, so the local fog dims every wavelength shorter than n̄p, and the fixed feature becomes a *step* at n̄p instead of a trough's edge. Either way it is source-independent and dipole-shifted; which shape nature shows depends on how far the helices stay aligned — another K-11 deliverable.

## 6.9 What the helix cannot do

⬛ Far above its pitch, a cholesteric *rotates* linear polarization at a rate proportional to frequency squared (de Vries, 1951). The microwave background shows a polarization rotation of about 0.2°–0.34°, at roughly three standard deviations, *the same at every frequency* from 23 to 353 GHz. 🟩 **Proposition 8:** a helix-made rotation would change by (353/23)² ≈ 240 across those bands, and at the allowed coupling it would be only about 10⁻⁵ radian per Hubble length at 300 GHz, against the observed 5×10⁻³. **The helix cannot make the observed rotation;** with light's achirality, GUM's core predicts *none* at microwave frequencies (Chapter 15).

## 6.10 A wind through a frozen pattern

Structure frozen in the material streams past us at about 370 km/s, turning a static pattern into a signal in time. 🟩 **Proposition 9:** what you see depends on the detector. A smooth detector much larger than the fog's correlation length averages it away, suppressed by the cube of (correlation length ÷ detector size). Only a detector *patterned* at the pitch sees a line, at v/p = 15.0 GHz. The proposition is a correction as much as a proposal: an ordinary microwave cavity tuned to 15 GHz would see essentially nothing. Whether even a patterned detector could is the K-11 question again, so **no stake is registered.** Sometimes the honest output of a calculation is "not this experiment."

**NUMBERS TO HOLD.** α⁻¹ = 137.036. 𝔪 = 1.9 ± 0.4 ⬜. Pitch p/ζ_ν = 21.8–24.7 µm ↔ 12.2–13.8 THz ↔ m₃ = 50–57 meV. Δn/n̄ ≲ 6×10⁻¹⁷ (not 10⁻³¹). Edge dipole ±0.030 µm. Advected line 15.0 GHz (patterned detectors only). Observed CMB rotation 0.2°–0.34°, frequency-flat.

**CHEW ON THIS.** (6.1) For a 90° wedge, the cone's half-angle obeys sin θ = 1 − 90/360. Find θ, and argue in two sentences why "half a wedge" cannot exist once taped. (6.2) A Foucault pendulum at latitude 41°: how many degrees per sidereal day? Give the Aharonov–Bohm dictionary entry for each ingredient. (6.3) Verify the four lines of §6.4, and show the energy gain is zero exactly at χ² = γΔ². (6.4) Compute p from m₃ = 0.0503 and 0.057 eV, and the frequencies c/p. (6.5 ★) With Δn/n̄ = 6.2×10⁻¹⁷, p = 24.6 µm, c/H₀ = 1.372×10²⁶ m, compute Π and R. (6.6) A galaxy at z_s = 0.1 has a trough from 24.6 µm to what? Can JWST's 28 µm see all of it? What about z_s = 0.3? (6.7 ★) Compute the resonant path (Δn/n̄) × c/H₀ for Δn/n̄ = 10⁻³¹ and 6×10⁻¹⁷, compare with the pitch, and explain why the first doomed the old bound. (6.8) Why would a smooth 15 GHz cavity see nothing?

---
# PART IV — THE QUANTUM

# CHAPTER 7 — THE JITTERY MATERIAL: QUANTUM MECHANICS AS BOOKKEEPING

**What you'll be able to do after this chapter:** (1) Show that the Schrödinger equation is secretly a fluid plus one strange pressure. (2) Say where that pressure comes from in GUM, and what closes the gap in every "fluid" derivation. (3) Explain the Born rule as an *equilibrium*, and name GUM's two pieces of unfinished business. (4) Explain Bell's "beables" and the tower of fields that answers him. (5) Prove that tower depth is Schmidt rank, and compute the best a limited material can do. (6) Read a lower bound on the material's capacity off existing quantum computers.

## 7.1 Madelung: quantum mechanics is secretly a fluid

⬛ Write the wave function as amplitude times phase, Ψ = √ρ e^{iS/ħ}, substitute into the Schrödinger equation, and separate real and imaginary parts (★ problem 7.1). You get a **continuity equation** — ρ flows with velocity ∇S/M and is conserved — and **Newton's mechanics in energy form** plus *one extra term*, the **quantum potential**

**U_Q = −(ħ²/2M)(∇²√ρ)/√ρ.**

A fluid plus one exotic internal pressure *is* quantum mechanics. Spreading wave packets, tunneling, and the stability of hydrogen all live in U_Q, and "where does quantum mechanics come from?" sharpens to **"what produces U_Q?"**

## 7.2 The crowd that won't be squeezed

⬛ Marcel Reginatto (1998): take a *classical* ensemble and add to its energy a penalty for sharply peaked probability — the **Fisher information**, (ħ²/8M)∫(∇ρ)²/ρ d³x. Its variation is *exactly* U_Q. **Classical statistics plus a penalty for over-sharp probability equals quantum mechanics** — a theorem about equations that does not say *why* nature charges the penalty.

**STEP-UP — the shaken tray of marbles.** Shake a tray of marbles and try to herd them into a corner: the jostling pushes back harder the tighter you pack. Hydrogen doesn't collapse because squeezing the electron's cloud raises the jostle-energy faster than attraction lowers it.

GUM's answer, 🟩 in structure: **the material jitters.** Knots ride zero-point agitation of the material, which supplies the noise of Edward Nelson's "stochastic mechanics" (1966) instead of postulating it; the diffusion constant ħ/2M is fixed by the knot closure of Chapter 10, and the stiffness carrying the Fisher penalty is the core-sourced pressure field of Chapter 5.

⬛ Every fluid derivation has one crack, found by Timothy Wallstrom (1994): it matches Schrödinger only if the phase changes by a whole multiple of 2πħ around every loop, and nothing in the fluid enforces that — Nelson conceded the crack was fatal. 🟩 In GUM the phase S/ħ is a real *angle* of the knot's texture (its rotation angle, Chapter 10), and an angle that returns to itself around a loop must wind a whole number of times. The crack is closed by construction — given that particles are knots.

## 7.3 The Born rule as equilibrium

⬛ Why is probability |Ψ|²? In the pilot-wave tradition's sharpest result (Valentini; Dürr, Goldstein, and Zanghì — 🟪), |Ψ|² is an **equilibrium**: start with any distribution and ordinary messy dynamics *relaxes* it toward |Ψ|², as a gas relaxes toward the Maxwell–Boltzmann distribution. GUM adds a rate: jitter speeds relaxation by a factor 17–41 (🟦 ⬜). Two debts are printed at full size: predictions for *sequences* of measurements need supplementing (🟧 **K-9**), and any surviving early-universe non-equilibrium relic should be *smaller* in GUM than in pure pilot-wave theory — a discriminator between two theories that otherwise agree.

## 7.4 Bell's beables and the tower

⬛ John Bell asked every theory to say what *exists* — its **beables**. Pilot-wave theory says particle positions, but its guiding wave lives in a 3N-dimensional configuration space. In 2010 Travis Norsen showed that wave can be traded for an infinite *tower* of ordinary 3D fields: particle 1's wave function *given where the others actually are* (the "conditional wave function"), then how that field changes if particle 2 moves a little, then how *that* changes, forever. Exact, if you keep the whole tower.

GUM's material is a physical home for the tower: the conditional fields are patterns in the texture. When a particle is measured, its partners' conditional fields change, and in GUM that change is a physical update spreading at the longitudinal speed c_L in the material's frame — where Chapter 5's second speed went. Chapter 8 tests it. First: *how much* of an infinite tower can a finite material hold?

## 7.5 Schmidt rank, and why depth is rank

⬛ Write a two-particle state as a sum of products ("1 does this while 2 does that"). The minimum number of product terms is the **Schmidt rank**; their weights λ₁ ≥ λ₂ ≥ … add to 1. A Bell pair has rank 2 (weights ½, ½); a typical random state of 2m qubits split in half has rank 2^m with nearly equal weights.

🟩 **Lemma 3 (depth is rank).** A tower cut at depth d is a Taylor polynomial of degree d in particle 2's position: d + 1 terms, each a product. So depth-d towers hold states of Schmidt rank at most d + 1 (for N particles in 3D, C(3(N − 1) + d, d)). **Tower depth and Schmidt rank are one thing with two names.**

## 7.6 The best a limited material can do

🟩 **Theorem 8.** A material holding rank at most χ reaches fidelity (squared overlap with the true state) at most **F_χ = λ₁ + … + λ_χ**, by keeping the χ largest weights. ⬛ This is the Eckart–Young–Mirsky theorem — the reason image compression by singular-value decomposition works. For random states the weights are at most about 4×2^{−m}, so capacity χ gives fidelity at most **4χ/2^m**.

## 7.7 Quantum computers as the material's stress test

⬛ In 2019 a 53-qubit processor ran random circuits whose fidelity, estimated by cross-entropy benchmarking, matched a model built from each gate's measured error rate within 10–20%; later 56–70-qubit experiments on superconducting and trapped-ion machines agreed too. A material secretly truncating states to rank χ would add a fidelity loss that spoils that agreement. So the truncation fidelity is at least about 0.8, and with a half-split of m = 26:

**χ ≥ 0.8 × 2²⁶/4 ≈ 1.3×10⁷.**

A tower a few layers deep (capacity ~10) fails by six orders of magnitude. 🟩 GUM passes: its capacity is set by the material's degrees of freedom. The paper stresses what this bound is for — it **fixes the direction of the test**: every large entangled computation raises the floor. GUM's stakes concern where capacity must *stop*, and saying so testably is subtler than the earlier draft thought (Chapter 8).

**NUMBERS TO HOLD.** 2²⁶ ≈ 6.7×10⁷. Demonstrated capacity χ ≥ 1.3×10⁷. Relaxation speed-up 17–41 ⬜. ⬛ Watchable analog: "walking droplets" on a vibrated oil bath — particles guided by their own waves, an existence proof of the idea, which (as it must) never violates Bell's inequality.

**CHEW ON THIS.** (7.1 ★) Derive both Madelung equations from the Schrödinger equation. (7.2) In the marble picture, what plays ħ? (Careful: what sets the jostling?) (7.3) A capacity-1 material keeps the larger term of a Bell pair. What fidelity? Interpret. (7.4) Redo the capacity bound for agreement within only 50%. Does the conclusion change? (7.5) How many product terms can a depth-2 tower hold for two particles in one dimension? (7.6 ★) Evaluate C(3(N − 1) + d, d) for N = 3, d = 2. (7.7) Why is Wallstrom's gap closed "by construction" in GUM, and on what assumption?

---
# CHAPTER 8 — COUNTING KNOBS, MIRROR CIRCUITS, AND SPOOKY ACTION AT A FINITE SPEED

**What you'll be able to do after this chapter:** (1) State the dimension-counting theorem and why it holds. (2) Explain why no experiment can test it as stated — the earlier draft's mistake. (3) Recite the two conditions of "dense storage." (4) Describe a mirror-circuit experiment, predict where a dense-storage "cliff" appears, and say how to move it. (5) Explain how finite c_L shows up in the timing of quantum correlations, and why three or four parties can do what two cannot. (6) Derive the bound on the material's grain size from gamma-ray bursts, and state GUM's heaviest bill.

## 8.1 You cannot store more numbers than you have knobs

⬛ An n_q-qubit state needs 2^{n_q} complex amplitudes — about 2×10¹⁵ real numbers for 50 qubits, and more than there are atoms in the observable universe for 300. Suppose the material is *classical* in Bell's sense — its state is a point in a space of N_eff real "knobs" — and represents quantum states without amplifying tiny knob wiggles into huge changes ("bounded gain"). 🟩 **Theorem 9 (dimension counting)**, a counting argument about covering a space with little balls: representing *every* state well needs roughly as many knobs as the space of states has dimensions, so

**n_q ≲ log₂ N_eff.**

With N_eff = V/ℓ_s³ structural cells in a register's volume, that was the earlier draft's headline: a few hundred qubits of generic entanglement per chip.

**STEP-UP — the hotel.** A hotel with N rooms cannot give 2ⁿ guests private rooms once 2ⁿ > N. The quantum states are the guests; the knobs are the rooms.

The paper's verdict: **"The theorem is correct, and it is untestable as stated."**

## 8.2 Why no experiment can test it as stated

🟩 **Theorem 10 (reachable-set counting).** A circuit of N_g gates, each set by p real parameters, reaches only a set of states of dimension at most N_g·p — the dials on the control panel — a vanishing sliver of all 300-qubit states. **Corollary 4:** a classical material could just store the *recipe* (the N_g·p angles) and represent every reachable state exactly with polynomially many knobs. No polynomial-size experiment can beat dimension counting without an assumption about *how* the material stores states.

**STEP-UP — recipes and dishes.** A kitchen that stores recipes, not dishes, can serve anything on a finite menu. To catch it you would have to order something no short recipe makes — and every order is itself a short recipe.

A recipe store is a poor model of GUM, though: to supply a conditional field at one point *in real time* it would have to evaluate an exponentially long sum over the recipe — neither local nor fast. GUM's natural hypothesis is the opposite.

## 8.3 Dense storage

🟩 **Definition 5.** A material **stores densely** if **(M1) it is Markovian** — the hosted state is fixed by the material's *present* configuration, not a remembered history — and **(M2) it is target-blind** — where the ideal state cannot be hosted exactly, the error does not depend on what the circuit will do later or on the intended answer. 🟩 **Theorem 11:** under dense storage, a typical random n_q-qubit state is hosted with fidelity at most about **4N_eff × (a logarithm)/2^{n_q}** — nearly orthogonal to the truth once 2^{n_q} ≫ N_eff.

## 8.4 The mirror circuit and the cliff

Checking random-circuit sampling needs a classical simulation, impossible at a few hundred qubits. **Mirror circuits** don't: apply a scrambling circuit U, then its exact inverse U†, and measure the probability P_ret of returning to the start — whose correct value is known without simulation.

**STEP-UP — the Rubik's cube.** Scramble a cube with a random sequence, then apply the exact reverse: it returns to solved, *if nothing was lost in the middle*. Now suppose that at the midpoint someone photographs the cube with a low-resolution camera and rebuilds it from the photo. If the camera resolves the pattern, you still end up solved; if not, you get garbage.

🟩 **Theorem 12 and Corollary 5.** Under dense storage, P_ret ≲ F_noise × F_rep + 2^{−n_q}, where F_noise is the calibratable gate-error loss. The normalized return probability 𝒫 = P_ret/F_noise obeys **𝒫 ≲ min{1, c·N_eff·n_q/2^{n_q}}**: it stays at 1, then beyond **n_q\* ≈ log₂ N_eff** (plus at most about 8) **falls by half with every added qubit.** And the fall is **gate-independent** — it depends on qubit number, not circuit depth — whereas ordinary noise worsens with every gate. That is how a capacity limit is told from a bad day in the lab.

## 8.5 Where the knobs are

*Where* the material keeps the tower is a physical question; the paper states the options and poses deriving the right one (🟧 K-24):

| Hosting hypothesis | Knobs N_eff | Predicted cliff | How it moves |
|---|---|---|---|
| H_V (bulk, default) | V/ℓ_s³, V = 10⁻¹⁰–10⁻⁶ m³ | 234–329 qubits | +10 per 1000× volume |
| H_A (cut) | A/ℓ_s², A = 10⁻⁸–10⁻⁴ m² | 152–219 qubits | +10 per 1000× area |
| H_R (extent) | n_q(ℓ_q/ℓ_s)³, qubit size ℓ_q = 10⁻⁸–10⁻⁴ m | 196–317 qubits | +10 per 10× qubit size |

The ranges reflect ℓ_s anywhere from the Planck length (10⁻³⁵ m) to the bound of §8.7 (1.5×10⁻²⁷ m). A non-dense alternative, "Schmidt hosting," would put the cliff near twice log₂ N_eff (468–658 qubits). The key feature: **the cliff moves.** Under H_R, trapped ions (qubits ~10⁻⁸ m) should hit it about 40 qubits before superconducting transmons (~10⁻⁴ m). A cliff that moves as predicted when you turn a knob is very hard to mistake for engineering noise.

**The protocol** (🟫 **S16, re-graded**, with the new **S29**): mirror circuits with random scrambling halves, 150 to 400 qubits; noise calibrated on sub-registers, where every hypothesis predicts 𝒫 = 1; 𝒫 plotted at two or more depths (dense storage: depth-independent cliff; noise: depth-dependent drift); then vary the knob and measure the shift. **Feasibility:** the pre-cliff signal must be measurable, F_noise ≳ e⁻⁷, so two-qubit errors must be below about 2.8×10⁻³ at 300 qubits with all-to-all connections (1.3×10⁻³ on a 2D chip) — ⬛ comparable to today's best error rates, though not yet at this size. **Kill:** flat 𝒫 through 350 qubits on any architecture with verified scrambling, which retires dense storage under all three hypotheses. Note that Clifford circuits (the earlier draft's proposal) cannot test this: their states are compactly describable, so a material could host them without dense storage.

**WHAT CHANGED.** The earlier headline — "no device will ever verifiably entangle more than a few hundred qubits" — rested on a correct theorem about *all* states, which no experiment can prepare. The revision replaced it with a stated hypothesis (dense storage), a simulation-free test (mirror circuits), a predicted shape (a gate-independent cliff halving per qubit), and a control knob. The new stake is sharper *because* the revision admitted the old one could not be tested.

## 8.6 Spooky action at a finite speed

When one particle of an entangled pair is measured, its partner's conditional fields update — in GUM, physically, at c_L in the material frame. GUM is a **c_L-causal model** (Definition 7): quantum correlations hold between measurements the update could connect, and not otherwise.

⬛ Salart and collaborators (2008, 18 km baseline) and Yin and collaborators (2013) timed distant measurements so tightly that no slow influence could connect them, and saw correlations intact: any such influence exceeds **ten thousand times c**, for any frame moving slowly relative to Earth. Since our lab moves through the material frame at an unknown velocity, and Earth's rotation swings the baseline through that "wind," 🟩 **Proposition 10** requires the test at every sidereal time: persistent violations imply c_L ≥ L/(δt + ½Ω⊕v⊥LT_int/c²), with L the baseline, δt the timing mismatch, T_int the integration time, Ω⊕ Earth's spin rate, v⊥ our velocity across Earth's axis.

**STEP-UP — two dancers and a messenger.** Dancers in separate rooms stay perfectly coordinated. If a messenger runs between them, you can catch them by cueing both at nearly the same instant — but the messenger's speed is fixed relative to a wind you can't see, so you must repeat the test at every time of day.

**Two parties can never exclude a finite c_L completely** — timing is never infinitely precise. 🟩 **Theorem 13** (after Bancal and collaborators, 2012, and Barnea and collaborators, 2013): with three or four parties, for every finite speed there are arrangements in which any finite-speed model must **either allow faster-than-light signaling or fail the quantum predictions.** GUM must choose. Signaling in a preferred frame is not a paradox for a material, but it would contradict every signaling test, so GUM's default (Flag F-NS) is no signaling — and then it predicts that multipartite correlations *drop* to a lower bound when a designated pair is c_L-disconnected. Scanning the sidereal day with c_L = 10⁴c and a 10 km baseline, the disconnection window is L/c_L ≈ 3 ns — within reach. **That is Stake S28.** Which horn GUM sits on depends on whether its tower update rule signals (🟧 **K-22**); if it does, the stake flips. And GUM identifies this speed with Chapter 5's longitudinal speed (cross-lock **C-L**), so S28 bounds a stiffness of the material.

## 8.7 How fine is the grain?

A grainy medium makes light's speed depend slightly on wavelength: ω² = c²k²[1 + ξ(kℓ_s)²], with ξ of order one. ⬛ The Fermi telescope has seen high- and low-energy photons from distant gamma-ray bursts arrive together, bounding such quadratic effects at E_QG,2 ≳ 1.3×10¹¹ GeV. 🟩 **Proposition 11:** ℓ_s = ħc/(√|ξ| E_QG,2), so **ℓ_s ≲ 1.5×10⁻²⁷ |ξ|^{−1/2} m.**

**WHAT CHANGED.** The earlier draft *assumed* ℓ_s ≲ 10⁻²⁶ m; the revision derives a bound from data, which set the 234–329 range of §8.5.

## 8.8 The heaviest bill

GUM has several speeds — the matter cone c_ψ, whatever cone gravity has, c_L — but the world shares one light cone to 10⁻¹⁵–10⁻²⁰. GUM's slow logarithmic "cone-locking flow" (🟦, real in the lab: electron speeds in graphene "run" with energy) buys a factor of 10 to 100, not 10¹⁵, and theories that break Lorentz symmetry at short distances generically leak it into everyday physics. **This is the heaviest bill in GUM, printed at the top of its kill list.** The revision lightened it (light no longer needs the flow) and moved the deliberate mismatch c_L ≫ c out of electromagnetism and into the tower, where Proposition 10 and Theorem 13 test it — while Chapter 2 showed that the matter cone, at the weak-scale gap, now constrains the grains' rotational inertia (erratum E2).

**NUMBERS TO HOLD.** log₂(10⁻¹⁰ m³/(1.5×10⁻²⁷ m)³) ≈ 234. Cliffs: H_V 234–329, H_A 152–219, H_R 196–317, Schmidt 468–658. +10 qubits per 1000× volume. Gate errors ≲ 2.8×10⁻³ (all-to-all) or 1.3×10⁻³ (2D) at 300 qubits. c_L ≳ 10⁴c. Window at 10 km, 10⁴c: ≈ 3 ns. ℓ_s ≲ 1.5×10⁻²⁷ m.

**CHEW ON THIS.** (8.1) With log₂10 ≈ 3.32, compute log₂(V/ℓ_s³) for V = 10⁻¹⁰ m³, ℓ_s = 1.5×10⁻²⁷ m, and for V = 10⁻⁶ m³, ℓ_s = 10⁻³⁵ m. (8.2) "Neutral-atom machines with over a thousand qubits exist, so S16 is dead." Explain in three sentences the difference between *having* qubits and *verifying* a generic entangled state. (8.3) In the Rubik's-cube analogy, what plays F_noise, F_rep, and the cliff? (8.4) At the feasibility floor P_ret ≈ 9×10⁻⁴. How many runs does 3% relative precision take, ≈ 1/(0.03² × 9×10⁻⁴)? (8.5) Evaluate the bound of §8.6 for L = 10 km, δt = 100 ps, T_int = 60 s, v⊥ = 370 km/s, Ω⊕ = 7.29×10⁻⁵ s⁻¹; express c_L in units of c. (8.6 ★) Compute ħc/E_QG,2 for E_QG,2 = 1.3×10¹¹ GeV (ħc = 1.973×10⁻¹⁶ GeV·m). (8.7) Sort into "tests dense storage" or "does not": (a) random-circuit sampling at 60 qubits; (b) Clifford circuits at 400 qubits; (c) mirror circuits with random two-qubit gates at 300 qubits, run at two depths.

---
# PART V — MATTER ITSELF

# CHAPTER 9 — PARTICLES ARE KNOTS

**What you'll be able to do after this chapter:** (1) Explain what a texture is and build the hedgehog in your head. (2) State why a knotted texture cannot unwind, split, or fade, connecting each to a laboratory fact. (3) Prove Derrick's collapse theorem and show how GUM's anti-collapse terms escape it. (4) Follow the Bogomolny trick to the mass law. (5) Explain why a knot ticking inside the gap cannot radiate itself away. (6) Do the belt trick and say why knots can be fermions.

## 9.1 Textures you can't comb away

A **texture** is a pattern in the orientation field. Most comb out flat; some are **trapped by topology**.

**TRY THIS (the hairy ball).** Try to comb the fuzz on a tennis ball flat everywhere with no cowlick. You can't: ⬛ every combing of a sphere leaves a cowlick (the hairy-ball theorem — also why somewhere on Earth the horizontal wind is always zero). Cowlicks can move, merge, or cancel in pairs, but their *signed count* is fixed: a **topological invariant**.

In 3D, picture the **hedgehog**: orientations pointing "outward" in every direction at a center, relaxing to one common orientation far away. GUM's order parameter lives on a three-dimensional sphere (the space of SU(2) orientations), and patterns in space are classified by an integer **degree** K — how many times they wrap that sphere. Its density is the topological density b_P of Chapter 3; the hedgehog has K = 1, the vacuum K = 0, and a whole number cannot pass through ½. Removing the hedgehog would require *tearing* the material, which GUM's tear-free rule (the deformation never collapses, det F > 0) forbids. **A hedgehog is a knot in the material: a particle.** 🟩

🟩 **Lemma 5.** Along any tear-free history, total degree and total charge-winding are constant; to change them the material must pinch to zero somewhere (det F → 0). One lemma gives three facts that the Standard Model takes as three separate inputs: charge is **conserved** (degree is constant), **quantized** (degree is an integer), and **created only in pairs** (K = +1 and K = −1 can appear together at a pinch without changing the total). **Charge conservation is the absence of tears.** Antiparticles are degree −1; annihilation is untying, and needs a pinch.

## 9.2 Derrick's guillotine, and the two escapes

⬛ **Claim:** a static, localized 3D texture whose energy has only first derivatives (plus a potential) collapses. **Proof you should own:** shrink it by a factor λ (replace x by x/λ). Gradient energy scales as E₂(λ) = λE₂ (two gradients give 1/λ², the volume gives λ³); potential energy as E₀(λ) = λ³E₀. Both *decrease* as λ → 0: the texture lowers its energy by imploding, and no stable size exists. That guillotine beheaded "particles as lumps of field" for decades.

**Escape 1 (Skyrme's quartic term):** four derivatives scale as E₄/λ, blowing up under shrinking, so λE₂ + E₄/λ has a minimum. That is GUM's W₄. **Escape 2 (the "BPS" pair):** six derivatives scale as E₆/λ³ against the potential's λ³E₀, with a minimum where E₆ = E₀. That is GUM's W₆₊₀. ⬛ Both are established soliton physics; Chapter 10 shows that *which* pair governs a spinning knot decides what spin it can have.

## 9.3 The Bogomolny trick and the mass law

Complete the square in the star sector's energy, ½Λ²b_P² + 𝒱:

**E₆₊₀ = ∫½(Λb_P ∓ √(2𝒱))² ± Λ∫b_P√(2𝒱) ≥ C₆|K|.**

The square is never negative, and the cross term is *topological* — it depends only on the degree. ⬛ This is Bogomolny's 1976 trick. For GUM's potential, **C₆ = 64Λm̃_V/(15π) ≈ 1.358 Λm̃_V** (★ problem 9.4), and the texture saturating the bound is a **compacton**, a knot ending *sharply* at radius **R\* = (2Λ/(π²m̃_V))^{1/3}** with nothing outside. 🟩

Three consequences are used later. **The mass law:** mass = shape number × the material's energy unit Λm̃_V, so mass *ratios* multiply shape numbers and potential strengths — the multiplicative law Chapters 12–13 need. **Additivity:** in the exact BPS limit, masses add. **Dust:** on the BPS solution, internal pressure vanishes at every point, so knot matter behaves as cosmological "dust" (Chapter 14).

A warning from the audit: the potential strength m̃_V that sets knot masses is *not* the total gap stiffness m̃ = √(4µ_c + ¼m̃_V²) that sets the band edge. The earlier draft used one symbol for both; Chapter 10 shows why separating them matters.

## 9.4 Why a ticking knot doesn't radiate itself away

Real particles have a heartbeat: in GUM, the knot's internal orientation pattern rotates at a clock frequency ω (Chapter 10). Oscillators usually radiate. Why not a knot? 🟩 Because it ticks *inside the gap*, ω = κω₀ with κ < 1, which closes three doors at once: its frequency is forbidden on the gapped branch B3 (Chapter 2); light is achiral and doesn't couple to it at leading order (Chapter 4); and it cannot unwind, because its degree is conserved (Lemma 5). **A knot is stable for the reason a bound state below threshold is stable** — ⬛ like an atom's ground state, it has nowhere lower to go. A moving knot is the boosted spinning solution; seen from the lab, its internal phase is a de Broglie wave with λ = h/p, and its clock slows as relativity requires.

## 9.5 The belt trick: why knots can be fermions

⬛ Buckle a belt to a doorknob and twist the free end by 360°: you cannot undo it while keeping the end's orientation fixed. Twist by 720° and you *can* (loop the belt around the end). Rotations by 360° and 720° are topologically different — the reason GUM's orientation lives in SU(2). An extended knot remembers this: a 360° rotation leaves a belt-twist imprint in the surrounding field.

Finkelstein and Rubinstein (1968): for solitons, swapping two identical knots is continuously connected to rotating one by 360°, so if the 360° loop carries a factor −1, so does swapping. **Solitons can be spin-½ fermions without anticommuting fields put in by hand.** In GUM the space of knot configurations has exactly the right order-two "twist class" to host that −1, and the fermionic sign is *selected* by the closure of Chapter 10 — consistent, not forced, and graded so. One mechanism, the knot's internal rotation, supplies its clock, spin, and statistics: one clock period multiplies the state by −1; only 720° brings it back. Pauli exclusion — the reason chemistry has a periodic table — is a belt trick performed by the material.

**STEP-UP.** Do the belt trick now. It takes ninety seconds, and "spin-½" will never be jargon again.

**NUMBERS TO HOLD.** C₆ = 64Λm̃_V/(15π) ≈ 1.358 Λm̃_V. R\* = (2Λ/π²m̃_V)^{1/3}. Derrick scalings: E₂ ∝ λ, E₀ ∝ λ³, E₄ ∝ 1/λ, E₆ ∝ 1/λ³.

**CHEW ON THIS.** (9.1) The phase field θ(x) = 2π tanh(x/a) on a line: what total winding (change in θ divided by 2π) does it accumulate from −∞ to +∞? (9.2 ★) Run Derrick's scaling on E₂ + E₄ + E₀ + E₆ (scalings λ, 1/λ, λ³, 1/λ³). Which *pairs* can stabilize alone? Show the (E₀, E₆) minimum forces E₀ = E₆. (9.3) Why does creating one knot need a pinch, while a knot–antiknot pair leaves the total degree unchanged? (9.4 ★) Check (2/π)∫₀^π 2 sin(χ/2) sin²χ dχ = 64/(15π). (Hint: u = χ/2, sin χ = 2 sin u cos u.) (9.5) Name the three doors a ticking knot keeps closed and the chapter that closes each. (9.6) Do the belt trick, then write three sentences connecting it to the periodic table.

---
# CHAPTER 10 — THE SPINNING KNOT, PLANCK'S CONSTANT, AND A CLOCK YOU CAN HIT

**What you'll be able to do after this chapter:** (1) State the two closure conditions a knot must satisfy at once. (2) Prove in one line that a knot's rotational energy is a fixed fraction of its total — and say why that is *kinematics*, not GUM. (3) Reproduce the spin-½ argument with high-school algebra. (4) State Flag F-B1 and its kill. (5) Say exactly what "ħ = 𝔠Λ√J" claims — and what the audit found hiding in it. (6) Derive two predictions that follow only if de Broglie's clock is a *physical* rotation.

## 10.1 Two conditions, one ħ

Electrons **spin** (angular momentum ħ/2) and **tick**: the quantum phase of a particle at rest rotates at ω = E/ħ with E = mc², de Broglie's "internal clock" (1924). In GUM these are one motion: the knot **isorotates** — its internal orientation pattern spins at ω. Consistency demands, *with the same ħ*:

**(C-spin) L = 𝕀ω = jħ,  (C-clock) E_tot = ħω,**

with 𝕀 the knot's moment of inertia and j its spin in units of ħ. The paper reads (C-clock) as one physical angle observed twice: the quantum phase of Chapter 7 *is* the knot's rotation angle. If both conditions can hold at once, **ħ is tied to the material.**

## 10.2 The quarter is kinematics

🟩 **Lemma 4.** For any object with rotational energy ½𝕀ω² = ½Lω obeying both conditions,

**E_rot/E_tot = ½(jħ)ω/(ħω) = j/2,**

whatever the profile, shape, stabilizing terms, or value of ħ. For spin ½, exactly one quarter of the energy is rotational.

The lesson: "25%" is not a prediction *about the material* — it is j = ½ put into an identity. A laboratory bench measuring the fraction does not test a shape integral; it tests whether such objects *exist* in a chiral Cosserat system, and what their j is (bench Stake S3). Chapter 16 shows how much cleaner a death list becomes when identities are labeled as identities.

## 10.3 Spin ½, by algebra you can do

Model the knot as shape plus rotor, with a dilation V (how much it swells when spun). Field energy behaves as (ê₀/2)(1/V + V); rotational energy at fixed angular momentum as K/V, with K = j²𝔠²/(2𝔦₀g), where 𝔠 ≡ ħ/(Λ√J) is the pure number being hunted and ê₀, 𝔦₀, g are shape constants. Write w ≡ 𝔠²/(ê₀𝔦₀g).

**(i) Stationarity in V** gives **V² − 1 = j²w.** **(ii) The clock** — by §10.2, E_field = E_rot(2 − j)/j — gives **V² + 1 = j(2 − j)w.** **Subtract:** 2 = 2w·j(1 − j), so

**w·j(1 − j) = 1,  V² = 1/(1 − j),  E_rot/E = j/2.**

Solutions exist only for **0 < j < 1**: at j = 1, V blows up (the knot tears itself apart); at j = 3/2, V² < 0 (no shape exists). Angular momentum on the double cover comes in half-integer steps, so the unique allowed value is **j = ½**, with V = √2, E_rot/E = ¼, and w = 4. 🟩 (Theorem 14.)

## 10.4 The window, and Flag F-B1

The field energy's (1/V + V) is the signature of Derrick's Escape 1 (quadratic–quartic). If instead it went as (V^{−a} + V^{a}) and the rotor as V^{−b}, the two conditions (★ problem 10.4) are solvable only for 🟩 **0 < j < 2a/(a + b)** (Proposition 12). For (1, 1), spin ½ is unique. But GUM's *static* knot is stabilized by Escape 2, whose terms scale as λ⁻³ and λ³; if that pair governed the spinning closure, a = 3, the window would be j < 3/2, and **spin-1 knots would be allowed too.**

So GUM makes a labeled *commitment*. **Flag F-B1:** the spinning closure is governed by the (1, 1) pair while the static mass comes from the sextic–potential pair. Under F-B1 every elementary massive knot has spin ½; there are no elementary spin-0 or spin-1 particles, so the W, Z, and Higgs must be *collective* (Chapter 13); an elementary spin-3/2 particle would falsify the closure. **Kill for F-B1:** a laboratory bench realizing a stable spinning knot with j = 1 (Stake S13). Spin-½ universality is forced *given* F-B1, and F-B1 is GUM's to lose.

**STEP-UP — the skater with a metronome.** A spinning skater trades arm position for speed. Now make her spin rate *also* equal her heartbeat, which is set by her total effort. Only one skater can obey both rules: half a unit of spin, arms out by √2, a quarter of her effort in the turn. Every electron is that skater — which is *why* electrons are identical. F-B1 says which rink she skates on.

## 10.5 What "ħ = 𝔠Λ√J" claims

In the material's natural units the two conditions give 🟩 **ħ = 𝔠Λ√J, with 𝔠 = √(2ê_tot𝔦_tot)** (ê_tot, 𝔦_tot the knot's dimensionless energy and moment of inertia). GUM's saturated closure evaluates ⬜ **𝔠 = 64√2/(9π) ≈ 3.2011** and **κ = ω/ω₀ = 1/√2** — the clock sits 29.3% below the band edge. A rigorous bound says 𝔠 ≥ 2√2 ≈ 2.828. The bench discriminator is κ²g_tot = 35/24 ⬜, against 7/8 for a knot without a halo (Stake S4′).

The honest sentence (Proposition 13): Λ and J are unknown constants, and the strength of the material's jitter (Chapter 7) is a third. The closure gives *one relation* among three unknowns. **Planck's constant is constrained, not derived;** GUM can be killed only on the pure number 𝔠, which depends on F-B1. The closure is *dynamically enforced*: a detuned knot phase-locks back by radiating the beat, with relocking time ~10⁻¹² s for an electron (🟦 ⬜). Planck's constant is the same in every epoch because every particle is a phase-locked oscillator of one material.

**WHAT CHANGED.** These numbers used the earlier draft's conventions, which the audit found inconsistent (Chapter 3): a kinetic coefficient off by 2, and a band edge set by m̃_V instead of the total m̃ = √(4µ_c + ¼m̃_V²). Redo the bookkeeping with the correct gap, holding the old shape integrals fixed: κ² = 2m̃_V²/(16µ_c + m̃_V²). A sub-gap knot (κ < 1) then needs µ_c > m̃_V²/16, and κ = 1/√2 *exactly* needs **µ_c = 3m̃_V²/16** — a stiffness ratio the earlier draft fixed without ever stating. Recomputing 𝔠 and κ consistently is item (2) of 🟧 **K-N**; it matters because the band edge of Chapter 11 moves with κ.

## 10.6 If the clock is real, it leaves fingerprints: the α–µ discriminant

In ordinary quantum mechanics de Broglie's clock is bookkeeping, a global phase with no consequences. In GUM it is a *rotation of the material*, and that has consequences. First: suppose the material's overall stiffnesses Λ and J drift over cosmic time while every shape number and stiffness *ratio* stays fixed. 🟩 **Proposition 14:** ħ ∝ Λ√J, so α drifts, Δln α = −(δ_Λ + ½δ_J). But every rest energy is a shape number times Λm̃_V, so Λ cancels in every mass ratio, including µ_pe = m_p/m_e:

**Δln µ_pe = 0,  R_µα ≡ Δln µ_pe/Δln α = 0.**

**STEP-UP — the exchange rate.** When the dollar–euro rate changes, what a dollar buys in Paris changes, but the price ratio of two items in the same American store does not. ħ is the exchange rate between the material's units and ours: α moves, mass ratios don't.

⬛ Grand-unified theories tie the two drifts together with |R_µα| ≈ 30–40, because the proton mass depends exponentially on the unified coupling. So if α is ever seen to drift, GUM requires µ_pe to stay put, and grand unification requires it to move thirty-odd times more. Present data are null on both: optical clocks limit α̇/α to ~10⁻¹⁸ per year; methanol in a z = 0.89 galaxy limits Δµ_pe/µ_pe below 10⁻⁷; quasar spectra allow Δα = 0 at 10⁻⁶. **Stake S23:** a joint detection with |R_µα| ≳ 1 retires the physical clock.

## 10.7 The washboard test: a clock you can hit

Second: a real internal rotation at ω_c = mc²/ħ should *resonate* with something periodic.

**STEP-UP — a spinning top on a washboard.** Roll a spinning top over a washboard. If the bumps pass at exactly its spin rate, each kicks it at the same phase, and it wobbles wildly.

⬛ A crystal is a washboard for electrons: in "channeling," fast electrons travel along rows of atoms spaced ℓ_row. In the electron's frame the row is contracted to ℓ_row/γ and streams past at v, so atoms go by at γv/ℓ_row per second. Set that equal to the clock frequency mc²/h:

**γv = mc²ℓ_row/h ⟹ p = mγv ⟹ pc = (mc²)²ℓ_row/(hc)** (🟩 Proposition 15; sub-harmonics at p/2, p/3, …).

**TRY THIS (calculator).** With (m_ec²)² = 0.261120 MeV², hc = 1.239842×10⁻¹² MeV·m, and silicon ⟨110⟩ rows ℓ_row = 3.840×10⁻¹⁰ m, compute pc. You should get **80.87 MeV**. Germanium (4.001×10⁻¹⁰ m): 84.26 MeV. Diamond (2.522×10⁻¹⁰ m): 53.12 MeV.

⬛ Standard quantum mechanics predicts *no* such resonance: the Compton phase is global and cannot couple to atoms. A rival "zitterbewegung" clock at twice the Compton frequency would put it at *twice* the momentum. In 2008 Catillon and collaborators reported a transmission anomaly near the silicon value; it has not been independently replicated, and the paper marks it "to be verified." **Stake S24:** the resonance must appear in Si and Ge in the ratio 4.001/3.840 and in diamond at 53 MeV/c, with sub-harmonics. Kill: absence at all three at a sensitivity that would have seen the silicon report. A signal at 2p₁ would favor zitterbewegung over GUM.

## 10.8 Benches, and the wall they cannot climb

🟩 **Proposition 16** lists what a laboratory knot needs before it tests this chapter: (i) a localized, integer-degree texture in a chiral Cosserat system; (ii) spinning at a measured frequency; (iii) phase-locking to a drive at that frequency; (iv) damping small compared with its spin rate; (v) rotational and total energies measured independently. Then j/2 is an identity, the measured quantity is j, and κ²g_tot genuinely tests the shape. ⬛ Candidates exist: 3D-printed chiral metamaterials, chiral liquid crystals with knotted solitons (heliknotons), and chiral magnets with hopfion rings. And one wall stands — the paper's **Spreeuw wall**: *no bench can say anything about Bell inequalities.* Benches weigh closure mathematics, and a bench failure kills a derivation as mathematics, with no cosmic excuse — but no bench can say whether the vacuum is a material. Stakes S3, S4′, S5, S13, S14 are the bench program.

**NUMBERS TO HOLD.** E_rot/E = ¼. 𝔠 = 3.2011 ≥ 2√2 = 2.828. κ = 1/√2; depth 29.3%. 35/24 ≈ 1.458 vs 7/8. Audit: µ_c = 3m̃_V²/16. Relocking ~10⁻¹² s. R_µα = 0 (GUM) vs 30–40 (unification). Channeling: Si 80.87, Ge 84.26, diamond 53.12 MeV/c.

**CHEW ON THIS.** (10.1) Re-derive E_rot/E = j/2 in one line; compute it for a hypothetical j = ⅓. (10.2) Re-derive w·j(1 − j) = 1, and confirm the pole at j = 1 and V² < 0 at j = 3/2. (10.3) Verify 64√2/(9π) = 3.2011. (10.4 ★) With field energy (ê₀/2)(V^{−a} + V^{a}) and rotor K/V^{b}, show solvability requires j < 2a/(a + b); evaluate for (1, 1) and (3, 1). (10.5) From κ² = 2m̃_V²/(16µ_c + m̃_V²), find the µ_c giving κ = 1/√2, and show κ < 1 needs µ_c > m̃_V²/16. (10.6) Compute the germanium momentum and the silicon sub-harmonic at n = 2. (10.7) A survey finds Δα/α = 1×10⁻⁶. What does GUM predict for Δµ_pe/µ_pe? A unified theory with R = 35? (10.8) In two sentences: what dies if a valid bench finds a stable j = 1 knot, and what doesn't?

---
# CHAPTER 11 — THE TWO-SCALE ELECTRON AND ITS BAND EDGE

**What you'll be able to do after this chapter:** (1) State three laboratory facts about the electron's size and excitations. (2) Explain why a knot the size of its Compton wavelength cannot be the electron. (3) Describe GUM's electron as core plus halo, with the halo's corrected length. (4) State the computation this obliges GUM to deliver, and its kill. (5) Explain a particle's "band edge," why the electron's cannot belong to the vacuum, and compute the photon line ortho-positronium would emit if the edge hosted a new particle.

## 11.1 Three facts

⬛ **The electron is pointlike:** LEP collisions show no structure down to about 10⁻¹⁹ m, and the electron's magnetic moment limits internal structure to 10⁻¹⁹–10⁻²² m. **There is no excited electron:** LHC searches exclude an "e\*" up to several TeV. **Atoms have no keV electron levels:** X-ray spectroscopy would have seen them.

## 11.2 Why a Compton-sized knot fails

The natural first guess puts GUM's electron near the femtometer (10⁻¹⁵ m) scale. Three ways that dies. **Form factor:** a charge spread over 10⁻¹⁵ m shows up in scattering at a few hundred MeV; LEP looked a thousand times higher and saw a point. **Shape modes:** ⬛ a compact texture of radius R, with internal disturbances moving at about c, vibrates at energies near ħc/R — about 200 MeV here, an excited electron every collider since the 1970s would have made by the million. **Soft modes:** a nearly-BPS texture has *almost free* reshapings, lifted only by the small parameter ε, giving internal levels near √ε × (band edge) ≈ 1–40 keV — keV electron levels that atoms don't have.

🟩 **Theorem 15 (compatibility).** A degree-one texture can be the electron only if its charge sits within 10⁻¹⁹ m, its lowest excitation exceeds a few TeV, and hence its mass texture is below about ħc/(few TeV) ~ 10⁻¹⁹ m. A compacton at the Compton scale fails by four orders of magnitude; a nearly-BPS one by nine. **The electron's topological core must sit at the structural scale: ℓ_s ≲ 1.5×10⁻²⁷ m.**

## 11.3 Core and halo

So GUM's electron has *two* scales (🟩 **Proposition 17**):

- **The core**, radius ~ℓ_s: the degree-one texture, carrying the degree, the disclination charge (Chapter 6), the Bogomolny energy (Chapter 9), and the internal rotation (Chapter 10). Setting the compacton radius equal to ℓ_s fixes Λ/m̃_V = π²ℓ_s³/2, and with the mass law, Λ and m̃_V per species. The charge form factor is exactly one up to momentum transfers ħc/ℓ_s, and the core's own vibrations lie above 10¹¹ GeV. The closure numbers of Chapter 10 are ratios of shape integrals and don't care about scale.
- **The halo:** Chapter 2's evanescent skin, driven by the spinning core, decaying as e^{−r/λ}/r with **λ_halo = (c_ψ/c)·ħ/(Mc)** — the reduced Compton wavelength. It has no vibrations of its own; its only "excitations" are making another particle.

**STEP-UP — the lighthouse in fog.** A lighthouse lamp is tiny; its glow in the fog is huge but has no light of its own. Ask where the light *comes from* and you find a point (the core); ask how far the glow reaches and you find a distance set by the fog (the halo). Poke the glow and nothing new shines; for a second glow you need a second lamp.

GUM's reading of a familiar fact: the electron is pointlike to every probe of its charge, yet has a characteristic length (the Compton wavelength) below which a one-particle description fails. The first fact is the core, the second the halo.

## 11.4 The obligation, and what it costs

The boundary layer where a knot's orientation relaxes against the vacuum helix is the *halo*, so the "frustration integrals" that make the three families (Chapter 12) are **halo integrals**, taken across a distance set by the tau's halo (qλ_halo,τ ≈ 2.6×10⁻¹¹ ⬜). Chapter 12's numbers survive only if the tiny core contributes negligibly — **halo dominance** — which GUM does not yet know. 🟧 **K-10:** (i) exhibit within GUM's energy a solution with a core at ℓ_s and a halo at the length above; (ii) evaluate the frustration integrals on it and reproduce Chapter 12's constants within their bands; (iii) evaluate the weak vertex's halo-tunneling exponent (Chapter 13). **Kill:** if the integrals are core-dominated, Chapter 12's lepton logarithms and neutrino mass are demoted to 🟧 POSED and Stake S1 is suspended. Until K-10 runs, every Chapter 12 number carries the rider "conditional on halo dominance." And **Stake S21** stands: any core larger than 10⁻¹⁹ m, or any electron excitation below a TeV, is ruled out by LEP and LHC archives with no new measurement.

**WHAT CHANGED.** The earlier draft's halo length ħ/(√2Mc) is corrected to (c_ψ/c)ħ/Mc (Chapter 2) — item (3) of the audit K-N, and the yardstick of Chapter 12's neutrino bridge.

## 11.5 The band edge

With κ = 1/√2, the band edge sits at ħω₀ = Mc²/κ = **√2 Mc²**: **722.7 keV** for the electron, **149.42 MeV** for the muon, **2.513 GeV** for the tau. What exists *at* the edge? The earlier draft never asked. The revision spots a problem: a *vacuum* branch is shared by all species, so three species-specific edges can't all be vacuum edges — and Chapter 13 identifies the vacuum's gapped branch with the weak interaction, near 80 GeV. The lepton edges must belong to each lepton's own frustrated halo.

🟩 **Proposition 18.** Exactly one holds. **(a)** The halo has no discrete level below the pair threshold 2Mc²; the band edge shows up only through Chapter 10's closure ratios. **This is GUM's core choice.** **(b)** The halo holds a neutral level X of mass m/κ < 2m. Then ⬛ **ortho-positronium** — the spin-1 electron–positron atom, which normally decays to three photons — could, if X has charge-conjugation parity +1, decay to *one photon plus X*, a two-body decay with a photon of one exact energy.

**TRY THIS (two-body kinematics).** A particle of mass M at rest decays to a photon plus mass m_X: E_γ = (M² − m_X²)c²/(2M). Put M = 2m_e (positronium's 6.8 eV binding is negligible) and m_X = √2 m_e: **E_γ = m_ec²/2 = 255.5 keV.** In general E_γ = (m_ec²/4)(4 − κ⁻²), so the line *measures* κ: κ = [4 − 4E_γ/(m_ec²)]^{−1/2}.

Alternative (b) is **Stake S25**, conditional on 🟧 **K-19** (the halo spectrum below 2Mc² for each family). It is an unusually clean conditional bet: monoenergetic, fixed by one material number, and already constrained by searches for exotic positronium decays; a found line would also settle the audit's κ. Notice the shape: GUM asked a question its earlier draft had not, took the conservative branch for its core, and turned the adventurous branch into a precise conditional bet.

**NUMBERS TO HOLD.** Electron < 10⁻¹⁹ m; no e\* below several TeV; no keV levels. Core ~ℓ_s ≲ 1.5×10⁻²⁷ m; core modes ≳ 10¹¹ GeV. Halo (c_ψ/c)ħ/Mc; electron 3.86×10⁻¹³ m. Edges √2Mc²: 722.7 keV, 149.42 MeV, 2.513 GeV. Positronium line (if b): 255.5 keV.

**CHEW ON THIS.** (11.1) Compute ħc/R for R = 1 fm (ħc = 197 MeV·fm). Which experiments would have seen it? (11.2) Evaluate √ε × 0.72 MeV for ε = 10⁻⁶ and 10⁻³, and name the spectroscopy that excludes them. (11.3) State Theorem 15's three inequalities and the laboratory fact behind each. (11.4) In the lighthouse analogy, what corresponds to the compacton radius, the Compton wavelength, pair creation, and a (forbidden) excited electron? (11.5) State the K-10 kill in your own words, and list what survives it (hint: Chapters 9–10). (11.6) Derive E_γ = m_ec²/2, and find the κ that would put the line at 300 keV. (11.7) Why can't three species-specific band edges all be edges of one vacuum branch?

---
# PART VI — THREE FAMILIES AND THE SKELETON

# CHAPTER 12 — WHY THREE FAMILIES, AND THE LIGHTEST PARTICLE

**What you'll be able to do after this chapter:** (1) State the flavor puzzle. (2) Explain families as discrete frustration classes of a knot in a helical vacuum. (3) Run the two-integral generator against the lepton masses — and report the result in the *right* language. (4) Explain why the ladder stops at three. (5) Explain why the neutrino cannot be a knot, what a heliknoton is, and how one logarithmic bridge yields a neutrino mass. (6) Explain the squeeze on that mass from the audit and from both sides of cosmology, and name GUM's one door. (7) Watch the ledger catch a slip in the paper itself.

## 12.1 The puzzle

⬛ The electron has two heavier copies — the muon (105.66 MeV) and the tau (1776.9 MeV) — identical except for mass. The steps are roughly geometric but *larger at the lighter end*: m_τ/m_µ ≈ 16.8, m_µ/m_e ≈ 206.8. An explanation owes you discreteness, the number *three*, the spacing pattern, and something about neutrinos, a million times lighter still. The Standard Model has one adjustable dial per mass.

## 12.2 Frustration classes

Chapter 6 made the vacuum helical. A knot's orientation must *join onto* the twisted background far from its core, and topologically there are discrete ways to do it: match the twist exactly (class 𝗉 = 0), or lock in one extra unit of relative twist (𝗉 = 1), or two (𝗉 = 2). (The paper writes 𝗉 in sans-serif to keep p for the pitch.) Each class is a local minimum — you can't slide between them without tearing — and each extra unit of frustration partly defeats the locking over the halo, lowering the potential strength m̃_V the knot feels, and so its mass. ⬛ The laboratory precedent is real: knot solitons in chiral liquid crystals come in discrete, imageable twist classes.

**STEP-UP — cross-threading a bolt.** A bolt can seat properly in its thread, or cross-thread by one turn, or two. Each start is stable once begun; you can't slide between them without backing out; each is tighter than the last. The vacuum's helix is the thread; tau, muon, and electron are three ways of seating one knot.

## 12.3 The generator, and how to report it

The boundary-layer energetics compress into one law (paper Eq. 64):

**m̃_𝗉 = m̃_c e^{−Σ(𝗉)/2},  Σ(𝗉) = A𝗉 + B𝗉(𝗉 − 1)/2,  so  ln(m_𝗉/m_{𝗉+1}) = ½(A + B𝗉),**

where A is the cost of one "belt" of frustration and B the interaction of each *pair* of belts (𝗉(𝗉 − 1)/2 counts pairs, like handshakes). The family map is 𝗉 = (0, 1, 2) = (τ, µ, e). The requirements were fixed *before* the generator was proposed: only m̃_V varies across species; masses compose by multiplication (a sum-of-squares law would make the Higgs couple *inversely* to mass, which the LHC excludes — Chapter 13); discreteness from topology; no new elementary scalar (F-B1); and room for large hierarchies.

With your calculator: ln(m_τ/m_µ) = ln 16.817 = **2.822**, which the theory calls ½A; ln(m_µ/m_e) = ln 206.77 = **5.332**, which it calls ½(A + B). GUM's integrals give A = 5.6 ± 0.9 and B = 5.7 ± 1.2 ⬜, so ½A = 2.80 ± 0.45 and ½(A + B) = 5.65 ± 0.75; the parameter-free shape ratio (A + B)/A = 2.02 ± 0.28 against the observed 1.889. Zero fitted parameters. 🟨 (Conditional on K-10.)

**The language lesson matters more than the numbers.** The theory's bands are about ±16%; the masses are known to parts per million. GUM's house rule (paper Definition 10): when the theory's error bar exceeds the experiment's by more than ten times, an agreement is a **landing**, not a **test**, reported as "consistent within ±16%" — never as a pull in standard deviations. The paper's sentence: *a two-integral mechanism reproduces the order-one coefficients of the lepton mass ratios within ±16% with no fitted parameters; that is encouraging; no precision test has been performed.* Learn to hear how different that is from "GUM predicts the muon mass."

## 12.4 Why the ladder stops at three

The 𝗉 = 3 rung would weigh about m_e e^{−½(A + 2B)} ≈ 100 eV. But frustration strains the knot's boundary, and its stability parameter grows with it — for 𝗉 = 3, ε₃ = ε_e e^{(4/3)×8.5}, tens of thousands of times the electron's — pushing it past the point where the closure of Chapter 10 can be satisfied. **The fourth rung cannot close: no fourth charged family, not "too heavy" but forbidden.** 🟨 And the last admitted class sits closest to the edge it is about to fall off, which is why, in GUM, the top quark's Higgs coupling crowds its ceiling: y_t = √2 × 172.5/246.2 ≈ 0.99. "Why three families?" and "why is y_t almost exactly 1?" are one wall seen from two sides (cross-lock C-EW3). The generator's *form* is bench-testable (Stake S17): do liquid-crystal knot solitons in classes 0–3 show log-spacings linear in class, with nonzero B and a termination? Kill: B = 0, or no termination.

## 12.5 The neutrino: the particle that cannot be a knot

**The kill that creates.** Knots have a mass *floor*: the closure loosens as ε ∝ m̃^{−4/3}, so a sub-eV knot is about 10¹²-fold looser than existence allows, and knots can't be much lighter than the "Skyrme scale," ~1.7 GeV ⬜. A 0.05 eV knot is impossible. So GUM must find a *different kind* of object — or die on arrival, since neutrinos exist.

**The other kind.** The helical vacuum supports a texture a uniform one can't: the **heliknoton**, an excitation of the helix itself, classified not by wrapping but by *linking*. ⬛ Picture two smoke rings threaded through each other: you can't separate them without breaking one, and their linking number is a topological charge (the Hopf charge). Heliknotons have been made and imaged in chiral liquid crystals and magnets. In GUM the neutrino *is* one: dark to electromagnetism (no disclination), weakly coupled (a twist texture couples to the twist sector), a fermion by a topological argument (consistent, not forced), and single-helicity, slaved to the helix's handedness. Its linking charge is self-conjugate — no ± lock distinguishes particle from antiparticle — so it is generically a **Majorana** particle, and neutrinoless double-beta decay must occur (Stake S6).

## 12.6 The bridge and its number

A heliknoton's energy is the **pitch quantum**, one twist of the helix: m₃c² = ζ_νħqc (Chapter 6). The helix is astronomically gentle compared with the tau's halo, so the neutrino is astronomically light *for a structural reason*. The number comes from one logarithmic bridge: outside the halo, the belt cost relaxes as A(q) = A_halo + κ_far ln(1/(qλ_halo)), with A_halo = 3.05 ± 0.09 and κ_far = 0.1065 ± 0.0032 ⬜. Inverting with the data value A = 2 ln(m_τ/m_µ) = 5.644:

**ln(1/(qλ_halo)) = (5.644 − 3.05)/0.1065 = 24.36 ± 0.90 ⟹ m₃ ≈ 0.047 eV, one-sigma band [0.019, 0.115] eV.**

⬛ Oscillations floor the heaviest neutrino at m₃ ≥ √(Δm²₃₁) ≈ 0.0503 eV (normal ordering), trimming the band to [0.050, 0.057] eV. **Stake S1: Σm_ν ∈ [0.058, 0.11] eV, normal ordering** — a floor and a ceiling. 🟨 Conditional on K-10 and K-N.

## 12.7 Pressure from the audit, and from both sides of cosmology

**From the audit.** The bridge produces a *logarithm*; turning it into a mass needs a yardstick: m₃c² = ζ_νħc e^{−24.36}/λ_halo,τ. With the corrected halo, λ_halo,τ ≈ ħ/(m_τc), that gives m₃c² = m_τc² e^{−24.36} ≈ 0.047 eV — the printed value. With the earlier draft's shorter halo, ħ/(√2m_τc), the same logarithm gives √2 × 0.047 ≈ 0.066 eV. So, with ζ_ν = 1, the earlier draft's printed halo formula and its printed neutrino mass cannot both have gone into one calculation. Which yardstick the inherited ⬜ integrals really used — and whether they change when recomputed on the corrected halo — is K-N's job. Its kill stands: *a corrected one-sigma band lying entirely below 0.050 eV retires S1.*

**A SLIP, CAUGHT.** The first printing of the revised paper ran this √2 the other way: it said the correction could *lower* the central value from 0.047 to 0.033 eV, below the floor. The arithmetic above shows that, at fixed integrals — the paper's own premise — correcting the halo can only leave the center at 0.047 eV or raise it toward 0.066 eV (band [0.027, 0.16] eV), where S1's window would sit a fraction of a standard deviation *below* the center, still inside the band. Writing this primer caught the slip, and the paper now prints the corrected statement as **erratum E1**. A ledger that writes down every conversion lets a reader catch an error in the ledger itself. That is the machinery working.

**From cosmology, below.** ⬛ DESI plus the microwave background gives Σm_ν < 0.064 eV (95%) in standard ΛCDM cosmology — leaving only the lowest sliver of GUM's window.

**From cosmology, above.** ⬛ In dark-energy models with w ≥ −1 — GUM's own family is one (Chapter 14) — the cosmological neutrino bound is *tighter* than in ΛCDM (Vagnozzi and collaborators, 2018). GUM cannot escape through its own dark energy.

**The door.** S1 survives only if the neutrino mass *drifts* with the slow mode that carries dark energy (Chapter 14): then cosmology, which weighs the past, and the laboratory, which weighs the present, measure different masses. In the paper's words, *GUM prints the trap and the one door out of it.* A real prediction gets squeezed; an accommodation never does. Watch whether a theory tells you when it is being squeezed.

**NUMBERS TO HOLD.** ln 16.817 = 2.822; ln 206.77 = 5.332; ratio 1.889. A = 5.6 ± 0.9, B = 5.7 ± 1.2 ⬜. y_t ≈ 0.99. Bridge 24.36 ± 0.90 → m₃ ≈ 0.047 eV with the corrected halo (0.066 eV with the old one). S1: Σm_ν ∈ [0.058, 0.11] eV. ΛCDM bound < 0.064 eV. Skyrme scale ≈ 1.7 GeV ⬜.

**CHEW ON THIS.** (12.1) Compute the two lepton logarithms and their ratio; compare with ½A, ½(A + B), (A + B)/A, and write the *landing* sentence, not the σ sentence. (12.2) In the bolt analogy, what corresponds to the thread, a cross-threaded start, the impossibility of sliding between classes, and a fourth start that cannot seat? (12.3 ★) Reproduce 24.36; show the ±0.90 spread is a factor e^{0.90} ≈ 2.46 in m₃ either way, and rebuild [0.019, 0.115] eV. (12.4) For *inverted* ordering, two states sit near 0.050 eV: show Σm_ν ≳ 0.10 eV, and explain why a robust bound below 0.09 eV would disfavor inverted ordering for everyone. (12.5) Compute m_τc² e^{−24.36} (m_τc² = 1776.9 MeV) and √2 times it; say which halo each uses. For the larger value, how many sigmas (units of 0.90 in the logarithm) is the 0.050 eV floor *below* the center? (12.6) Why does the tighter bound for w ≥ −1 hurt GUM specifically?

---
# CHAPTER 13 — THE SKELETON: WEAK, STRONG, AND THE TILE

**What you'll be able to do after this chapter:** (1) Diagonalize the photon–Z mass matrix by hand and derive ρ = 1 and e = g sin θ_w. (2) Explain why the Higgs couples in proportion to mass if masses multiply. (3) Show that the weak coupling is not small, and state GUM's honest question about it. (4) Explain confinement with rubber bands, and state the dichotomy theorem. (5) Verify an anomaly sum with fractions and read it as a tiling. (6) Count CP-violating phases. (7) Audit the chapter: consistency versus discrimination.

## 13.1 The cast

Under Flag F-B1 there are no elementary massive particles of spin 0 or 1, so the W, Z, and Higgs must be *collective* modes of the locking sector — patterns of many grains, as sound is a pattern of many atoms. ⬛ There is an exact laboratory analog: superfluid helium-3 in its "B phase," whose order parameter is a relative rotation like GUM's. The locked vacuum is unchanged if grains and lattice co-rotate together; under that symmetry B1 is a scalar, B2± is inert — the photon — and the gapped trio {B3+, B3−, B4} forms a *triplet*, which GUM identifies with the weak triplet (Flag F14). The charged members, bound to one unit of disclination winding, are the W± (🟥, the binding is conjectured); the neutral B4, mixed with the photon channel, is the Z. The pattern "SU(2) × U(1) broken to electromagnetism" is here a theorem about winding energetics, not a choice of potential. 🟩

## 13.2 The worked jewel: diagonalize 2×2

Take the two neutral channels: a₂ (co-rotation-inert, which will hold the photon) and a_T (bare neutral twist). Objectivity forbids any mass in the pure-a₂ slot, to all orders. Allowed are the twist gap M_T² and a chiral cross term ϑM_T². Protecting an exactly-zero eigenvalue forces **rank one:**

**𝕄² = M_T² [ ϑ²  ϑ ; ϑ  1 ].**

**det 𝕄² = M_T⁴(ϑ² − ϑ²) = 0** ✓: one eigenvalue is exactly zero — the photon. **tr 𝕄² = M_T²(1 + ϑ²)**, so the eigenvalues are {0, M_T²(1 + ϑ²)}. **Null vector:** 𝕄²(1, −ϑ)ᵀ = 0 ✓. With tan θ_w ≡ ϑ: photon A = cos θ_w a₂ − sin θ_w a_T, Z = sin θ_w a₂ + cos θ_w a_T, and **M_Z = M_T/cos θ_w**. The W's carry winding and cannot mix with a₂, so **M_W = M_T**, and

**ρ ≡ M_W²/(M_Z² cos²θ_w) = 1, identically.** 🟩

Matter couples to the twist channel with strength g and to a₂ only through the same chiral modulus, g′ = gϑ; projecting onto the photon gives **e = g sin θ_w.** 🟩 (Proposition 19.)

**STEP-UP — two guitar strings on one bridge.** Strings sharing a flexible bridge form "team modes": one leaves the bridge still and keeps its frequency (here zero: the photon); the other pushes the bridge and is lifted (the Z). The angle between "individual strings" and "team modes" is θ_w.

The invariance that keeps the photon massless is the one that fixes ρ = 1 (cross-lock C-EW4): a photon mass or a ρ ≠ 1 beyond quantum corrections kills both (battery S7). The *value* of ϑ, hence sin²θ_w ≈ 0.231, is 🟪 BORROWED, like α (whether the dynamics prefers a value is 🟧 K-EW-III).

**GUM's own audit:** ρ = 1 and e = g sin θ_w are *non-circular* in GUM but *non-discriminating* — the Standard Model's Higgs doublet gives both. Worse for celebrants: ⬛ the Standard Model also computes a top-quark correction to ρ of about 0.93% — how LEP predicted the top's mass before its discovery — and "ρ = 1 to a part in a thousand" is stated *after* subtracting it. GUM's top quark must reproduce the 0.93% (🟧 K-5).

## 13.3 Yukawa universality from multiplicative mass

⬛ The Higgs couples to each fermion in proportion to its mass, verified from the muon to the top; the Standard Model builds this in with one dial per fermion. GUM has no dials, so it is a real test. 🟩 **Theorem 16:** if m_f = M₀(lock) e^{−I_f}, with M₀ proportional to the lock amplitude and I_f independent of it, then ∂m_f/∂(lock) = m_f/(lock) — the same ratio for every fermion — so the lock's amplitude mode h couples as **g_hff = m_f/v** with one universal v. An *additive* law, m_f² = M₀² + Δ_f², would give coupling ∝ 1/m_f, which the LHC excludes. In GUM the Higgs is that amplitude ("breathing") mode, as in superconductors and helium-3; its mass is not claimed (🟧 K-EW-I). Small deviations |η_f| ≤ 0.05 with a fixed family ordering, and a few-percent invisible width, make Stake S2′ at the High-Luminosity LHC; ⬛ the measured Higgs width, 3.2 (+2.4/−1.7) MeV, belongs to K-EW-I.

## 13.4 Why the weak force is weak — and an honest question

⬛ A heavy exchanged particle looks, at low energy, like a contact force: G_F/√2 = g²/(8M_W²). From G_F = 1.166×10⁻⁵ GeV⁻² and M_W = 80.4 GeV, **g ≈ 0.65 — not small!** Weakness comes from the 1/M_W², not the coupling.

GUM adds *where the vertex lives*: it must thread the thin marginal halo at the compacton's edge — a tunneling event, exponentially suppressed. The same halo makes the force left-handed: the knot's two chiral zero-modes split in the handed vacuum (as in Jackiw and Rebbi's mechanism), one bound to the core and one expelled; the weak vertex couples only to the bound one, with the sign set by the vacuum's handedness and a wrong-handed admixture ε_R suppressed by the same factor.

GUM then audits itself in print. If g ≈ 0.65 is already the tunneling-suppressed value, the suppression is of order one — so ε_R, "with the same exponent," would be too, which experiment forbids (right-handed currents are below a percent). Either the two prefactors differ by orders of magnitude, or "the same exponent" predicts nothing. GUM owes both (🟧 **K-13**). A cross-lock that cannot be checked is a slogan.

Two 🟨 bonuses: the Z cannot change frustration class (that needs winding transfer), so there are no full-strength flavor-changing neutral currents; and with three families the Z's invisible width counts three neutrinos — ⬛ LEP measures 2.9963 ± 0.0074 — a 0.3%-level coincidence between a Hopf texture's coupling and a knot's for which GUM owes a theorem (🟧 K-14).

## 13.5 Quarks in prison, with rubber bands

⬛ Magnets pulled apart weaken; beads on a rubber band feel a pull that *never lets up*, and a hard yank snaps the band into two bands, each with beads at both ends. The strong force is the rubber band: pull a quark out of a proton and you make new quark–antiquark pairs. Its tension is about 0.19 GeV² ≈ 0.96 GeV per femtometer — roughly 16 tonnes of force.

GUM's jail: against the double-twist network (Chapter 6) a knot can lock in *thirds* of a winding, set by the network's three-way junctions; which branch it sits on is its "color." Fractional winding can't be screened smoothly; it must end a network defect line of tension σ, so V = σr — a rubber band. 🟩 **The dichotomy theorem:** *a winding charge is confined iff the channel that mediates it is gapped.* Electric charge is free because the photon is massless (Chapter 4); color is jailed because its channel is gapped. A mass-independent stability floor for fractional winding, about 3.8 times above what a free particle tolerates ⬜, confines *every* quark, from a few MeV to the top.

**TRY THIS (the string's fossil).** ⬛ Hadrons of spin J lie on straight lines J = α′M², α′ ≈ 0.88 GeV⁻². A string of tension σ spinning with light-speed ends has M = πσR and J = πσR²/2; eliminating R gives α′ = 1/(2πσ) ≈ 1/(2π × 0.19) = 0.84 GeV⁻². GUM inherits this once its theorem delivers the tube, and lists 0.84 vs 0.88 as a consistency, not a claim.

**Honesties, printed.** GUM derives only the long-distance half: no gluons, color factors, running coupling, or partons — all 🟪 BORROWED. It bets the short-distance sector on one computable sign (🟧 K-4, Stake S12): if the network stiffness *screens* like electric charge instead of *anti-screening* like color, the sector is imported permanently. ⬛ The top quark decays (in about 5×10⁻²⁵ s) before forming hadrons, which "all quarks confined" must reproduce (🟧 K-15). And a 🟥 guess: GUM's energy relaxes any uniform topological density to zero — solving the "strong-CP problem" without an axion (🟧 K-3), judged by electric-dipole-moment searches (Stake S11).

## 13.6 Anomalies: the vacuum's bathroom tile

⬛ A symmetry carrying a force must not fail in the quantum theory; for the Standard Model that means six conditions on each family's charges. Do the famous one with fractions. Left-handed states and hypercharges: quark doublet (6 states, 1/6), anti-up (3, −2/3), anti-down (3, +1/3), lepton doublet (2, −1/2), positron-like (1, +1):

**6(1/6)³ + 3(−2/3)³ + 3(1/3)³ + 2(−1/2)³ + 1 = (1 − 32 + 4 − 9 + 36)/36 = 0.** ✓

The others cancel likewise (Proposition 20). The Standard Model gives *no reason* for the conspiracy, and the color count is load-bearing: drop the 3's and it fails.

**STEP-UP — the tile.** A repeating floor pattern continues forever only if each tile carries zero net "twist." In GUM, charges are winding fractions of one network, a family decorates one cell, and a periodic cell cannot carry net topological flux. The six conditions are six ways a tile could fail to fit — including the charge tiling 3(2/3) + 3(−1/3) + (−1) + 0 = 0. 🟨 That these are the *necessary* conditions of the texture theory is posed (🟧 K-EW-II); being the Standard Model's own sums, they don't discriminate.

**CP by holonomy.** Carry a frame around the network's cells and divide out re-phasings: exactly (N − 1)(N − 2)/2 phases survive — none for two families, one for three. 🟩 ⬛ That is Kobayashi and Maskawa's 1973 count, which predicted a third generation. GUM adds that N = 3 is an *output*, the phase is geometric, and its sign is welded to the vacuum's handedness (Chapter 15). Quark knots are tethered to the network, so their mixing is small; lepton knots float free against a helix-set neutrino basis, so theirs is large; and the network's reflection symmetry gives θ₂₃ → 45°, δ_CP → −π/2 (Stake S10).

## 13.7 The audit of this chapter

Everything here is *non-circular* (the principles weren't chosen to produce it) and *non-discriminating* (the Standard Model entails ρ = 1, the coupling identity, Yukawa proportionality, the anomaly sums, the phase count, and confinement). The paper's audit table prints **No** in the "discriminating" column for every row of this chapter. That is not failure: a deeper layer *should* reproduce the shallower layer's rules, and a material that couldn't produce ρ = 1 would already be dead. But matching is consistency, not discovery; GUM's discriminating content lives in Chapters 5–8, 10–12, 14, and 15.

**NUMBERS TO HOLD.** ϑ = 0.55 → sin²θ_w = 0.232, M_Z/M_W = 1.141 (observed 1.134). g ≈ 0.65, α_w ≈ 1/30. Δρ_top ≈ 0.93%. N_ν = 2.9963 ± 0.0074. σ ≈ 0.19 GeV² ≈ 16 tonnes-force. α′ = 0.84 vs 0.88 GeV⁻². CP phases (N − 1)(N − 2)/2.

**CHEW ON THIS.** (13.1 ★) Diagonalize 𝕄² fully and derive ρ = 1; with ϑ = 0.55 compute sin²θ_w and M_Z/M_W. (13.2) Extract g and α_w = g²/4π from G_F and M_W, and retire "the weak coupling is small" in one sentence. (13.3) Prove: m_f = M₀e^{−I_f} with lock-independent I_f gives g_hff ∝ m_f; then show an additive law gives g_hff ∝ 1/m_f. (13.4) State the dichotomy theorem, and predict something about the charges of any new *massless* force carrier. (13.5) Verify 3 × (1/6) + (−1/2) = 0 for the [SU(2)]²Y sum; what does the 3 count? (13.6) Convert σ = 0.19 GeV² to GeV/fm and newtons (ħc = 0.197 GeV·fm). (13.7) How many CP phases would four families have? (13.8) Why is "GUM reproduces ρ = 1" good news for GUM but not evidence *for* it over the Standard Model?

---
# PART VII — THE COSMOS AND THE ONE BIT

# CHAPTER 14 — DARK ENERGY WITH A PULSE; GRAVITY FROM DEFECTS; ONE GUESS IN THE DARK

**What you'll be able to do after this chapter:** (1) Reproduce the worst prediction in physics and GUM's defusal of it. (2) Derive GUM's one-parameter dark-energy family and read three theorems off it. (3) Explain why the family is an equation Dvali and Turner wrote in 2003, and why that helps. (4) State what galaxy surveys prefer and GUM's pre-registered retirement sentence. (5) Explain how the same slow mode could make neutrinos lighter in the past. (6) Build both charges of Einstein–Cartan geometry with scissors, and say what GUM's gravity lacks — including one withdrawn sentence. (7) State GUM's dark-matter guess and a second guess about a glow.

## 14.1 The worst prediction in physics, and the equilibrium defusal

⬛ Give every field mode a zero-point energy ħω/2, add up to a cutoff length L, and the vacuum's energy density comes out near ħc/L⁴: about 10¹¹³ J/m³ for the Planck length. The observed dark-energy density is about 6×10⁻¹⁰ J/m³ — a mismatch of about 10¹²³. Even GUM's grain size leaves ħc/ℓ_s⁴ ≳ 6×10⁸¹ J/m³.

GUM's defusal is Grigory Volovik's insight, borrowed (🟪): **the estimate answers the wrong question.** For a *self-sustained* material — one that sets its own density with no container — equilibrium forces the pressure on its surroundings to vanish, and a thermodynamic identity (Gibbs–Duhem) cancels the zero-point budget against the material's own binding. ⬛ A droplet of superfluid helium floating in space really does this: furious zero-point motion inside, zero pressure outside. The huge number is bookkeeping; only *departures from equilibrium* gravitate. Honesty clause: that gravity is sourced by this equilibrium quantity is imported, not derived, and everything below inherits the condition. (And since BPS knots have zero internal pressure, knot matter is cosmological "dust," as ordinary matter should be.)

## 14.2 The lag, and the family

The departure is the *lag* of a slow mode behind cosmic expansion. The vacuum energy has a minimum at the mode's equilibrium value; as space expands the mode falls behind by δq ∝ H/Γ_r (H the expansion rate, Γ_r the relaxation rate), leaving the energy of a displacement from a stable minimum:

**ρ_DE ≈ ½𝒳⁻¹δq² > 0** — positive, and small because the universe is old and nearly relaxed. 🟩

The revision adds: **the slow coordinate is the pitch wavenumber q of Chapter 6.** Dark energy, the neutrino mass, and the far-infrared edge are one variable (cross-lock X-Λν). Now let **Γ_r ∝ Hⁿ**. Then ρ_DE ∝ H^{2(1−n)}, and (★ problem 14.2)

**w_DE = −n/[1 − (1 − n)Ω_DE],**

with Ω_DE dark energy's share of the total (🟩 Proposition 22). Three theorems, no calculus:

- **w stays between −1 and 0.** Since Ω_DE ≤ 1, |w| ≤ 1: never "phantom." n = 1 is a cosmological constant (w = −1); n = 0 behaves like matter (w = 0).
- **The constant-rate member doesn't accelerate** (Corollary 6), so n ≠ 0; acceleration today needs **n > ½(1/Ω_DE − 1) ≈ 0.22** (Proposition 23).
- **Dark energy was less negative in the past.** w depends on time only through Ω_DE, which grows, so w *falls* toward −1 as the universe ages: in the standard form w(a) = w₀ + w_a(1 − a), **w_a ≥ 0 for every member**, and w never crosses −1 (Proposition 24).

Track through (w₀, w_a): (0, 0) at n = 0; (−0.52, +0.27) at 0.25; (−0.76, +0.29) at 0.5; (−0.91, +0.16) at 0.75; (−0.97, +0.06) at 0.9; (−1, 0) at 1. Early on it is negligible for n ≳ 0.3 — about 3×10⁻⁵ of matter at recombination for n = ½ (Proposition 25).

**TRY THIS (calculator).** With Ω_DE = 0.69: n = 0.5 gives w₀ = −0.5/0.655 = −0.763; n = 0.9 gives −0.9/0.931 = −0.967. Sketch w₀ against n: it never crosses −1.

**STEP-UP — why a lag looks like dark energy.** Drag a pendulum sideways with a hand that slows down. The pendulum lags, and the stored energy fades as the hand slows — never negative, never overshooting. An aging universe expands ever more slowly relative to its size; that picture is why w stays between −1 and 0.

## 14.3 An equation that was already written

Put ρ_DE ∝ H^{2(1−n)} into the Friedmann equation: **H² − Ω_DE,0 H₀^{2n}H^{2(1−n)} = (8πG/3)ρ_m.** ⬛ That is the "modified Friedmann equation" Gia Dvali and Michael Turner proposed in 2003, H² − H^α/r_c^{2−α} = (8πG/3)ρ_m. 🟩 **Proposition 26:** GUM's family *is* the Dvali–Turner family with **α_DT = 2(1 − n).** The n = ½ member is the self-accelerating background of the Dvali–Gabadadze–Porrati (DGP) "braneworld," where gravity leaks into an extra dimension; n = 1 is Λ.

**WHAT CHANGED.** The earlier draft called the family new; it isn't. The equivalence cuts both ways. It removes a novelty claim — but every existing Dvali–Turner fit to distance data now applies to GUM for free (⬛ the DGP background fits worse than ΛCDM). And it sharpens what *is* GUM's: a material lag, not extra-dimensional leakage, so structures grow differently — no brane, no brane-bending mode, no ghost. At the same background expansion, *growth of structure* separates GUM from the braneworld. That, with the value of n, is 🟧 **K-12**.

## 14.4 The exposure, and the pre-registration

⬛ DESI's second data release, with the microwave background and supernovae, prefers w₀ > −1 with **w_a < 0** — dark energy *more* negative in the past, crossing −1 — at about 2.8–4.2 standard deviations. **No member of GUM's family can reach that region;** its closest point is Λ itself, which those data disfavor. GUM prints three things: n is computable (K-12, Stake S18); w_a ≥ 0 is *unconditional* (Stake S19); and, before Euclid and final DESI:

> **If the combined analysis prefers w_a < 0 with w₀ > −1 at three standard deviations or more, in a parametrization that does not force the crossing, GUM retires its dark-energy sector and admits no second mechanism without a new flag.**

The last clause matters most. A theory that can always add "a second mechanism" has no dark-energy prediction.

## 14.5 Neutrinos that were lighter in the past

If the slow coordinate is the pitch, and the neutrino mass is the pitch quantum, the lag that makes dark energy also moves the neutrino mass. 🟩 **Proposition 27** (conditional on those identifications):

**m₃(a) = m₃,eq[1 + ε_ν(H(a)/H₀)^{1−n}],**

with ε_ν today's lag as a fraction of the equilibrium pitch. If expansion *stretches* the helix, ε_ν < 0 and **neutrinos were lighter in the past.** This is Chapter 12's door: ⬛ cosmological bounds weigh past epochs; beta-decay experiments weigh today's mass. In GUM they are different numbers.

The price, printed at once: lowering the inferred mass at redshifts 1–3 by 10–25% needs a large lag — ε_ν ≈ −0.2 for n = ½, −0.3 to −0.5 for n = 0.8 — so the linear formula fails by redshifts of ten to a hundred, and ⬛ models where neutrino mass tracks dark energy are known to suffer instabilities. GUM's coupling is geometric, but its stability must be *shown* (🟧 **K-23**). **Stake S27:** the laboratory mass should exceed the cosmological inference, with a redshift dependence fixed by the *same* n that fixes (w₀, w_a).

**TRY THIS (calculator).** The inferred-to-laboratory ratio at redshift z is [1 + ε_ν h^{1−n}]/(1 + ε_ν), with h = H/H₀ ≈ 3.0 at z = 2. For (n, ε_ν) = (0.5, −0.2): (1 − 0.2√3)/0.8 ≈ 0.82 — neutrinos about 18% lighter at z = 2.

**Bonus — the trough as a tomogram** (Corollary 7). The trough's blue edge measures *today's* pitch, but its red end sits at n̄p(z_s)(1 + z_s). Stacking far-infrared spectra by source redshift reads off p(z)/p(0): the history of the neutrino mass, from a dip in galaxy spectra. One variable, three observables — what a cross-lock buys.

## 14.6 Gravity from defects: curvature you can tape together

⬛ Crystallographers (Volterra; Kondo, Bilby, Kröner; Kleinert) showed that a lattice full of defects is a non-Euclidean space. **Disclinations** — rotational mismatches, like Chapter 6's cone — carry *curvature*; **dislocations** — cut, shift by one lattice step, re-glue — carry *torsion*: a loop around them fails to close by one step. A defected Cosserat lattice's continuum limit is **Einstein–Cartan geometry**, curvature plus torsion, with spin sourcing torsion.

**TRY THIS — build spacetime on your desk.** Draw two parallel lines on a paper disc, cut a wedge, and cone it: the lines converge — curvature. Cut a strip halfway across, slide one side of the cut by one ruled line, and tape; count equal steps around a rectangle enclosing the cut's end: it fails to close by one. Torsion. Both charges of Einstein–Cartan geometry, made with scissors.

GUM claims exactly this *kinematic* dictionary 🟩: knots are defects; defects strain each other; test knots follow the geodesics of the strain; and the equivalence principle is structural, since every clock and rod is an excitation of one material (⬛ MICROSCOPE confirms free-fall universality at 10⁻¹⁵ — an inverse kill survived, not a triumph). The *dynamics* is not earned: Einstein's equations need the emergent geometry's kinetic energy to have the right sign, which GUM has not shown (🟧 **K-G**), so it builds nothing on it.

**WHAT CHANGED.** The earlier draft said gravitational waves are transverse strain waves of the displacement, at √(µ/ρ₀). By Chapter 3's Proposition 1, those waves are locked to the grain rotation — **they are the photon.** So the graviton cannot be a linear transverse elastic mode, and K-G must find its carrier elsewhere in the defect geometry (perhaps a collective defect-density mode), with a speed that ⬛ the 2017 neutron-star merger GW170817 pins to c within ~10⁻¹⁵. One theorem, taken seriously, retired a sentence two chapters away.

## 14.7 Dark matter: absent, with one guess — and a second about a glow

No dark-matter candidate is *derived*, and the paper prints the deficit plainly. Its one candidate is a 🟥 GUESS (🟧 **K-17**): charge is a disclination *dressing* (Chapter 6), and nothing forbids an *undressed* knot — a stable, sterile fermion per family class, born in pairs at early-universe "pinches," feeling only gravity and the fog. Kills: overclosing the universe, or (if ever hot) erasing small-scale structure the Lyman-α forest shows.

The revision adds 🟥 **Conjecture 1**: an undressed pair might acquire *opposite* dressings at a tearing event and emerge as an electron–positron pair, injecting low-energy positrons at a rate ∝ (dark-matter density)². ⬛ The Galaxy's center glows in the 511 keV positron-annihilation line, concentrated in the bulge, with positrons injected below a few MeV (else they would annihilate in flight) — two features ordinary sources explain with difficulty, and both natural here if the undressed mass m_u ≥ m_e is close to m_e. 🟧 **K-21** owes the threshold and rate; kills are m_u < m_e (process closed), a glow not tracking density squared, or a rate clashing with K-17's abundance. A guess, labeled, with a way to lose.

**NUMBERS TO HOLD.** ρ_Λ ≈ 6×10⁻¹⁰ J/m³; naive 10¹¹³ (Planck) or ≳ 6×10⁸¹ J/m³ (ℓ_s). n_min ≈ 0.22. Family: w₀ ∈ [−1, 0], w_a ≥ 0; n = ½ → (−0.76, +0.29). α_DT = 2(1 − n); n = ½ is DGP. DESI DR2: w_a < 0 at 2.8–4.2σ. Drift ε_ν ≈ −0.2 (n = ½). MICROSCOPE 10⁻¹⁵; |c_GW/c − 1| ≲ 10⁻¹⁵.

**CHEW ON THIS.** (14.1 ★) Compute ħc/L⁴ (ħc = 3.16×10⁻²⁶ J·m) for L = 1.6×10⁻³⁵ m and 1.5×10⁻²⁷ m; count orders of magnitude against 6×10⁻¹⁰ J/m³; write the Volovik sentence and the question it leaves. (14.2 ★) From ρ_DE ∝ H^{2(1−n)}, d ln H²/d ln a = −3(1 + Ω_DE w_DE), and continuity, d ln ρ_DE/d ln a = −3(1 + w_DE), derive w_DE. (14.3) Show that q_dec = ½(1 + 3w₀Ω_DE) < 0 requires Ω_DE(1 + 2n) > 1; evaluate n_min for Ω_DE = 0.69. (14.4) Argue w_a ≥ 0 from "w depends on time through Ω_DE, which grows." (14.5) What α_DT goes with n = 0.75? Why does the n = ½ member grow structure differently from DGP? (14.6) Compute the drift ratio at z = 2 for (n, ε_ν) = (0.8, −0.3), h = 3.0. (14.7) In three sentences, why can't gravitational waves be transverse elastic waves in GUM? (14.8) Why must m_u ≥ m_e for Conjecture 1's process to run?

---
# CHAPTER 15 — THE ONE BIT

**What you'll be able to do after this chapter:** (1) Explain a sign chain and why it is a *parity check*. (2) List GUM's links, and say which apparent link is not one. (3) State GUM's prediction for the rotation of the microwave background's polarization, and the flagged extension that could change it. (4) Explain the "endpoint property." (5) Argue that the bit is the same across the observable universe. (6) Outline a torsion-balance test of the vacuum's handedness. (7) Recite GUM's pre-registered sentences.

## 15.1 A parity check on the vacuum

GUM's most distinctive structural claim: *one global sign* — the handedness s = ±1 of the vacuum's chiral condensate — fixes several observable signs at once, signs the Standard Model treats as independent (cross-lock C-EW1). Write each as O_i = ε_i s, with ε_i computed by the theory. Then every pair must satisfy O_iO_j = ε_iε_j whatever s is: **a parity check**. A chain of k links and one free bit has k − 1 checks. 🟩 (Definition 8, Proposition 28.)

The links: **(i)** which chirality the weak force grips — measured *left*, the anchor that fixes s; **(ii)** the orientation of the family ladder, not independently observable; **(iii)** the sign of the neutrino CP phase δ_CP, predicted → −π/2 with θ₂₃ → 45°. ⬛ DUNE and Hyper-Kamiokande are built to measure exactly these. With the anchor fixed, **the chain has one testable check today: the sign of δ_CP** (Stake S10).

**And one non-link.** By Chapter 14, w_a ≥ 0 for every member of the dark-energy family *whatever s is*. The drift's direction is not a readout of the bit but an unconditional prediction: a confirmed w_a < 0 cannot be absorbed by flipping s or recomputing any ε_i. The paper prints this (Proposition 28(ii)) so that nobody — including GUM — can later call it a sign convention.

**STEP-UP — the corkscrew vacuum.** A corkscrew bites one way. If empty space is faintly corkscrewed, processes that must "thread" it — weak decays — work for one handedness and fail for its mirror. ⬛ Chien-Shiung Wu's 1957 cobalt-60 experiment first noticed the vacuum's thread direction; GUM's chain says it shows up again in a neutrino beam.

## 15.2 The rotation of the sky

⬛ The microwave background's polarization appears rotated by a small angle β: about 0.34° ± 0.09° in Planck plus WMAP data (3.6 standard deviations) and 0.22° ± 0.07° in an independent Atacama Cosmology Telescope analysis (2.9), same sign, and *the same at every frequency*.

**GUM's core predicts β = 0 at microwave frequencies.** Light's achirality (Chapter 4) suppresses handed effects hopelessly, and the helix could produce only a frequency-squared rotation (Chapter 6), while the observed one is flat. If the Simons Observatory or LiteBIRD confirms β ≠ 0, GUM's electromagnetic achirality is retired (**Stake S20**, default arm).

**The flagged extension (🟥, 🟧 K-8).** The condensate's order parameter lives on the same slow manifold as the dark-energy lag. If it evolves over cosmic time, the handed sector could induce a term Θ E·B for light, with Θ a function of the order parameter — ⬛ and such a term rotates polarization equally at all frequencies. K-8 is not built upon; but it is GUM's only route to a flat rotation, so a confirmed β ≠ 0 would make it mandatory.

## 15.3 The endpoint property

🟩 **Proposition 29.** For light whose wavelength is short compared with the scale over which Θ varies, the polarization of a ray from emission event e to observation event o rotates by

**β = ½g_Θ[Θ(o) − Θ(e)]**

— *independent of the path between and of frequency.* Only the endpoints matter.

**STEP-UP — the hike.** Your change in altitude depends only on where you start and finish, not on the hills between. The rotation is the same kind of quantity: a ray crossing a thousand ups and downs of Θ ends rotated by the difference between its final and initial values.

Consequences: **(i) no scrambling** — fog-scale fluctuations of Θ neither accumulate nor random-walk, so there is no depolarization at leading order (correcting the tempting guess that a random chiral fog would blur the background's polarization); **(ii) a map of the past** — the background measures Θ(now) − Θ(last scattering), so any sky pattern in β maps Θ on the last-scattering surface; **(iii) a cross-check** — nearer sources must show β(z_s)/β_CMB = [Θ(o) − Θ(z_s)]/[Θ(o) − Θ(z_rec)]. K-8 must deliver Θ, its history, and the resulting rotation, sign, pattern, and ratio. Kill: a sign mismatch with the weak anchor, a magnitude off the observed band, or a violated ratio. If it succeeds, birefringence becomes a new link — a second parity check.

## 15.4 Is the bit the same everywhere?

⬛ When a symmetry breaks as the young universe cools, causally separate regions can choose differently, leaving domains and walls (Kibble, 1976); and wall networks with surface tension above about (1 MeV)³ either dominate the universe's energy or distort the microwave background beyond what is seen (Zel'dovich–Kobzarev–Okun). 🟩 **Proposition 30** applies this to GUM. Across a wall, weak chirality, δ_CP's sign, and any birefringence sign all flip *together*, so every observer sees the same internal chain; domains differ only by sign flips of β across the sky. And GUM's walls are *heavy*: flipping weak chirality means reorganizing every knot's core and the electroweak vacuum, so σ_w^{1/3} is at least of order the weak scale — far above the danger line. So the bit must have been chosen before or during inflation, and **GUM predicts one domain across the observable universe: a uniform sign of β wherever K-8 makes it nonzero (Stake S30).** Sign-flipping patches would retire the heavy walls or the chain itself.

## 15.5 A mirror test of short-range forces

🟩 **Proposition 31 (the mirror identity).** If both the laws and the vacuum were mirror-symmetric, the interaction energy of two bodies would equal that of their mirror images. For a left-handed helix L and its mirror R: U_LL = U_RR and U_LR = U_RL. In a vacuum with handedness s the differences are odd in s:

**U_LL − U_RR = s𝒜(r) + …,  U_LR − U_RL = sℬ(r) + … .**

⬛ In the Standard Model alone, only weak neutral currents contribute, utterly negligible at micrometers.

**STEP-UP — gloves in a corkscrew breeze.** Two left gloves and two right gloves hung in still air swing as mirror images. Let a *corkscrew* breeze blow and they need not, because the breeze has a handedness. GUM's vacuum is the breeze, with a natural range of the fog's correlation length — a few to tens of micrometers (the pitch is 22–25 µm).

⬛ That is where precision short-range gravity and Casimir-force experiments already operate. The test (Stake S26): microfabricated chiral test masses — helical or gyroid metamaterials — in both handednesses, and four force measurements F_LL, F_RR, F_LR, F_RL at 3–25 µm. Built-in controls: both differences must be nonzero with agreeing signs (both odd in s) and vanish in a mirror-symmetric world, and swapping masses between mounts cancels fabrication asymmetry. A molecular arm exists too: ⬛ the Standard Model predicts tiny, still-unobserved energy differences between mirror-image molecules (10⁻¹⁷–10⁻¹⁴ relative), and a vacuum-handedness term would scale differently with nuclear charge. The expected size is 🟧 **K-20**, whose prediction sets the level at which a null result kills. A sign-consistent F_LL − F_RR at micrometer range would be the first direct detection of the vacuum's handedness.

**TRY THIS (mirror helices).** Twist two pipe cleaners into helices of opposite handedness. Convince yourself no rotation turns one into the other. Now imagine the force between two left-handed helices differing from that between two right-handed ones — and what that would mean.

## 15.6 Sentences stated in advance

GUM states, before the measurements (paper §X E):

- **If DUNE or Hyper-Kamiokande find δ_CP with the sign opposite to the chain's at three standard deviations, the chain is broken.**
- **If Euclid or DESI confirm w_a < 0 with w₀ > −1 at three standard deviations, the dark-energy family is retired.**
- **If the Simons Observatory or LiteBIRD confirm β ≠ 0, the core's achirality is retired, and K-8 must execute or the electromagnetic sector's chirality claims are withdrawn.**
- **If birefringence maps show sign-flipping patches, the single-domain prediction is retired.**

A chain that cannot be broken by a scheduled measurement is not a chain.

**NUMBERS TO HOLD.** δ_CP → −π/2; θ₂₃ → 45°. Observed β: 0.34° ± 0.09° (3.6σ), 0.22° ± 0.07° (2.9σ), same sign, frequency-flat. GUM core: β = 0. Wall danger: σ_w^{1/3} ≳ 1 MeV. Mirror-force range: 3–25 µm. Molecular parity violation: 10⁻¹⁷–10⁻¹⁴, unobserved.

**CHEW ON THIS.** (15.1) With links O₁, O₃, O₅ and one bit, write the two independent parity checks. (15.2) Why can't "w_a > 0" be rescued by flipping the bit? (15.3) "A chiral vacuum obviously rotates polarization, so β ≠ 0 confirms GUM." Correct this: what does the core predict, what would the helix do, and what does frequency-flatness rule out? (15.4) Θ varies wildly along a ray but has the same value at both ends. What rotation results, and what does that imply for depolarization? (15.5) Why must GUM's walls be heavy, and why does that imply one domain? (15.6) In the mirror-force experiment, why measure both differences, and why swap mounts? (15.7) Rank the four pre-registered sentences by how soon each will be judged, one line each.

---
# PART VIII — ADJUDICATION

# CHAPTER 16 — HOW A THEORY BETS ITS LIFE, CORRECTS ITSELF, AND MAKES YOU AN AUDITOR

**What you'll be able to do after this chapter — and after this primer:** (1) Apply GUM's audit criterion — *non-circular* versus *discriminating* — to any claim. (2) Tell a landing from a test. (3) Rank GUM's stakes by damage and sort them by kind. (4) Read a corrections list as evidence about a theory's process. (5) Carry seven reflexes out of physics into everything else.

## 16.1 The audit criterion

GUM applies to itself the ordinary standard of consilience, made explicit (paper Definition 9):

> A postulate **non-circularly explains** a fact if it was *not adopted because the fact is known*, or if it entails distinct, testable facts not used in its selection. A postulate **discriminates** between two theories if some fact it entails is *not* entailed by the competitor.

Run it over the primer. **Circular, and printed as such:** light is gapless (objectivity was adopted to forbid a photon mass), light is *exactly* lightlike (the cone condition was imported for it), and electrodynamics is exactly Maxwell's for every c_L (the Gauss completion was adopted to recover Gauss's law). Each earns credit only through consequences nobody asked for — achirality and stability of light, the wider matter cone, a material that realizes one physical gauge. **Non-circular but non-discriminating:** ρ = 1, e = g sin θ_w, the anomaly sums, the Kobayashi–Maskawa count, confinement — the Standard Model entails them too. **Discriminating:** finite c_L in the quantum tower, the dense-storage cliff, the far-infrared trough, the relaxation family, the neutrino drift, the physical clock, the vacuum's handedness, the two-scale electron, and (if alternative b) the band edge.

The pattern is the finding, and the paper states it about itself: *its derived results are almost all non-circular and almost all non-discriminating; the discriminating content lives in the material's unavoidable signatures.* The revision moved one signature out of electromagnetism into the tower, and added four by taking the material literally: the physical clock, the band edge, the drifting pitch, and handedness at micrometer range.

**STEP-UP — two detectives.** Two detectives explain the same clues equally well. The one who says "and when we find the suspect, there will be red clay on the left boot, and nowhere else" has done something the other hasn't. Non-circular is about how the theory was built; discriminating is about the boot.

## 16.2 Landings and tests

Theory band ±δ_th, experimental uncertainty ±δ_exp. **Test** if δ_th ≲ 3δ_exp; **landing** if δ_th ≳ 10δ_exp (Definition 10). A landing is reported as "consistent within ±δ_th," never as a pull in σ. GUM's lepton logarithms are landings by factors of 10³–10⁴ (Chapter 12). Apply this to the next "stunning agreement" you read about, in any field.

## 16.3 The death list, ranked

Thirty stakes are too many to hold at once. Here are the nine that would do the most damage:

| Stake | The bet | What dies if it fails |
|---|---|---|
| S16 + S29 | A gate-independent mirror-circuit cliff near log₂N_eff (234–329 qubits under bulk hosting) that moves with the hosting knob | Dense storage: GUM's account of how a local material keeps quantum books |
| S28 | Finite c_L: sidereal Bell timing; a multipartite (Bancal–Barnea) deviation | The tower's finite update speed — or, if seen, the discovery of the material frame |
| S22 | A far-infrared trough with a fixed blue edge at n̄p ∈ 21.8–24.7 µm, dipole-shifted, circularly polarized | The helical vacuum's coupling to light (K-11) |
| S24 | Channeling resonance at 80.87 / 84.26 / 53.12 MeV/c | The physical-clock reading of de Broglie's clock |
| S26 | F_LL − F_RR ≠ 0 at 3–25 µm | Vacuum handedness at micrometer range |
| S19 | w_a ≥ 0 | The dark-energy sector, with no second mechanism |
| S1 + S27 | Σm_ν ∈ [0.058, 0.11] eV, normal ordering; laboratory mass above the cosmological inference | The neutrino as pitch quantum, and its drift |
| S21 | Electron core < 10⁻¹⁹ m; no e\* below a TeV | The two-scale electron (already judged by archives) |
| S13 | A valid bench knot with a measured j | Flag F-B1: spin ½ becomes a permission, not a prediction |

The list sorts itself. S16/S29, S28, S22, S24, and S26 are *ontological*: they probe signatures a material cannot hide, and a positive result in any of them would be the discovery of the material. S19 and S1/S27 are *sector-level*: they can kill a sector and leave the rest standing. S13 and S21 are *mathematical or archival*: settled on a bench or in old data, with no cosmological excuses. Learn to sort any theory's bets this way. Most "theories of everything" you meet online have no bets that sort at all.

## 16.4 Fifteen corrections — and counting

The paper's §XI E lists fifteen corrections to GUM's earlier draft. Grouped, they teach more than any single theorem:

- **Bookkeeping (1, 2, 3, 15):** a kinetic coefficient, the gap stiffness, the halo length, the notation — the audit K-N.
- **Retractions forced by theorems (6, 7, 8):** the near-field channel, the (c/c_L)³ "radiation," the untestable qubit ceiling.
- **Mis-modeled physics (11, 12, 14):** a trough, not a line; gravitational waves are not transverse elastic waves; the endpoint property.
- **Bounds and ranges fixed (9, 10):** the grain size from data; a pitch window consistent with the neutrino floor.
- **Simplifications (4, 5):** light exactly lightlike from one stiffness relation; P5 unnecessary.
- **Credit (13):** the relaxation family is Dvali and Turner's (with Kelvin's and Böhmer's precedents cited).

Notice the pattern: nearly every retraction came with a *sharper* replacement. The near-field channel became a finite-speed test of quantum correlations; the ceiling became a mirror-circuit cliff with a knob; the line became a trough with three controls.

And the list is never finished. Writing this primer against the paper found two errors in the revision's own first printing: the direction of the neutrino √2 in the audit (Chapter 12, "A SLIP, CAUGHT") and the matter–light cone at the weak-scale gap (Chapter 2). The paper now prints them as **errata E1 and E2**, beside its fifteen corrections. Neither was found by cleverness. Both were found because the paper writes down every conversion, so that anyone can redo it. That is what a ledger is for.

## 16.5 The kit, packed for travel

Seven reflexes, bought with one primer about a speculative material, that work on everything:

1. **Tag before you believe.** Established, follows-from-assumptions, estimated-with-stated-error, computed, borrowed, guess, owed? The tag decides what checking a claim deserves.
2. **Ask "what would kill this?" first.** If the honest answer is "nothing specific," you are looking at a mood. Then ask who adjudicates, and whether the proponents control them.
3. **Demand the error bar, then its pedigree.** A number without uncertainty is decoration; an uncertainty without method is decoration with confidence.
4. **Sort consistency from discrimination.** "Consistent with" is a bar every surviving theory clears. "Predicts something the rival doesn't" is the only bar that moves belief.
5. **Tell a landing from a test** before you let anyone say "sigma."
6. **Price the owed computations.** A theory's list of posed closures is as informative as its list of theorems. A theory with none is either finished or not looking.
7. **Keep a corrections list — and read other people's.** A public record of errors is evidence that the machinery works. A spotless record usually means nobody checked.

## 16.6 Reading a headline, worked example

*"Physicists predict quantum computers will hit a wall at 300 qubits."* Run the kit. **Tag:** a theorem *given* a hypothesis (dense storage) — the headline dropped the "given." **Kill:** a flat mirror-circuit return probability through 350 qubits with verified scrambling. **Error bar:** 234–329 qubits under one hosting hypothesis, set by an unknown grain size, plus up to ~8 more; other hypotheses give 152–219 or 196–317. **Discrimination:** yes — standard quantum mechanics predicts no cliff. **Landing or test:** a test, of a *shape* (halving per qubit, depth-independent) and a *knob dependence*, not just a number. **Owed:** which hosting mode (K-24). **Corrections:** an earlier version of this claim was untestable; check which version is being quoted. The strongest sentence the evidence licenses: *a speculative program predicts that, if a stated hypothesis about how nature stores quantum states holds, a specific scramble-and-unscramble test will fail abruptly somewhere near 230–330 qubits, at a point that moves with chip size; standard quantum mechanics predicts no failure; nobody has run the test yet.* Sixty seconds, seven questions, a calibrated read.

## 16.7 The last word on GUM, and on you

This primer taught you a theory that might be wrong, and meant it. If S19 fires, Chapter 14 becomes a monument to a relaxation law nature declined, and Chapters 2–13 need not change a word, because they never claimed more than they could defend. If S16 and S29 fire the wrong way, dense storage goes, and with it GUM's picture of how a local material keeps quantum books. If the benches, the crystals, the far-infrared archives, and the torsion balances all come back positive, then you were among the first people to understand, properly, what the vacuum might be made of. And whatever happens, you have now watched a theory correct itself fifteen times in public — and then twice more, when this primer caught two slips that the paper now prints as errata. You own the machinery that makes the difference between those futures *knowable*. GUM ends its documents with a standing line, and it belongs to you now: **standing by for adjudication.**

---

## GLOSSARY (selected)

**Audit (non-circular / discriminating)** — a postulate explains non-circularly if not chosen for the fact, or if it predicts others; it discriminates if a rival doesn't predict the same. **Band edge** — a gapped branch's lowest frequency; for a knot at κ = 1/√2, √2Mc². **Blue fog** — an amorphous double-twist network: helical locally, directionless overall; GUM's vacuum (F13). **Bogomolny trick** — writing energy as a square plus a topological count, so knot masses are computable. **Bragg passage** — a photon redshifted *through* a helix's reflection band, reflecting a fraction 1 − e^{−Π}. **c_L-causal model** — correlations updated at a finite speed c_L in a preferred frame. **Cliff** — the gate-independent drop of mirror-circuit return probability beyond log₂N_eff qubits under dense storage. **Closure** — the pair (C-spin) L = jħ and (C-clock) E = ħω that fixes a spinning knot. **Compacton** — a knot that ends sharply at finite radius; the electron's core. **Completion (T, G)** — how moving charge drives the grains; (T) is acausal, (G) is exactly Maxwell. **Cone condition** — µ/ρ₀ = γ_eff/2J, which makes light exactly lightlike (imported, K-16). **Core and halo** — the electron's two scales: a topological core at ℓ_s and an evanescent halo of length (c_ψ/c)ħ/Mc. **Cosserat continuum** — a continuum whose points carry orientation. **Cross-lock** — a weld making several predictions stand or fall together (C-EW1–4, C-L, X-Λν, X-νp). **Defect current** — the only possible source of departures from Maxwell's theory. **Dense storage** — the hypothesis that the material hosts quantum states Markovianly and target-blindly. **Dichotomy theorem** — a winding charge is confined iff its mediator is gapped. **Disclination** — a line defect of orientation; in GUM, charge. **Dvali–Turner family** — GUM's dark-energy background, α_DT = 2(1 − n). **Endpoint property** — Θ-birefringence depends only on Θ at emission and observation. **Errata (E1–E2)** — two errors in the revised paper's first printing, caught while this primer was written and now printed by the paper. **F-B1** — GUM's flagged commitment to the (1,1) spinning closure, under which spin ½ is unique. **Frustration class** — a discrete way a knot joins the vacuum helix; tau, muon, electron. **Heliknoton** — a linked (Hopf) texture of the helix itself; GUM's neutrino. **Holonomy** — rotation acquired by transport around a loop; Aharonov–Bohm as geometry. **Hosting hypothesis** — where the material keeps the tower: volume, cut, or qubit extent. **K-N** — the normalization audit of every inherited number. **Landing / test** — agreement within a theory band ten times wider / within three times the experiment's. **Level 0–3** — material; continuum; quantum; Standard-Model bookkeeping. **Material** — GUM's sole primitive, *that of which things are made*, prior to space, time, and force. **Mirror circuit** — scramble, then unscramble; the right answer is known without simulation. **Mirror identity** — U_LL = U_RR in a mirror-symmetric world; broken by a handed vacuum. **Neutrino drift** — the neutrino mass tracking the dark-energy lag; lighter in the past. **Objectivity** — energy depends on orientation only relative to the lattice; GUM's gauge principle. **Pitch** — the helix's repeat length, p/ζ_ν ∈ 21.8–24.7 µm. **Posed closure (K-n)** — an owed computation with deliverables and a kill. **Reachable set** — the states a circuit family can reach; far smaller than all states. **Re-graded (RG)** — a claim whose grade the revision changed. **Relaxation index (n)** — how the slow mode's relaxation scales with expansion. **Schmidt rank / capacity** — product terms a state needs / a material can hold. **Sign chain** — observable signs fixed by one bit; tested by parity checks. **Stake (S-n)** — a pre-registered result that would kill a claim. **Trough** — the fixed-edge, circularly polarized dip that Bragg passage leaves in far-infrared spectra. **Velocity gauge** — the gauge in which the scalar potential travels at a chosen speed; GUM's material realizes it at c_L.

---

## ANSWER-KEY NOTES (spot checks)

(1.2) 5/√(25 − v²) = 2 gives v ≈ 4.33 m/s. (2.1) √(7×10¹⁰/2700) ≈ 5,090 m/s. (2.5) κ ≈ 0.707 and κ/√(1 − κ²) = 1, so the correct halo is √2 longer. (2.6) ≈ 7×10⁻³⁰ (1 MeV); ≈ 4.6×10⁻²⁰ (80 GeV); ℓ_g ≲ 7×10⁻²⁸ m. (4.4) Both equal ½k²cos²(kx). (5.4) 5×10⁻¹³; 5×10⁻¹⁶. (5.5) ≈ 8 ns. (6.1) θ ≈ 48.6°. (6.2) 360° sin 41° ≈ 236°. (6.4) 24.65 and 21.75 µm; 12.2 and 13.8 THz. (6.5) Π ≈ 0.106, R ≈ 0.10. (6.6) 27.1 µm, yes; 32.0 µm needs Spitzer. (6.7) ≈ 14 µm (under one pitch) versus ≈ 8×10⁹ m (≈ 3×10¹⁴ pitches). (7.3) ½. (7.4) ≈ 8×10⁶; unchanged. (7.5) 3. (7.6) 28. (8.1) ≈ 234; ≈ 329. (8.4) ≈ 1.2×10⁶. (8.5) ≈ 190 ps, so c_L ≳ 5×10¹³ m/s ≈ 2×10⁵c. (8.6) 1.5×10⁻²⁷ m. (8.7) Only (c). (9.1) Winding 2. (9.2) (E₂, E₄) and (E₀, E₆); the minimum sits at λ⁶ = E₆/E₀, where the two terms are equal. (9.4) The inner integral is 16/15. (10.1) 1/6. (10.5) µ_c = 3m̃_V²/16. (10.6) 84.26 MeV/c; 40.44 MeV/c. (10.7) 0; ≈ 3.5×10⁻⁵. (11.1) 197 MeV; any electron–positron collider since the 1970s. (11.2) 0.72 keV; 23 keV; X-ray spectroscopy. (11.6) κ ≈ 0.778. (12.1) 2.822, 5.332, 1.889. (12.3) e^{±0.90} ≈ ×/÷ 2.46: 0.019 and 0.115 eV. (12.4) ≈ 0.10 eV. (12.5) 0.047 eV (corrected halo), 0.066 eV (old halo); the floor sits ≈ 0.3σ below the larger center, so S1's window stays inside the band. (13.1) 0.232; 1.141. (13.2) g ≈ 0.65, α_w ≈ 0.034 ≈ 1/30. (13.5) The three colors. (13.6) ≈ 0.96 GeV/fm ≈ 1.5×10⁵ N. (13.7) 3. (14.1) ≈ 4.8×10¹¹³ J/m³ (~123 orders); ≈ 6×10⁸¹ J/m³ (~91 orders). (14.3) n_min ≈ 0.225. (14.5) α_DT = 0.5; n = ½. (14.6) ≈ 0.89. (15.1) O₁O₃ = ε₁ε₃ and O₁O₅ = ε₁ε₅ (O₃O₅ is their product). (15.4) Zero; no depolarization.

---

## THE FINAL PROJECT

Choose ONE claim; audit it with the full kit; write three pages.

**(a)** "The photon is exactly lightlike in GUM." Trace objectivity and the cone condition, state what is imported, sort circular from non-circular (hint: c_ψ > c), and find the kill.
**(b)** "GUM's electrodynamics is exactly Maxwell's." Reconstruct the locality dichotomy, explain why F-G is circular, work through the energy fine print, and design the null test — including what a positive result would *measure*.
**(c)** "GUM predicts a wall for quantum computers." Reconstruct dimension counting, reachable sets, and dense storage; design a mirror-circuit experiment with a knob; then judge whether Schmidt hosting, which survives a flat result, is a legitimate alternative or a dodge.
**(d)** "A fixed far-infrared edge would reveal a helical vacuum." Derive the trough's fingerprints from Bragg passage, explain why the old 10⁻³¹ bound failed, and plan a stacking analysis with its three controls.
**(e)** "Electrons carry a real internal clock." Derive the channeling resonance, contrast it with zitterbewegung and standard quantum mechanics, assess the unreplicated evidence, and design a three-crystal test.
**(f)** "GUM's dark energy is already disfavored." Derive w_a ≥ 0, locate the DESI preference, state the retirement sentence, steelman the view that the standard parametrization misleads, and explain what the Dvali–Turner equivalence changes about testing.
**(g)** "Neutrinos were lighter in the past." Explain the trap of Chapter 12, the drift that escapes it, its price (a large lag and a stability question), and the laboratory-versus-cosmology test — including the audit slip of §12.7.

Grading rubric — the primer's last table: *Tags correct (25%). Kill conditions identified (25%). Landings sorted from tests, consistency from discrimination (25%). The strongest sentence your evidence licenses — and not one word more (25%).*

**[END OF THE GUM MATERIAL PRIMER — DRAFT for review: 16 chapters, 8 parts, glossary, answer notes, final project. Standing by for adjudication.]**
