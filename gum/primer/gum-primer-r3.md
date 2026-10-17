# THE GUM SUBSTRATE PRIMER
## What Keeps the Books? A First Book on the GUM Program
### Revision 3 edition — DRAFT for review — for honors high-school and first-year undergraduate readers

*(Companion-at-introductory-level to revision 3 of the GUM paper, "Is There a Substrate Whose Coarse-Grained Bookkeeping Is Quantum Mechanics? — Geometrische Umdeutung Mechanik: An Inverse Umdeutung, Its Theorems, Closures, Corrections, and Stakes — Revision 3" (2026-10-17). Sixteen chapters in eight parts, a glossary, answer notes, and a final project. Every chapter maps onto sections of the paper; the map is printed at the end of the front matter, so that a reader who finishes the primer can open the paper and know where to stand. The first edition of this primer, "The GUM Material Primer," followed the paper's revision of 2026-09-28; this edition follows revision 3 and cites its numbering throughout.)*

---

## A LETTER TO YOU, BEFORE PAGE ONE

Dear reader,

This primer teaches you a theory that might be wrong — and that has already been caught being wrong, by itself, in print, more than once.

Most of the physics you know is *settled*. When your textbook says that energy is conserved or that light travels at 299,792,458 meters per second, it reports results tested millions of times. You can lean on them like a handrail.

This primer is different. It teaches a *speculative research program* called **GUM** — *Geometrische Umdeutung Mechanik*, German for roughly "the geometric reinterpretation of mechanics." GUM proposes that empty space is not empty, and that light, electrons, mass, charge, quantum mechanics itself, the three families of particles, and even the accelerating expansion of the universe are the bookkeeping of one underlying thing, which GUM calls **the substrate**.

Is that true? **Nobody knows.** GUM is not accepted by the physics community, and most of its decisive tests have not been run. What makes it worth your time is this: GUM writes down, in advance and in public, exactly which results would prove it wrong — twenty-nine of them, each with the instrument that will deliver the verdict. One concerns quantum computers of a few hundred qubits; one, the far-infrared spectra of distant galaxies; one, the expansion of the universe, where current data already lean against it.

And the second half of the first sentence. The paper this primer accompanies is the third revision of a draft, and every round has caught errors in the one before. The *master draft* (2026-09-06) made bold predictions. Two independent revisions, *r1* (2026-09-28) and *r2* (2026-10-14), tried to turn them into rigorous mathematics, and some broke. A prediction about electricity turned out to predict nothing. A headline about quantum computers turned out to be true but untestable. A spectral line turned out to be a broad trough, and a limit was wrong by fifteen powers of ten. Then an audit set r1 and r2 side by side, recomputed every number, re-derived the proofs, and found errors in both — among them an angle taken from the wrong minimum of an energy, a cap on the neutrino's mass that nothing derived, and a sign printed without saying which way counts as positive. *Revision 3* (2026-10-17), *r3* for short, merges r1 and r2, fixes what the audit found, and prints all of it: sixty-seven numbered corrections, each with its source, thirty-one of them new. The first edition of this primer, written against r1, caught two errors in r1's first printing; r3 carries them as corrections 3 and 4. You will meet the corrections in boxes labeled **WHAT CHANGED**.

So this primer has three subjects, braided on every page. **Physics** — real physics: waves, springs, spinning things, light, quantum mechanics — always marked, and true whatever happens to GUM. **How honest science handles a bold idea** — derivations you can check, error bars, "consistent with" sorted from "predicts," and bets placed in public. **How a theory corrects itself** — because a theory that has never been wrong about anything has usually never said anything.

**What you need:** comfortable algebra, basic trigonometry, vectors as arrows, and a first honors physics course. No calculus; where a professional would use it, this primer uses "rate of change" language and says so. Sections and problems marked ★ go one level deeper; skip them freely on a first pass. **What you need even more:** patience with not-knowing, and a taste for the question *"but how would anyone find out?"*

One promise: **this primer never lets you mistake speculation for fact.** The machinery for keeping that promise is on the next page.

— GUM

---

## THE RULES OF THIS PRIMER: NINE TAGS, A DEATH LIST, AND A CORRECTIONS LIST

Every important claim wears a tag. The tags are the primer's immune system; by the end you will be tagging claims yourself.

**⬛ REAL PHYSICS.** Textbook-true whether GUM lives or dies.

**🟩 PROVEN [the paper writes DF].** Follows *by logic and mathematics* from GUM's starting rules. PROVEN means the derivation is airtight, not that nature agrees; a perfect derivation from a wrong model is still wrong about the world.

**🟨 PROVEN-WITH-WINDOW [DW].** Derived with stated approximations and the size of the wiggle room *written down*. The paper also writes [DW-structural], for a structural statement that holds under named hypotheses, and [DW-conditional], for a result derived given a stated condition; both wear this tag, and the primer names the hypothesis or the condition each time.

**🟦 COMPUTED [CAL].** A derived mechanism whose rate comes from a calculation.

**🟪 BORROWED [IM].** Established physics imported from elsewhere, or a constant GUM cannot compute and takes from measurement.

**🟥 GUESS [CJ].** A conjecture inside the speculation. Nothing may be quietly built on it; it is lit up like a road flare.

**🟧 POSED.** A computation GUM *owes*, with named deliverables and a named kill. GUM's ledger has twenty-seven **closures**, Closures K-1 to K-27: ten executed or closed, four consistency conditions, three conjectures, one partially executed, and nine still posed. Only the posed ones wear this tag; the others wear the tag of what their execution delivered.

**⬜ NUMBER NOT SHOWN [N].** A value quoted from a calculation not reproduced in the paper. All of them were inherited from the master draft, whose bookkeeping r1 and r2 found inconsistent. r3 registers every one, with the grade of everything that depends on it (Appendix I), and holds them under the normalization audit, Closure K-3 (Chapter 3).

**🟫 RE-GRADED [RG].** A claim whose grade the paper *changed*, with the reason printed at the point of change.

**The death list.** Twenty-nine **stakes**, Stakes S1 to S29 — results that would kill a claim — including a standing battery of "if this is ever seen, GUM is dead" conditions (Stake S1). A theory that cannot tell you how to kill it is not being brave; it is being slippery.

**The corrections list.** Sixty-seven numbered corrections to GUM's own documents, in Sec. 11.6 of the paper. Corrections 1–36 are corrections of the master draft that r1 or r2 made and r3 keeps; corrections 37–67 are new in r3, and most of them correct r1, r2, or both. Each one that changes what you would compute appears in a **WHAT CHANGED** box: what was claimed, what was found, what the change costs or buys. Read those boxes slowly; they are where you watch self-correction actually happen.

**Labels.** r3 numbers everything in the order it appears: theorems, propositions, lemmas, corollaries, definitions and conjectures each have their own counter; flags are F1, F2, …; stakes S1, S2, …; closures K-1, K-2, …; cross-locks X1, X2, …. This primer cites r3's numbers. When it tells history it names the document whose label it quotes ("r1's S27"), because the same label meant different things in different drafts; the paper's Appendix K translates every old label into its new one.

**Reading tracks.** *Honors high-school:* everything except ★ sections; do the TRY THIS experiments and the plain CHEW ON THIS problems. *Undergraduate:* everything. Both: keep a notebook. Physics enters through the hand.

**The map to the paper.** Chapter 1 → paper Sec. 1. Chapters 2–3 → Sec. 2 (and Sec. 6.1). Chapter 4 → Secs. 2.3–2.4, 3.1–3.2, 3.6. Chapter 5 → Secs. 3.3–3.4, Appendices B, F. Chapter 6 → Sec. 3.5, Sec. 4, Appendix E. Chapter 7 → Secs. 5.1–5.4, Appendix C. Chapter 8 → Secs. 5.5–5.9, 9.6, Appendices C, F. Chapter 9 → Secs. 6.1–6.2, 7.1. Chapter 10 → Secs. 6.2–6.5. Chapter 11 → Secs. 7.2–7.3. Chapter 12 → Secs. 8.1–8.2, 4.2, 2.6. Chapter 13 → Secs. 8.3–8.5, Appendix G. Chapter 14 → Sec. 9, Appendix D. Chapter 15 → Sec. 10. Chapter 16 → Secs. 11–12 and the paper's tables.

---

# PART I — THE QUESTION

# CHAPTER 1 — THE OLDEST QUESTION AND A NEW WAY TO ASK IT

**What you'll be able to do after this chapter:** (1) Tell the "what is everything made of?" story and say precisely where it stops. (2) Explain what the aether was, why it was a good idea, and the two different reasons it died. (3) State Heisenberg's 1925 move and GUM's inversion of it, one sentence each. (4) Say what GUM means by *substrate*, why one of its drafts said "material" instead, and which technical terms still use that word. (5) State the GUM wager in its exact, deliberately humble form. (6) Explain why a theory that publishes its own corrections deserves more attention, not less.

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

> **"What substrate could possess the quantum formalism as its coarse-grained bookkeeping, and what would such a substrate be unable to hide?"**

The second half is the scientific half. A substrate that keeps the books must leave fingerprints — a speed, a size, a limit, a handedness. GUM's job is to name them before anyone looks, and to say where to look.

## 1.4 The word "substrate"

GUM calls its one primitive the **substrate**: that which exists before anything else in the story. The paper is careful about what the word does *not* mean. The substrate is not a *medium*, because a medium is something that fills space. It is not a *material*, because a material is something with properties in space and time. It is not a geometry, a force, a space, or a time. In GUM all of those are **response descriptions** of the substrate: bookkeeping of how it behaves when you blur out fine detail.

The word has a short history, and it is a good first lesson in how carefully the paper chooses words. The master draft said "substrate." r1 changed the word to "material," in the oldest sense — Latin *materia*, "that of which things are made" — because continuum mechanics gives that word exactly the right technical meanings. r2 changed it back, because "material" suggests a thing with properties sitting inside a space that already exists. r3 keeps "substrate" for the primitive, and keeps the technical terms where they are technical terms of the blurred-out description: the **material frame** (the frame in which the continuum description is at rest), **material points** (labels that stay attached to the same bit as it moves and deforms), and a **material description** (bookkeeping in which each bit's trajectory is primary). GUM needs all three, and none of them is a claim about what the substrate *is*.

GUM's levels of description:

- **Level 0 — the substrate.** GUM asserts only that it exists, with a structure of *adjacency* (what is next to what), *succession* (what comes after what), and a way of comparing the internal orientation of neighbors.
- **Level 1 — the continuum description.** Two fields on a parameter space (x, t): a **displacement** (how far each "grain" is pushed from its rest spot) and an **orientation** (which way each grain's little painted face points). Mathematically, a chiral micropolar or **Cosserat** continuum. It is *local*: every equation relates neighboring places and times. Chapter 5 shows that this locality has teeth.
- **Level 2 — the quantum description.** Bookkeeping of knots in those fields and of the fields' jitter.
- **Level 3 — the Standard-Model description.** Bookkeeping of how the knots respond.

How do you get from level 0, which has no distances at all, to level 1, which is full of them? The paper sets up the level-0 network in Definition 1 and answers with Proposition 1, the execution of Closure K-1, graded 🟨 [DW-structural]. Its hypothesis, called (H0), is that the level-0 network is statistically the same everywhere and in every direction, and that a random walker hopping along it spreads out the way heat spreads in three dimensions. Grant (H0), and blurring the network out produces a flat three-dimensional space, a time, a displacement field, an orientation field, and exactly the stored energy of Chapter 3. Read the grade carefully. The proposition does not show that *any* network of points-and-links turns into GUM's continuum; its hypotheses are the continuum's rules written in network language. Its genuine output is one consequence you will meet in Chapter 3: the rule called objectivity stops being an assumption and becomes a theorem of the network's having no background to point at. If you picture a block of jelly filling the room, that is the level-1 picture: useful, allowed, and not the ontology.

**STEP-UP: distance from diffusion.** ⬛ A random walker on a cubic lattice takes unit steps in one of six directions. After τ steps its mean squared distance from the start is ⟨r²⟩ = τ (in units of the step), because the steps are independent and each adds 1 on average. So a network that knows only *who is next to whom* can still define distance: two places are far apart if a walker needs many steps to get from one to the other, with distance² growing in proportion to steps. The chance that the walker is back at its start after τ steps falls as τ^(−3/2) on a three-dimensional lattice; the exponent, written −d_s/2, defines the network's *spectral dimension* d_s = 3. Hypothesis (H0) asks for exactly this behavior on long time scales. On short time scales a network does not look smooth at all, which is why the paper reads distance off the long-time spreading.

**WHAT CHANGED (the word, and the deepest closure).** The word: "substrate" in the master draft, "material" in r1, "substrate" again in r2 and r3, with the continuum-mechanical terms kept. The closure: r1 listed the passage from level 0 to level 1 as its deepest posed closure, r1's K-0, and started at level 1. r2 executed it as an embedding theorem. The audit found that r2's proof leaned on a formula about smooth spaces (Varadhan's short-time formula) that a network does not obey, so r3 states the diffusive hypothesis (H0) outright and reads distance off long-time spreading (correction 57). It also grades the result for what it is: an embedding theorem whose real payoff is objectivity from background independence (correction 28).

## 1.5 The wager — memorize its exact shape

> **GUM's wager is that a single substrate, with the continuum description of Sec. 2, is the cheapest object whose response descriptions include the quantum kinematic frame, exact electromagnetism, a topological account of charge and statistics, and the skeleton of the electroweak, strong, and flavor sectors — and that every claim GUM makes about it is either a theorem of its postulates or a stake with a signed kill. GUM does not assert that the vacuum *is* this substrate. GUM asserts that it is arranged to be efficiently wrong about whether it is.**

*"Cheapest"* is a comparison, falsifiable by inventing something cheaper. *"Theorem"* means checkable derivation — checking them, at your level, is this primer. *"Stake with a signed kill"* is the death list. Nothing says "true."

Two numbers make it real. **Stake S4 (re-graded):** if the substrate stores quantum states the way GUM argues a local substrate must (Chapter 8), a specific scramble-and-unscramble test on quantum computers will fail abruptly near 324 qubits for a trapped-ion register and 338 for a superconducting chip, over a width of at most 4.45 qubits, and the failure point will move when the chip gets bigger. **Stake S29:** dark energy, in GUM, was *less* negative-pressured in the past. The DESI survey currently prefers the opposite; r3's full fit of the distance data finds GUM's dark-energy family trailing an evolving dark energy by Δχ² = 7.6–16.6; and GUM has printed in advance that a three-sigma confirmation retires the family (Chapter 14). The same stake has a second readout, in the polarization of the oldest light in the sky (Chapter 15).

## 1.6 A theory that caught itself

The paper has been corrected twice: once by r1 and r2, independently, and once by the audit behind r3. The first round broke three of the master draft's headline claims.

- The master draft's "most direct test" was an electric signature of a second, faster speed in the substrate. A locality theorem showed that in the only well-behaved version of the theory, electric and magnetic fields are *exactly* Maxwell's whatever that speed is. The prediction was withdrawn, and the speed moved to the timing of quantum correlations (Chapters 5 and 8).
- The quantum-computer headline was a correct theorem that no experiment can test. It was replaced by a testable hypothesis and a protocol (Chapter 8).
- A predicted spectral line near 26 µm sat on the wrong side of a neutrino-mass floor that the same draft used, is really a broad trough with one sharp edge, and came with a limit too strong by fifteen powers of ten (Chapter 6).

The second round was the audit of r1 and r2 side by side. The two revisions agreed on most corrections, disagreed on some, and each kept results the other had dropped without saying why. The audit recomputed every number in both, and its three largest catches run through this book: the tilt of the vacuum's helix had been taken from the minimum of the wrong energy, which moved a predicted angle of the weak force (Chapters 6 and 13); a cap on the heaviest neutrino's mass, which fixed one end of a predicted window, had been asserted rather than derived, and is withdrawn (Chapters 6 and 12); and the rate law printed for selecting the dark-energy index contradicted the family's own definition (Chapter 14).

None of this makes GUM's *conclusions* more likely. It should make you trust GUM's *process*: the same machinery that will one day tell the world whether GUM is wrong about nature has already told GUM, twice, where it was wrong about itself. Chapter 16 hands that machinery to you.

**NUMBERS TO HOLD.** Electron pointlike to < 10⁻¹⁹ m. GUM's structural scale: within a factor of a few of the Planck length, 1.6×10⁻³⁵ m, if gravity is induced (Chapter 8); photon timing alone requires ℓ_s ≲ 1.5×10⁻²⁷ m. Standard Model dials: about 19. GUM: 29 stakes, 27 closures, 67 corrections.

**CHEW ON THIS.** (1.1) Write the "made of" ladder, circle the rung where it stops, and write the sentence the Standard Model puts there instead. (1.2) With a 5 m/s swimmer, at what river speed does the upstream-and-back trip take *twice* as long as the cross-stream trip? (1.3) Write Heisenberg's move and GUM's inversion as two sentences with the same grammatical shape. (1.4) A friend says, "So GUM says space is filled with some stuff, like a crystal." Correct the friend in two sentences using *substrate* and *response description*. (1.5) Which opening stake, S4 or S29, would you rather see decided first, and why? (1.6) Name one advantage and one danger of a theory publishing a list of its own mistakes. (1.7 ★) On a cubic lattice with unit steps, how many steps does a random walker need for a root-mean-square distance of 10 steps? Then explain why a network shaped like a tree — every node branching into new nodes, no loops — fails hypothesis (H0).

---

# PART II — THE SUBSTRATE, LEVEL ONE

# CHAPTER 2 — SPRINGS, WAVES, AND FORBIDDEN FREQUENCIES

**What you'll be able to do after this chapter:** (1) Compute the speed of sound in a steel rod and say why that calculation is the spirit of GUM. (2) Explain a band gap with a necklace of beads and springs. (3) Derive Einstein's energy–momentum relation from "mass is a forbidden frequency." (4) Explain why GUM's matter has a speed limit a hair *faster* than light's — and why "harmless" needed a second look. (5) Compute the length of the skin that surrounds every particle, including the √2 the master draft got wrong.

## 2.1 The sound-in-steel move

⬛ Sound runs along a steel rod at v = √(stiffness/density) = √(2×10¹¹ Pa / 7850 kg m⁻³) ≈ 5,050 m/s. Nobody calls that a constant of nature; it is a property of steel. **GUM's bet is that all of fundamental physics is that move.** The speed of light, Planck's constant, particle masses, charge — each is, in GUM, a stiffness, an inertia, a gap, or a pure number from the shape of a knot. When a formula looks frightening, ask: *which stiffness, which inertia, which shape?*

## 2.2 Necklaces and band gaps

⬛ Beads joined by springs carry waves when shaken slowly. Alternate heavy and light beads and the graph of frequency against wavenumber splits into two branches: an **acoustic** branch starting at zero frequency, and an **optical** branch that starts at a nonzero frequency ω₀ and cannot vibrate below it. Allowed frequencies form **bands**; forbidden ones, **gaps**; the minimum ω₀ is a **band edge**. Every periodic structure — crystal, photonic crystal, concert-hall panel — has them.

**STEP-UP — the playground swing.** Push slower than a swing's natural rhythm and it sloshes along; push much faster and it barely moves. A band edge is a whole structure with a floor below which no traveling wave exists.

## 2.3 Mass is a forbidden frequency

GUM's continuum has a gapped branch, **B3**, on which grains turn *relative to* their neighbors (Chapter 3). Its small oscillations obey **ω² = ω₀² + c_ψ²k²**, where c_ψ is the branch's limiting speed — equal to c to extraordinary precision (§2.4). Multiply by ħ² (E = ħω, p = ħk):

**E² = (ħω₀)² + (pc)² → E² = (mc²)² + (pc)², with m ≡ ħω₀/c².**

Einstein's relation, read off a dispersion curve. ⬛ The identity is textbook-true (polaritons obey it). 🟩 GUM reads it literally (Sec. 6.1 of the paper): **rest energy is the admission price of a branch that does not start at zero.** De Broglie's λ = h/p, relativistic momentum (★ problem 2.4), and time dilation all follow from wave kinematics on such a branch.

One refinement Chapter 10 needs: a *free quantum* of B3 sits exactly at the edge, but a *particle* in GUM is a knot whose internal clock ticks *inside* the gap, a fixed fraction below the edge. Both are "mass as forbidden frequency."

## 2.4 A second light cone, a hair wider

🟩 r1 found something the master draft missed, and r3 keeps it. In GUM's continuum, matter's limiting speed is not quite light's. The paper's Proposition 2 gives **c_ψ² = c² + m̃²/(4ρ₀)**, where m̃² is the gap stiffness and ρ₀ the density. Write m̃² = Jω₀² and J = ρ₀ℓ_g², where ℓ_g is the grains' *radius of gyration*. The fractional excess is then (ℓ_g ω₀/c)²/8. For an MeV-scale gap and ℓ_g = 1.5×10⁻²⁷ m, that is about 7×10⁻³⁰, far inside the ⬛ vacuum-Cherenkov and photon-decay limits of 10⁻¹⁵–10⁻²⁰.

**A harmless oddity that wasn't.** The excess grows as the *square* of the gap, and Chapter 13 identifies the vacuum's gapped branch with the weak interaction, gapped near 80 GeV. Put that in and the estimate rises to about 5×10⁻²⁰ — right at the experimental edge (★ problem 2.6). r1's first printing had called the excess "harmless," using an MeV gap and a slipped power of ten (10⁻³⁶). Writing the first edition of this primer caught it; r1 printed the fix as its erratum E2, and r3 carries it inside correction 4. The fix turns the oddity into a constraint: the grains' radius of gyration must satisfy **ℓ_g ≲ 7×10⁻²⁸ m**, an inverse kill in Stake S1. r3 adds the sequel. Chapter 8 shows that if gravity is induced by the substrate, the structural scale ℓ_s sits near the Planck length, 1.6×10⁻³⁵ m; grains whose radius of gyration is of order ℓ_s then clear the bound by seven orders of magnitude, and it bites only if ℓ_g is much larger than ℓ_s. The habit to learn: print the harmless oddities, and *recheck* them.

## 2.5 The evanescent skin

⬛ Drive a chain below its band edge and you get not a wave but an exponentially dying **skin**. At driving frequency ω = κω₀ (κ < 1) its length is **λ_skin = c_ψ/(ω₀√(1 − κ²))**. This skin is the **halo** of every particle in GUM, and, because it dies exponentially, the shape of every short-range force (Yukawa's 1935 argument as the acoustics of a substrate).

Chapter 10 puts a knot's clock at κ = 1/√2 with rest energy Mc² = κħω₀, so ħω₀ = √2 Mc² and

**λ_halo = (c_ψ/c) · ħ/(Mc)** — the reduced Compton wavelength, to within the hair of §2.4.

**WHAT CHANGED.** The master draft printed ħ/(√2Mc), smaller by √2: it used κ where the decay formula needs κ/√(1 − κ²) (correction 3). This length is the yardstick Chapter 12 uses to turn a computed logarithm into a neutrino mass, so "check which yardstick the inherited numbers used" is a deliverable of the normalization audit, Closure K-3 (§3.6). In Chapter 12 you will watch this √2 catch a slip in r1's first printing — r1's erratum E1, which r3 reproduces inside the same correction.

**NUMBERS TO HOLD.** Steel rod ≈ 5 km/s. ħ/(m_e c) = 3.86×10⁻¹³ m. Matter-cone excess (ℓ_g ω₀/c)²/8 at ℓ_g = 1.5×10⁻²⁷ m: 7×10⁻³⁰ for an MeV gap, 5×10⁻²⁰ for the weak gap; bounds 10⁻¹⁵–10⁻²⁰; hence ℓ_g ≲ 7×10⁻²⁸ m. The substrate's lattice gaps sit near πħc/ℓ_s — 4×10²⁰ eV even at the timing bound on ℓ_s, 4×10²⁸ eV at the Planck length — so particle masses are gap physics, never lattice physics.

**CHEW ON THIS.** (2.1) Aluminum rod: stiffness 7×10¹⁰ Pa, density 2700 kg m⁻³. Compute v. (2.2) From E² = (mc²)² + (pc)², show E ≈ mc² + p²/2m when p ≪ mc. (2.3) In the necklace picture, explain in two sentences why a frequency inside the gap makes a skin, not a wave. (2.4 ★) From ω² = ω₀² + c²k², show v_g v_p = c² and derive p = γmv. (2.5 ★) At κ = 1/√2, evaluate κ and κ/√(1 − κ²), and explain where the master draft's √2 went. (2.6 ★) With ℓ_g = 1.5×10⁻²⁷ m and ħ = 6.58×10⁻¹⁶ eV·s, compute (ℓ_g ω₀/c)²/8 for ħω₀ = 1 MeV and 80 GeV. How small must ℓ_g be for the second to sit below 10⁻²⁰, and by how many orders of magnitude does a grain of Planck size clear that bound?

---

# CHAPTER 3 — GRAINS WITH FACES: THE CONTINUUM DESCRIPTION

**What you'll be able to do after this chapter:** (1) Say what a Cosserat continuum is and why ordinary elasticity is not enough. (2) Explain *objectivity*, why GUM's order parameter is the *relative* rotation, and where r3 says objectivity comes from. (3) Name the four sectors of GUM's stored energy and their jobs. (4) Name the four voices B1–B4 and state the one relation that makes light *exactly* lightlike. (5) Recite GUM's import list as r3 states it. (6) Explain the normalization audit GUM posed against itself, and the part of it r3 has already carried out.

## 3.1 From springs to grains that can turn

⬛ Ordinary elasticity uses one field, the displacement u(x, t); energy depends on strain. Rotate a small neighborhood rigidly and nothing is strained, so *there is no stiffness against twisting at a point* — exactly the theorem that killed MacCullagh.

In 1909 Eugène and François Cosserat gave each point an **orientation** — a little frame, like a grain with a painted face — free to turn independently. That adds the **micro-rotation** φ(x, t) and two new strains: the **relative rotation** ψ = φ − ½ curl u (the grain's turn *relative to its local lattice*, whose own rotation is ½ curl u) and the **wryness** Γ = ∇φ (how much neighboring grains disagree). ⬛ Real solids and soft matter need this bookkeeping: liquid crystals, granular packings, bone, foams, 3D-printed chiral lattices.

**STEP-UP — the stadium card stunt.** In a card stunt, ordinary elasticity notices only spectators leaving their seats. A Cosserat description also notices someone *turning their card* while the neighbors don't. GUM's claim is that light is a wave of synchronized card-turning.

GUM's orientation lives in SU(2), the *double cover* of rotations: a grain remembers the difference between turning 360° and 720° (Chapter 9's belt trick).

## 3.2 Objectivity: the rule with teeth

If energy depended on *absolute* orientation, rigidly rotating the whole substrate would change it — but no experiment in a sealed box detects a rigid rotation of the box. ⬛ This requirement is **objectivity**. GUM's fix: build the potential energy only from the **relative texture** P̃ = R̃[u]†Q̃ — the grain orientation with the lattice's own rotation undone. The paper calls this Flag F1, the substrate's *gauge principle*: absolute orientation is redundant, as absolute phase is in electromagnetism. In r3 the flag is no longer a bare assumption: Proposition 1 (Chapter 1) derives it from the level-0 network's having no background to point at.

**Lemma 1, at your level.** Rotate everything by a small angle ω. Strain is unchanged (a rigid rotation is not a strain). The lattice rotation ½ curl u and the grain rotation φ both shift by ω, so ψ does not change. The wryness ∇φ does not change (the gradient of a constant is zero). 🟩 You have proved the paper's Lemma 1.

Because the principle was adopted *in order to* forbid a photon mass (Chapter 4), GUM does not claim to *explain* masslessness with it — only the consequences nobody asked for. Chapter 16 makes that distinction the center of GUM's self-audit.

## 3.3 The stored energy, sector by sector

Kinetic energy: ½ρ₀u̇² for moving grains plus ½Jω² for grains spinning at angular velocity ω (J is rotational inertia per volume; the master draft's formula gave ¼Jω², correction 1). Stored energy W = W₂ + W_χ + W₄ + W₆₊₀:

- **W₂ — the Hookean floor.** Six stiffnesses (λ, µ, µ_c, α, β, γ) penalizing strain, relative rotation, and wryness; they set wave speeds. µ_c penalizes relative rotation only (Lemma 2); make it large and grains are **locked** to their lattice (postulate P4). 🟩
- **W_χ — the handedness.** Three chiral constants, Flag F2; the *only* mirror-odd sector, and so the source of every parity-violating effect in GUM. Chapter 6 shows it can twist the vacuum into a helix.
- **W₄ — anti-collapse armor.** The Skyrme term, Flag F3; without it no static 3D knot is stable (Chapter 9). 🟩
- **W₆₊₀ — the star sector.** A penalty on the **topological density** b_P (knotting per volume) plus a potential of strength m̃_V: knots with sharp edges and computable masses. 🟩

The relative-rotation branch feels two of these at once. Its gap stiffness is **m̃² = 4µ_c + ¼m̃_V²** — the locking stiffness plus the potential's — and its gap frequency is ω₀ = m̃/√J.

**NUMBERS TO HOLD (dimensional skeleton).** Λ (energy^½ length^{3/2}), m̃_V (energy^½ length^{−3/2}), J (energy × time² × length⁻³). Λm̃_V is an energy — the substrate's rest-energy unit; (Λ/m̃_V)^{1/3} is a length; Λ√J is an *action*: (E^½L^{3/2})(E^½TL^{−3/2}) = E·T, the unit of Planck's constant.

## 3.4 The four voices — and one exact equation

Small vibrations about the calm, locked state sort six fields into four branches:

- **B1 — longitudinal:** compression waves, c_L = √((λ + 2µ)/ρ₀). Where Gauss's law lives (Chapter 5) and — the big relocation r1 and r2 both made — the speed at which quantum bookkeeping updates (Chapter 8).
- **B2± — the transverse doublet:** displacement and orientation turning together. **The photon.**
- **B3± — relative rotation:** ω² = ω₀² + c_ψ²k², the gapped branch where particles live.
- **B4 — longitudinal micro-rotation:** another gapped branch, enlisted by the weak interaction (Chapter 13).

🟩 **The paper's Proposition 2:** light obeys ω = ck *exactly*, at every wavelength, with grains perfectly locked (ψ = 0), **if and only if µ/ρ₀ = γ_eff/(2J) ≡ c²** — shear stiffness over density equals twist stiffness over rotational inertia, with γ_eff = γ + β (Chapter 4 says why β joins γ). Two ways of making a transverse wave must share one speed; then the equations factor cleanly into "light" times "a gapped wave."

**WHAT CHANGED.** The master draft thought light's exact speed required a slow "cone-locking flow" over enormous ranges of energy. One stiffness relation does it exactly (correction 4). GUM does not derive that relation; it *imports* it (🟪) and poses "derive the cone condition" as 🟧 Closure K-2. By GUM's own audit, "light is exactly lightlike" is therefore *circular*; the credit goes to unasked-for consequences, like the wider matter cone of §2.4.

## 3.5 The import list

A theory is measured by what it borrows. GUM's level 1 has six stiffnesses, two inertias, three chiral constants, four topological constants, and a structural scale ℓ_s — the spacing of a lattice that is periodic on average and looks the same in every direction (Flag F5). As r3 states the list (Sec. 2.5), GUM:

- *fixes* the doublet speed to c and *imports* the cone condition (Closure K-2);
- *imports* the longitudinal speed c_L, bounded below by quantum timing (Chapter 8), and adopts a longitudinal constraint called the Gauss completion as a flagged postulate (Chapter 5; Closure K-4);
- *fixes one relation* among Λ, J, and ħ (Chapter 10) — one, not two;
- *fixes* the ratio µ_c/m̃_V² = 1/16, by the closure value κ = 1/√2 in one consistent normalization (Chapter 10);
- *fixes* ℓ_s near the Planck length by induced gravity, up to a factor of a few that depends on how the calculation is cut off, with photon timing as an independent upper bound (Chapter 8);
- treats the **locking length** ℓ_lock = √(γ/4µ_c) as a separate stiffness ratio, bounded by the far-infrared trough (Chapter 6);
- *imports* α, and lands the weak mixing modulus from the vacuum's tilt with a correction whose form is asserted (Chapter 13);
- takes the order-one pitch factor ζ_ν = 1 as its minimal hypothesis (Chapter 6);
- bounds the dark-energy index n between ½ and 1 by its possible dissipation channels, and lets the data push it near 1 (Chapter 14);
- bounds the stiffness of the slow dark-energy mode from below (Chapter 14);
- and *computes* the rest as ⬜ numbers.

A proposal that cannot recite its imports is not doing physics.

**TRY THIS (kitchen chirality).** Put a clear glass of corn syrup between two polarizing filters (polarized sunglasses and a phone screen work). Rotate one filter and watch the colors shift: a chiral substance telling light its handedness — the tabletop ancestor of W_χ.

## 3.6 A theory checks its own arithmetic: the normalization audit

Writing GUM's equations carefully exposed **four places where the master draft disagreed with itself** (paper Sec. 2.6); r1 corrected them and r2 adopted the corrections. (1) A rotational kinetic coefficient off by a factor of 2. (2) A band edge set by m̃_V alone, when the true gap stiffness is **m̃² = 4µ_c + ¼m̃_V²**, including the locking stiffness. (3) The halo √2 of §2.5. (4) A stiffness restriction, "P5," that turns out to be unnecessary (Chapter 4). Items 1, 2, and 4 change no core number. Item 3 changes how one number is computed — the neutrino mass, because the halo is the yardstick Chapter 12 uses — and, read carefully, the master's own printed conversion shows that its number was already computed with the correct yardstick, so the central value stays where it was.

**WHAT CHANGED (a fifth inconsistency).** The audit behind r3 found one more. The inherited values that a spinning knot's closure predicts for laboratory benches, and the inherited locking stiffness µ_c = 3m̃_V²/16, had been computed with the master's kinetic coefficient — item 1, uncorrected. In one consistent normalization the closure value κ = 1/√2 requires **µ_c = m̃_V²/16**; the inherited ratio would give κ = ½, which would move the band edge onto the threshold for making particle pairs and push the neutrino mass out of the range cosmology allows (correction 43). Chapter 10 does the arithmetic.

r3 cannot settle everything, because the inherited ⬜ calculations are not reproduced. So the audit remains a closure GUM poses against itself — **Closure K-3, the normalization audit**, now *partially executed*: r3 carries out the part that needs no unpublished integral (Proposition 19, Chapter 10). Deliverables still owed: re-evaluate every ⬜ number in one consistent convention; redo the neutrino inversion; find whether the integrals move when evaluated on the corrected halo; and re-derive a lower bound on the knot's closure constant. Kill: a corrected one-sigma band for the heaviest neutrino's mass lying entirely below the oscillation floor (0.050 eV) retires the identification of the neutrino with the helix's pitch (Stake S18, Chapter 12). Nobody checks the arithmetic of a speculative theory unless the theory makes it easy. Hold on to the name K-3.

**CHEW ON THIS.** (3.1) Show, one line each, that a rigid rotation leaves ψ and ∇φ unchanged but changes φ. (3.2) Redo [Λ√J] = E·T unaided, and check that m̃/√J is a frequency. (3.3) Which voice carries (a) a compression pulse, (b) light, (c) an electron at rest, (d) a weak decay? (3.4) Correct "GUM derives the speed of light" in two sentences using *fixes* and *imports*. (3.5 ★) The locking energy is 2µ_c|ψ|² and the potential's quadratic part ⅛m̃_V²|ψ|². Show they sum to ½m̃²|ψ|² with m̃² = 4µ_c + ¼m̃_V². (3.6) Why is "light is exactly lightlike" circular under GUM's audit, and what consequence of the same postulate is not? (3.7) The audit's fifth inconsistency changed µ_c from 3m̃_V²/16 to m̃_V²/16. By what factor does the locking stiffness change, and which item of the master's four was left uncorrected in the inherited bench values?

---

# PART III — LIGHT, CHARGE, AND THE SECOND SPEED

# CHAPTER 4 — LIGHT FROM TWIST

**What you'll be able to do after this chapter:** (1) Diagnose why MacCullagh's aether fails and what rescues it. (2) Show that half of Maxwell's equations are *identities* once E and B are orientation variables. (3) Explain the other half as spinning grains with inertia. (4) Say which re-choices of reference are gauge transformations in GUM, and which are not. (5) Explain why one of the master draft's postulates was unnecessary. (6) Say why GUM refuses to call the photon's masslessness an "explanation."

## 4.1 MacCullagh's ghost, and the loophole

MacCullagh's energy was W_MC = ½κ|curl u|², a penalty on local twisting of the displacement. Chapter 1 left it dead of a theorem; Chapter 3 built a continuum whose points are *not* featureless. Put them together.

🟩 **Theorem 2 of the paper (the Cauchy no-go).** In an ordinary continuum, objectivity forces the energy to depend on strain alone. A rigid rotation shifts the twisting part of the displacement gradient (Lemma 1), so MacCullagh's energy is objective only if κ = 0.

🟩 **Theorem 3 (the micropolar rescue).** The *same* energy written for the orientation field, ¼γ|curl φ|², is objective in a Cosserat continuum (the wryness is objective), coexists with ordinary shear rigidity, and balances angular momentum through *couple stresses* — twisting forces an ordinary continuum lacks. In the photon doublet, displacement and orientation turn together exactly, so light carries MacCullagh's energy at every wavelength.

The aether program failed not because light-as-response is impossible but because the right continuum had not been invented. GUM calls this its cleanest result, and it holds whatever the vacuum is made of: a theorem about MacCullagh, not about the world.

**WHAT CHANGED.** The master draft presented this marriage as unprecedented. It had two precedents: Kelvin's gyrostatic model (1889), which realized MacCullagh's twist stiffness with hidden rotors but without rigidity, and Böhmer, Downes, and Vassiliev (2011), who derived Maxwell-like equations from a purely rotational continuum. r1 and r2 cite both, and r3 states what is new: the objectivity diagnosis and the coexistence of twist stiffness with a rigid lattice. **Crediting predecessors is part of honest bookkeeping.**

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

"Grain rotated by angle φ" presupposes a reference for "unrotated" at each point. Re-choosing it by a *time-independent* pattern, φ → φ + ∇χ(x), shifts A by a gradient and changes neither B nor E_φ: ⬛ that is gauge invariance, understood as bookkeeping. A *time-dependent* re-choice, χ(x, t), is different. It changes E_φ = −κ_B φ̇ by −κ_B∇χ̇, so it shifts the longitudinal sector, which in GUM is physical; it is **not** a redundancy of the substrate. r1 noticed what the master draft glossed over; r2 restated the theorem without the restriction; r3 puts the restriction back, together with r1's energy identity of §4.3 (correction 44). How the substrate fixes the time-dependent freedom turns out to be a theorem — Chapter 5.

## 4.5 P5, revisited: a stiffness that hides

The wryness has a twisting part (stiffness γ) and a symmetric part (stiffness β). Fearing that β would spoil gauge invariance, the master draft *postulated* that β acts only longitudinally ("P5").

🟩 **Proposition 6 of the paper says the fear was unfounded.** For any divergence-free orientation pattern that dies away at infinity,

**∫(symmetric wryness)² d³x = ½∫|curl φ|² d³x.**

So in the transverse sector β merely adds to γ — hence γ_eff = γ + β in the speed of light — and is invisible to magnetostatics, radiation, and dispersion. (★ Proof: split ∇φ into symmetric and antisymmetric parts; the antisymmetric part squared is ½|curl φ|²; two integrations by parts give ∫|∇φ|² = ∫(|curl φ|² + (div φ)²); set div φ = 0 and subtract.)

One subtlety the paper prints: outside a solenoid (a region with a hole), boundary terms make the field-free outside seem to store energy ∝ β × flux²; for a smooth substrate the inside compensates exactly. A "mysterious energy in a field-free region" is often a boundary term — always ask what the rest of space contributes.

**WHAT CHANGED.** P5 is gone from the transverse sector (correction 5). Its real subject, the longitudinal orientation, is now governed by a precisely stated constraint, postulate (P5′) (Chapter 5). One assumption fewer, one clearer one in its place.

## 4.6 What the masslessness theorem does not explain

🟩 **Theorem 1:** a uniform co-rotation of grains and lattice costs no energy, so light has no gap — no mass — at any order in the potential. (Every objective variable vanishes for a uniform co-rotation, and long-wavelength light *is* one.)

GUM grades it carefully. Objectivity was *adopted to kill* an unwanted mass term, as gauge symmetry historically was, so the theorem does not *explain* masslessness. Credit goes to what the same principle forces unasked: **(1) light is achiral** at tree level (left- and right-circular light travel identically, up to (kℓ_s)² corrections); **(2) vacuum photons are exactly stable** (ω = ck lies below the B3 curve, and a lightlike arrow cannot split into two timelike ones); **(3) no gapless charged wave exists** (net winding pays the locked tension). These are standing inverse kills: a photon mass, a field-free, frequency-flat, Bragg-type birefringence of the vacuum, or a massless charged particle executes the sector (the battery, Stake S1).

**WHAT CHANGED.** The master draft listed a *fourth* consequence: a measurable departure from Maxwell's theory caused by the finite longitudinal speed c_L. Chapter 5 shows that every local version keeping Gauss's law has none (correction 6). GUM keeps the theorem, drops the word "explain," and drops one of its own boasts. r3 also sharpens the battery. Its old wording, "forbidden birefringence," was too broad: ordinary quantum electrodynamics makes the vacuum slightly birefringent in very strong fields (the Euler–Heisenberg effect), and GUM inherits that. What GUM forbids is birefringence with no field present, the same at every frequency, of the Bragg type a helix would cause (correction 27).

**NUMBERS TO HOLD.** Photon mass < 10⁻¹⁸ eV. c² = γ_eff/(2J). Light's energy density ½ε\*(E² + c²B²), ε\* = J/κ_B².

**CHEW ON THIS.** (4.1 ★) From B = curl A and E_φ = −∂A/∂t, verify both homogeneous Maxwell equations in three lines. (4.2) Using Lemma 1 (a rigid rotation by ω shifts ½ curl u by ω), show in two lines that ½κ|curl u|² changes under rigid rotation unless κ = 0. (4.3) If J doubled at fixed γ_eff, what would happen to c? What is the displacement current in GUM's language? (4.4 ★) For φ = (0, sin kx, 0), show div φ = 0, then compute the symmetric wryness squared and ½|curl φ|² and show they are equal at every point. (4.5) List the three unasked-for consequences of objectivity and the observation that would kill each. (4.6) Under φ → φ + ∇χ(x, t), how do B and E_φ change? Which re-choices leave both unchanged?

---

# CHAPTER 5 — THE SECOND SPEED, AND THE THEOREM THAT RETRACTED A PREDICTION

**What you'll be able to do after this chapter:** (1) Explain why a static electric field cannot be a rate of turning, and where GUM's longitudinal field comes from. (2) Say what "completing" the longitudinal sector means, and name the two candidates. (3) State the defect-current theorem. (4) State the locality dichotomy and explain the "velocity gauge." (5) Explain why the master draft's "most direct test" became a null test, what a violation would look like, and where the second speed went.

## 5.1 A static field cannot be a rate

🟩 **Proposition 3.** With E_φ = −κ_B φ̇, a static field E₀ needs φ̇ = −E₀/κ_B forever: an orientation turning without end. Electrostatics needs a second piece of E that is not the rate of anything.

GUM takes it from the longitudinal voice B1. The **frame-connection scalar** Φ_c obeys a *wave* equation at the longitudinal speed c_L, sourced by the density of charge-winding ρ_q (Chapter 6):

**(1/c_L²) ∂²Φ_c/∂t² − ∇²Φ_c = ρ_q/ε\*,  and  E = E_φ − ∇Φ_c.**

For a charge at rest, Φ_c is the ordinary Coulomb potential. The paper keeps two longitudinal jobs strictly apart: this scalar, sourced by *winding*, and a pressure-like field that keeps the stiff B1 sector unsqueezed around knot *cores* (Chapter 7 uses it). Conflating them would make every particle's charge proportional to its mass.

## 5.2 The missing sentence

A *moving* charge must twist the grains through some "torque current" J_φ, and the master draft never said exactly how. Specifying it is **completing** the longitudinal sector (paper Definition 2):

- **Transverse completion (T):** the grains feel only the transverse (curl-carrying) part of the current — the master draft's implicit reading.
- **Gauss completion (G):** the grains feel the full current, corrected by how Φ_c changes: J_φ = j_q − ε\* ∂(∇Φ_c)/∂t. Every piece is local.

The **defect current** is the difference between what the grains feel and what exact Maxwell theory would need. It vanishes for (G) by construction.

## 5.3 Every possible departure has one shape

🟩 **Theorem 5 (defect representation).** For *any* completion, E and B obey Maxwell's equations exactly — with the real sources *plus* the conserved defect current. Every possible deviation from Maxwell — every precursor, anomaly, or extra radiation — is the ordinary retarded field of that one current. An open-ended question ("how does GUM differ from Maxwell?") becomes a single one ("what is the defect current?").

## 5.4 The locality dichotomy

🟩 **Theorem 6(i): the transverse completion is acausal.** Splitting a current into transverse and longitudinal parts is *global*: the transverse part here depends on the current everywhere, instantly. In textbook Coulomb-gauge electrodynamics that hidden instantaneous piece is cancelled by an equally instantaneous Coulomb potential. In (T) the potential is Φ_c, which travels at finite c_L, so the cancellation fails: if a charge changes its motion at t = 0, then at points farther than c_L·t — which no signal could yet have reached — the field has *already changed*. That is instantaneous signaling in the material frame. **(T) is ruled out at every finite c_L** (at c_L = ∞ it is ordinary Coulomb gauge).

🟩 **Theorem 6(ii): the Gauss completion is exactly Maxwell.** The defect current is zero, so E and B are *exactly* the retarded Maxwell fields for **every** c_L. The two pieces E_φ and −∇Φ_c each spread at c_L, but outside the light cone they cancel, and their sum spreads at c.

**STEP-UP — noise-cancelling headphones.** Noise and anti-noise each reach your ear; their sum is silence. In (G), E_φ and −∇Φ_c each race out at c_L and cancel perfectly outside the light cone. What you can measure never outruns light.

⬛ In Maxwell's theory the potentials are not unique ("gauges"): in *Coulomb gauge* the scalar potential updates instantly; in *Lorenz gauge* it travels at c; in the **velocity gauge** (studied systematically by J. D. Jackson in 2002) it travels at any chosen speed v — and E and B are identical in all of them. 🟩 The Gauss completion's constraint on the grains is *precisely* the velocity-gauge condition with v = c_L. **The substrate realizes one gauge, the velocity gauge with speed c_L, in which the grain orientation *is* the vector potential.** Gauge freedom belongs to the bookkeeping; the substrate has made its choice.

## 5.5 The second speed goes quiet

🟩 **Corollary 1.** In (G), no measurement coupling to charges through electric and magnetic forces, or to radiation through E and B, can ever determine c_L. GUM adopts (G) as **Flag F6**, postulate (P5′) — and grades it *circular*, since it was adopted to recover Gauss's law. Deriving it from GUM's energy is 🟧 Closure K-4.

## 5.6 ★ The energy fine print

An accountant's question — *who pays?* — exposed a catch. If the longitudinal energy is ordinary and positive, an oscillating dipole makes Φ_c radiate at c_L, carrying power (paper Proposition 4)

**P_L/P_M = ½(c/c_L)³**

relative to ordinary dipole radiation. But in (G) the charge does exactly Maxwell's work, no more. So at least one holds: **(a)** the longitudinal energy is not always positive (like the unphysical scalar photons of Lorenz-gauge quantum electrodynamics); **(b)** the charge feels a tiny extra drag of relative size ½(c/c_L)³ — at most 5×10⁻¹³ for c_L ≥ 10⁴c, far below any measurement; or **(c)** c_L = ∞. Option (c) has a price: it removes the finite longitudinal speed from the substrate, so the finite update speed that Chapter 8 needs would have to be a separate constant, and the cross-lock that welds the two speeds into one, X1, would break. Which option GUM's energy realizes is part of Closure K-4.

## 5.7 The near-field experiment, re-graded

The master draft's "most direct ontological test" was a piece of the near field arriving at c_L. Under (G) there is none. 🟫 **Stake S2 is re-graded: GUM's core predicts *no* electromagnetic precursor; a near-field experiment tests Flag F6.**

⬛ Such experiments are cheap, and two groups (Kholmetskii and collaborators; de Sangro and collaborators) have reported contested near-field anomalies. For a charge in uniform motion Maxwell's field already points at its present position, so only *abrupt* changes discriminate.

What would a violation look like? The master predicted one, so r3 prints its size. Under the acausal completion (T), a 1 nC bunch of relativistic electrons kicked sideways by 1 mm in 1 ns would change the Coulomb field 10 m away by about 9×10⁻⁶ V/m within 3 ps (for c_L = 10⁴c). The ordinary radiation pulse of the same kick, about 10⁻² V/m, arrives at 33 ns, when light gets there. The tiny early signal is a thousand times weaker than the pulse but comes 33 ns ahead of it, so the measurement is a *timing* measurement, averaged over a million shots, not an amplitude measurement. The paper's protocol: an abrupt source; battery-powered sensors 10–100 m away with optical readout (no connecting wires); time transfer good to 10 ps; and a blinded analysis of the window before light could arrive, binned in *sidereal* time.

Why sidereal? 🟩 **Proposition 5 (lab-frame ordering).** If the lab moves at v_M through the material frame, an influence traveling at c_L in the material frame arrives on lab clocks at

**t_lab = γ r (1/c_L − v_M·n̂/c²).**

If v_M·n̂ > c²/c_L, it arrives *before it left*, by lab clocks — not a paradox for a theory with a preferred frame, just kinematics. As Earth rotates, n̂ swings relative to v_M and the arrival time oscillates with the sidereal day.

**TRY THIS.** For c_L = 10⁴c, compute c²/c_L and compare it with Earth's orbital speed (30 km/s) and our speed relative to the microwave background (370 km/s). Then compute the day-to-night swing 2rv_M/c² for r = 100 m: about 0.8 ns.

A surviving pre-light signal would retire Flag F6 — and *measure* our velocity through the material frame. Worth doing; it now tests a flag, not the core.

## 5.8 What the retraction teaches

**WHAT CHANGED.** The master draft predicted that the finite longitudinal speed would show up in electromagnetism, as a near-field precursor and as extra radiation of relative power (c/c_L)³. r1 and r2 proved that the only local completion keeping Gauss's law is Maxwell's theory in the velocity gauge — exactly Maxwell for every c_L. The precursor is withdrawn (correction 6; Stake S2 is a null test); the (c/c_L)³ "radiation" is an internal exchange or a tiny leak (correction 7).

Three lessons. First, the retraction was forced by GUM's own principle — **locality** — taken seriously. Second, it did not make GUM unfalsifiable: c_L *moved* into the timing of quantum correlations, where the bookkeeping of Chapter 7 updates at c_L and faces a sharper test (Chapter 8, Stake S6). Third, it made GUM *more* honest about circularity: Flag F6 is labeled circular, and what it buys — a substrate that realizes one gauge — has consequences the energy must deliver.

**NUMBERS TO HOLD.** c_L ≳ 10⁴c (Chapter 8). Leak ≤ ½(10⁻⁴)³ = 5×10⁻¹³. Our speed relative to the CMB: 369.8 km/s. Sidereal swing at 100 m: ≈ 0.8 ns. A violation of (T)'s size: 9×10⁻⁶ V/m at 10 m within 3 ps, against a 10⁻² V/m pulse at 33 ns.

**CHEW ON THIS.** (5.1) Explain in two sentences why a static field cannot be a rate of turning. (5.2) In (T), a charge jiggles at t = 0. Describe the field at a point farther than c_L·t, and say why this is fatal. (5.3) Tabulate the speed at which the scalar potential updates in Coulomb, Lorenz, and velocity gauges. What travels at c in all three? (5.4) Compute ½(c/c_L)³ for c_L = 10⁴c and 10⁵c. (5.5) Compute the sidereal swing for r = 1 km. (5.6) "GUM withdrew its best test, so it's unfalsifiable." Answer in four sentences: what was withdrawn, why, where the second speed went, and what would now kill it. (5.7 ★) Check §5.7's two numbers: the change of a Coulomb field, qΔx/(4πε₀r³), and the radiation pulse, qΔx/(4πε₀c²rτ²), for q = 1 nC, Δx = 1 mm, τ = 1 ns, r = 10 m. When does each arrive if c_L = 10⁴c?

---

# CHAPTER 6 — CHARGE IS A CONE; THE VACUUM IS A HELIX; THE SKY HAS A TROUGH

**What you'll be able to do after this chapter:** (1) Build a charge from paper and explain why charge is quantized, conserved, and Coulombic. (2) Explain the Aharonov–Bohm effect as holonomy. (3) Say why α = 1/137 is borrowed. (4) Derive the vacuum's helical instability, and find the tilt it settles at from the true minimum of its energy. (5) Compute the vacuum's pitch window from the neutrino's mass. (6) Explain why a photon crossing an expanding universe is swept *through* a mirror — suddenly, at the coupling the sky allows — and what trough or step that leaves in galaxy spectra. (7) State what a static helix cannot do. (8) Explain how the trough's absence measures the locking length, and what two archival searches found.

## 6.1 TRY THIS — build a charge (five minutes: a paper disc, scissors, tape)

Cut a 90° wedge from a paper disc and tape the edges: the paper pops into a **cone**. Four facts, four echoes. **(1) Quantized:** the removed angle (the *Frank angle*) is locked in by the tape; no bending changes it. → Charge quantization. **(2) Conserved, and located at a point:** all the "wrongness" is at the tip; two cones cancel only against a *negative* wedge (an inserted sliver, making a saddle). → Charge conservation; creation only in pairs. **(3) Felt far away:** parallel lines drawn before coning *converge* afterwards. → In GUM a rotational defect strains the orientation field with a far field falling as 1/r²: 🟩 **Coulomb's law as the elastic far field of a conical defect.** **(4) Like repels, unlike attracts:** like-handed defects pile up distortion; opposite ones partly cancel it.

⬛ You have built a **disclination**. In GUM the electron is a knot (Chapter 9) *dressed* by a disclination, and e is a Frank angle. Charge is **triple-locked** — disclination winding, knot degree, and a phase-winding integer are three independent whole numbers guarding it. The cone does *not* give the coupling's strength, α. Nor does it decide whether a knot can exist *without* its dressing; that question is the first deliverable of a conjecture about dark matter (Chapter 14).

## 6.2 Aharonov–Bohm as holonomy

⬛ An electron circling a thin solenoid acquires a phase shift although the magnetic field is zero all along its path. GUM's reading is **holonomy**: carry a reference frame around a loop enclosing a twist defect and it returns rotated, though every patch along the way was flat. ⬛ The Foucault pendulum does the same: after one sidereal day its swing plane has turned by 360° × sin(latitude), not because anything pushed it but because of the geometry of its loop. Dictionary: loop on a sphere → loop around a flux; enclosed solid angle → enclosed flux; swing plane → quantum phase, Δφ = qΦ_B/ħ. 🟩 Under the Gauss completion of Chapter 5 this holonomy is exactly the gauge-invariant textbook one.

**STEP-UP.** Walk an arrow around a big triangle on a basketball, keeping it locally straight. It comes back rotated. The surface did it.

## 6.3 The honest hole: α is borrowed

α = e²/(4πε₀ħc) ≈ 1/137.036 compares a defect's self-energy with the stiffness of torsion waves. That is dimensionally secure and structurally plausible — one stiffness hierarchy would make α small, c large, and gravity weak together — and quantitatively *unclaimed*: 🟪 BORROWED. A framework that derived light and charge and then *claimed* α with a pretty formula should lose your trust right there. GUM forbids numerology and offers a fingerprint instead (Chapter 10).

## 6.4 The helical instability, and the tilt it settles at

Let a soft angle θ tilt along a helix of wavenumber q. The free energy per volume (paper Eq. (25)) is

**f(θ, q) = sin²θ(−χq + ½γq²) + ½Δ²θ²,**

with χ the chiral gain, γ the twist stiffness, Δ the tilt gap. (1) Minimizing over q: q\* = χ/γ (⬛ Dzyaloshinskii's result; cholesterics obey it). (2) Substitute: f = −(χ²/2γ)sin²θ + ½Δ²θ². (3) Small θ: f ≈ ½(Δ² − χ²/γ)θ². (4) **The vacuum twists itself into a helix iff χ² > γΔ².** 🟩

How far does it tilt? Write the **margin** 𝔪 = χ²/(γΔ²), so that a helix forms when 𝔪 > 1. (5) Set the slope of line (2) to zero: −(χ²/2γ)·sin 2θ + Δ²θ = 0, that is,

**sin 2θ_c / (2θ_c) = 1/𝔪.** 🟩

The function sin x/x falls steadily from 1 to 0 as x runs from 0 to π, so for every margin above 1 there is exactly one tilt, and it is a minimum (paper Proposition 7).

In GUM's gapped relative-rotation sector the helix criterion fails. The helix forms instead on the star sector's "almost free" manifold — reshapings that barely change a knot's energy, lifted only by a small parameter ε — where all ingredients are equally small and the margin is a pure number: 𝔪 = 1.9 ± 0.4 ⬜. The tilt rule then gives **sin θ_c = 0.79 (+0.06/−0.11)**, θ_c = 52.6°, sin²θ_c = 0.63. Double twist gains about twice a single helix's chiral energy but cannot fill space, so for margins between 1 and a few the winner is an **amorphous double-twist network**: helical locally, directionless overall. ⬛ Its laboratory original is the **blue phases** of cholesteric liquid crystals, including the disordered "blue fog." GUM's claim (🟨, Flag F7) is that the vacuum is a blue fog.

**WHAT CHANGED (the tilt).** r1 and r2 both printed sin θ_c = √(1 − 1/𝔪) = 0.69 ± 0.11. That rule is the minimum of a different energy — a quartic polynomial in sin²θ of the kind Landau used for phase transitions — not of line (2), which keeps the exact sin²θ and θ². The audit solved line (5) instead (correction 37). At 𝔪 = 1.9 the old rule gives 0.69 and the true minimum 0.79; at 𝔪 = 1.5 and 2.3 the true tilt is 0.68 and 0.85. The angle enters four results later in this book, and r3 recomputes all of them: the locking length (§6.11), the weak mixing angle and the right-handed admixture of the weak force (Chapter 13), and the polarization rotation of the oldest light (Chapter 15). The margin itself is still a ⬜ number, held under the normalization audit.

## 6.5 The pitch window

The neutrino turns out to be the helix's *pitch quantum* (Chapter 12), written with an honest order-one factor ζ_ν: **m₃c² = ζ_ν ħqc, so p = 2π/q = ζ_ν hc/(m₃c²).** GUM takes ζ_ν = 1 as its minimal hypothesis behind every number below. ⬛ Oscillation experiments measure Δm²₃₁ = 2.51×10⁻³ eV² (normal ordering), which puts the heaviest neutrino at **m₃ ≥ √(Δm²₃₁) = 0.0501 eV** — the *oscillation floor*. GUM's flavor sector (Chapter 12) predicts m₃ inside a band of 0.015–0.143 eV. Cut that band at the floor, divide hc = 1.23984 eV·µm by each end, and 🟩 **Proposition 8:**

**p/ζ_ν ∈ [8.7, 24.7] µm,**

a photonic structure at 12.1–34.5 THz, in the far infrared. That is the window *before* cosmology is consulted. If the standard cosmological bound on the sum of neutrino masses holds, Σm_ν < 0.064 eV, then m₃ ∈ [0.0501, 0.0503] eV and the window shrinks to a sliver, **p/ζ_ν ∈ [24.66, 24.75] µm**; for dark energy of GUM's own kind (w ≥ −1, Chapter 14) the cosmological bound is tighter still.

**WHAT CHANGED (three corrections meet here).** The master draft quoted about 26 µm, from m₃ = 0.047 eV — *below* the floor that the same draft used to trim its own neutrino prediction; r1 and r2 withdrew it (correction 14). r1 and r2 then printed the window [21.8, 24.7] µm, whose short end came from a cap m₃ ≤ 0.057 eV attributed to r1's neutrino stake, S1. The audit found that the cap was asserted, never derived: it amounts to Σm_ν ≤ 0.11 eV and corresponds to nothing in the flavor band, which reaches 0.143 eV. r3 withdraws it (correction 39) and widens the flavor band to what its stated inputs give (correction 40, Chapter 12). Finally, r2's text gave the floor as 0.0503 eV while its own printed edge used Δm²₃₁ = 2.51×10⁻³ eV², a floor of 0.0501 eV; the inputs are now stated (correction 41). r2 had also dropped the factor ζ_ν without a reason; r3 restores it (correction 42). The net effect: the window allowed *a priori* is wider than either r1 or r2 printed, but the edge the data allow is the same thin sliver at the floor, near 24.7 µm.

## 6.6 A photon swept through a mirror

⬛ A cholesteric helix is a strange mirror: light along its axis, with wavelength near the pitch, is reflected if its circular polarization matches the helix's handedness and transmitted otherwise. The reflected band runs from n_o·p to n_e·p; its fractional width is Δn/n̄. (That is why some beetles shine in only one circular polarization.)

The master draft treated the universe as a static slab of such a structure. r1 and r2 noticed the essential error: **a photon crossing the universe is redshifted**, so it is swept *through* the mirror's band. Light observed today at λ_obs had wavelength λ_obs/(1 + z) at redshift z, and matches the band edge λ_edge = n̄p exactly once, at 1 + z_r = λ_obs/λ_edge — if the source is farther than that.

The fraction reflected during that single crossing is a classic: the **Landau–Zener** problem (1932) of a system swept through a resonance. 🟩 **Theorem 7:**

**R = 1 − e^{−Π},  Π = (π²/2)(Δn/n̄)² · c/(pH),**

with H the expansion rate at the crossing. The formula holds for *every* value of Π, provided the sweep is steady across the resonance. Large Π (slow sweep, strong coupling): mostly reflected. Small Π (fast sweep): mostly transmitted, with R ≈ Π.

**STEP-UP — the radio dial.** Turn a dial slowly past a station and you lock on; spin it fast and you hear a blip. Cosmic expansion turns the dial for every photon — and at the coupling the sky allows (§6.8), it turns it fast: a blip, not a lock.

**WHAT CHANGED (adiabatic or sudden?).** r1 and r2 both called this "the adiabatic passage." In the Landau–Zener sense a passage is adiabatic only when Π ≳ 1, which at p = 24.6 µm needs Δn/n̄ ≳ 1.9×10⁻¹⁶. At the transparency bound of §6.8, Π ≈ 0.105: the passage there is *sudden*, and R ≈ Π. The formula and the bound are unaffected, because R = 1 − e^{−Π} holds either way. r2 had also claimed adiabaticity "for every Δn above 10⁻²⁰"; the threshold actually grows as the square root of pH/c, and pH₀/c = 1.8×10⁻³¹ (correction 46).

## 6.7 The trough and its fingerprints

Light from a galaxy at redshift z_s observed between λ_edge and λ_edge(1 + z_s) crossed the band; light outside that range never did. So its spectrum carries a circularly polarized **trough** (🟩 **Proposition 10**) with five fingerprints: **(1) a fixed blue edge** at λ_edge = n̄p for *every* source, near or far — ordinary features redshift, this one is made here; **(2) a red end** at λ_edge(1 + z_s), so farther sources have longer troughs; **(3) a depth that fades redward**, because H was larger at earlier crossings; **(4) a handedness**, fixed by the vacuum's (Chapter 15); **(5) a dipole:** we move at 369.8 km/s through the cosmic frame, so λ_edge(n̂) = n̄p(1 − v·n̂/c), shifting the edge by ±0.030 µm for p = 24.6 µm. r3 adds a sixth that is a null: the edge may not move with source redshift by more than about 10⁻⁵, because the pitch is pinned (Chapter 14).

⬛ Astronomers know a cousin: the **Gunn–Peterson trough**, quasar light absorbed blueward of the hydrogen Lyman-α line by gas along the way. For an unpolarized source the trough's intensity is 1 − R/2 and its circular polarization R/(2 − R); at the largest allowed coupling (§6.8) the dip is about 5% deep and about 5% circularly polarized. JWST's mid-infrared spectrograph reaches 28 µm (the edge, plus troughs of sources out to z_s ≈ 0.13); Spitzer's reached 38 µm, with thousands of archived galaxy spectra. The test: stack spectra and demand an edge fixed across redshift, a length growing as 1 + z_s, and a sky dipole — three controls no instrument artifact satisfies at once.

🟫 **Stake S3, re-graded.** GUM's core predicts *no* trough at all, for a reason §6.11 explains: if a stiffness ratio called the locking length is as short as the structural scale, the helix's grip on light is suppressed to nothing. A detected trough with all three controls would retire that identification and *measure* the locking length; a null tightens the bound on it. The master draft's "non-redshifting 26 µm feature" is withdrawn: a static line is not what a helical vacuum imprints.

## 6.8 The transparency bound, corrected

The universe is visibly transparent near 25 µm. Requiring R ≤ 0.1 at every crossing (tightest today, when H is smallest), 🟩 **Corollary 2** gives **Δn/n̄ ≲ 6.2×10⁻¹⁷.**

**WHAT CHANGED.** The master draft's bound was 10⁻³¹ — fifteen orders stronger — because it let a photon stay in resonance over a gigaparsec. Redshift allows only a resonant path of about (Δn/n̄) × c/H: for Δn = 10⁻³¹ that is about 14 µm, *less than one pitch*. The old bound asked the helix to reflect light it could never hold (correction 15).

A separate lesson from the disordered case, which r1 printed, r2 dropped, and r3 restores (correction 47): if the fog's helices point every which way, one tilted at angle θ reflects at n̄p·cos θ, so the local fog dims every wavelength shorter than n̄p, and the fixed feature becomes a *step* at n̄p instead of a trough's edge. The total dimming over a Hubble path is τ ~ (Δn)² c/(Hp), and τ ≲ 0.1 — the same 10% criterion — gives Δn ≲ 10⁻¹⁶, within an order of magnitude of the coherent bound. Either way the feature is source-independent and dipole-shifted; which shape nature shows depends on how far the helices stay aligned, a deliverable of Closure K-5. A laboratory arm, a terahertz polarimeter over about a hundred meters of vacuum, is restored too: it cannot compete with the sky at the bound, but it is the only arm that sees the helix's frequency-dependent rotation close to resonance, where the sky is full of dust.

## 6.9 What the helix cannot do

⬛ Far above its pitch, a cholesteric *rotates* linear polarization at a rate proportional to frequency squared (de Vries, 1951). The microwave background shows a polarization rotation of about 0.2°–0.34°, at roughly three standard deviations, *the same at every frequency* from 23 to 353 GHz. 🟩 **Proposition 11:** a helix-made rotation would change by (353/23)² ≈ 240 across those bands, and at the allowed coupling it would be only about 10⁻⁵ radian per Hubble length at 300 GHz, against the observed 5×10⁻³. **A static helix cannot make the observed rotation;** with light's achirality, a static condensate makes no frequency-flat rotation at all.

That is not the end of the story in r3. A condensate whose tilt *changes* as the universe expands — and Chapter 14 ties the tilt to dark energy — does induce a frequency-flat rotation, with a definite sign and a definite pattern in redshift. Chapter 15 derives it.

## 6.10 A wind through a frozen pattern

Structure at rest in the material frame streams past us at about 370 km/s, turning a static pattern into a signal in time. 🟩 **Proposition 12:** what you see depends on the detector. A smooth detector much larger than the fog's correlation length averages it away, suppressed by the cube of (correlation length ÷ detector size). Only a detector *patterned* at the pitch sees a line, at v/p = 15.0 GHz. The proposition is a correction as much as a proposal: an ordinary microwave cavity tuned to 15 GHz would see essentially nothing.

r2 dropped this proposition without comment; r3 restores it with a caveat (correction 61). Any detector reads the fog through light's coupling to it, so the line carries the same locking suppression as the trough (§6.11). In GUM's core the line has zero amplitude; otherwise it is a second channel for discovering the locking length, sharing the pitch with the neutrino mass, the trough's edge, and the range of a mirror force (Chapter 15) — the cross-lock "one pitch," X2. **No stake is registered.** Sometimes the honest output of a calculation is "not this experiment."

## 6.11 The locking length: a closure that had been declared done

How strongly does light feel the helix at all? 🟩 **Proposition 9** answers, as the conditional execution of Closure K-5: a light wave of wavenumber k crossing the fog changes its refractive index by

**Δn(k) = C_χ ε_vac sin²θ_c (kℓ_lock)⁴,  ℓ_lock ≡ √(γ/4µ_c),**

with C_χ a number of order one and ε_vac ≤ 3×10⁻³ the lift of the vacuum's almost-free manifold. If grains were perfectly locked to their lattice (µ_c → ∞), light would not feel the fog at all.

**STEP-UP — why the fourth power.** A perfectly locked light wave never turns grains *relative to* their lattice, and the fog's energy depends only on that relative turn. At finite locking stiffness the wave leaves a small mismatch, ψ ≈ (kℓ_lock)²φ, and the fog's energy is quadratic in ψ, so the index change goes as the square of a square: (kℓ_lock)⁴. A fourth power of a tiny ratio is very tiny.

The master draft simply set ℓ_lock equal to the structural scale ℓ_s and declared the closure executed with "fifty-five decades of margin." But ℓ_lock is a ratio of two stiffnesses, ℓ_s is the step of the level-0 network, and nothing in GUM's energy makes them equal. r3 therefore closes the coupling only *conditionally* — on ℓ_lock ≈ ℓ_s — and turns the trough into a measurement. **Corollary 3** (🟨): with ε_vac = 3×10⁻³, sin²θ_c = 0.63, C_χ = 1 and q = 2π/(24.6 µm), the transparency bound of §6.8 requires **ℓ_lock ≲ 1.7 nm**. (r2's tilt gave 1.8 nm; the corrected tilt lowers the bound by 7%.) At the other extreme, ℓ_lock = ℓ_P gives Δn ≈ 5×10⁻¹²¹, and the trough has depth zero.

**The archival searches.** The audit behind r3 fitted the trough template of Theorem 7 to archived Spitzer spectra, twice. The first search stacked 101 galaxies against 363 protostars in our own Galaxy and found no edge: Δn/n̄ < 5.5×10⁻¹⁷ at 95% confidence, 0.90 times the transparency bound, limited by a 2% pattern fixed in the observed frame of the galaxy reductions. The second used uniformly reduced spectra of 193 galaxies against 656 stars and 58 nearby galaxies, lowering that floor to about 0.9%, and found 4.8×10⁻¹⁷ (0.77 times the bound) with the weaker of two controls — a rule fixed in advance. Combined: **Δn/n̄ < 4.2×10⁻¹⁷, 0.68 times the transparency bound**, for edges at 22.5–24.7 µm (at most 0.74 times anywhere in that band), and so **ℓ_lock < 1.5 nm**. The remaining systematic changes sign with source redshift, which a trough cannot do: it is the galaxies' own continuum shape. Two regions are still untested — the *a priori* window below 22.5 µm, and the amorphous step of §6.8.

One question stays open, and r3 registers it rather than guessing: whether the *time-dependent* tilt behind Chapter 15's polarization rotation escapes the same locking quench (a deliverable of Closure K-26).

**NUMBERS TO HOLD.** α⁻¹ = 137.036. 𝔪 = 1.9 ± 0.4 ⬜; sin θ_c = 0.79 (+0.06/−0.11), θ_c = 52.6°. Pitch p/ζ_ν = 8.7–24.7 µm *a priori* ↔ 12.1–34.5 THz ↔ m₃ = 0.050–0.143 eV; 24.66–24.75 µm where cosmology allows. Δn/n̄ ≲ 6.2×10⁻¹⁷ (not 10⁻³¹), and Π ≈ 0.105 there: a sudden passage. Edge dipole ±0.030 µm. Archival limit Δn/n̄ < 4.2×10⁻¹⁷; ℓ_lock ≲ 1.7 nm from transparency, < 1.5 nm from the archives. Advected line 15.0 GHz (patterned detectors only; zero amplitude if ℓ_lock ≈ ℓ_s). Observed CMB rotation 0.2°–0.34°, frequency-flat.

**CHEW ON THIS.** (6.1) For a 90° wedge, the cone's half-angle obeys sin θ = 1 − 90/360. Find θ, and argue in two sentences why "half a wedge" cannot exist once taped. (6.2) A Foucault pendulum at latitude 41°: how many degrees per sidereal day? Give the Aharonov–Bohm dictionary entry for each ingredient. (6.3) Verify the lines of §6.4, and show the energy gain is zero exactly at χ² = γΔ². Then solve sin x/x = 1/1.9 on a calculator by trial (start at x = 1.8) and find θ_c = x/2 and sin θ_c. Compare with √(1 − 1/1.9). (6.4) Compute p/ζ_ν from m₃ = 0.0501 eV and 0.143 eV, and the frequencies c/p. (6.5 ★) With Δn/n̄ = 6.2×10⁻¹⁷, p = 24.6 µm, c/H₀ = 1.372×10²⁶ m, compute Π and R. Is the passage adiabatic or sudden? (6.6) Take the edge at 24.7 µm. A galaxy at z_s = 0.1 has a trough from 24.7 µm to what? Can JWST's 28 µm see all of it? What about z_s = 0.3? (6.7 ★) Compute the resonant path (Δn/n̄) × c/H₀ for Δn/n̄ = 10⁻³¹ and 6×10⁻¹⁷, compare with the pitch, and explain why the first doomed the old bound. (6.8) Why would a smooth 15 GHz cavity see nothing? (6.9 ★) From Δn = ε_vac sin²θ_c (kℓ_lock)⁴ with ε_vac = 3×10⁻³, sin²θ_c = 0.63 and k = 2π/(24.6 µm), find the largest ℓ_lock allowed by Δn ≤ 6.2×10⁻¹⁷ and by Δn ≤ 4.2×10⁻¹⁷. What Δn does ℓ_lock = 1.6×10⁻³⁵ m give?

---

# PART IV — THE QUANTUM

# CHAPTER 7 — THE JITTERY SUBSTRATE: QUANTUM MECHANICS AS BOOKKEEPING

**What you'll be able to do after this chapter:** (1) Show that the Schrödinger equation is secretly a fluid plus one strange pressure. (2) Say where that pressure comes from in GUM, and what closes the gap in every "fluid" derivation. (3) Explain the Born rule as an *equilibrium*, how GUM gets the statistics of *sequences* of measurements, and what is still owed. (4) Explain Bell's "beables" and the tower of fields that answers him. (5) Prove that tower depth is Schmidt rank, and compute the best a limited substrate can do. (6) Read a lower bound on the substrate's capacity off existing quantum computers.

## 7.1 Madelung: quantum mechanics is secretly a fluid

⬛ Write the wave function as amplitude times phase, Ψ = √ρ e^{iS/ħ}, substitute into the Schrödinger equation, and separate real and imaginary parts (★ problem 7.1). You get a **continuity equation** — ρ flows with velocity ∇S/M and is conserved — and **Newton's mechanics in energy form** plus *one extra term*, the **quantum potential**

**U_Q = −(ħ²/2M)(∇²√ρ)/√ρ.**

A fluid plus one exotic internal pressure *is* quantum mechanics. Spreading wave packets, tunneling, and the stability of hydrogen all live in U_Q, and "where does quantum mechanics come from?" sharpens to **"what produces U_Q?"**

## 7.2 The crowd that won't be squeezed

⬛ Marcel Reginatto (1998): take a *classical* ensemble and add to its energy a penalty for sharply peaked probability — the **Fisher information**, (ħ²/8M)∫(∇ρ)²/ρ d³x. Its variation is *exactly* U_Q. **Classical statistics plus a penalty for over-sharp probability equals quantum mechanics** — a theorem about equations that does not say *why* nature charges the penalty.

**STEP-UP — the shaken tray of marbles.** Shake a tray of marbles and try to herd them into a corner: the jostling pushes back harder the tighter you pack. Hydrogen doesn't collapse because squeezing the electron's cloud raises the jostle-energy faster than attraction lowers it.

GUM's answer, 🟩 in structure: **the substrate jitters.** Knots ride zero-point agitation of the substrate, which supplies the noise of Edward Nelson's "stochastic mechanics" (1966) instead of postulating it; the diffusion constant ħ/2M is fixed by the knot closure of Chapter 10, and the stiffness carrying the Fisher penalty is the core-sourced pressure field of Chapter 5.

⬛ Every fluid derivation has one crack, found by Timothy Wallstrom (1994): it matches Schrödinger only if the phase changes by a whole multiple of 2πħ around every loop, and nothing in the fluid enforces that — Nelson conceded the crack was fatal. 🟩 In GUM the phase S/ħ is a real *angle* of the knot's texture (its rotation angle, Chapter 10), and an angle that returns to itself around a loop must wind a whole number of times. The crack is closed by construction — given that particles are knots.

## 7.3 The Born rule as equilibrium

⬛ Why is probability |Ψ|²? In the pilot-wave tradition's sharpest result (Valentini; Dürr, Goldstein, and Zanghì — 🟪), |Ψ|² is an **equilibrium**: start with any distribution and ordinary messy dynamics *relaxes* it toward |Ψ|², as a gas relaxes toward the Maxwell–Boltzmann distribution. GUM adds a rate: jitter speeds relaxation by a factor 17–41 (🟦 ⬜).

r1 printed two debts at full size. The first was the statistics of *sequences* of measurements, which stochastic mechanics must supplement. 🟩 **Proposition 13** now closes it in form (Closure K-6). When a measurement records its result, the pointer of the apparatus ends up in one place, and the tower of §7.4 is updated with the pointer's *actual* position. The branches the pointer did not take stop guiding anything, and the sub-quantum relaxation tidies the remaining branch back to |Ψ|². The outcome: the probability of getting m₁ and then m₂ is exactly what the textbook rule (Lüders' rule: project, evolve, project) says, up to two small error terms. One dies away exponentially as the time between the measurements grows; the other is the time the update needs to cross the apparatus at the speed c_L, divided by the time between the measurements. That second term is not decoration. For measurements faster than the update, GUM *predicts* the textbook rule fails by that amount — the two-party face of Chapter 8's finite-speed test.

The second debt stands as r1 printed it: any surviving early-universe *non-equilibrium* relic should be *smaller* in GUM than in pure pilot-wave theory, because GUM relaxes faster — a discriminator between two theories that otherwise agree.

**WHAT CHANGED.** r1 listed sequential measurements as an owed closure, r1's K-9; r2 closed it in form; r3 keeps that closure, grading it honestly: the relaxation rate and the sizes of the two error terms are not derived, and remain deliverables. r2 had dropped r1's non-equilibrium discriminator without comment; r3 restores it (correction 64).

## 7.4 Bell's beables and the tower

⬛ John Bell asked every theory to say what *exists* — its **beables**. Pilot-wave theory says particle positions, but its guiding wave lives in a 3N-dimensional configuration space. In 2010 Travis Norsen showed that wave can be traded for an infinite *tower* of ordinary 3D fields: particle 1's wave function *given where the others actually are* (the "conditional wave function"), then how that field changes if particle 2 moves a little, then how *that* changes, forever. Exact, if you keep the whole tower.

GUM's substrate is a physical home for the tower: the conditional fields are patterns in the texture. When a particle is measured, its partners' conditional fields change, and in GUM that change is a physical update spreading at the longitudinal speed c_L in the material frame — where Chapter 5's second speed went. Chapter 8 tests it. First: *how much* of an infinite tower can a finite substrate hold?

## 7.5 Schmidt rank, and why depth is rank

⬛ Write a two-particle state as a sum of products ("1 does this while 2 does that"). The minimum number of product terms is the **Schmidt rank**; their weights λ₁ ≥ λ₂ ≥ … add to 1. A Bell pair has rank 2 (weights ½, ½); a typical random state of 2m qubits split in half has rank 2^m with nearly equal weights.

🟩 **Lemma 3 (depth is rank).** A tower cut at depth d (Definition 3) is a Taylor polynomial of degree d in particle 2's position: d + 1 terms, each a product. So depth-d towers hold states of Schmidt rank at most d + 1 (for N particles in 3D, C(3(N − 1) + d, d)). **Tower depth and Schmidt rank are one thing with two names.**

## 7.6 The best a limited substrate can do

🟩 **Theorem 8.** A substrate holding rank at most χ — its *Schmidt capacity* (Definition 4) — reaches fidelity (squared overlap with the true state) at most **F_χ = λ₁ + … + λ_χ**, by keeping the χ largest weights. ⬛ This is the Eckart–Young–Mirsky theorem — the reason image compression by singular-value decomposition works. For random states the weights are at most about 4×2^{−m} (Corollary 5), so capacity χ gives fidelity at most **4χ/2^m**.

## 7.7 Quantum computers as the substrate's stress test

⬛ In 2019 a 53-qubit processor ran random circuits whose fidelity, estimated by cross-entropy benchmarking, matched a model built from each gate's measured error rate within 10–20%; later 56–70-qubit experiments on superconducting and trapped-ion machines agreed too. A substrate secretly truncating states to rank χ would add a fidelity loss that spoils that agreement. So the truncation fidelity is at least about 0.8, and with a half-split of m = 26:

**χ ≥ 0.8 × 2²⁶/4 ≈ 1.3×10⁷.**

A tower a few layers deep (capacity ~10) fails by six orders of magnitude. 🟩 GUM passes: its capacity is set by the substrate's degrees of freedom. The paper stresses what this bound is for — it **fixes the direction of the test**: every large entangled computation raises the floor. GUM's stakes concern where capacity must *stop*, and saying so testably is subtler than the master draft thought (Chapter 8).

**NUMBERS TO HOLD.** 2²⁶ ≈ 6.7×10⁷. Demonstrated capacity χ ≥ 1.3×10⁷. Relaxation speed-up 17–41 ⬜. ⬛ Watchable analog: "walking droplets" on a vibrated oil bath — particles guided by their own waves, an existence proof of the idea, which (as it must) never violates Bell's inequality.

**CHEW ON THIS.** (7.1 ★) Derive both Madelung equations from the Schrödinger equation. (7.2) In the marble picture, what plays ħ? (Careful: what sets the jostling?) (7.3) A capacity-1 substrate keeps the larger term of a Bell pair. What fidelity? Interpret. (7.4) Redo the capacity bound for agreement within only 50%. Does the conclusion change? (7.5) How many product terms can a depth-2 tower hold for two particles in one dimension? (7.6 ★) Evaluate C(3(N − 1) + d, d) for N = 3, d = 2. (7.7) Why is Wallstrom's gap closed "by construction" in GUM, and on what assumption? (7.8) Two measurements on the same particle are made 1 ns apart by an apparatus 1 m across. If c_L = 10⁴c, how big is the second error term of Proposition 13? What would make it large?

---

# CHAPTER 8 — COUNTING KNOBS, MIRROR CIRCUITS, AND SPOOKY ACTION AT A FINITE SPEED

**What you'll be able to do after this chapter:** (1) State the dimension-counting theorem, why it holds, and the exact width of the cliff it implies. (2) Explain why no experiment can test it as stated — the master draft's mistake. (3) Recite the two conditions of "dense storage." (4) Describe a mirror-circuit experiment, predict where a dense-storage "cliff" appears, and say how to move it. (5) Explain how finite c_L shows up in the timing of quantum correlations, and why three or four parties can do what two cannot. (6) Derive the bound on the substrate's grain size from gamma-ray bursts, explain how induced gravity puts the grain near the Planck length, and state GUM's heaviest bill.

## 8.1 You cannot store more numbers than you have knobs

⬛ An n_q-qubit state needs 2^{n_q} complex amplitudes — about 2×10¹⁵ real numbers for 50 qubits, and more than there are atoms in the observable universe for 300. Suppose the substrate is *classical* in Bell's sense — its state is a point in a space of N_eff real "knobs" — and represents quantum states without amplifying tiny knob wiggles into huge changes ("bounded gain"; Definition 5). 🟩 **Theorem 9 (dimension counting)**, a counting argument about covering a space with little balls: representing *every* state well needs roughly as many knobs as the space of states has dimensions, so

**n_q ≲ log₂ N_eff.**

With N_eff = 12V/ℓ_s³ — twelve real numbers per structural cell (the displacement, the orientation, and their rates) in a register's volume — that was the master draft's headline: a few hundred qubits of generic entanglement per chip.

**STEP-UP — the hotel.** A hotel with N rooms cannot give 2ⁿ guests private rooms once 2ⁿ > N. The quantum states are the guests; the knobs are the rooms.

How sharp is the edge? The covering argument can be done exactly, because the volume of a little ball in the space of quantum states is known. 🟩 **Proposition 14:** the best fidelity the counting allows for the worst-case state falls from 90% to 10% over exactly

**Δn = log₂(ln 0.1 / ln 0.9) = 4.45 qubits,**

whatever N_eff is, with the midpoint a few qubits above log₂ N_eff (3.9, 7.2 or 10.5 qubits above, for a gain margin M = 10, 100 or 1000). Far past the midpoint the allowed fidelity halves with every added qubit. The master draft had printed a width of "about 6" qubits, measured from a different starting point (correction 12).

The paper's verdict on the theorem itself: **"The theorem is correct, and it is untestable as stated."**

## 8.2 Why no experiment can test it as stated

🟩 **Theorem 10 (reachable-set counting).** A circuit of N_g gates, each set by p real parameters, reaches only a set of states of dimension at most N_g·p — the dials on the control panel — a vanishing sliver of all 300-qubit states. **Corollary 6:** a classical substrate could just store the *recipe* (the N_g·p angles) and represent every reachable state exactly with polynomially many knobs. No polynomial-size experiment can beat dimension counting without an assumption about *how* the substrate stores states.

**STEP-UP — recipes and dishes.** A kitchen that stores recipes, not dishes, can serve anything on a finite menu. To catch it you would have to order something no short recipe makes — and every order is itself a short recipe.

A recipe store is a poor model of GUM, though: to supply a conditional field at one point *in real time* it would have to evaluate an exponentially long sum over the recipe — neither local nor fast. GUM's natural hypothesis is the opposite.

## 8.3 Dense storage

🟩 **Definition 6.** A substrate **stores densely** if **(M1) it is Markovian** — the hosted state is fixed by the substrate's *present* configuration, not a remembered history — and **(M2) it is target-blind** — where the ideal state cannot be hosted exactly, the error does not depend on what the circuit will do later or on the intended answer. 🟩 **Theorem 11:** under dense storage, a typical random n_q-qubit state is hosted with fidelity at most about **4N_eff × (a logarithm)/2^{n_q}** — nearly orthogonal to the truth once 2^{n_q} ≫ N_eff.

## 8.4 The mirror circuit and the cliff

Checking random-circuit sampling needs a classical simulation, impossible at a few hundred qubits. **Mirror circuits** don't: apply a scrambling circuit U, then its exact inverse U†, and measure the probability P_ret of returning to the start — whose correct value is known without simulation.

**STEP-UP — the Rubik's cube.** Scramble a cube with a random sequence, then apply the exact reverse: it returns to solved, *if nothing was lost in the middle*. Now suppose that at the midpoint someone photographs the cube with a low-resolution camera and rebuilds it from the photo. If the camera resolves the pattern, you still end up solved; if not, you get garbage.

🟩 **Theorem 12 and Corollary 7.** Under dense storage, P_ret ≲ F_noise × F_rep + 2^{−n_q}, where F_noise is the calibratable gate-error loss. The normalized return probability 𝒫 = P_ret/F_noise obeys **𝒫 ≲ min{1, c·N_eff·n_q/2^{n_q}}**: it stays at 1, then beyond **n_q\* ≈ log₂ N_eff** (plus at most about log₂ n_q, roughly 8) **falls by half with every added qubit.** And the fall is **gate-independent** — it depends on qubit number, not circuit depth — whereas ordinary noise worsens with every gate. That is how a capacity limit is told from a bad day in the lab.

## 8.5 Where the knobs are

*Where* the substrate keeps the tower is a physical question; the paper states the options (Definition 7) and poses deriving the right one (🟧 Closure K-7). The midpoints below take ℓ_s at the Planck length, where induced gravity puts it (§8.7; Corollary 8), twelve numbers per cell, and a gain margin M = 100:

| Hosting hypothesis | Knobs N_eff | Cliff midpoint at ℓ_P | At ℓ_s = 1.5×10⁻²⁷ m | How it moves |
|---|---|---|---|---|
| H_V (bulk, default) | 12V/ℓ_s³, V = 10⁻¹⁰–10⁻⁶ m³ | 324–338 qubits | 245–258 qubits | +9.97 per 1000× volume |
| H_A (cut) | 12A/ℓ_s², A = 10⁻⁸–10⁻⁴ m² | 215–229 qubits | 162–176 qubits | +9.97 per 1000× area |
| H_R (extent) | 12n_q(ℓ_q/ℓ_s)³, qubit size ℓ_q = 10⁻⁸–10⁻⁴ m, n_q = 300 | 286–326 qubits | 207–246 qubits | +9.97 per 10× qubit size |

The midpoint moves by ±3 qubits as the gain margin runs from 10 to 1000, and if induced gravity is cut off at π/ℓ_s instead of 1/ℓ_s, every entry at ℓ_P drops by about 5 qubits. A non-dense alternative, "Schmidt hosting," would put the cliff near twice log₂ N_eff (634–661 qubits at ℓ_P). The key feature: **the cliff moves.** Under H_R, trapped ions (qubits ~10⁻⁸ m) should hit it about 40 qubits before superconducting transmons (~10⁻⁴ m). A cliff that moves as predicted when you turn a knob is very hard to mistake for engineering noise.

**The protocol** (🟫 **Stake S4, re-graded**, with **Stake S5** for the knob): mirror circuits with random scrambling halves, 150 to 400 qubits; noise calibrated on sub-registers, where every hypothesis predicts 𝒫 = 1; 𝒫 plotted at two or more depths (dense storage: depth-independent cliff; noise: depth-dependent drift); then vary the knob and measure the shift. **Feasibility:** the pre-cliff signal must be measurable, F_noise ≳ e⁻⁷, so two-qubit errors must be below about 2.8×10⁻³ at 300 qubits with all-to-all connections (1.3×10⁻³ on a 2D chip) — ⬛ comparable to today's best error rates, though not yet at this size. Error-corrected logical qubits sidestep the budget, because a scrambled logical state is also a scrambled physical state. **Kill:** flat 𝒫 through 350 qubits on any architecture with verified scrambling, which retires dense storage under all three hypotheses for any ℓ_s at or above the Planck length — leaving only Schmidt hosting or a grain finer than Planck's. Note that Clifford circuits (the master draft's proposal) cannot test this: their states are compactly describable, so a substrate could host them without dense storage.

**WHAT CHANGED.** The master's headline — "no device will ever verifiably entangle more than a few hundred qubits" — rested on a correct theorem about *all* states, which no experiment can prepare. r1 and r2 replaced it with a stated hypothesis (dense storage), a simulation-free test (mirror circuits), a predicted shape (a gate-independent cliff halving per qubit), and a control knob (correction 8). The new stake is sharper *because* the old one was admitted to be untestable. The numbers moved too. r1, with ℓ_s only bounded, printed a wide range, 234–329 qubits for H_V. r2 counted twelve numbers per cell instead of one (adding log₂ 12 = 3.58 qubits) and fixed ℓ_s near ℓ_P by induced gravity; r3 keeps both and states the midpoint with its gain margin: 324 qubits for an ion trap's zone, 338 for a superconducting chip.

## 8.6 Spooky action at a finite speed

When one particle of an entangled pair is measured, its partner's conditional fields update — in GUM, physically, at c_L in the material frame. GUM is a **c_L-causal model** (Definition 8): quantum correlations hold between measurements the update could connect, and not otherwise.

⬛ Salart and collaborators (2008, 18 km baseline) and Yin and collaborators (2013) timed distant measurements so tightly that no slow influence could connect them, and saw correlations intact: any such influence exceeds **ten thousand times c**, for any frame moving slowly relative to Earth. Since our lab moves through the material frame at an unknown velocity, and Earth's rotation swings the baseline through that "wind," 🟩 **Proposition 15** requires the test at every sidereal time: persistent violations imply c_L ≥ L/(δt + ½Ω⊕v⊥LT_int/c²), with L the baseline, δt the timing mismatch, T_int the integration time, Ω⊕ Earth's spin rate, v⊥ our velocity across Earth's axis.

**STEP-UP — two dancers and a messenger.** Dancers in separate rooms stay perfectly coordinated. If a messenger runs between them, you can catch them by cueing both at nearly the same instant — but the messenger's speed is fixed relative to a wind you can't see, so you must repeat the test at every time of day.

**Two parties can never exclude a finite c_L completely** — timing is never infinitely precise. 🟩 **Theorem 13** (after Bancal and collaborators, 2012, and Barnea and collaborators, 2013): with three or four parties, for every finite speed there are arrangements in which any finite-speed model must **either allow faster-than-light signaling or fail the quantum predictions.** GUM must choose. Signaling in a preferred frame is not a paradox for a substrate with a rest frame, but it would contradict every signaling test, so GUM's default (Flag F8) is no signaling — and then it predicts that multipartite correlations *drop* to a lower bound when a designated pair is c_L-disconnected. Scanning the sidereal day with c_L = 10⁴c and a 10 km baseline, the disconnection window is L/c_L ≈ 3.3 ns — within reach. **That is Stake S6.** Which horn GUM sits on depends on whether its tower update rule signals (🟧 Closure K-8); if it does, the stake flips. And GUM identifies this speed with Chapter 5's longitudinal speed (cross-lock X1), so the stake bounds a stiffness of the substrate.

## 8.7 How fine is the grain?

A grainy medium makes light's speed depend slightly on wavelength: ω² = c²k²[1 + ξ(kℓ_s)²], with ξ of order one. ⬛ The Fermi telescope has seen high- and low-energy photons from distant gamma-ray bursts arrive together, bounding such quadratic effects at E_QG,2 ≳ 1.3×10¹¹ GeV. 🟩 **Proposition 16:** ℓ_s = ħc/(√|ξ| E_QG,2), so **ℓ_s ≲ 1.5×10⁻²⁷ |ξ|^{−1/2} m.** That is an upper bound. What fixes ℓ_s itself?

🟨 **Gravity, if the substrate induces it.** Andrei Sakharov (1967) noticed that integrating out a set of heavy fields generates gravity's Einstein–Hilbert term, with a strength set by the number of fields and the cutoff length. Apply that to GUM's gapped branches (Proposition 42, conditional) and invert with the measured strength of gravity (Corollary 10):

**ℓ_s = √(N/12π) · ℓ_P,**

with N the number of gapped field components integrated out and ℓ_P = 1.6×10⁻³⁵ m the Planck length. N = 6, 12 or 60 gives ℓ_s = 0.40, 0.56 or 1.26 ℓ_P. The coefficient depends on how the calculation is cut off: cutting at π/ℓ_s instead of 1/ℓ_s gives 1.25–3.96 ℓ_P, which lowers every cliff of §8.5 by about 5 qubits. So the grain sits *within a factor of a few* of the Planck length — not exactly at it. At ℓ_s ≈ ℓ_P the timing bound is met by about eight orders of magnitude. One structural scale then fixes the cliff, a tiny right-handed admixture in the weak force, the strong-CP residual and the locking extreme of §6.11 together (cross-lock X7).

**WHAT CHANGED.** The master draft *assumed* ℓ_s somewhere between 10⁻³⁵ and 10⁻²⁶ m. r1 derived the timing bound from data, which excludes the top decade of that range (correction 13). r2 fixed ℓ_s near the Planck length by induced gravity, which closes the bottom end. The audit found two slips in r2's version: it stated a cutoff of π/ℓ_s but used the coefficient for 1/ℓ_s, so ℓ_s is fixed only to within a factor of a few (correction 55); and it said the timing bound was met by "twenty-six" orders of magnitude, where the honest figure is about eight (correction 58).

## 8.8 The heaviest bill

GUM has several speeds — the matter cone c_ψ, whatever cone gravity has, c_L — but the world shares one light cone to 10⁻¹⁵–10⁻²⁰. GUM's slow logarithmic "cone-locking flow" (🟦, real in the lab: electron speeds in graphene "run" with energy) buys a factor of 10 to 100, not 10¹⁵, and theories that break Lorentz symmetry at short distances generically leak it into everyday physics. **This is the heaviest bill in GUM, printed at the top of its kill list.** The revisions lightened it in one place and relocated it in another. Light no longer needs the flow, because the cone condition makes it exact. The matter cone is now a constraint on the grains' rotational inertia (Chapter 2), met automatically by grains of the structural size once ℓ_s sits near ℓ_P. The one deliberate mismatch, c_L ≫ c, has moved out of electromagnetism and into the tower, where Proposition 15 and Theorem 13 test it. And the master draft's derivation that gravitational waves travel at exactly c is withdrawn (Chapter 14).

**NUMBERS TO HOLD.** log₂(12V/ℓ_P³) ≈ 317 for V = 10⁻¹⁰ m³. Cliff midpoints at ℓ_P: H_V 324–338, H_A 215–229, H_R 286–326, Schmidt 634–661; H_V at the timing ceiling 245–258. Width at most 4.45 qubits. +9.97 qubits per 1000× volume. Gate errors ≲ 2.8×10⁻³ (all-to-all) or 1.3×10⁻³ (2D) at 300 qubits. c_L ≳ 10⁴c. Window at 10 km, 10⁴c: ≈ 3.3 ns. ℓ_s ≲ 1.5×10⁻²⁷ m from timing; ℓ_s = 0.40–1.26 ℓ_P from induced gravity (1.25–3.96 ℓ_P with a π cutoff).

**CHEW ON THIS.** (8.1) With log₂10 ≈ 3.32, compute log₂(12V/ℓ_s³) for V = 10⁻¹⁰ m³ at ℓ_s = 1.6×10⁻³⁵ m and at ℓ_s = 1.5×10⁻²⁷ m. Add 7.2 qubits (the midpoint offset at M = 100) to each. (8.2) "Neutral-atom machines with over a thousand qubits exist, so Stake S4 is dead." Explain in three sentences the difference between *having* qubits and *verifying* a generic entangled state. (8.3) In the Rubik's-cube analogy, what plays F_noise, F_rep, and the cliff? (8.4) At the feasibility floor P_ret ≈ 9×10⁻⁴. How many runs does 3% relative precision take, ≈ 1/(0.03² × 9×10⁻⁴)? (8.5) Evaluate the bound of §8.6 for L = 10 km, δt = 100 ps, T_int = 60 s, v⊥ = 370 km/s, Ω⊕ = 7.29×10⁻⁵ s⁻¹; express c_L in units of c. (8.6 ★) Compute ħc/E_QG,2 for E_QG,2 = 1.3×10¹¹ GeV (ħc = 1.973×10⁻¹⁶ GeV·m). (8.7) Sort into "tests dense storage" or "does not": (a) random-circuit sampling at 60 qubits; (b) Clifford circuits at 400 qubits; (c) mirror circuits with random two-qubit gates at 300 qubits, run at two depths. (8.8 ★) Evaluate log₂(ln 0.1/ln 0.9) and explain why the cliff's width does not depend on N_eff. (8.9) Compute √(N/12π) for N = 12, and π times that. By how many qubits does a factor π in ℓ_s move a bulk-hosting cliff? (Hint: N_eff ∝ ℓ_s⁻³.)

---

# PART V — MATTER ITSELF

# CHAPTER 9 — PARTICLES ARE KNOTS

**What you'll be able to do after this chapter:** (1) Explain what a texture is and build the hedgehog in your head. (2) State why a knotted texture cannot unwind, split, or fade, connecting each to a laboratory fact — and say exactly what a "tear" is needed for. (3) Prove Derrick's collapse theorem and show how GUM's anti-collapse terms escape it. (4) Follow the Bogomolny trick to the mass law. (5) Explain why a knot ticking inside the gap cannot radiate itself away. (6) Do the belt trick and say why knots can be fermions.

## 9.1 Textures you can't comb away

A **texture** is a pattern in the orientation field. Most comb out flat; some are **trapped by topology**.

**TRY THIS (the hairy ball).** Try to comb the fuzz on a tennis ball flat everywhere with no cowlick. You can't: ⬛ every combing of a sphere leaves a cowlick (the hairy-ball theorem — also why somewhere on Earth the horizontal wind is always zero). Cowlicks can move, merge, or cancel in pairs, but their *signed count* is fixed: a **topological invariant**.

In 3D, picture the **hedgehog**: orientations pointing "outward" in every direction at a center, relaxing to one common orientation far away. GUM's order parameter lives on a three-dimensional sphere (the space of SU(2) orientations), and patterns in space are classified by an integer **degree** K — how many times they wrap that sphere. Its density is the topological density b_P of Chapter 3; the hedgehog has K = 1, the vacuum K = 0, and a whole number cannot pass through ½. Removing a lone hedgehog would require *tearing* the substrate, which GUM's tear-free rule (the deformation never collapses, det F > 0) forbids. **A hedgehog is a knot in the substrate: a particle.** 🟩

🟩 **Lemma 5.** Along any tear-free history, the *total* degree and the *total* charge-winding are constant; to change either, the substrate must pinch to zero somewhere (det F → 0). One lemma gives facts that the Standard Model takes as separate inputs: charge is **conserved** (the total degree is constant) and **quantized** (degree is an integer), and its flow obeys a continuity equation. **Conservation of total charge is the absence of tears.** Antiparticles are degree −1. Because only the total is protected, a knot and an antiknot (K = +1 and K = −1) can be **created together without any tear** — the total stays zero — and annihilation is the same history run backward.

**WHAT CHANGED.** r1 read Lemma 5 as saying that charge can be created only in pairs *at a pinch*, where the substrate's integrity fails, and the master draft built its account of dark-matter production on such "pinch epochs." Both readings are withdrawn (correction 34): the lemma constrains the total degree only, so an opposite-degree pair needs no tear at all. Chapter 14 states what replaces the pinch epochs.

## 9.2 Derrick's guillotine, and the two escapes

⬛ **Claim:** a static, localized 3D texture whose energy has only first derivatives (plus a potential) collapses. **Proof you should own:** shrink it by a factor λ (replace x by x/λ). Gradient energy scales as E₂(λ) = λE₂ (two gradients give 1/λ², the volume gives λ³); potential energy as E₀(λ) = λ³E₀. Both *decrease* as λ → 0: the texture lowers its energy by imploding, and no stable size exists. That guillotine beheaded "particles as lumps of field" for decades.

**Escape 1 (Skyrme's quartic term):** four derivatives scale as E₄/λ, blowing up under shrinking, so λE₂ + E₄/λ has a minimum. That is GUM's W₄. **Escape 2 (the "BPS" pair):** six derivatives scale as E₆/λ³ against the potential's λ³E₀, with a minimum where E₆ = E₀. That is GUM's W₆₊₀. ⬛ Both are established soliton physics; Chapter 10 shows that *which* pair governs a spinning knot decides what spin it can have.

## 9.3 The Bogomolny trick and the mass law

Complete the square in the star sector's energy, ½Λ²b_P² + 𝒱:

**E₆₊₀ = ∫½(Λb_P ∓ √(2𝒱))² ± Λ∫b_P√(2𝒱) ≥ C₆|K|.**

The square is never negative, and the cross term is *topological* — it depends only on the degree. ⬛ This is Bogomolny's 1976 trick. For GUM's potential, **C₆ = 64Λm̃_V/(15π) ≈ 1.358 Λm̃_V** (★ problem 9.4), and the texture saturating the bound is a **compacton**, a knot ending *sharply* at radius **R\* = (2Λ/(π²m̃_V))^{1/3}** with nothing outside. 🟩

Three consequences are used later. **The mass law:** mass = shape number × the substrate's energy unit Λm̃_V, so mass *ratios* multiply shape numbers and potential strengths — the multiplicative law Chapters 12–13 need. **Additivity:** in the exact BPS limit, masses add. **Dust:** on the BPS solution, internal pressure vanishes at every point, so knot matter behaves as cosmological "dust" (Chapter 14).

A warning from the audit: the potential strength m̃_V that sets knot masses is *not* the total gap stiffness m̃ = √(4µ_c + ¼m̃_V²) that sets the band edge. The master draft used one symbol for both; Chapter 10 shows why separating them matters.

## 9.4 Why a ticking knot doesn't radiate itself away

Real particles have a heartbeat: in GUM, the knot's internal orientation pattern rotates at a clock frequency ω (Chapter 10). Oscillators usually radiate. Why not a knot? 🟩 Because it ticks *inside the gap*, ω = κω₀ with κ < 1, which closes three doors at once: its frequency is forbidden on the gapped branch B3 (Chapter 2); light is achiral and doesn't couple to it at leading order (Chapter 4); and it cannot unwind, because its degree is conserved (Lemma 5). **A knot is stable for the reason a bound state below threshold is stable** — ⬛ like an atom's ground state, it has nowhere lower to go. A moving knot is the boosted spinning solution; seen from the lab, its internal phase is a de Broglie wave with λ = h/p, and its clock slows as relativity requires.

## 9.5 The belt trick: why knots can be fermions

⬛ Buckle a belt to a doorknob and twist the free end by 360°: you cannot undo it while keeping the end's orientation fixed. Twist by 720° and you *can* (loop the belt around the end). Rotations by 360° and 720° are topologically different — the reason GUM's orientation lives in SU(2). An extended knot remembers this: a 360° rotation leaves a belt-twist imprint in the surrounding field.

Finkelstein and Rubinstein (1968): for solitons, swapping two identical knots is continuously connected to rotating one by 360°, so if the 360° loop carries a factor −1, so does swapping. **Solitons can be spin-½ fermions without anticommuting fields put in by hand.** In GUM the space of knot configurations has exactly the right order-two "twist class" to host that −1, and the fermionic sign is *selected* by the closure of Chapter 10 — consistent, not forced, and graded so. One mechanism, the knot's internal rotation, supplies its clock, spin, and statistics: one clock period multiplies the state by −1; only 720° brings it back. Pauli exclusion — the reason chemistry has a periodic table — is a belt trick performed by the substrate.

**STEP-UP.** Do the belt trick now. It takes ninety seconds, and "spin-½" will never be jargon again.

**NUMBERS TO HOLD.** C₆ = 64Λm̃_V/(15π) ≈ 1.358 Λm̃_V. R\* = (2Λ/π²m̃_V)^{1/3}. Derrick scalings: E₂ ∝ λ, E₀ ∝ λ³, E₄ ∝ 1/λ, E₆ ∝ 1/λ³.

**CHEW ON THIS.** (9.1) The phase field θ(x) = 2π tanh(x/a) on a line: what total winding (change in θ divided by 2π) does it accumulate from −∞ to +∞? (9.2 ★) Run Derrick's scaling on E₂ + E₄ + E₀ + E₆ (scalings λ, 1/λ, λ³, 1/λ³). Which *pairs* can stabilize alone? Show the (E₀, E₆) minimum forces E₀ = E₆. (9.3) Why does creating a single knot need a tear, while a knot–antiknot pair needs none? (9.4 ★) Check (2/π)∫₀^π 2 sin(χ/2) sin²χ dχ = 64/(15π). (Hint: u = χ/2, sin χ = 2 sin u cos u.) (9.5) Name the three doors a ticking knot keeps closed and the chapter that closes each. (9.6) Do the belt trick, then write three sentences connecting it to the periodic table.

---

# CHAPTER 10 — THE SPINNING KNOT, PLANCK'S CONSTANT, AND A CLOCK YOU CAN HIT

**What you'll be able to do after this chapter:** (1) State the two closure conditions a knot must satisfy at once. (2) Prove in one line that a knot's rotational energy is a fixed fraction of its total — and say why that is *kinematics*, not GUM. (3) Reproduce the spin-½ argument with high-school algebra. (4) State Flag F9, its two halves, and how a bench tells them apart. (5) Say exactly what "ħ = 𝔠Λ√J" claims, and redo the part of the normalization audit r3 has carried out. (6) Derive two predictions that follow only if de Broglie's clock is a *physical* rotation.

## 10.1 Two conditions, one ħ

Electrons **spin** (angular momentum ħ/2) and **tick**: the quantum phase of a particle at rest rotates at ω = E/ħ with E = mc², de Broglie's "internal clock" (1924). In GUM these are one motion: the knot **isorotates** — its internal orientation pattern spins at ω. Consistency demands, *with the same ħ*:

**(C-spin) L = 𝕀ω = jħ,  (C-clock) E_tot = ħω,**

with 𝕀 the knot's moment of inertia and j its spin in units of ħ. The paper reads (C-clock) as one physical angle observed twice: the quantum phase of Chapter 7 *is* the knot's rotation angle. If both conditions can hold at once, **ħ is tied to the substrate.**

## 10.2 The quarter is kinematics

🟩 **Lemma 4.** For any object with rotational energy ½𝕀ω² = ½Lω obeying both conditions,

**E_rot/E_tot = ½(jħ)ω/(ħω) = j/2,**

whatever the profile, shape, stabilizing terms, or value of ħ. For spin ½, exactly one quarter of the energy is rotational.

The lesson: "25%" is not a prediction *about the substrate* — it is j = ½ put into an identity. A laboratory bench measuring the fraction does not test a shape integral; it tests whether such objects *exist* in a chiral Cosserat system, and what their j is (Stake S7). Chapter 16 shows how much cleaner a death list becomes when identities are labeled as identities.

## 10.3 Spin ½, by algebra you can do

Model the knot as shape plus rotor, with a dilation V (how much it swells when spun). Field energy behaves as (ê₀/2)(1/V + V); rotational energy at fixed angular momentum as K/V, with K = j²𝔠²/(2𝔦₀g), where 𝔠 ≡ ħ/(Λ√J) is the pure number being hunted and ê₀, 𝔦₀, g are shape constants. Write w ≡ 𝔠²/(ê₀𝔦₀g).

**(i) Stationarity in V** gives **V² − 1 = j²w.** **(ii) The clock** — by §10.2, E_field = E_rot(2 − j)/j — gives **V² + 1 = j(2 − j)w.** **Subtract:** 2 = 2w·j(1 − j), so

**w·j(1 − j) = 1,  V² = 1/(1 − j),  E_rot/E = j/2.**

Solutions exist only for **0 < j < 1**: at j = 1, V blows up (the knot tears itself apart); at j = 3/2, V² < 0 (no shape exists). Angular momentum on the double cover comes in half-integer steps, so the unique allowed value is **j = ½**, with V = √2, E_rot/E = ¼, and w = 4. 🟩 (Theorem 14.)

## 10.4 The window, and Flag F9

The field energy's (1/V + V) is the signature of Derrick's Escape 1 (quadratic–quartic). If instead it went as (V^{−a} + V^{a}) and the rotor as V^{−b}, the two conditions (★ problem 10.4) are solvable only for 🟩 **0 < j < 2a/(a + b)** (Proposition 17), with the dilation fixed by **a·tanh(a ln V) = bj/(2 − j)**. For (1, 1), spin ½ is unique. GUM therefore makes a labeled *commitment*, **Flag F9: the spinning closure is the (1, 1) pair.** r3 states the commitment in two halves, because each half has an alternative the window prices:

- **The field-energy pair (a = 1).** GUM's *static* knot is stabilized by Escape 2, whose terms scale as V⁻³ and V³. If that pair governed the spinning closure too, then (a, b) = (3, 1), the window would be j < 3/2, and **spin-1 knots would be allowed**: spin ½ would become a permission rather than a prediction. (This was r1's way of stating the flag.)
- **The carrier of the spin inertia (b = 1).** If the knot's moment of inertia came from the quadratic terms — the micro-inertia J — it would grow with the knot's volume, 𝕀 ∝ V³, giving (1, 3), the window j < ½, and **the electron's own spin would be excluded.** b = 1 says the spin inertia is carried by the quartic term. (This was r2's way of stating it.)

A bench tells the halves apart by its **dilation law** V(j). At j = ½, the tanh rule gives V = √2 for (1, 1), V = √5 ≈ 2.24 for (1, 2), V ≈ 1.04 for (3, 1), and no solution at all for (1, 3).

**WHAT CHANGED.** r1 and r2 each wrote down one half of the flag; r3 states both, with r1's (3, 1) alternative and r2's (1, 3) alternative side by side. r2 had also printed the (1, 2) dilation as 1.24; the tanh rule gives tanh(ln V) = 2/3, so V² = 5 and V = √5 ≈ 2.24 (correction 45).

Under the flag every elementary massive knot has spin ½; there are no elementary spin-0 or spin-1 particles, so the W, Z, and Higgs must be *collective* (Chapter 13); a knot with j = 0 has no rotor, hence no clock, so no elementary scalar exists; and an elementary spin-3/2 particle would falsify the closure. **Kill for the flag:** a laboratory bench realizing a stable spinning knot with j = 1, or reading a dilation law V(j) inconsistent with (1, 1) (Stake S8). Spin-½ universality is forced *given* the flag, and the flag is GUM's to lose.

**STEP-UP — the skater with a metronome.** A spinning skater trades arm position for speed. Now make her spin rate *also* equal her heartbeat, which is set by her total effort. Only one skater can obey both rules: half a unit of spin, arms out by √2, a quarter of her effort in the turn. Every electron is that skater — which is *why* electrons are identical. Flag F9 says which rink she skates on.

## 10.5 What "ħ = 𝔠Λ√J" claims

In the substrate's natural units the two conditions give 🟩 **ħ = 𝔠Λ√J, with 𝔠 = √(2ê_tot𝔦_tot)** (ê_tot, 𝔦_tot the knot's dimensionless energy and moment of inertia, core plus halo). The honest sentence (Proposition 18): Λ and J are unknown constants, and the strength of the substrate's jitter (Chapter 7) is a third. The closure gives *one relation* among three unknowns. **Planck's constant is constrained, not derived;** GUM can be killed only on the pure number 𝔠, which depends on Flag F9. The closure is *dynamically enforced*: a detuned knot phase-locks back by radiating the beat, with relocking time ~10⁻¹² s for an electron (🟦 ⬜). Planck's constant is the same in every epoch because every particle is a phase-locked oscillator of one substrate.

The master draft printed, and r1 and r2 carried, the saturated closure's numbers: ⬜ **𝔠 = 64√2/(9π) ≈ 3.2011**, **κ = ω/ω₀ = 1/√2** — the clock sits 29.3% below the band edge — a rigorous bound 𝔠 ≥ 2√2 ≈ 2.828, and the bench discriminator κ²g_tot = 35/24 ≈ 1.458 against 7/8 for a knot without a halo. Every one of them was computed with the master's kinetic coefficient (off by 2, Chapter 3), and with the band edge set by m̃_V instead of the total gap stiffness. 🟩 **Proposition 19** carries out the part of the normalization audit that needs no unpublished integral:

- **(i)** The spinning compacton's moment of inertia has shape number **𝔦₀ = 512/(105π) ≈ 1.552**; the master's coefficient gave half that.
- **(ii)** The dilation cancels in the bench quantity, κ²g_tot = ê₀/(2𝔦₀), with ê₀ = 64/(15π). With the master's coefficient it is exactly 7/8, the inherited halo-free value; corrected, it is **7/16**, the halo value becomes **35/48**, and the part that does not depend on the normalization is their **ratio, 5/3**. (The same 5/3 is the halo's share of the knot's mass: M = (64/9π)Λm̃_V is 5/3 of the compacton energy C₆.)
- **(iii)** At fixed energy, doubling every inertia gives **𝔠 = 128/(9π) ≈ 4.527**, and a bound that scales with the inertia, like the inherited 2√2, becomes 4.
- **(iv)** With the correct gap, **κ² = m̃_V²/(16µ_c + m̃_V²)**. The closure value κ = 1/√2 therefore requires **µ_c = m̃_V²/16**, while the inherited µ_c = 3m̃_V²/16 gives κ = ½.

Item (iv) forces a choice r1 and r2 both left unmade. **Branch A**, µ_c = m̃_V²/16: κ = 1/√2; the band edge at √2Mc² (722.7 keV for the electron, Chapter 11); a possible positronium line at 255.5 keV; the halo factor κ/√(1 − κ²) = 1; the heaviest neutrino at 0.047 eV for fixed integrals (Chapter 12) — every stake as printed survives. **Branch B**, the inherited µ_c = 3m̃_V²/16: κ = ½; the band edge at exactly 2Mc², the threshold for making a pair, which closes the positronium line; the halo factor 1/√3; and m₃ = 0.081 eV, Σm_ν ≈ 0.21 eV and a pitch of 15.4 µm — breaking the neutrino stake and the pitch window, since DESI excludes Σm_ν = 0.21 eV even with evolving dark energy. **GUM adopts Branch A.** The ratio µ_c/m̃_V² = 1/16 is then fixed by the closure value of κ, not a further constant, and the bench values are 35/48 against 7/16.

**WHAT CHANGED.** The first edition of this primer redid this bookkeeping with r1's formula, κ² = 2m̃_V²/(16µ_c + m̃_V²), and found µ_c = 3m̃_V²/16 — but that formula still carried the master's kinetic coefficient. With the coefficient corrected, the factor 2 disappears, κ² = m̃_V²/(16µ_c + m̃_V²), and the requirement becomes µ_c = m̃_V²/16 (correction 43). Still owed under Closure K-3: whether the halo integrals move when the halo changes, and a rigorous bound on 𝔠 re-derived in the corrected normalization.

## 10.6 If the clock is real, it leaves fingerprints: the α–µ discriminant

In ordinary quantum mechanics de Broglie's clock is bookkeeping, a global phase with no consequences. In GUM it is a *rotation of the substrate*, and that has consequences. 🟩 **Proposition 21** finds two channels.

**(i) The stiffness channel.** Suppose the substrate's overall stiffnesses Λ and J drift over cosmic time while every shape number and stiffness *ratio* stays fixed. ħ ∝ Λ√J, so α drifts, Δln α = −(δ_Λ + ½δ_J). But every rest energy is a shape number times Λm̃_V, so Λ cancels in every mass ratio, including µ_pe = m_p/m_e:

**Δln µ_pe = 0,  R_µα ≡ Δln µ_pe/Δln α = 0.**

**(ii) The pitch channel.** Suppose instead the vacuum's pitch drifts by a fraction δ_q with the stiffnesses fixed. Then α stays put (ħ does not involve the pitch), but the lepton masses move through the far-field logarithm of the flavor bridge (Chapter 12): Δln m_e = κ_far δ_q, Δln m_µ = ½κ_far δ_q, Δln m_τ = 0, so **Δln µ_pe = −κ_far δ_q** with α fixed.

**STEP-UP — the exchange rate.** When the dollar–euro rate changes, what a dollar buys in Paris changes, but the price ratio of two items in the same American store does not. ħ is the exchange rate between the substrate's units and ours: in channel (i) α moves and mass ratios don't. Channel (ii) is a change of the store's own price list, with the exchange rate untouched.

⬛ Grand-unified theories tie the two drifts together with |R_µα| ≈ 30–40, because the proton mass depends exponentially on the unified coupling. GUM does not: a stiffness drift moves α and not µ_pe, a pitch drift moves µ_pe and not α. Present data are null on both: optical clocks limit α̇/α to ~10⁻¹⁸ per year; methanol in a z = 0.89 galaxy limits Δµ_pe/µ_pe below 10⁻⁷, and molecular hydrogen in quasars below 10⁻⁶ at z ≈ 2–4; quasar spectra allow Δα = 0 at 10⁻⁶. Channel (ii) is not free in GUM, because the pitch *does* drift: it is the dark-energy lag of Chapter 14, and the quasar bound on µ_pe becomes a bound on that lag. **Stake S12:** a detected α drift with µ_pe much steadier is channel (i); a µ_pe drift with α steady is channel (ii) and must follow Chapter 14's redshift profile; a joint detection with |R_µα| of order 30 retires the physical clock.

## 10.7 The washboard test: a clock you can hit

Second: a real internal rotation at ω_c = mc²/ħ should *resonate* with something periodic.

**STEP-UP — a spinning top on a washboard.** Roll a spinning top over a washboard. If the bumps pass at exactly its spin rate, each kicks it at the same phase, and it wobbles wildly.

⬛ A crystal is a washboard for electrons: in "channeling," fast electrons travel along rows of atoms spaced ℓ_row. In the electron's frame the row is contracted to ℓ_row/γ and streams past at v, so atoms go by at γv/ℓ_row per second. Set that equal to the clock frequency mc²/h:

**γv = mc²ℓ_row/h ⟹ p = mγv ⟹ pc = (mc²)²ℓ_row/(hc)** (🟩 Proposition 22; sub-harmonics at p/2, p/3, …).

**TRY THIS (calculator).** With (m_ec²)² = 0.261120 MeV², hc = 1.239842×10⁻¹² MeV·m, and silicon ⟨110⟩ rows ℓ_row = 3.840×10⁻¹⁰ m, compute pc. You should get **80.87 MeV**. Germanium (4.001×10⁻¹⁰ m): 84.26 MeV. Diamond (2.522×10⁻¹⁰ m): 53.12 MeV.

⬛ Standard quantum mechanics predicts *no* such resonance: the Compton phase is global and cannot couple to atoms. A rival "zitterbewegung" clock at twice the Compton frequency would put it at *twice* the momentum. In 2008 Catillon and collaborators reported a transmission anomaly near the silicon value; it has not been independently replicated, and the paper marks it "to be verified." **Stake S13:** the resonance must appear in Si and Ge in the ratio 4.001/3.840 and in diamond at 53 MeV/c, with sub-harmonics. Kill: absence at all three at a sensitivity that would have seen the silicon report. A signal at 2p₁ would favor zitterbewegung over GUM.

## 10.8 Benches, and the wall they cannot climb

🟩 **Proposition 20** lists what a laboratory knot needs before it tests this chapter: (i) a localized, integer-degree texture in a chiral Cosserat system; (ii) spinning at a measured frequency; (iii) phase-locking to a drive at that frequency; (iv) damping small compared with its spin rate; (v) rotational and total energies measured independently. Then j/2 is an identity, the measured quantities are j and the dilation law V(j) — which identifies the pair (a, b) — and κ²g_tot genuinely tests the shape. ⬛ Candidates exist: 3D-printed chiral metamaterials, chiral liquid crystals with knotted solitons (heliknotons), and chiral magnets with hopfion rings. And one wall stands — the paper's **Spreeuw wall**: *no Bell content is claimable from any bench.* No bench can say anything about Bell inequalities. Benches weigh closure mathematics, and a bench failure kills a derivation as mathematics, with no cosmic excuse — but no bench can say whether the vacuum is a substrate of this kind. Stakes S7, S9, S10, S8 and S11 are the bench program; Stake S9 is now the corrected pair, 35/48 against 7/16, ratio 5/3.

**NUMBERS TO HOLD.** E_rot/E = ¼. Dilation at j = ½: √2 (1, 1), √5 ≈ 2.24 (1, 2), 1.04 (3, 1). 𝔦₀ = 512/(105π) ≈ 1.552. 𝔠: inherited 3.2011 ≥ 2√2 = 2.828; corrected at fixed energy 128/(9π) ≈ 4.527, bound 4. κ = 1/√2; depth 29.3%; µ_c = m̃_V²/16 (Branch A). Bench: 35/48 ≈ 0.729 against 7/16 = 0.4375, ratio 5/3. Relocking ~10⁻¹² s. R_µα = 0 (stiffness channel) vs 30–40 (unification). Channeling: Si 80.87, Ge 84.26, diamond 53.12 MeV/c.

**CHEW ON THIS.** (10.1) Re-derive E_rot/E = j/2 in one line; compute it for a hypothetical j = ⅓. (10.2) Re-derive w·j(1 − j) = 1, and confirm the pole at j = 1 and V² < 0 at j = 3/2. (10.3) Verify 64√2/(9π) = 3.2011 and 128/(9π) = 4.527. What single change turns the first into the second? (10.4 ★) With field energy (ê₀/2)(V^{−a} + V^{a}) and rotor K/V^{b}, show solvability requires j < 2a/(a + b); evaluate for (1, 1), (3, 1) and (1, 3). (10.5) From κ² = m̃_V²/(16µ_c + m̃_V²), find the µ_c giving κ = 1/√2, and the κ that the inherited µ_c = 3m̃_V²/16 would give. (10.6) Compute the germanium momentum and the silicon sub-harmonic at n = 2. (10.7) A survey finds Δα/α = 1×10⁻⁶ and no pitch drift. What does GUM predict for Δµ_pe/µ_pe? A unified theory with R = 35? (10.8) In two sentences: what dies if a valid bench finds a stable j = 1 knot, and what doesn't? (10.9 ★) Solve a·tanh(a ln V) = bj/(2 − j) at j = ½ for (1, 2), and show V = √5.

---

# CHAPTER 11 — THE TWO-SCALE ELECTRON AND ITS BAND EDGE

**What you'll be able to do after this chapter:** (1) State three laboratory facts about the electron's size and excitations. (2) Explain why a knot the size of the classical electron radius cannot be the electron. (3) Describe GUM's electron as core plus halo, with the halo's corrected length. (4) State the computation this obliges GUM to deliver, its kill, and the measurement that already constrains it. (5) Explain a particle's "band edge," why the electron's cannot belong to the vacuum, and compute the photon line ortho-positronium would emit if the edge hosted a new particle.

## 11.1 Three facts

⬛ **The electron is pointlike:** LEP collisions show no structure down to about 10⁻¹⁹ m, and the electron's magnetic moment limits internal structure to 10⁻¹⁹–10⁻²² m. **There is no excited electron:** LHC searches exclude an "e\*" up to several TeV. **Atoms have no keV electron levels:** X-ray spectroscopy would have seen them.

## 11.2 Why a knot at the classical-electron scale fails

The natural first guess puts GUM's electron near the femtometer (10⁻¹⁵ m), the scale of the classical electron radius. Three ways that dies. **Form factor:** a charge spread over 10⁻¹⁵ m shows up in scattering at a few hundred MeV; LEP looked a thousand times higher and saw a point. **Shape modes:** ⬛ a compact texture of radius R, with internal disturbances moving at about c, vibrates at energies near ħc/R — about 200 MeV here, an excited electron every collider since the 1970s would have made by the million. **Soft modes:** a nearly-BPS texture has *almost free* reshapings, lifted only by the small parameter ε, giving internal levels near √ε × (band edge) ≈ 2–40 keV across the electron's window of ε — keV electron levels that atoms don't have.

🟩 **Theorem 15 (compatibility).** A degree-one texture can be the electron only if its charge sits within 10⁻¹⁹ m, its lowest excitation exceeds a few TeV, and hence its mass texture is below about ħc/(few TeV) ~ 10⁻¹⁹ m. A compacton at the classical-electron scale fails by four orders of magnitude; a nearly-BPS one by nine. **The electron's topological core must sit at the structural scale ℓ_s** — near the Planck length (Chapter 8), and in any case below the timing bound of 1.5×10⁻²⁷ m.

A naming note, because names matter: r1 called 10⁻¹⁵ m "the Compton scale." It is the classical-electron scale (⬛ the classical electron radius is 2.8×10⁻¹⁵ m); the reduced Compton wavelength, 3.86×10⁻¹³ m, is larger by the factor 1/α ≈ 137, which only strengthens the conclusion (correction 36).

## 11.3 Core and halo

So GUM's electron has *two* scales (🟩 **Proposition 23**):

- **The core**, radius ~ℓ_s: the degree-one texture, carrying the degree, the disclination charge (Chapter 6), the Bogomolny energy (Chapter 9), and the internal rotation (Chapter 10). Setting the compacton radius equal to ℓ_s fixes Λ/m̃_V = π²ℓ_s³/2, and with the mass law, Λ and m̃_V per species. The charge form factor is exactly one up to momentum transfers ħc/ℓ_s, and the core's own vibrations lie above 10¹¹ GeV even at the timing bound. The closure numbers of Chapter 10 are ratios of shape integrals and don't care about scale.
- **The halo:** Chapter 2's evanescent skin, driven by the spinning core, decaying as e^{−r/λ}/r with **λ_halo = (c_ψ/c)·ħ/(Mc)** — the reduced Compton wavelength: 3.86×10⁻¹³ m for the electron, 1.87×10⁻¹⁵ m for the muon, 1.11×10⁻¹⁶ m for the tau. It has no vibrations of its own; its only "excitations" are making another particle.

**STEP-UP — the lighthouse in fog.** A lighthouse lamp is tiny; its glow in the fog is huge but has no light of its own. Ask where the light *comes from* and you find a point (the core); ask how far the glow reaches and you find a distance set by the fog (the halo). Poke the glow and nothing new shines; for a second glow you need a second lamp.

GUM's reading of a familiar fact: the electron is pointlike to every probe of its charge, yet has a characteristic length (the Compton wavelength) below which a one-particle description fails. The first fact is the core, the second the halo.

## 11.4 The obligation, and what it costs

The boundary layer where a knot's orientation relaxes against the vacuum helix is the *halo*, so the "frustration integrals" that make the three families (Chapter 12) are **halo integrals**, taken across a distance set by the tau's halo (qλ_halo,τ ≈ 2.6×10⁻¹¹ ⬜). Chapter 12's numbers survive only if the tiny core contributes negligibly — **halo dominance** (Proposition 24, 🟧 posed) — which GUM does not yet know. 🟧 **Closure K-9** has five deliverables, merged from r1 and r2: (1) a solution of GUM's energy with a core at ℓ_s and a halo at the length above; (2) *core rigidity* — a frustration belt squeezed into the core must deform it at a large cost, so the core's share is tiny; (3) *halo response* — the belt in the halo solves a linear equation whose energy depends only on qλ_halo, which would turn two ⬜ constants of Chapter 12 into derived ones; (4) the ratio of (2) to (3), and the integrals on the solution of (1), compared with Chapter 12's constants; (5) the halo-tunneling exponent of the weak vertex (Chapter 13). **Kill:** a core share above 10% demotes Chapter 12's lepton logarithms and neutrino mass to 🟧 POSED and suspends Stake S18. Until the closure runs, every Chapter 12 number carries the rider "conditional on halo dominance." The same halo also prices the closure constant 𝔠 of Chapter 10, the suppression of the weak vertex, and the wrong-handed admixture of Chapter 13, so all of them stand or fall with this closure and the normalization audit (cross-lock X4).

The strongest evidence for halo dominance so far is not a calculation but a measurement. If the frustration integrals felt the local structure of the blue fog — the direction of the nearest helix axis, the distance to the nearest defect — the electron's mass would vary from one pitch cell to the next. ⬛ Optical lattice clocks compare atoms micrometers apart to 10⁻¹⁸, and electron interferometers with 100 µm path separations hold their phase to 10⁻² rad over nanosecond flights, which bounds cell-to-cell variations of m_e at 1.3×10⁻¹⁴. The frustration integrals are therefore blind to their environment to eighteen decades, and any execution of the closure must reproduce that. GUM registers it as **Stake S14**: a dedicated lattice-clock scan over 100 µm in micrometer steps, looking for pitch-periodic modulation at 10⁻¹⁸, whose null GUM predicts. And **Stake S15** stands: any core larger than 10⁻¹⁹ m, or any electron excitation below a TeV, is ruled out by LEP and LHC archives with no new measurement.

**WHAT CHANGED.** The master's halo length ħ/(√2Mc) is corrected to (c_ψ/c)ħ/Mc (Chapter 2; correction 3) — item (3) of the normalization audit, and the yardstick of Chapter 12's neutrino bridge. The master had also printed halo dominance as "variationally proven"; r2 found the proof's energies had the wrong units and no minimum, and withdrew it, and r3 keeps the closure posed (correction 17). The uniformity stake is r2's addition, kept.

## 11.5 The band edge

With κ = 1/√2, the band edge sits at ħω₀ = Mc²/κ = **√2 Mc²**: **722.7 keV** for the electron, **149.42 MeV** for the muon, **2.513 GeV** for the tau. What exists *at* the edge? The master draft never asked. r1 spotted a problem: a *vacuum* branch is shared by all species, so three species-specific edges can't all be vacuum edges — and Chapter 13 identifies the vacuum's gapped branch with the weak interaction, near 80 GeV. The lepton edges must belong to each lepton's own frustrated halo.

🟩 **Proposition 25.** Exactly one holds. **(a)** The halo has no discrete level below the pair threshold 2Mc²; the band edge shows up only through Chapter 10's closure ratios. **This is GUM's core choice.** **(b)** The halo holds a neutral level X of mass m/κ < 2m. Then ⬛ **ortho-positronium** — the spin-1 electron–positron atom, which normally decays to three photons — could, if X has charge-conjugation parity +1, decay to *one photon plus X*, a two-body decay with a photon of one exact energy.

**TRY THIS (two-body kinematics).** A particle of mass M at rest decays to a photon plus mass m_X: E_γ = (M² − m_X²)c²/(2M). Put M = 2m_e (positronium's 6.8 eV binding is negligible) and m_X = √2 m_e: **E_γ = m_ec²/2 = 255.5 keV.** In general E_γ = (m_ec²/4)(4 − κ⁻²), so the line *measures* κ: κ = [4 − 4E_γ/(m_ec²)]^{−1/2}.

Alternative (b) is **Stake S16**, conditional on 🟧 **Closure K-10** (the halo spectrum below 2Mc² for each family). It is an unusually clean conditional bet: monoenergetic, fixed by one substrate number, and already constrained by searches for exotic positronium decays. It is also tied to the normalization audit of Chapter 10. In Branch A the line sits at 255.5 keV; in Branch B, κ = ½ puts m_X exactly at the pair threshold and closes alternative (b) altogether. So a found line would *measure* κ and settle the branch. Notice the shape: GUM asked a question its master draft had not, took the conservative branch for its core, and turned the adventurous branch into a precise conditional bet.

**WHAT CHANGED.** r2 dropped the band-edge dichotomy, the positronium stake and its closure without comment; r3 restores all three (correction 59).

**NUMBERS TO HOLD.** Electron < 10⁻¹⁹ m; no e\* below several TeV; no keV levels. Core ~ℓ_s near the Planck length; core modes ≳ 10¹¹ GeV. Halo (c_ψ/c)ħ/Mc: electron 3.86×10⁻¹³ m, muon 1.87×10⁻¹⁵ m, tau 1.11×10⁻¹⁶ m. Edges √2Mc²: 722.7 keV, 149.42 MeV, 2.513 GeV. Positronium line (if b, Branch A): 255.5 keV. Electron mass uniform cell to cell to 1.3×10⁻¹⁴; stake at 10⁻¹⁸.

**CHEW ON THIS.** (11.1) Compute ħc/R for R = 1 fm (ħc = 197 MeV·fm). Which experiments would have seen it? (11.2) Evaluate √ε × 0.7227 MeV at the two ends of the electron's window, ε = 8×10⁻⁶ and 3×10⁻³, and name the spectroscopy that excludes them. (11.3) State Theorem 15's three inequalities and the laboratory fact behind each. (11.4) In the lighthouse analogy, what corresponds to the compacton radius, the Compton wavelength, pair creation, and a (forbidden) excited electron? (11.5) State the kill of Closure K-9 in your own words, and list what survives it (hint: Chapters 9–10). (11.6) Derive E_γ = m_ec²/2, and find the κ that would put the line at 300 keV. (11.7) Why can't three species-specific band edges all be edges of one vacuum branch? (11.8) An interferometer's phase advances at m_ec²/ħ. Over a 1 ns flight, by how many radians? What fractional mass difference between two paths would shift it by 10⁻² rad?

---

# PART VI — THREE FAMILIES AND THE SKELETON

# CHAPTER 12 — WHY THREE FAMILIES, AND THE LIGHTEST PARTICLE

**What you'll be able to do after this chapter:** (1) State the flavor puzzle. (2) Explain families as discrete frustration classes of a knot in a helical vacuum. (3) Run the two-integral generator against the lepton masses — and report the result in the *right* language. (4) Explain why the ladder stops at three, and what that requires of the electron. (5) Explain why the neutrino cannot be a knot, what a heliknoton is, and how one logarithmic bridge yields a neutrino mass with an honest error bar. (6) Explain the squeeze on that mass from the audit and from both sides of cosmology — and why the door r1 left open is now shut. (7) Watch the ledger catch a slip in the paper itself.

## 12.1 The puzzle

⬛ The electron has two heavier copies — the muon (105.66 MeV) and the tau (1776.9 MeV) — identical except for mass. The steps are roughly geometric but *larger at the lighter end*: m_τ/m_µ ≈ 16.8, m_µ/m_e ≈ 206.8. An explanation owes you discreteness, the number *three*, the spacing pattern, and something about neutrinos, a million times lighter still. The Standard Model has one adjustable dial per mass.

## 12.2 Frustration classes

Chapter 6 made the vacuum helical. A knot's orientation must *join onto* the twisted background far from its core, and topologically there are discrete ways to do it: match the twist exactly (class 𝗉 = 0), or lock in one extra unit of relative twist (𝗉 = 1), or two (𝗉 = 2). (The paper writes 𝗉 in sans-serif to keep p for the pitch.) Each class is a local minimum — you can't slide between them without tearing — and each extra unit of frustration partly defeats the locking over the halo, lowering the potential strength m̃_V the knot feels, and so its mass. ⬛ The laboratory precedent is real: knot solitons in chiral liquid crystals come in discrete, imageable twist classes.

**STEP-UP — cross-threading a bolt.** A bolt can seat properly in its thread, or cross-thread by one turn, or two. Each start is stable once begun; you can't slide between them without backing out; each is tighter than the last. The vacuum's helix is the thread; tau, muon, and electron are three ways of seating one knot.

## 12.3 The generator, and how to report it

The boundary-layer energetics compress into one law (paper Eq. (72)):

**m̃_𝗉 = m̃_c e^{−Σ(𝗉)/2},  Σ(𝗉) = A𝗉 + B𝗉(𝗉 − 1)/2,  so  ln(m_𝗉/m_{𝗉+1}) = ½(A + B𝗉),**

where A is the cost of one "belt" of frustration and B the interaction of each *pair* of belts (𝗉(𝗉 − 1)/2 counts pairs, like handshakes). The family map is 𝗉 = (0, 1, 2) = (τ, µ, e). The requirements were fixed *before* the generator was proposed: only m̃_V varies across species; masses compose by multiplication (a sum-of-squares law would make the Higgs couple *inversely* to mass, which the LHC excludes — Chapter 13); discreteness from topology; no new elementary scalar (Flag F9); and room for large hierarchies.

With your calculator: ln(m_τ/m_µ) = ln 16.817 = **2.822**, which the theory calls ½A; ln(m_µ/m_e) = ln 206.77 = **5.332**, which it calls ½(A + B). GUM's integrals give A = 5.6 ± 0.9 and B = 5.7 ± 1.2 ⬜, so ½A = 2.80 ± 0.45 and ½(A + B) = 5.65 ± 0.75. Two numbers against two mass ratios, zero fitted parameters. 🟨 (Conditional on Closure K-9.) r1 added a third comparison, the "shape ratio" (A + B)/A against the observed 1.889; but that ratio is just the second number divided by the first, so it is not an independent test, and r3 drops it as one (correction 32). Whether the two agreements are predictions or a fit depends entirely on whether A and B are ever computed from GUM's energy without looking at the lepton masses — which the paper's register of ⬜ numbers records, and the normalization audit must settle.

**The language lesson matters more than the numbers.** The theory's bands are about ±16%; the masses are known to parts per million. GUM's house rule (paper Definition 11): when the theory's error bar exceeds the experiment's by more than ten times, an agreement is a **landing**, not a **test**, reported as "consistent within ±16%" — never as a pull in standard deviations. The paper's sentence: *a two-integral mechanism reproduces the order-one coefficients of the lepton mass ratios within ±16% with no fitted parameter.* Learn to hear how different that is from "GUM predicts the muon mass."

## 12.4 Why the ladder stops at three

The 𝗉 = 3 rung would weigh about m_e e^{−½(A + 2B)} ≈ 104 eV. But frustration strains the knot's boundary, and its stability parameter grows with it — for 𝗉 = 3, ε₃ = ε_e e^{(4/3)×8.5}, tens of thousands of times the electron's — pushing it past the point where the closure of Chapter 10 can be satisfied. **The fourth rung cannot close: no fourth charged family, not "too heavy" but forbidden.** 🟨 [DW-structural] The fine print, which the audit sharpened: the stability parameter of a species is its own (it scales as m̃^{−4/3}, so every knot has its own window — correction 11), and the electron's window runs from 8×10⁻⁶ to 3×10⁻³ (the near-BPS window, Flag F4). The fourth rung fails, ε₃ ≥ 0.67, only if ε_e ≥ 8×10⁻⁶. r1 claimed termination over "essentially the entire" window, which turned out to be 78% of it on a logarithmic scale; for smaller ε_e a charged lepton near 100 eV would close. No such lepton exists, so the data trim the electron's window to ε_e ≳ 8×10⁻⁶ — a constraint the normalization audit must respect, not a derived bound.

And the last admitted class sits closest to the edge it is about to fall off, which is why, in GUM, the top quark's Higgs coupling crowds its ceiling: y_t = √2 × 172.5/246.2 ≈ 0.991. "Why three families?" and "why is y_t almost exactly 1?" are one wall seen from two sides (cross-lock X5). The generator's *form* is bench-testable (Stake S17): do liquid-crystal knot solitons in classes 0–3 show log-spacings linear in class, with nonzero B and a termination? Kill: B = 0, or no termination. One honest gap: applied to neutrinos, the generator would give m₂ = m₃e^{−A/2} ≈ 3 meV, below the 8.7 meV that oscillations require, so GUM has no mechanism for the two lighter neutrinos and says so.

## 12.5 The neutrino: the particle that cannot be a knot

**The kill that creates.** Knots have a mass *floor*: the closure loosens as ε ∝ m̃^{−4/3}, so a milli-eV knot is about 10¹²-fold looser than existence allows, and knots can't be much lighter than the "Skyrme scale," ~1.7 GeV ⬜. A 0.05 eV knot is impossible. So GUM must find a *different kind* of object — or die on arrival, since neutrinos exist.

**The other kind.** The helical vacuum supports a texture a uniform one can't: the **heliknoton**, an excitation of the helix itself, classified not by wrapping but by *linking*. ⬛ Picture two smoke rings threaded through each other: you can't separate them without breaking one, and their linking number is a topological charge (the Hopf charge). Heliknotons have been made and imaged in chiral liquid crystals and magnets. In GUM the neutrino *is* one: dark to electromagnetism (no disclination), weakly coupled (a twist texture couples to the twist sector), a fermion by a topological argument (Flag F10: consistent, not forced), and single-helicity, slaved to the helix's handedness. Its linking charge is self-conjugate — no ± lock distinguishes particle from antiparticle — so it is generically a **Majorana** particle, and neutrinoless double-beta decay must occur (Stake S19).

## 12.6 The bridge and its number

A heliknoton's energy is the **pitch quantum**, one twist of the helix: m₃c² = ζ_νħqc (Chapter 6). The helix is astronomically gentle compared with the tau's halo, so the neutrino is astronomically light *for a structural reason*. The number comes from one logarithmic bridge: outside the halo, the belt cost relaxes as A(q) = A_halo + κ_far ln(1/(qλ_halo)), with A_halo = 3.05 ± 0.09 and κ_far = 0.1065 ± 0.0032 ⬜. Inverting with the data value A = 2 ln(m_τ/m_µ) = 5.645:

**X ≡ ln(1/(qλ_halo)) = (5.645 − 3.05)/0.1065 = 24.36 ± 1.12 ⟹ m₃ = m_τ e^{−X} ≈ 0.047 eV, one-sigma band [0.015, 0.143] eV.**

⬛ Oscillations floor the heaviest neutrino at m₃ ≥ √(Δm²₃₁) = 0.0501 eV (normal ordering), trimming the band to [0.0501, 0.143] eV. **Stake S18: Σm_ν ∈ [0.059, 0.41] eV, normal ordering** — the floor and the top of the band. 🟨 Conditional on Closures K-9 and K-3.

**WHAT CHANGED (the bridge and the window).** r1 and r2 printed the bridge as 24.36 ± 0.90, which would need the two inputs' errors to be anticorrelated (by about −0.36) — something neither document stated. Adding the stated errors in the ordinary way gives ±1.12, and r3 prints that; the data value is 5.645, not 5.644 (correction 40). The wider error widens the band from [0.019, 0.115] to [0.015, 0.143] eV. r1 and r2 then cut the band from above at an asserted cap of 0.057 eV, giving the neutrino window [0.058, 0.11] eV (r1) or [0.059, 0.113] eV (r2); with the cap withdrawn (correction 39, Chapter 6), the window runs to 0.41 eV. Its bottom is 0.059 eV, not r1's 0.058, a rounding slip (correction 33).

## 12.7 Pressure from the audit, and from both sides of cosmology

**From the audit.** The bridge produces a *logarithm*; turning it into a mass needs a yardstick: m₃c² = ζ_νħc e^{−24.36}/λ_halo,τ. With the corrected halo, λ_halo,τ ≈ ħ/(m_τc), that gives m₃c² = m_τc² e^{−24.36} ≈ 0.047 eV — the printed value. With the master draft's shorter halo, ħ/(√2m_τc), the same logarithm gives √2 × 0.047 ≈ 0.066 eV. So, with ζ_ν = 1, the master's printed halo formula and its printed neutrino mass cannot both have gone into one calculation; its printed conversion shows the logarithm was referenced to ħ/(m_τc), and the center stays at 0.047 eV. The partial normalization audit of Chapter 10 adds one more fork: Branch A leaves the center at 0.047 eV, while Branch B would raise it to 0.081 eV, which cosmology excludes. Whether the inherited ⬜ integrals change when recomputed on the corrected halo is the normalization audit's job. Its kill stands: a corrected one-sigma band lying entirely below 0.050 eV retires the neutrino stake.

**A SLIP, CAUGHT.** r1's first printing ran this √2 the other way: it said the correction could *lower* the central value from 0.047 to 0.033 eV, below the floor. The arithmetic above shows that, at fixed integrals — the paper's own premise — correcting the halo can only leave the center at 0.047 eV or raise it toward 0.066 eV, where r1's window would sit a fraction of a standard deviation *below* the center, still inside the band. Writing the first edition of this primer caught the slip; r1 printed the corrected statement as its erratum E1, and r3 reproduces that erratum, word for word, inside correction 3. A ledger that writes down every conversion lets a reader catch an error in the ledger itself. That is the machinery working.

**From cosmology, below.** ⬛ DESI plus the microwave background gives Σm_ν < 0.064 eV (95%) in standard ΛCDM cosmology. That leaves m₃ ∈ [0.0501, 0.0503] eV — the floor itself, the lowest sliver of GUM's window.

**From cosmology, above.** ⬛ In dark-energy models with w ≥ −1 — GUM's own family is one (Chapter 14) — the cosmological neutrino bound is *tighter* than in ΛCDM (Vagnozzi and collaborators, 2018). GUM cannot escape through its own dark energy. r2 dropped this remark; r3 restores it, because leaving it out would understate the pressure.

**The door, shut.** r1 kept its stake alive through one door: if the neutrino mass *drifted* with the slow mode that carries dark energy, cosmology (which weighs the past) and the laboratory (which weighs the present) would measure different masses. Chapter 14 shows that the constancy of the proton-to-electron mass ratio, measured in distant quasars, bounds that drift by four orders of magnitude below what the door needs, and that the distance data would independently require a lag of 40–80% for the drift to matter. In r3's words: *the door is shut.* The stake is alive at its edge. Its kills are a robust Σm_ν < 0.059 eV, an established inverted ordering, and a corrected band below 0.050 eV. The JUNO reactor experiment will adjudicate the ordering first, and GUM has pre-registered the consequence: if JUNO establishes the inverted ordering, the stake is retired and the neutrino-as-heliknoton identification returns to 🟧 POSED. A real prediction gets squeezed; an accommodation never does. Watch whether a theory tells you when it is being squeezed — and when an escape route closes.

**NUMBERS TO HOLD.** ln 16.817 = 2.822; ln 206.77 = 5.332; their quotient 1.889 (not a third test). A = 5.6 ± 0.9, B = 5.7 ± 1.2 ⬜. Fourth rung ≈ 104 eV, forbidden for ε_e ≥ 8×10⁻⁶. y_t ≈ 0.991. Bridge X = 24.36 ± 1.12 → m₃ ≈ 0.047 eV, band [0.015, 0.143] eV (0.066 eV with the old halo). Stake S18: Σm_ν ∈ [0.059, 0.41] eV. ΛCDM bound < 0.064 eV, leaving m₃ ∈ [0.0501, 0.0503] eV. Skyrme scale ≈ 1.7 GeV ⬜.

**CHEW ON THIS.** (12.1) Compute the two lepton logarithms and their quotient; compare with ½A and ½(A + B), and write the *landing* sentence, not the σ sentence. Why is the quotient not a third test? (12.2) In the bolt analogy, what corresponds to the thread, a cross-threaded start, the impossibility of sliding between classes, and a fourth start that cannot seat? (12.3 ★) Reproduce 24.36. Show that adding the two inputs' errors in quadrature, (0.09/0.1065)² + (24.36 × 0.0032/0.1065)², gives ±1.12; that this is a factor e^{1.12} ≈ 3.06 in m₃ either way; and rebuild [0.015, 0.143] eV. (12.4) For *inverted* ordering, two states sit near 0.050 eV: show Σm_ν ≳ 0.10 eV, and explain why a robust bound below 0.09 eV would disfavor inverted ordering for everyone. (12.5) Compute m_τc² e^{−24.36} (m_τc² = 1776.9 MeV) and √2 times it; say which halo each uses. Branch B multiplies the first by √3: what does it give, and why does cosmology exclude it? (12.6) Why does the tighter bound for w ≥ −1 hurt GUM specifically? (12.7 ★) At the top of the band, m₃ = 0.143 eV. With Δm²₃₁ = 2.51×10⁻³ eV² and Δm²₂₁ = 7.5×10⁻⁵ eV², find m₁ = √(m₃² − Δm²₃₁), m₂ = √(m₁² + Δm²₂₁), and Σm_ν.

---

# CHAPTER 13 — THE SKELETON: WEAK, STRONG, AND THE TILE

**What you'll be able to do after this chapter:** (1) Diagonalize the photon–Z mass matrix by hand and derive ρ = 1 and e = g sin θ_w. (2) Compute GUM's weak mixing angle from the vacuum's tilt, and say in which scheme it lands. (3) Explain why the Higgs couples in proportion to mass if masses multiply. (4) Show that the weak coupling is not small, and how GUM now answers the honest question that raises. (5) Explain confinement with rubber bands, and say why GUM's strong-sector statements are *posed*. (6) Verify an anomaly sum with fractions and read it as a tiling; count CP-violating phases. (7) Audit the chapter: consistency versus discrimination.

## 13.1 The cast

Under Flag F9 there are no elementary massive particles of spin 0 or 1, so the W, Z, and Higgs must be *collective* modes of the locking sector — patterns of many grains, as sound is a pattern of many atoms. ⬛ There is an exact laboratory analog: superfluid helium-3 in its "B phase," whose order parameter is a relative rotation like GUM's. The locked vacuum is unchanged if grains and lattice co-rotate together; under that symmetry B1 is a scalar, B2± is inert — the photon — and the gapped trio {B3+, B3−, B4} forms a *triplet*, which GUM identifies with the weak triplet (Flag F11). The charged members, bound to one unit of disclination winding, are the W± (🟥, the binding is conjectured); the neutral B4, mixed with the photon channel, is the Z. The pattern "SU(2) × U(1) broken to electromagnetism" is here a theorem about winding energetics, not a choice of potential. 🟩

## 13.2 The worked jewel: diagonalize 2×2

Take the two neutral channels: a₂ (co-rotation-inert, which will hold the photon) and a_T (bare neutral twist). Objectivity forbids any mass in the pure-a₂ slot, to all orders. Allowed are the twist gap M_T² and a chiral cross term ϑM_T². Protecting an exactly-zero eigenvalue forces **rank one:**

**𝕄² = M_T² [ ϑ²  ϑ ; ϑ  1 ].**

**det 𝕄² = M_T⁴(ϑ² − ϑ²) = 0** ✓: one eigenvalue is exactly zero — the photon. **tr 𝕄² = M_T²(1 + ϑ²)**, so the eigenvalues are {0, M_T²(1 + ϑ²)}. **Null vector:** 𝕄²(1, −ϑ)ᵀ = 0 ✓. With tan θ_w ≡ ϑ: photon A = cos θ_w a₂ − sin θ_w a_T, Z = sin θ_w a₂ + cos θ_w a_T, and **M_Z = M_T/cos θ_w**. The W's carry winding and cannot mix with a₂, so **M_W = M_T**, and

**ρ ≡ M_W²/(M_Z² cos²θ_w) = 1, identically.** 🟩

Matter couples to the twist channel with strength g and to a₂ only through the same chiral modulus, g′ = gϑ; projecting onto the photon gives **e = g sin θ_w.** 🟩 (Proposition 26.) Because the angle is *defined* by the mass matrix, GUM's sin²θ_w is the **on-shell** one, 1 − M_W²/M_Z² = 0.2232 — not the 0.2312 of the scheme particle physicists often quote, which is defined differently.

**STEP-UP — two guitar strings on one bridge.** Strings sharing a flexible bridge form "team modes": one leaves the bridge still and keeps its frequency (here zero: the photon); the other pushes the bridge and is lifted (the Z). The angle between "individual strings" and "team modes" is θ_w.

The invariance that keeps the photon massless is the one that fixes ρ = 1 (cross-lock X3): a photon mass or a ρ ≠ 1 beyond quantum corrections kills both (the battery, Stake S1).

**What value does ϑ take?** r3 executes the "mixing attractor," Closure K-16 (🟨, Proposition 30(3)). Spreading the orientation's stiffness evenly over the three axes of the cubic double-twist cell gives a bare ϑ² = 1/3, hence sin²θ_w = ¼. The vacuum's tilt then dresses it:

**sin²θ_w = ϑ²/(1 + ϑ²) = ¼(1 − ε_tilt/3),  ε_tilt = 1 − cos θ_c = 0.39 (+0.09/−0.13),  sin²θ_w = 0.217 (+0.010/−0.007).**

The band contains the measured on-shell value 0.2232, which it reaches at a margin 𝔪 = 1.66: under the house rule of Chapter 16 that is a **landing**, not a test. The implied modulus is ϑ = 0.527, and M_Z/M_W = √(1 + ϑ²) = 1.130 against the measured 1.1346. The other scheme's 0.2312 would need 𝔪 = 1.40, outside the band. One more honesty: the *form* ¼(1 − ε/3) — the sign of the correction and its 1/3 — is asserted, by sharing the correction equally among the 1 + 3 directions of the orientation space, not derived. Until it is, the closure is 🟨 and the landing is a landing.

**WHAT CHANGED (the history of an angle).** The master draft printed ε_tilt ≈ 0.22 and sin²θ_w = 0.232. r1 imported sin²θ_w ≈ 0.231 as a borrowed constant and posed its attractor. r2 computed the landing as 0.227 ± 0.009, from the tilt rule sin θ_c = √(1 − 1/𝔪) = 0.69 — a rule that does not follow from the condensate's energy (Chapter 6). With the tilt the energy actually has, 0.79, the central value is 0.217, 0.006 below the on-shell value and inside its band; the 0.2312 that r2's band also contained now lies outside (corrections 37 and 38). The first edition of this primer worked the 2×2 example with ϑ = 0.55 (sin²θ_w = 0.232, M_Z/M_W = 1.141); r3's ϑ is 0.527.

**GUM's own audit:** ρ = 1 and e = g sin θ_w are *non-circular* in GUM but *non-discriminating* — the Standard Model's Higgs doublet gives both. Worse for celebrants: ⬛ the Standard Model also computes a top-quark correction to ρ of about 0.93% — how LEP predicted the top's mass before its discovery — and "ρ = 1 to a part in a thousand" is stated *after* subtracting it. GUM's top quark must reproduce the 0.93%. Proposition 27 does so only by assuming the Standard Model's own loop, plus a GUM correction of 2×10⁻³⁴ at ℓ_P — too small to test — so it is graded 🟪, a consistency condition (Closure K-11); the discriminating half, a top whose *own* vertex reproduces the percent, is still owed. (The master had graded it proven and called the closure executed.)

## 13.3 Yukawa universality from multiplicative mass

⬛ The Higgs couples to each fermion in proportion to its mass, verified from the muon to the top; the Standard Model builds this in with one dial per fermion. GUM has no dials, so it is a real test. 🟩 **Theorem 16:** if m_f = M₀(lock) e^{−I_f}, with M₀ proportional to the lock amplitude and I_f independent of it, then ∂m_f/∂(lock) = m_f/(lock) — the same ratio for every fermion — so the lock's amplitude mode h couples as **g_hff = m_f/v** with one universal v. An *additive* law, m_f² = M₀² + Δ_f², would give coupling ∝ 1/m_f, which the LHC excludes. In GUM the Higgs is that amplitude ("breathing") mode, as in superconductors and helium-3; its mass is not claimed. Small deviations |η_f| ≤ 0.05 with a fixed family ordering make Stake S20 at the High-Luminosity LHC; ⬛ the measured Higgs width, 3.2 (+2.4/−1.7) MeV, constrains how stiff the lock is. The Higgs cannot decay to two real W's, since 2M_W = 160.7 GeV exceeds its 125.2 GeV, and the loop channels the Standard Model needs for its width are imported, not derived (Closure K-14, a consistency condition). An invisible width — the few-percent channel r1 gestured at without a number — now has a number and its own stake (Chapter 14).

## 13.4 Why the weak force is weak — and an honest question

⬛ A heavy exchanged particle looks, at low energy, like a contact force: G_F/√2 = g²/(8M_W²). From G_F = 1.166×10⁻⁵ GeV⁻² and M_W = 80.4 GeV, **g ≈ 0.65 — not small!** Weakness comes from the 1/M_W², not the coupling.

GUM adds *where the vertex lives*: it must thread the thin marginal halo at the compacton's edge — a tunneling event. The same halo makes the force left-handed: the knot's two chiral zero-modes split in the handed vacuum (as in Jackiw and Rebbi's mechanism), one bound to the core and one expelled; the weak vertex couples only to the bound one, with the sign set by the vacuum's handedness.

r1 then audited itself in print. If g ≈ 0.65 is already the tunneling-suppressed value, the suppression is of order one — so a wrong-handed admixture ε_R "with the same exponent" would be of order one too, which experiment forbids (right-handed currents are below a percent). Either the two prefactors differ by orders of magnitude, or "the same exponent" predicts nothing. 🟩 **Proposition 28** now answers in form (Closure K-12, closed in form): the left-handed mode is *bound* at the core–halo interface, so its vertex costs only an order-one factor, giving g ≈ 0.65 from an order-one bare coupling; the right-handed mode is *repelled* from the core by a centrifugal-chiral barrier, so its overlap is suppressed by a power of the ratio of core to halo:

**ε_R = C_R (ℓ_s/λ_halo)^{γ_JR} e^{−2µd_halo},  γ_JR = √(1 + 𝔪 sin²θ_c) = 1.48.**

With the unknown prefactor C_R and the exponential set to one, ε_R ≈ 7×10⁻³⁴ at ℓ_s = ℓ_P (2×10⁻³⁴ to 9×10⁻³⁴ over ℓ_s = 0.4–1.26 ℓ_P), and 4×10⁻²² even at the photon-timing ceiling. Precision muon and beta decay (Stake S21) are safe at any allowed ℓ_s.

**WHAT CHANGED.** r2 executed this closure, printing γ_JR = 1.38 and ε_R = 1.3×10⁻³¹ from the old tilt, and called it "closed, proven." r3 recomputes with the corrected tilt (correction 37) and regrades: the *form* is derived, but the numbers set two unknown factors to one, so they are estimates — and the stake is safe whatever those factors are (correction 56).

Two bonuses: the Z cannot change frustration class (that needs winding transfer), so there are no full-strength flavor-changing neutral currents (🟨); and the Z's coupling to any texture counts its whole-number linking, so the Z's invisible width counts three neutrinos (Proposition 29, Closure K-13, a consistency condition): N_ν ∈ [2.991, 3.000], against ⬛ LEP's 2.9963 ± 0.0074 — a landing, and the theorem r1 said GUM owed.

## 13.5 Quarks in prison, with rubber bands

⬛ Magnets pulled apart weaken; beads on a rubber band feel a pull that *never lets up*, and a hard yank snaps the band into two bands, each with beads at both ends. The strong force is the rubber band: pull a quark out of a proton and you make new quark–antiquark pairs. Its tension is about 0.19 GeV² ≈ 0.96 GeV per femtometer — roughly 16 tonnes of force.

GUM's jail: against the double-twist network (Chapter 6) a knot can lock in *thirds* of a winding, set by the network's three-way junctions; which branch it sits on is its "color." Fractional winding can't be screened smoothly; it must end a network defect line of tension σ, so V = σr — a rubber band. From that picture the master draft drew five consequences, among them 🟧 **the dichotomy:** *a winding charge is confined iff the channel that mediates it is gapped.* Electric charge is free because the photon is massless (Chapter 4); color is jailed because its channel is gapped. Another: a mass-independent stability floor for fractional winding, about 3.8 times above what a free particle tolerates ⬜, confines *every* quark, from a few MeV to the top.

Read the tag. The master cited these as theorems but never printed their proofs, and r1 restated them in prose as derived. GUM does not build on theorems it has not printed, so r2 and r3 make all five the deliverables of 🟧 **Closure K-17**, the strong sector, posed (correction 19), with two regression tests: the Regge slope and the string tension below.

**TRY THIS (the string's fossil).** ⬛ Hadrons of spin J lie on straight lines J = α′M², α′ ≈ 0.88 GeV⁻². A string of tension σ spinning with light-speed ends has M = πσR and J = πσR²/2; eliminating R gives α′ = 1/(2πσ) ≈ 1/(2π × 0.19) = 0.84 GeV⁻². GUM inherits this once its closure delivers the tube, and lists 0.84 vs 0.88 as a consistency, not a claim.

**Honesties, printed.** GUM derives at most the long-distance half: no gluons, color factors, running coupling, or partons — all 🟪 BORROWED. It bets the short-distance sector on one computable sign (Proposition 32, 🟥; Closure K-19, Stake S23): if the network stiffness *screens* like electric charge instead of *anti-screening* like color, the sector is imported permanently. The master had declared that sign settled by its own one-loop computation; but the theory involved cannot be computed that way reliably, so the sign is a conjecture until someone does a controlled calculation. ⬛ The top quark decays, in about 4.6×10⁻²⁵ s, before a flux tube can form (about 1.5×10⁻²⁴ s), which "all quarks confined" must reproduce: no top hadrons (Proposition 33, a consistency condition, Closure K-20).

**Strong CP, without an axion.** 🟨 Proposition 31 (Closure K-18, executed for the mechanism): the knotting density enters GUM's energy *squared*, so any uniform topological density relaxes to zero — the strong-CP problem solved by a penalty instead of a new particle. A tiny residual survives through the vacuum's handedness, θ̄_eff ≲ 10⁻⁴⁵ at ℓ_P, giving a neutron electric dipole moment ≲ 3×10⁻⁶¹ e·cm from this source. The master turned a number like that into a stake ("|d_n| ≲ 10⁻³⁹ e·cm"), but the Standard Model's own background is about 10⁻³² e·cm, so no experiment could adjudicate it. GUM's stake is therefore that *no* θ̄-type dipole moment shows up above the Standard-Model background (Stake S22; correction 20) — an inverse kill it shares with the Standard Model, not a discriminating bet.

## 13.6 Anomalies: the vacuum's bathroom tile

⬛ A symmetry carrying a force must not fail in the quantum theory; for the Standard Model that means six conditions on each family's charges. Do the famous one with fractions. Left-handed states and hypercharges: quark doublet (6 states, 1/6), anti-up (3, −2/3), anti-down (3, +1/3), lepton doublet (2, −1/2), positron-like (1, +1):

**6(1/6)³ + 3(−2/3)³ + 3(1/3)³ + 2(−1/2)³ + 1 = (1 − 32 + 4 − 9 + 36)/36 = 0.** ✓

The others cancel likewise (Proposition 34). The Standard Model gives *no reason* for the conspiracy, and the color count is load-bearing: drop the 3's and it fails.

**STEP-UP — the tile.** A repeating floor pattern continues forever only if each tile carries zero net "twist." In GUM, charges are winding fractions of one network, a family decorates one cell, and a periodic cell cannot carry net topological flux. The six conditions are six ways a tile could fail to fit — including the charge tiling 3(2/3) + 3(−1/3) + (−1) + 0 = 0. 🟨 That they are the *necessary* conditions of the texture theory is now executed (Proposition 30(2), Closure K-15): transport that never tears the substrate requires all six to vanish. Being the Standard Model's own sums, they still don't discriminate.

**CP by holonomy.** Carry a frame around the network's cells and divide out re-phasings: exactly (N − 1)(N − 2)/2 phases survive — none for two families, one for three (Proposition 35). 🟩 ⬛ That is Kobayashi and Maskawa's 1973 count, which predicted a third generation. GUM adds that N = 3 is an *output*, the phase is geometric, and its sign is welded to the vacuum's handedness (Chapter 15). Quark knots are tethered to the network, so their mixing is small; lepton knots float free against a helix-set neutrino basis, so theirs is large; and the network's reflection symmetry gives θ₂₃ → 45°, δ_CP → −π/2 (Stake S24).

## 13.7 The audit of this chapter

Everything here is *non-circular* (the principles weren't chosen to produce it) and *non-discriminating* (the Standard Model entails ρ = 1, the coupling identity, Yukawa proportionality, the anomaly sums, the phase count, and confinement). The paper's audit table (Table 7) prints **No** in the "discriminating" column for every row of this chapter. Even the new mixing angle is a landing inside a band a few percent wide, not a test. That is not failure: a deeper layer *should* reproduce the shallower layer's rules, and a substrate that couldn't produce ρ = 1 would already be dead. But matching is consistency, not discovery; GUM's discriminating content lives in Chapters 5–8, 10–12, 14, and 15.

**NUMBERS TO HOLD.** ε_tilt = 0.39 → sin²θ_w = 0.217 (+0.010/−0.007), on-shell (measured 0.2232; the other scheme's 0.2312 lies outside); ϑ = 0.527; M_Z/M_W = 1.130 (measured 1.1346). g ≈ 0.65, α_w ≈ 1/30. Δρ_top ≈ 0.93%. γ_JR = 1.48; ε_R ≈ 7×10⁻³⁴ at ℓ_P. N_ν ∈ [2.991, 3.000] vs 2.9963 ± 0.0074. σ ≈ 0.19 GeV² ≈ 16 tonnes-force. α′ = 0.84 vs 0.88 GeV⁻². θ̄_eff ≲ 10⁻⁴⁵. CP phases (N − 1)(N − 2)/2.

**CHEW ON THIS.** (13.1 ★) Diagonalize 𝕄² fully and derive ρ = 1; with ϑ = 0.527 compute sin²θ_w and M_Z/M_W. (13.2) Extract g and α_w = g²/4π from G_F and M_W, and retire "the weak coupling is small" in one sentence. (13.3) Prove: m_f = M₀e^{−I_f} with lock-independent I_f gives g_hff ∝ m_f; then show an additive law gives g_hff ∝ 1/m_f. (13.4) State the dichotomy, and predict something about the charges of any new *massless* force carrier. Why is it tagged 🟧? (13.5) Verify 3 × (1/6) + (−1/2) = 0 for the [SU(2)]²Y sum; what does the 3 count? (13.6) Convert σ = 0.19 GeV² to GeV/fm and newtons (ħc = 0.197 GeV·fm). (13.7) How many CP phases would four families have? (13.8) Why is "GUM reproduces ρ = 1" good news for GUM but not evidence *for* it over the Standard Model? (13.9 ★) From sin θ_c = 0.79, compute ε_tilt = 1 − cos θ_c and ¼(1 − ε_tilt/3). Then compute γ_JR = √(1 + 1.9 × 0.63) and (1.6×10⁻³⁵/3.86×10⁻¹³)^{γ_JR}.

---

# PART VII — THE COSMOS AND THE ONE BIT

# CHAPTER 14 — DARK ENERGY WITH A PULSE; GRAVITY FROM DEFECTS; ONE GUESS IN THE DARK

**What you'll be able to do after this chapter:** (1) Reproduce the worst prediction in physics and GUM's defusal of it. (2) Derive GUM's one-parameter dark-energy family and read three theorems off it. (3) Explain why the family is an equation Dvali and Turner wrote in 2003, why that helps, and how a damping channel would pick its index. (4) State what the full fit of the distance data finds, and GUM's pre-registered retirement sentence. (5) Explain how a quasar measurement shut the door through which neutrinos could have been lighter in the past. (6) Build both charges of Einstein–Cartan geometry with scissors, and say what GUM's gravity lacks — including one withdrawn sentence. (7) State GUM's dark-matter guess, the measurement that will judge it, and a second guess about a glow.

## 14.1 The worst prediction in physics, and the equilibrium defusal

⬛ Give every field mode a zero-point energy ħω/2, add up to a cutoff length L, and the vacuum's energy density comes out near ħc/L⁴: about 5×10¹¹³ J/m³ for the Planck length. The observed dark-energy density is about 6×10⁻¹⁰ J/m³ — a mismatch of about 10¹²³. Even GUM's grain at its largest allowed size, the timing bound of Chapter 8, leaves ħc/ℓ_s⁴ ≳ 6×10⁸¹ J/m³.

GUM's defusal is Grigory Volovik's insight, borrowed (🟪): **the estimate answers the wrong question.** For a *self-sustained* substrate — one that sets its own density with no container — equilibrium forces the pressure on its surroundings to vanish, and a thermodynamic identity (Gibbs–Duhem) cancels the zero-point budget against the substrate's own binding. ⬛ A droplet of superfluid helium floating in space really does this: furious zero-point motion inside, zero pressure outside. The huge number is bookkeeping; only *departures from equilibrium* gravitate. Honesty clause: that gravity is sourced by this equilibrium quantity is imported, not derived, and everything below inherits the condition. (And since BPS knots have zero internal pressure, knot matter is cosmological "dust," as ordinary matter should be.)

## 14.2 The lag, and the family

The departure is the *lag* of a slow mode behind cosmic expansion. The vacuum energy has a minimum at the mode's equilibrium value; as space expands the mode falls behind by δq ∝ H/Γ_r (H the expansion rate, Γ_r the relaxation rate), leaving the energy of a displacement from a stable minimum:

**ρ_DE ≈ ½𝒳⁻¹δq² > 0** — positive, and small because the universe is old and nearly relaxed. 🟩 (𝒳⁻¹ is the stiffness of the slow mode, a number the master draft never stated; §14.5 bounds it.)

r1 and r2 add: **the slow coordinate is the pitch wavenumber q of Chapter 6.** Dark energy, the neutrino mass, and the far-infrared edge are one variable (cross-lock X6). Now let **Γ_r ∝ Hⁿ**. Then ρ_DE ∝ H^{2(1−n)}, and (★ problem 14.2)

**w_DE = −n/[1 − (1 − n)Ω_DE],**

with Ω_DE dark energy's share of the total (🟩 Proposition 36). Three theorems, no calculus:

- **w stays between −1 and 0.** Since Ω_DE ≤ 1, |w| ≤ 1: never "phantom." n = 1 is a cosmological constant (w = −1); n = 0 behaves like matter (w = 0).
- **The constant-rate member doesn't accelerate** (Corollary 9), so n ≠ 0 — with radiation included it would even carry 2.9 times the matter density at recombination, which the microwave background excludes; acceleration today needs **n > ½(1/Ω_DE − 1) ≈ 0.22** (Proposition 37).
- **Dark energy was less negative in the past.** w depends on time only through Ω_DE, which grows, so w *falls* toward −1 as the universe ages: in the standard form w(a) = w₀ + w_a(1 − a), **w_a ≥ 0 for every member**, and w never crosses −1 (Proposition 38).

Track through (w₀, w_a): (0, 0) at n = 0; (−0.52, +0.27) at 0.25; (−0.76, +0.29) at 0.5; (−0.91, +0.16) at 0.75; (−0.97, +0.06) at 0.9; (−1, 0) at 1. Early on it is negligible for n ≳ 0.3 — about 4×10⁻⁵ of matter at recombination for n = ½ (Proposition 39).

**WHAT CHANGED (two small corrections with a moral).** r1's table of early dark energy used a matter-era shortcut and printed 3×10⁻⁵ for n = ½; computing the expansion self-consistently, with radiation, gives 4×10⁻⁵ (correction 35). And r1 wrote that the lag's key assumption — that the slow mode keeps up with expansion, Γ_r ≫ H — "fails in the far future." Since Γ_r/H ∝ H^{n−1} *grows* as H falls, the assumption improves toward the future and can fail only in the past; r3 states the condition where it is used, at recombination (correction 52). Always ask which direction a breakdown runs.

**TRY THIS (calculator).** With Ω_DE = 0.69: n = 0.5 gives w₀ = −0.5/0.655 = −0.763; n = 0.9 gives −0.9/0.931 = −0.967. Sketch w₀ against n: it never crosses −1.

**STEP-UP — why a lag looks like dark energy.** Drag a pendulum sideways with a hand that slows down. The pendulum lags, and the stored energy fades as the hand slows — never negative, never overshooting. An aging universe expands ever more slowly relative to its size; that picture is why w stays between −1 and 0.

## 14.3 An equation that was already written

Put ρ_DE ∝ H^{2(1−n)} into the Friedmann equation: **H² − Ω_DE,0 H₀^{2n}H^{2(1−n)} = (8πG/3)ρ_m.** ⬛ That is the "modified Friedmann equation" Gia Dvali and Michael Turner proposed in 2003, H² − H^α/r_c^{2−α} = (8πG/3)ρ_m. 🟩 **Proposition 40:** GUM's family *is* the Dvali–Turner family with **α_DT = 2(1 − n).** The n = ½ member is the self-accelerating background of the Dvali–Gabadadze–Porrati (DGP) "braneworld," where gravity leaks into an extra dimension; n = 1 is Λ.

**WHAT CHANGED.** The master draft called the family new; it isn't (correction 21). The equivalence cuts both ways. It removes a novelty claim — but every existing Dvali–Turner fit to distance data now applies to GUM for free (⬛ the DGP background fits worse than ΛCDM). And it sharpens what *is* GUM's: a substrate lag, not extra-dimensional leakage, so structures grow differently — no brane, no brane-bending mode, no ghost. At the same background expansion, *growth of structure* separates GUM from the braneworld.

**What picks n?** 🟨 Proposition 41 (Closure K-21, executed in form) ties n to how the lag is damped. Damping by the gap alone has a constant rate: n = 0, excluded. Rearrangement across a correlation length that grows by diffusion, ξ_c = (pc/H)^{1/2}, gives **n = ½ if the lag relaxes at the crossing rate c/ξ_c ∝ H^{1/2}**, and **n = 1 if it relaxes diffusively, at D/ξ_c² ∝ H**. Damping by radiation out to the horizon gives anything in between. r2 had printed the middle channel as "Γ_r ∝ H, n = ½," which the family's own definition forbids — a rate proportional to H *is* n = 1 (correction 49). Corrected, the two readings bracket the family. If the crossing rate wins, the preferred channel selects the DGP background, which the data exclude (§14.4). If diffusion wins, the preferred channel is ΛCDM itself — a cosmological constant with a computed origin — at the price of the polarization rotation of Chapter 15, which needs n < 1. Which rate law the substrate realizes is now the closure's first deliverable; the growth of structure is its second.

## 14.4 The exposure, and the pre-registration

⬛ DESI's second data release, with the microwave background and supernovae, prefers w₀ > −1 with **w_a < 0** — dark energy *more* negative in the past, crossing −1 — at about 2.8–4.2 standard deviations. **No member of GUM's family can reach that region.** How far off is it? r3 answers twice.

**A quick proxy**, as r2 printed it: fit each member's w(a) with the standard two-number form and compare with DESI's published ellipses. The DGP member n = ½ is excluded at the level of ten standard deviations; members with n ≳ 0.9 are about as disfavored as Λ itself. r2 concluded that "every n < 1 member is therefore further from the data than ΛCDM" — but its own proxy says otherwise for one supernova sample (DESY5), where the least-disfavored member sits at n ≈ 0.96 (correction 48).

**The full fit** (Stake S25, executed): the audit behind r3 fitted GUM's Friedmann equation directly to DESI's BAO distances, a compressed microwave-background prior, and three supernova compilations, after checking that the same pipeline reproduces DESI's own preference for evolving dark energy (Δχ² = −8.02 against DESI's −8.0). The results:

- BAO + microwave background: best n = 1 (ΛCDM); n > 0.949 at 95% confidence; behind the evolving-dark-energy fit by Δχ² = 8.0.
- Adding Pantheon+: best n = 0.988; n between 0.905 and 1; behind by 7.6.
- Adding DESY5 (2024): best n = 0.950, beating ΛCDM by Δχ² = 1.44 (about 1.2σ for one parameter); n between 0.871 and 1; behind by 16.6.
- Adding DES-Dovekie (2025): best n = 0.975; n between 0.899 and 1; behind by 10.5.

The DGP member, n = ½, is excluded by Δχ² ≈ +217. So dark energy today lies within about 2% of a cosmological constant (w₀ ≲ −0.984) if GUM is right; the family can at best tie ΛCDM, and it trails evolving dark energy by Δχ² = 7.6–16.6 in every combination. (A version with the neutrino mass free and the full microwave-background likelihood is still owed.) The sign of w_a remains GUM's exposure, and GUM printed, before Euclid and final DESI:

> **If the combined analysis prefers w_a < 0 with w₀ > −1 at ≥ 3σ in a parametrization that does not force the crossing, GUM retires its dark-energy sector and admits no second mechanism without a new flag.**

The last clause matters most. A theory that can always add "a second mechanism" has no dark-energy prediction. r3 adds one more honest sentence: some DESI combinations *already* exceed the threshold; the trigger is tied to the final combined analyses. Retirement would also take the polarization rotation of Chapter 15 with it — one stake, two readouts (Stake S29).

## 14.5 The drift that wasn't: a door, a bound, a proof

If the slow coordinate is the pitch, and the neutrino mass is the pitch quantum, the lag that makes dark energy also moves the neutrino mass. In terms of today's lag ε_ν (as a fraction of the equilibrium pitch) and h ≡ H/H₀, 🟩 Proposition 43 gives

**m₃(z)/m₃(0) = [1 + ε_ν h(z)^{1−n}]/(1 + ε_ν).**

**The door (r1).** If expansion stretches the helix, ε_ν < 0 and neutrinos were *lighter* in the past. Cosmology weighs past epochs, beta-decay experiments weigh today's mass, and in that reading they would be different numbers — Chapter 12's door. The price was printed at once: lowering the inferred mass at redshifts 1–3 by 10–25% needs a huge lag, ε_ν ≈ −0.2 to −0.5.

**TRY THIS (calculator).** r1's example: (n, ε_ν) = (0.5, −0.2) at z = 2, where the family's own expansion history gives h(2) = 3.26. Then (1 − 0.2√3.26)/0.8 ≈ 0.80 — neutrinos about 20% lighter at z = 2. (r1 used h ≈ 3.0, which gives 0.82.) Keep the −0.2 in mind for a minute.

**The bound (r2).** The same pitch also sits inside the far-field logarithm of the flavor bridge (Chapter 12), so a drifting pitch moves the electron's mass and not the proton's. 🟩 Proposition 43 continues: **Δµ_pe/µ_pe = −κ_far ε_ν [h(z)^{1−n} − 1].** ⬛ Molecular hydrogen in distant quasars shows the proton-to-electron mass ratio unchanged to |Δµ/µ| < 10⁻⁶ at z ≈ 3. Hence

**|ε_ν| < 10⁻⁶/(κ_far[h(3)^{1−n} − 1]) = 7.9×10⁻⁶ (n = ½), 2.0×10⁻⁵ (0.75), 5.7×10⁻⁵ (0.9), 1.2×10⁻⁴ (0.95).**

**The proof (r3).** The audit checked r2's proof and found that it *said* it used ΛCDM's h(3) (printed as 4.52; the stated inputs give 4.53) while its printed bounds needed each member's own h(3) — 4.82 at n = ½ (correction 50). r3 states the proof with the member's own history, and corrects r2's summary, "≲ 10⁻⁵," to 10⁻⁵–10⁻⁴ depending on n (correction 51).

Three consequences. **First, the stiffness is stated:** inverting ρ_DE = ½𝒳⁻¹δq² gives 𝒳⁻¹ > 3.6×10² eV² (n = ½), 55, 6.7, 1.6 eV² (n = 0.95). A pitch-scale stiffness, 𝒳⁻¹ ~ q_eq² = 2.5×10⁻³ eV², would have shifted µ_pe by about 4×10⁻⁴ at z = 3, and is excluded four-hundred-fold. **Second, the door is shut.** r1's ε_ν ≈ −0.2 is four orders of magnitude above the bound, for every n up to 0.95; the laboratory and cosmological neutrino masses agree to better than about 10⁻⁵ out to z ≈ 3, and the distance fit independently says the door would need a lag of 40–80%. r1's stake "the laboratory neutrino mass exceeds the cosmological inference," r1's S27, is retired, and the closure that would have computed the coupled lag, Closure K-23, is executed *negatively* on its testable face. **Third, a prediction survives:** a drift of µ_pe *without* a drift of α, with the redshift profile h^{1−n} − 1, below 10⁻⁶ — within reach of the next spectrographs at 10⁻⁷ (Stake S12, Chapter 10).

**The tomogram, now a null.** r1 offered the far-infrared trough (Chapter 6) as a tomogram: its red end sits at n̄p(z_s)(1 + z_s), so stacking spectra by source redshift could read off the history of the pitch. With the lag bounded, 🟨 Corollary 4 says the image is *flat*: |p(3)/p(0) − 1| < 10⁻⁶/κ_far ≈ 9×10⁻⁶ for every n. A trough whose edge moved with source redshift by more than 10⁻⁵ would not be GUM's (correction 62).

**WHAT CHANGED.** The section's arc is the book's arc in miniature: r1 opened a door and priced it honestly; r2 used a measurement nobody had connected to neutrinos to bound it; r3 checked r2's arithmetic, repaired the proof, and closed the door for good. Nothing here needed a new experiment — only the willingness to follow one variable through three observables.

## 14.6 Gravity from defects: curvature you can tape together

⬛ Crystallographers (Volterra; Kondo, Bilby, Kröner; Kleinert) showed that a lattice full of defects is a non-Euclidean space. **Disclinations** — rotational mismatches, like Chapter 6's cone — carry *curvature*; **dislocations** — cut, shift by one lattice step, re-glue — carry *torsion*: a loop around them fails to close by one step. A defected Cosserat lattice's continuum limit is **Einstein–Cartan geometry**, curvature plus torsion, with spin sourcing torsion.

**TRY THIS — build spacetime on your desk.** Draw two parallel lines on a paper disc, cut a wedge, and cone it: the lines converge — curvature. Cut a strip halfway across, slide one side of the cut by one ruled line, and tape; count equal steps around a rectangle enclosing the cut's end: it fails to close by one. Torsion. Both charges of Einstein–Cartan geometry, made with scissors.

GUM claims exactly this *kinematic* dictionary 🟩: knots are defects; defects strain each other; test knots follow the geodesics of the strain; and the equivalence principle is structural, since every clock and rod is an excitation of one substrate (⬛ MICROSCOPE confirms free-fall universality at 10⁻¹⁵ — an inverse kill survived, not a triumph). The *dynamics* is only half earned. r1 left it open; r2 supplied an Einstein–Hilbert term induced by the substrate's gapped fields — Sakharov's mechanism, 🟨 Proposition 42, kept by r3 as a *conditional* induction — and Chapter 8 used it to put ℓ_s near the Planck length. But the right sign of that term for every contributing field is asserted, not shown, so 🟧 **Closure K-22** stays posed, and GUM builds nothing on the dynamics beyond the induced scale.

**WHAT CHANGED.** The master draft said gravitational waves are transverse strain waves of the displacement, at √(µ/ρ₀). By Chapter 3's Proposition 2, those waves are locked to the grain rotation — **they are the photon.** So the graviton cannot be a linear transverse elastic mode (correction 23), and the gravity closure must find its carrier elsewhere in the defect geometry (perhaps a collective mode of the defect density), show that its energy is positive, and give it a speed that ⬛ the 2017 neutron-star merger GW170817 pins to c within ~10⁻¹⁵. One theorem, taken seriously, retired a sentence two chapters away.

One gravitational-wave stake survives on trust, and r3 says so. The master draft predicted that the electroweak "lock-melt" — the early-universe transition in which the vacuum's lock formed — leaves only a weak background of gravitational waves, which LISA could kill by hearing a loud one (Stake S26). Neither r1 nor r2 derived it; r3 keeps it at its printed grade and lists the order of the transition it presupposes as owed.

## 14.7 Dark matter: absent, with one guess and its judge — and a second guess about a glow

No dark-matter candidate is *derived*, and the paper prints the deficit plainly. The natural candidate has had three readings. The master draft "executed" it: an undressed knot frozen in through a "pinch" suppression of 2×10⁻⁸, chosen to give the observed abundance — a fit. r1 posed it as an undressed knot created in pairs at early-universe pinches. r2 withdrew the execution for reasons its own statements supply (correction 25): the abundance was tuned; a knot whose mass comes from the lock couples to the Higgs with strength m_τ/v = 7.2×10⁻³, which keeps it in thermal equilibrium at 100 GeV and cannot freeze in; and, as Chapter 9 showed, pairs need no pinch at all.

What is left is a 🟥 GUESS, **Conjecture 1** (Closure K-24): charge is a disclination *dressing* (Chapter 6); if GUM's energy also allows an *undressed* knot — a stable, sterile fermion in each family class, about as heavy as its charged sibling, coupling only to gravity, the fog, and the Higgs — then it is made in pairs at Yukawa strength and is a thermal relic. Deliverables: (i) whether the undressed solution exists; (ii) how fast an undressed pair can "dress" into a charged lepton pair; (iii) the relic density, which needs an annihilation rate of about 2×10⁻²⁶ cm³/s to land on the observed amount and otherwise overcloses the universe by up to 10¹⁰; (iv) the microwave-background check on energy injected by those annihilations. Direct-detection experiments cannot judge it: its scattering rate lies under the "fog" of solar neutrinos.

**The judge: the Higgs.** 🟩 **Proposition 44** (given the conjecture): an undressed tau-class knot couples to the Higgs exactly as the tau does, and the Higgs is heavy enough to decay into a pair of them. So

**Γ(h → invisible) = Γ(h → τ⁺τ⁻) = 0.26 MeV (Dirac), 0.13 MeV (Majorana),**

a branching ratio of **5.9% or 3.1%** — against the Standard Model's 0.11%, the ATLAS 95% limit of 10.7%, and the High-Luminosity LHC's reach of about 2.5%. If no undressed solution exists, GUM predicts the Standard-Model value. That is **Stake S27**, and GUM is exposed either way: a measured 3–6% with no other new physics would confirm a tau-mass sterile knot *and* kill it as the dark matter, since as a thermal relic it would be overabundant unless deliverables (ii)–(iv) say otherwise; a limit below 2.5% forces either the non-existence of undressed knots or a selection rule GUM has not stated.

**A second guess, about a glow.** r3 restores a conjecture r1 made and r2 dropped (correction 63). 🟥 **Conjecture 2** (Closure K-25): if undressed *electron*-class knots of mass m_u ≥ m_e exist, a colliding pair might acquire *opposite* dressings and emerge as an electron and a positron — positrons injected at low energy, at a rate ∝ (dark-matter density)². ⬛ The Galaxy's center glows in the 511 keV positron-annihilation line, concentrated in the bulge, with positrons injected below a few MeV (else they would annihilate in flight) — two features ordinary sources explain with difficulty, and both natural here if m_u is close to m_e. The closure owes the threshold and rate; kills are m_u < m_e (process closed), a glow not tracking density squared, or a rate clashing with the relic abundance. r3 adds the question r2's Higgs coupling raises: electron-class undressed knots would couple to the Higgs with m_e/v ≈ 2×10⁻⁶, and their thermal history must be computed with it. A guess, labeled, with a way to lose.

**NUMBERS TO HOLD.** ρ_Λ ≈ 6×10⁻¹⁰ J/m³; naive 5×10¹¹³ (Planck) or ≳ 6×10⁸¹ J/m³ (timing bound). n_min ≈ 0.22. Family: w₀ ∈ [−1, 0], w_a ≥ 0; n = ½ → (−0.76, +0.29). α_DT = 2(1 − n); n = ½ is DGP. Early dark energy at recombination 4×10⁻⁵ (n = ½). DESI DR2: w_a < 0 at 2.8–4.2σ. Full fit: n > 0.949 (BAO + CMB), 0.87–0.90 with supernovae; behind evolving dark energy by Δχ² = 7.6–16.6; DGP out by +217. Lag |ε_ν| < 7.9×10⁻⁶ to 1.2×10⁻⁴; stiffness 𝒳⁻¹ > 1.6–360 eV². Edge flat to 9×10⁻⁶ out to z ≈ 3. Higgs invisible width 5.9% or 3.1% (if undressed knots exist), else 0.11%. MICROSCOPE 10⁻¹⁵; |c_GW/c − 1| ≲ 10⁻¹⁵.

**CHEW ON THIS.** (14.1 ★) Compute ħc/L⁴ (ħc = 3.16×10⁻²⁶ J·m) for L = 1.6×10⁻³⁵ m and 1.5×10⁻²⁷ m; count orders of magnitude against 6×10⁻¹⁰ J/m³; write the Volovik sentence and the question it leaves. (14.2 ★) From ρ_DE ∝ H^{2(1−n)}, d ln H²/d ln a = −3(1 + Ω_DE w_DE), and continuity, d ln ρ_DE/d ln a = −3(1 + w_DE), derive w_DE. (14.3) Show that q_dec = ½(1 + 3w₀Ω_DE) < 0 requires Ω_DE(1 + 2n) > 1; evaluate n_min for Ω_DE = 0.69. (14.4) Argue w_a ≥ 0 from "w depends on time through Ω_DE, which grows." (14.5) What α_DT goes with n = 0.75? Why does the n = ½ member grow structure differently from DGP? (14.6) r1's other example: compute the drift ratio at z = 2 for (n, ε_ν) = (0.8, −0.3), using the family's own h(2) = 3.08. Then compare |ε_ν| = 0.3 with the bound at n = 0.8, 2.6×10⁻⁵: how many orders of magnitude apart? (14.7) In three sentences, why can't gravitational waves be transverse elastic waves in GUM? (14.8) Why must m_u ≥ m_e for Conjecture 2's process to run? (14.9) With κ_far = 0.1065 and the member's own h(3) = 4.82 at n = ½, compute 10⁻⁶/[κ_far(√h(3) − 1)]. Redo it with ΛCDM's 4.53. Which number belongs in the bound, and why? (14.10) Take Γ(h → N₀N̄₀) = 0.259 MeV (Dirac; half that for Majorana) and the Standard-Model Higgs width 4.1 MeV. Compute the invisible branching ratio both ways.

---

# CHAPTER 15 — THE ONE BIT

**What you'll be able to do after this chapter:** (1) Explain a sign chain and why it is a *parity check*. (2) List GUM's links O₁–O₅, and say which apparent link is not one. (3) State GUM's prediction for the rotation of the microwave background's polarization — its sign, its redshift pattern, and what it costs. (4) Explain the "endpoint property," and why a stated sign convention matters. (5) Argue that the bit is the same across the observable universe. (6) Outline a mirror test of short-range forces. (7) Recite GUM's pre-registered sentences.

## 15.1 A parity check on the vacuum

GUM's most distinctive structural claim: *one global sign* — the handedness s = ±1 of the vacuum's chiral condensate — fixes several observable signs at once, signs the Standard Model treats as independent (cross-lock X8). Write each as O_i = ε_i s, with ε_i computed by the theory. Then every pair must satisfy O_iO_j = ε_iε_j whatever s is: **a parity check**. A chain of k links and one free bit has k − 1 checks. 🟩 (Definition 9, Proposition 45.)

r3 numbers the links: **O₁**, which chirality the weak force grips — measured *left*, the anchor that fixes s; **O₂**, the orientation of the family ladder, not independently observable; **O₃**, the sign of the tiny strong-CP residual of Chapter 13; **O₄**, the sign of the neutrino CP phase, predicted δ_CP → −π/2 with θ₂₃ → 45°; and **O₅**, the sign of the polarization rotation of §15.2. ⬛ DUNE and Hyper-Kamiokande are built to measure O₄. With the anchor fixed, **the chain has one testable check today: the sign of δ_CP** (Stake S24), and the rotation of §15.2 is the second.

GUM also prints a tension inside its own anchor. Stake S24 wants δ_CP ≈ −π/2, and the neutrino-mass stake of Chapter 12 wants normal ordering; but the joint long-baseline analyses currently find δ_CP ≈ −π/2 most comfortable with *inverted* ordering. JUNO will settle the ordering before DUNE and Hyper-Kamiokande settle the sign.

**And one non-link.** By Chapter 14, w_a ≥ 0 for every member of the dark-energy family *whatever s is*. The drift's direction is not a readout of the bit but an unconditional prediction: a confirmed w_a < 0 cannot be absorbed by flipping s or recomputing any ε_i. The paper prints this (Proposition 45(ii)) so that nobody — including GUM — can later call it a sign convention.

**STEP-UP — the corkscrew vacuum.** A corkscrew bites one way. If empty space is faintly corkscrewed, processes that must "thread" it — weak decays — work for one handedness and fail for its mirror. ⬛ Chien-Shiung Wu's 1957 cobalt-60 experiment first noticed the vacuum's thread direction; GUM's chain says it shows up again in a neutrino beam.

## 15.2 The rotation of the sky

⬛ The microwave background's polarization appears rotated by a small angle β: 0.342° (+0.094°/−0.091°) in Planck plus WMAP data (3.6 standard deviations) and 0.215° ± 0.074° in an independent analysis of Atacama Cosmology Telescope data (2.9), with the same sign, and *the same at every frequency* from 23 to 353 GHz.

The first edition of this primer told you GUM's core predicts β = 0, with one flagged way out. r3 takes the way out. A *static* condensate rotates nothing frequency-flat (Chapter 6). But the condensate is not static: its tilt sits on the same slow manifold as the dark-energy lag, and as the lag decays the tilt relaxes. 🟨 **Proposition 47** (Closure K-26, executed, [DW-conditional]) shows what an *evolving* tilt does. Integrating out the gapped branch B3 in the presence of the handed sector induces, in light's equations, the term

**ℒ_Θ = −(α/2π) Θ(θ_c(t)) E·B,  Θ = s κ_χ (|χ₃|/(m̃√γ)) sin²θ_c,**

with κ_χ a positive number of order one. ⬛ A term of this form rotates the polarization of light equally at all frequencies, by an amount set only by how much Θ changed between emission and observation (§15.3). Three things follow, and they are the point:

- **The sign.** The dark-energy density falls with time for every member of the family, so sin²θ_c *grows* toward the present. The theory sign is therefore ε₅ = +1, and the observed sign is O₅ = sgn β = +s — **locked to the weak-chirality anchor**, in the counterclockwise convention of §15.3.
- **The cost.** β ≠ 0 requires n < 1. The rotation and the dark-energy family stand or fall together: r1 carried them as separate stakes; r2 merged them, and r3 keeps the merger, **Stake S29** (correction 26).
- **The profile.** A source at redshift z is rotated by a fraction of what the microwave background is:

**β(z)/β_rec = [h(z)^{2(1−n)} − 1]/[h(z_rec)^{2(1−n)} − 1],  h ≡ H/H₀.**

At the reionization epoch, z ≈ 7.7, that is 6×10⁻⁴ for n = ½, 1.8×10⁻² for n = 0.75, 0.11 for n = 0.9 and 0.18 for n = 0.95; as n → 1 it rises toward the ratio of logarithms ln h_reion/ln h_rec ≈ 0.26 while the rotation itself vanishes. Polarized radio galaxies and quasars at z ≲ 3 should show essentially none (≲ 0.02° even at n = 0.9).

**STEP-UP — why the oldest light turns most.** The rotation counts only the change in Θ between a ray's two ends, and Θ tracks the tilt, which tracks how much dark-energy lag is left. At recombination the expansion rate was 2.34×10⁴ times today's, so the lag has relaxed almost completely since then: the microwave background sees the whole change. Light from z = 3 left when most of the change had already happened, so it sees only the last sliver. That is why the profile is steep — and why it is a fingerprint. An axion-like field heavier than the expansion rate at reionization would rotate the reionization and recombination signals *equally*; GUM's rotation is recombination-dominated. The low-multipole/high-multipole ratio LiteBIRD will measure is that profile, and it measures n independently of any distance ladder.

What is *not* computed: the magnitude. κ_χ and |χ₃|/(m̃√γ) are unknown, so the content is the sign and the profile. Two conditions are printed with it. **Positivity:** sin²θ_c must stay positive back to recombination, which requires the condensate's stiffness to exceed 8×10⁴, 5×10², 26 and 10 times today's dark-energy density for n = ½, 0.75, 0.9 and 0.95. The natural condensate scale, (0.05 eV)⁴ = 2.2×10⁵ times that density, clears the requirement by a factor of only 3 at n = ½, but by 4×10², 8×10³ and 2×10⁴ at the others. **Adiabaticity:** the lag must keep up with expansion back to recombination, Γ₀/H₀ ≫ h_rec^{1−n} — about 150, 12, 2.7 and 1.7 for the same four members; the crossing-rate channel of Chapter 14, with Γ₀/H₀ ≈ 2×10¹⁵, meets it by thirteen orders of magnitude. Still owed: the anisotropy pattern of β across the sky; whether this time-dependent coupling escapes the locking quench of §6.11; and the step of reading each experiment's published β in the counterclockwise convention.

**WHAT CHANGED.** r1's core predicted β = 0 and listed the induced term as a flagged, unexecuted extension; r2 executed it; r3 keeps the execution and corrects three things in it. The sign is now derived in a stated convention (below). r2 had defined ε₅ as the sign of Θ(t₀) − Θ(t_e), which is just s itself, not a theory sign; r3 defines it as the sign of the change in sin²θ_c, which the chain needs (correction 54). And r2 printed one positivity threshold, 4×10⁴ times the dark-energy density, cleared "by three orders"; the requirement depends strongly on n, the margin is a factor of 3 at n = ½, and "three orders" holds only for n ≳ 0.8 (correction 53). The profile numbers use the corrected tilt.

## 15.3 The endpoint property

🟩 **Proposition 46.** For light whose wavelength is short compared with the scale over which Θ varies, with the coupling g_Θ Θ E·B, the polarization of a ray from emission event e to observation event o rotates by

**β = −½g_Θ[Θ(o) − Θ(e)]** (counterclockwise, as seen by the observer facing the source)

— *independent of the path between and of frequency.* Only the endpoints matter.

**STEP-UP — the hike.** Your change in altitude depends only on where you start and finish, not on the hills between. The rotation is the same kind of quantity: a ray crossing a thousand ups and downs of Θ ends rotated by the difference between its final and initial values.

Consequences: **(i) no scrambling** — fog-scale fluctuations of Θ neither accumulate nor random-walk, so there is no depolarization at leading order (correction 29 corrected the tempting guess that a random chiral fog would blur the background's polarization); **(ii) a map of the past** — the background measures Θ(now) − Θ(last scattering), so any sky pattern in β maps Θ on the last-scattering surface; **(iii) a cross-check** — nearer sources must show β(z_s)/β_CMB = [Θ(o) − Θ(z_s)]/[Θ(o) − Θ(z_rec)], which for GUM is the profile of §15.2.

**WHAT CHANGED (which way is positive?).** r1 printed β = +½g_Θ[Θ(o) − Θ(e)] without saying which sense of rotation counts as positive; that is the same result for an angle measured *clockwise*. r2 printed its rotation with no convention at all. Because GUM stakes the *sign*, r3 states the sense — counterclockwise as seen by the observer — and derives every sign in it (correction 54). A sign without a convention is half a prediction.

## 15.4 Is the bit the same everywhere?

⬛ When a symmetry breaks as the young universe cools, causally separate regions can choose differently, leaving domains and walls (Kibble, 1976); and wall networks with surface tension above about (1 MeV)³ either dominate the universe's energy or distort the microwave background beyond what is seen (Zel'dovich–Kobzarev–Okun). 🟩 **Proposition 48** applies this to GUM. Across a wall, weak chirality, δ_CP's sign, and the birefringence sign all flip *together*, so every observer sees the same internal chain; domains differ only by sign flips of β across the sky. And GUM's walls are *heavy*: flipping weak chirality means reorganizing every knot's core and the electroweak vacuum, so σ_w^{1/3} is at least of order the weak scale — far above the danger line. So the bit must have been chosen before or during inflation, and **GUM predicts one domain across the observable universe: a uniform sign of β.** r1 carried this as its own stake; r2 and r3 fold its kill — sign-flipping patches in birefringence maps — into Stake S29. Such patches would retire the heavy walls or the chain itself.

## 15.5 A mirror test of short-range forces

🟩 **Proposition 49 (the mirror identity).** If both the laws and the vacuum were mirror-symmetric, the interaction energy of two bodies would equal that of their mirror images. For a left-handed helix L and its mirror R: U_LL = U_RR and U_LR = U_RL. In a vacuum with handedness s the differences are odd in s:

**U_LL − U_RR = s𝒜(r) + …,  U_LR − U_RL = sℬ(r) + … .**

⬛ In the Standard Model alone, only weak neutral currents contribute, utterly negligible at micrometers.

**STEP-UP — gloves in a corkscrew breeze.** Two left gloves and two right gloves hung in still air swing as mirror images. Let a *corkscrew* breeze blow and they need not, because the breeze has a handedness. GUM's vacuum is the breeze, with a natural range of the fog's correlation length — a few to tens of micrometers (the pitch is about 25 µm at the edge cosmology allows).

⬛ That is where precision short-range gravity and Casimir-force experiments already operate. The test (**Stake S28**): microfabricated chiral test masses — helical or gyroid metamaterials — in both handednesses, and four force measurements F_LL, F_RR, F_LR, F_RL at 3–25 µm. Built-in controls: both differences must be nonzero with agreeing signs (both odd in s) and vanish in a mirror-symmetric world, and swapping masses between mounts cancels fabrication asymmetry. A molecular arm exists too: ⬛ the Standard Model predicts tiny, still-unobserved energy differences between mirror-image molecules (10⁻¹⁷–10⁻¹⁴ relative), and a vacuum-handedness term would scale differently with nuclear charge. The expected size is 🟧 **Closure K-27**, whose prediction sets the level at which a null result kills. One condition binds it, and r3 prints it: the fog-mediated part of 𝒜 couples matter to the condensate at the pitch scale, so it carries the same locking suppression as the trough of §6.11 — negligible in GUM's core. A sign-consistent F_LL − F_RR at micrometer range would be the first direct detection of the vacuum's handedness, and it would measure the locking length together with the trough and the advected line, all three fixed by one pitch (cross-lock X2).

**WHAT CHANGED.** r2 dropped the mirror test, its closure, and its stake without comment. r3 restores all three, with the locking condition on the amplitude (correction 60).

**TRY THIS (mirror helices).** Twist two pipe cleaners into helices of opposite handedness. Convince yourself no rotation turns one into the other. Now imagine the force between two left-handed helices differing from that between two right-handed ones — and what that would mean.

## 15.6 Sentences stated in advance

GUM states, before the measurements (paper Sec. 10.6):

- **If DUNE or Hyper-Kamiokande find δ_CP with the sign opposite to the chain's at three standard deviations, the handedness chain is broken.**
- **If JUNO establishes the inverted ordering, the neutrino-mass stake is retired and the neutrino-as-heliknoton identification returns to posed.**
- **If Euclid and DESI confirm w_a < 0 with w₀ > −1 at three standard deviations, in a parametrization that does not force the crossing, the dark-energy family is retired.**
- **If LiteBIRD measures a low-multipole rotation equal to the high-multipole one, or a rotation with n > 0.98, the birefringence execution is retired and the electromagnetic sector's chirality claims are withdrawn.**
- **If birefringence maps show sign-flipping patches, the single-domain prediction is retired.**
- **If a stacked far-infrared trough with all three controls is detected, the identification of the locking length with the structural scale is retired, and the trough's depth measures the locking length.**
- **If the High-Luminosity LHC measures an invisible Higgs width outside 0.1% or 3–6%, the undressed-knot conjecture is retired.**
- **If a 300-qubit mirror circuit shows a flat return probability through 350 qubits, dense storage is retired.**

A chain that cannot be broken by a scheduled measurement is not a chain.

**NUMBERS TO HOLD.** δ_CP → −π/2; θ₂₃ → 45°. Observed β: 0.342° (3.6σ) and 0.215° (2.9σ), same sign, frequency-flat. GUM: β ≠ 0 needs n < 1; sign +s, counterclockwise; profile β(7.7)/β_rec = 6×10⁻⁴ (n = ½) to 0.18 (n = 0.95), tending to 0.26 as n → 1; none (≲ 0.02°) for sources at z ≲ 3. Positivity margin 3 (n = ½) to 2×10⁴ (n = 0.95). Wall danger: σ_w^{1/3} ≳ 1 MeV. Mirror-force range: 3–25 µm. Molecular parity violation: 10⁻¹⁷–10⁻¹⁴, unobserved.

**CHEW ON THIS.** (15.1) With links O₁, O₄, O₅ and one bit, write the two independent parity checks. (15.2) Why can't "w_a > 0" be rescued by flipping the bit? (15.3) "A chiral vacuum obviously rotates polarization, so β ≠ 0 confirms GUM." Correct this: what does a static helix do, what does an evolving tilt do, and what observation would distinguish GUM's rotation from an axion's? (15.4) Θ varies wildly along a ray but has the same value at both ends. What rotation results, and what does that imply for depolarization? (15.5) Why must GUM's walls be heavy, and why does that imply one domain? (15.6) In the mirror-force experiment, why measure both differences, and why swap mounts? (15.7) Rank the eight pre-registered sentences by how soon each will be judged, one line each. (15.8 ★) As n → 1 the profile tends to the ratio of logarithms ln h_reion/ln h_rec, where h_reion = 14.3 is the expansion rate at z = 7.7 and h_rec = 2.34×10⁴ the rate at recombination, both in units of today's. Evaluate it. Then express the condensate scale (0.05 eV)⁴ in units of today's dark-energy density (2.3 meV)⁴.

---

# PART VIII — ADJUDICATION

# CHAPTER 16 — HOW A THEORY BETS ITS LIFE, CORRECTS ITSELF, AND MAKES YOU AN AUDITOR

**What you'll be able to do after this chapter — and after this primer:** (1) Apply GUM's audit criterion — *non-circular* versus *discriminating* — to any claim. (2) Tell a landing from a test. (3) Rank GUM's stakes by damage and sort them by kind. (4) Read a corrections list of sixty-seven entries as evidence about a theory's process. (5) Carry seven reflexes out of physics into everything else.

## 16.1 The audit criterion

GUM applies to itself the ordinary standard of consilience, made explicit (paper Definition 10):

> A postulate *P* **non-circularly explains** a fact *F* if *P* was not selected because *F* is known, or if *P* entails a distinct testable *F′* ≠ *F* not used in its selection. *P* **discriminates** between two theories if some *F′* it entails is not entailed by the competitor.

Run it over the primer, as the paper's audit table does (Table 7). **Circular, and printed as such:** light is gapless (objectivity was adopted to forbid a photon mass), light is *exactly* lightlike (the cone condition was imported for it), and electrodynamics is exactly Maxwell's for every c_L (the Gauss completion was adopted to recover Gauss's law). Each earns credit only through consequences nobody asked for — achirality and stability of light, the wider matter cone, a substrate that realizes one physical gauge. **Non-circular but non-discriminating:** ρ = 1, e = g sin θ_w, the anomaly sums, the Kobayashi–Maskawa count, confinement — the Standard Model entails them too; the weak-angle band discriminates only weakly, as a landing. **Discriminating:** finite c_L in the quantum tower; the dense-storage cliff; the far-infrared trough, or the bound it puts on the locking length; the relaxation family's w_a ≥ 0; the sign and redshift profile of the polarization rotation; a drift of m_p/m_e without a drift of α; the physical clock's channeling resonance; the two-scale electron and its uniformity; the band edge, if alternative (b); the vacuum's handedness at micrometer range; and the Higgs invisible width, if undressed knots exist.

The pattern is the finding, and the paper states it about itself: three results are circular by construction and printed as such; the derived results are almost all non-circular and almost all non-discriminating; and *"the discriminating content lives in the substrate's unavoidable signatures: the timing of quantum correlations, a representational cliff, a pitch, a physical clock, a band edge, a drifting lag, and vacuum handedness at micrometer range."* The "drifting lag" survives in r3 only as a correlation, bounded below 10⁻⁶ (Chapter 14).

**STEP-UP — two detectives.** Two detectives explain the same clues equally well. The one who says "and when we find the suspect, there will be red clay on the left boot, and nowhere else" has done something the other hasn't. Non-circular is about how the theory was built; discriminating is about the boot.

## 16.2 Landings and tests

Theory band ±δ_th, experimental uncertainty ±δ_exp. **Test** if δ_th ≲ 3δ_exp; **landing** if δ_th ≳ 10δ_exp (Definition 11). A landing is reported as "consistent within ±δ_th," never as a pull in σ. GUM's lepton logarithms, quark spacings, weak-angle band, neutrino count and Regge slope are all landings, by factors of 10² to 10⁴ (Chapters 12–13). Apply this to the next "stunning agreement" you read about, in any field.

## 16.3 The death list, ranked

Twenty-nine stakes are too many to hold at once. Here are the nine that would do the most damage:

| Stake | The bet | What dies if it fails |
|---|---|---|
| S4 + S5 | A gate-independent mirror-circuit cliff at most 4.45 qubits wide, near 324–338 qubits under bulk hosting at the Planck-scale grain, that moves with the hosting knob | Dense storage: GUM's account of how a local substrate keeps quantum books |
| S6 | Finite c_L: sidereal Bell timing; a multipartite (Bancal–Barnea) deviation | The tower's finite update speed — or, if seen, the discovery of the material frame |
| S3 | No far-infrared trough in GUM's core; if one appears, a fixed blue edge at n̄p (24.66–24.75 µm where cosmology allows), dipole-shifted and circularly polarized | The identification of the locking length with the structural scale (a detection measures ℓ_lock; a null tightens ℓ_lock < 1.5 nm) |
| S13 | Channeling resonance at 80.87 / 84.26 / 53.12 MeV/c | The physical-clock reading of de Broglie's clock |
| S28 | F_LL − F_RR ≠ 0 at 3–25 µm | Vacuum handedness at micrometer range |
| S29 | w_a ≥ 0; a polarization rotation of sign +s with the predicted redshift profile, uniform across the sky | The dark-energy sector and the rotation together, with no second mechanism |
| S18 + S12 | Σm_ν ∈ [0.059, 0.41] eV with normal ordering; m_p/m_e drifts only with the lag's profile, α steady | The neutrino as pitch quantum, and the one soft coordinate behind it |
| S15 + S14 | Electron core < 10⁻¹⁹ m; no e\* below a TeV; m_e uniform across pitch cells at 10⁻¹⁸ | The two-scale electron and halo dominance (partly judged by archives already) |
| S8 | A valid bench knot with a measured j and dilation law V(j) | Flag F9: spin ½ becomes a permission, not a prediction — or the electron's spin is excluded |

The list sorts itself. Stakes S4/S5, S6, S3, S13 and S28 are *ontological*: they probe signatures a substrate cannot hide, and a positive result in any of them would be the discovery of the substrate. Stakes S29 and S18/S12 are *sector-level*: they can kill a sector and leave the rest standing — and so is the Higgs invisible width, Stake S27, for the dark-matter conjecture. Stakes S8 and S15/S14 are *mathematical or archival*: settled on a bench or in old data, with no cosmological excuses. Learn to sort any theory's bets this way. Most "theories of everything" you meet online have no bets that sort at all.

## 16.4 Sixty-seven corrections — and counting

The paper's Sec. 11.6 lists sixty-seven corrections, each with its source. Corrections 1–36 are corrections of the master draft that r1 or r2 made and r3 keeps; corrections 37–67 are new in r3. Grouped, they teach more than any single theorem.

**Kept from r1 and r2:**

- **Bookkeeping:** a kinetic coefficient, the gap stiffness, the halo length, the per-species window, the notation, the register of ⬜ numbers (corrections 1, 2, 3, 11, 30, 31).
- **Retractions forced by theorems:** the near-field channel, the (c/c_L)³ "radiation," the untestable qubit ceiling, Planck's constant "derived," finite c_L tested only by two parties (corrections 6, 7, 8, 9, 10).
- **Mis-modeled physics:** a trough, not a line, with a transparency bound fifteen orders weaker; a core that predicts no feature; gravitational waves that are not transverse elastic waves; the endpoint property; pair creation without tears (corrections 15, 16, 23, 29, 34).
- **Bounds and ranges fixed:** the grain size from data; a pitch consistent with the neutrino floor; the cliff's exact width; an unusable dipole-moment stake rephrased; early dark energy computed with radiation; the neutrino floor's rounding; a "third test" that was a quotient; the electron's scale named correctly (corrections 13, 14, 12, 20, 35, 33, 32, 36).
- **Simplifications:** light exactly lightlike from one stiffness relation; P5 unnecessary (corrections 4, 5).
- **Withdrawals and honest grades:** halo dominance not "variationally proven"; grades lowered where the Standard Model was assumed; the strong sector's unprinted theorems posed; a distance fit marked executed without a fit; the slow mode's stiffness stated; freeze-in withdrawn; the merged stake; the battery's wording; level 0 graded as an embedding theorem (corrections 17, 18, 19, 22, 24, 25, 26, 27, 28).
- **Credit:** the relaxation family is Dvali and Turner's (correction 21), with Kelvin's and Böhmer's precedents cited.

**New in r3:**

- **Arithmetic:** the tilt and the weak angle it moves; the bridge's uncertainty; the oscillation inputs; the spin flag's dilation; the lag-bound proof; the positivity margins; the regularization of induced gravity; the photon-timing margin (corrections 37, 38, 40, 41, 45, 50, 53, 55, 58).
- **Logic:** an asserted neutrino cap; a dropped order-one factor; the closure's normalization; a gauge statement without its restriction; "adiabatic" where the passage is sudden; a data claim contradicted by its own proxy; an index channel the family's definition forbids; a summary that overstated a bound; a breakdown placed in the wrong epoch; a sign without a convention; a right-handed admixture overgraded; a manifold theorem applied to a network (corrections 39, 42, 43, 44, 46, 48, 49, 51, 52, 54, 56, 57).
- **Restorations** of what r2 dropped without saying why: the amorphous step, the band edge and its positronium stake, the mirror test, advected structure, the tomogram, pair dressing, and more (corrections 47, 59, 60, 61, 62, 63, 64).
- **Data and housekeeping:** the distance fit executed; every label renumbered; companion files repaired (corrections 65, 66, 67).

Notice the pattern: nearly every retraction came with a *sharper* replacement. The near-field channel became a finite-speed test of quantum correlations; the ceiling became a mirror-circuit cliff with a knob; the line became a trough whose absence measures a length; the asserted cap became a wider window with the same sliver at its edge; the neutrino door became a bound and a surviving correlation; and "β = 0" became a sign and a profile.

And the list is never finished. The first edition of this primer, written against r1, found two errors in r1's own first printing: the direction of the neutrino √2 (Chapter 12, "A SLIP, CAUGHT") and the matter–light cone at the weak-scale gap (Chapter 2). r1 printed them as errata E1 and E2, and r3 reproduces them inside corrections 3 and 4. Then an audit set r1 and r2 against each other and found thirty-one more. None was found by cleverness. All were found because the paper writes down every conversion, so that anyone can redo it. That is what a ledger is for.

## 16.5 The kit, packed for travel

Seven reflexes, bought with one primer about a speculative substrate, that work on everything:

1. **Tag before you believe.** Established, follows-from-assumptions, estimated-with-stated-error, computed, borrowed, guess, owed? The tag decides what checking a claim deserves.
2. **Ask "what would kill this?" first.** If the honest answer is "nothing specific," you are looking at a mood. Then ask who adjudicates, and whether the proponents control them.
3. **Demand the error bar, then its pedigree.** A number without uncertainty is decoration; an uncertainty without method is decoration with confidence. (The bridge's ±0.90 looked like a pedigree until someone asked what correlation it assumed.)
4. **Sort consistency from discrimination.** "Consistent with" is a bar every surviving theory clears. "Predicts something the rival doesn't" is the only bar that moves belief.
5. **Tell a landing from a test** before you let anyone say "sigma."
6. **Price the owed computations.** A theory's list of posed closures is as informative as its list of theorems. A theory with none is either finished or not looking.
7. **Keep a corrections list — and read other people's.** A public record of errors is evidence that the machinery works. A spotless record usually means nobody checked.

## 16.6 Reading a headline, worked example

*"Physicists predict quantum computers will hit a wall at 300 qubits."* Run the kit. **Tag:** a theorem *given* a hypothesis (dense storage) — the headline dropped the "given." **Kill:** a flat mirror-circuit return probability through 350 qubits with verified scrambling. **Error bar:** midpoints of 324–338 qubits under bulk hosting with the grain at the Planck length, ±3 for an unknown gain margin, about 5 lower with a different cutoff in induced gravity; other hosting hypotheses give 215–229 or 286–326; the drop itself is at most 4.45 qubits wide. **Discrimination:** yes — standard quantum mechanics predicts no cliff. **Landing or test:** a test, of a *shape* (a sharp, depth-independent drop) and a *knob dependence*, not just a number. **Owed:** which hosting mode (Closure K-7), and whether gravity really is induced. **Corrections:** the master's version of this claim was untestable, and r1's range (234–329) has been superseded; check which version is being quoted. The strongest sentence the evidence licenses: *a speculative program predicts that, if a stated hypothesis about how nature stores quantum states holds, a specific scramble-and-unscramble test will fail abruptly near 324–338 qubits, at a point that moves with chip size; standard quantum mechanics predicts no failure; nobody has run the test yet.* Sixty seconds, seven questions, a calibrated read.

## 16.7 The last word on GUM, and on you

This primer taught you a theory that might be wrong, and meant it. If Stake S29 fires, Chapter 14 becomes a monument to a relaxation law nature declined, Chapter 15's rotation goes with it, and Chapters 2–13 need not change a word, because they never claimed more than they could defend. If Stakes S4 and S5 fire the wrong way, dense storage goes, and with it GUM's picture of how a local substrate keeps quantum books. If JUNO finds the inverted ordering, the neutrino goes back to being a question. If the benches, the crystals, the far-infrared archives, the torsion balances and the Higgs factories all come back positive, then you were among the first people to understand, properly, what the vacuum might be made of. And whatever happens, you have now watched a theory correct itself sixty-seven times in public — two of those corrections first caught by this primer's first edition, and thirty-one found in the latest round. You own the machinery that makes the difference between those futures *knowable*. GUM ends its documents with a standing line, and it belongs to you now: **standing by for adjudication.**

---

## GLOSSARY (selected)

**Audit (non-circular / discriminating)** — a postulate explains non-circularly if it was not chosen for the fact, or if it predicts others; it discriminates if a rival doesn't predict the same.
**Band edge** — a gapped branch's lowest frequency; for a knot at κ = 1/√2, √2Mc² (722.7 keV for the electron).
**Blue fog** — an amorphous double-twist network: helical locally, directionless overall; GUM's vacuum (Flag F7).
**Bogomolny trick** — writing energy as a square plus a topological count, so knot masses are computable.
**Bragg passage** — a photon redshifted *through* a helix's reflection band, reflecting a fraction 1 − e^{−Π} for every Π; sudden (R ≈ Π) at the coupling the sky allows.
**Branch A / Branch B** — the two readings of the partial normalization audit: µ_c = m̃_V²/16 with κ = 1/√2 (adopted), or the inherited 3m̃_V²/16 with κ = ½, which would break the neutrino stake.
**c_L-causal model** — correlations updated at a finite speed c_L in a preferred frame.
**Cliff** — the gate-independent drop of mirror-circuit return probability beyond log₂N_eff qubits under dense storage, at most 4.45 qubits wide; near 324–338 qubits for laboratory registers.
**Closure** — an entry in GUM's ledger of computations, Closures K-1 to K-27: ten executed or closed, four consistency conditions, three conjectures, one partially executed, nine still posed.
**Closure conditions** — the pair (C-spin) L = jħ and (C-clock) E = ħω that fixes a spinning knot.
**Compacton** — a knot that ends sharply at finite radius; the electron's core.
**Completion (T, G)** — how moving charge drives the grains; (T) is acausal, (G) is exactly Maxwell.
**Cone condition** — µ/ρ₀ = γ_eff/2J, which makes light exactly lightlike (imported; Closure K-2).
**Core and halo** — the electron's two scales: a topological core at ℓ_s and an evanescent halo of length (c_ψ/c)ħ/Mc.
**Cosserat continuum** — a continuum whose points carry orientation.
**Cross-lock** — a weld making several predictions stand or fall together (Cross-locks X1–X8).
**Defect current** — the only possible source of departures from Maxwell's theory.
**Dense storage** — the hypothesis that the substrate hosts quantum states Markovianly and target-blindly.
**Dichotomy (confinement)** — a winding charge is confined iff its mediator is gapped; a posed deliverable of Closure K-17.
**Disclination** — a line defect of orientation; in GUM, charge.
**Dvali–Turner family** — GUM's dark-energy background, α_DT = 2(1 − n).
**Endpoint property** — Θ-birefringence depends only on Θ at emission and observation: β = −½g_Θ[Θ(o) − Θ(e)], counterclockwise as seen by the observer.
**Errata (E1–E2)** — two errors in r1's first printing, caught while the first edition of this primer was written; r1 printed them, and r3 reproduces them inside corrections 3 and 4.
**Flag F9 (spin closure)** — GUM's flagged commitment to the (1, 1) spinning closure, under which spin ½ is unique; a bench's dilation law tests its two halves.
**Frustration class** — a discrete way a knot joins the vacuum helix; tau, muon, electron.
**Heliknoton** — a linked (Hopf) texture of the helix itself; GUM's neutrino.
**Higgs invisible width** — the judge of the undressed-knot conjecture: 5.9% or 3.1% if undressed tau-class knots exist, the Standard Model's 0.11% if not.
**Holonomy** — rotation acquired by transport around a loop; Aharonov–Bohm as geometry.
**Hosting hypothesis** — where the substrate keeps the tower: volume, cut, or qubit extent.
**Induced gravity** — Sakharov's mechanism: integrating out gapped fields generates gravity's strength; in GUM it fixes ℓ_s within a factor of a few of the Planck length.
**Lag bound** — the quasar bound on m_p/m_e turned into a bound on the dark-energy lag, |ε_ν| < 10⁻⁵–10⁻⁴; it shuts the neutrino drift.
**Landing / test** — agreement within a theory band ten times wider than the experiment's error / within three times it.
**Level 0–3** — substrate; continuum; quantum; Standard-Model bookkeeping.
**Locking length (ℓ_lock)** — √(γ/4µ_c), the stiffness ratio that sets how strongly light feels the fog; ≲ 1.7 nm from transparency, < 1.5 nm from the archives.
**Material frame / points / description** — the continuum-mechanical terms r3 keeps for the level-1 description; statements about the bookkeeping, not about the substrate itself.
**Mirror circuit** — scramble, then unscramble; the right answer is known without simulation.
**Mirror identity** — U_LL = U_RR in a mirror-symmetric world; broken by a handed vacuum.
**Mixing attractor** — the rule sin²θ_w = ¼(1 − ε_tilt/3) that lands the weak angle at 0.217, on-shell (Closure K-16).
**Neutrino drift** — r1's door: the neutrino mass tracking the dark-energy lag, lighter in the past; shut by the lag bound.
**Normalization audit** — the recomputation of every inherited number in one convention (Closure K-3); partially executed in r3, with Branch A adopted.
**Objectivity** — energy depends on orientation only relative to the lattice; GUM's gauge principle, which r3 derives from level-0 background independence.
**Pitch** — the helix's repeat length: p/ζ_ν ∈ 8.7–24.7 µm a priori, 24.66–24.75 µm where cosmology allows.
**Posed closure (K-n)** — an owed computation with deliverables and a kill; nine of the ledger's twenty-seven closures are still posed.
**Reachable set** — the states a circuit family can reach; far smaller than all states.
**Re-graded (RG)** — a claim whose grade the paper changed, with the reason printed.
**Relaxation index (n)** — how the slow mode's relaxation scales with expansion; the distance data put it above 0.949, or above 0.87–0.90 with supernovae.
**Schmidt rank / capacity** — product terms a state needs / a substrate can hold.
**Sign chain** — observable signs O₁–O₅ fixed by one bit; tested by parity checks.
**Spectral dimension** — the dimension a random walker infers from how its chance of return falls, τ^(−d_s/2); hypothesis (H0) asks for d_s = 3.
**Stake (S-n)** — a pre-registered result that would kill a claim; twenty-nine of them close the paper.
**Substrate** — GUM's sole primitive, prior to geometry, force, space, and time, and not a medium; r1's word for it was "material".
**Sudden passage** — a Landau–Zener crossing with Π ≪ 1, which reflects R ≈ Π; the Bragg passage at the coupling the sky allows.
**Tilt (θ_c)** — the condensate's angle, from sin 2θ_c/2θ_c = 1/𝔪: sin θ_c = 0.79 (+0.06/−0.11).
**Trough** — the fixed-edge, circularly polarized dip that Bragg passage would leave in far-infrared spectra; GUM's core predicts none.
**Undressed knot** — a knot without its disclination dressing: sterile, and GUM's dark-matter conjecture (Conjecture 1).
**Velocity gauge** — the gauge in which the scalar potential travels at a chosen speed; GUM's substrate realizes it at c_L.

---

## ANSWER-KEY NOTES (spot checks)

(1.2) 5/√(25 − v²) = 2 gives v ≈ 4.33 m/s.
(1.7) τ = 100 steps. On a tree the number of sites within a distance r grows exponentially, so the walker drifts steadily outward instead of spreading like three-dimensional diffusion.
(2.1) √(7×10¹⁰/2700) ≈ 5,090 m/s.
(2.5) κ ≈ 0.707 and κ/√(1 − κ²) = 1, so the correct halo is √2 longer.
(2.6) ≈ 7×10⁻³⁰ (1 MeV); ≈ 4.6×10⁻²⁰ (80 GeV); ℓ_g ≲ 7×10⁻²⁸ m, which a Planck-size grain clears by about seven orders of magnitude.
(3.7) Smaller by a factor of 3; item (1), the kinetic coefficient.
(4.4) Both equal ½k²cos²(kx).
(4.6) B is unchanged; E_φ changes by −κ_B∇χ̇; only time-independent χ leaves both unchanged.
(5.4) 5×10⁻¹³; 5×10⁻¹⁶.
(5.5) ≈ 8 ns.
(5.7) ≈ 9×10⁻⁶ V/m, within about 3 ps; ≈ 10⁻² V/m, at 33 ns.
(6.1) θ ≈ 48.6°.
(6.2) 360° sin 41° ≈ 236°.
(6.3) x ≈ 1.83, so θ_c ≈ 52.6° and sin θ_c ≈ 0.79, against √(1 − 1/1.9) ≈ 0.69.
(6.4) 24.7 µm and 8.67 µm; 12.1 THz and 34.6 THz. The window's 34.5 THz comes from the unrounded band edge, 0.1426 eV.
(6.5) Π ≈ 0.106, R ≈ 0.10; sudden, since Π ≪ 1.
(6.6) 27.2 µm, yes; 32.1 µm needs Spitzer.
(6.7) ≈ 14 µm (under one pitch) versus ≈ 8×10⁹ m (≈ 3×10¹⁴ pitches).
(6.9) ℓ_lock ≲ 1.7 nm and ≲ 1.5 nm; Δn ≈ 5×10⁻¹²¹.
(7.3) ½.
(7.4) ≈ 8×10⁶; unchanged.
(7.5) 3.
(7.6) 28.
(7.8) ≈ 3×10⁻⁴; it grows large for measurements faster than the update can cross the apparatus.
(8.1) ≈ 317, so n₅₀ ≈ 324; ≈ 238, so n₅₀ ≈ 245.
(8.4) ≈ 1.2×10⁶.
(8.5) ≈ 190 ps, so c_L ≳ 5×10¹³ m/s ≈ 2×10⁵c.
(8.6) 1.5×10⁻²⁷ m.
(8.7) Only (c).
(8.8) 4.45; both the 90% and the 10% points sit at the same multiple of N_eff, so their difference does not depend on it.
(8.9) 0.56 and 1.77; 3 log₂π ≈ 4.95, about 5 qubits.
(9.1) Winding 2.
(9.2) (E₂, E₄) and (E₀, E₆); the minimum sits at λ⁶ = E₆/E₀, where the two terms are equal.
(9.4) The inner integral is 16/15.
(10.1) 1/6.
(10.4) j < 1 for (1, 1); j < 3/2 for (3, 1); j < ½ for (1, 3).
(10.5) µ_c = m̃_V²/16; κ = ½.
(10.6) 84.26 MeV/c; 40.44 MeV/c.
(10.7) 0; ≈ 3.5×10⁻⁵.
(10.9) tanh(ln V) = 2/3, so (V² − 1)/(V² + 1) = 2/3 and V² = 5.
(11.1) 197 MeV; any electron–positron collider since the 1970s.
(11.2) 2.0 keV; 40 keV; X-ray spectroscopy.
(11.6) κ ≈ 0.778.
(11.8) ≈ 7.8×10¹¹ rad; ≈ 1.3×10⁻¹⁴.
(12.1) 2.822, 5.332, quotient 1.889; the quotient is the second number divided by the first, so it adds no test.
(12.3) ±1.12; e^{±1.12} ≈ ×/÷ 3.06: 0.015 and 0.143 eV.
(12.4) ≈ 0.10 eV.
(12.5) 0.047 eV (corrected halo), 0.066 eV (old halo); Branch B gives 0.081 eV and Σm_ν ≈ 0.21 eV, which DESI excludes.
(12.7) m₁ ≈ 0.134 eV, m₂ ≈ 0.134 eV, Σm_ν ≈ 0.41 eV.
(13.1) 0.217; 1.130.
(13.2) g ≈ 0.65, α_w ≈ 0.034 ≈ 1/30.
(13.5) The three colors.
(13.6) ≈ 0.96 GeV/fm ≈ 1.5×10⁵ N.
(13.7) 3.
(13.9) ε_tilt ≈ 0.39 and sin²θ_w ≈ 0.217; γ_JR ≈ 1.48; ≈ 7×10⁻³⁴.
(14.1) ≈ 4.8×10¹¹³ J/m³ (~123 orders); ≈ 6×10⁸¹ J/m³ (~91 orders).
(14.3) n_min ≈ 0.225.
(14.5) α_DT = 0.5; GUM's member is a substrate lag with no brane, so its perturbations differ from DGP's.
(14.6) ≈ 0.89; about four orders of magnitude.
(14.9) 7.9×10⁻⁶; 8.3×10⁻⁶; the member's own, because the lag follows the member's own expansion history.
(14.10) 5.9% (Dirac); 3.1% (Majorana).
(15.1) O₁O₄ = ε₁ε₄ and O₁O₅ = ε₁ε₅ (O₄O₅ is their product).
(15.4) Zero; no depolarization.
(15.8) ≈ 0.26; ≈ 2.2×10⁵.

---

## THE FINAL PROJECT

Choose ONE claim; audit it with the full kit; write three pages.

**(a)** "The photon is exactly lightlike in GUM." Trace objectivity and the cone condition, state what is imported, sort circular from non-circular (hint: c_ψ > c), and find the kill.
**(b)** "GUM's electrodynamics is exactly Maxwell's." Reconstruct the locality dichotomy, explain why Flag F6 is circular, work through the energy fine print, and design the null test — including what a positive result would *measure*.
**(c)** "GUM predicts a wall for quantum computers." Reconstruct dimension counting, reachable sets, and dense storage; design a mirror-circuit experiment with a knob; price the cliff's dependence on the structural scale that induced gravity fixes; then judge whether Schmidt hosting, which survives a flat result, is a legitimate alternative or a dodge.
**(d)** "A fixed far-infrared edge would reveal a helical vacuum." Derive the trough's fingerprints from Bragg passage, explain why the old 10⁻³¹ bound failed, explain why GUM's core predicts no trough and what a detection would measure, and read the two archival Spitzer searches as a referee would.
**(e)** "Electrons carry a real internal clock." Derive the channeling resonance, contrast it with zitterbewegung and standard quantum mechanics, assess the unreplicated evidence, design a three-crystal test, and say what the α–µ discriminant adds.
**(f)** "GUM's dark energy is already disfavored." Derive w_a ≥ 0, read the full distance fit (n > 0.949; behind evolving dark energy by Δχ² = 7.6–16.6), state the retirement sentence, steelman the view that the standard parametrization misleads, and say what retirement would take with it.
**(g)** "Neutrinos were lighter in the past." Explain the trap of Chapter 12, the door r1 opened, the bound r2 drew from the constancy of m_p/m_e, the proof r3 repaired, and the prediction that survives — including the audit slip of §12.7.

Grading rubric — the primer's last table: *Tags correct (25%). Kill conditions identified (25%). Landings sorted from tests, consistency from discrimination (25%). The strongest sentence your evidence licenses — and not one word more (25%).*

**[END OF THE GUM SUBSTRATE PRIMER — revision 3 edition, DRAFT for review: 16 chapters, 8 parts, glossary, answer notes, final project. Standing by for adjudication.]**
