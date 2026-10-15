# Illustration and film notes

The GUM edition ships no raster artwork and no video file. Its plates and its films are drawn in code from the same palette as the chirality essay: midnight navy, faded blue, copper and ivory, with an engraved-ink texture.

## Historical plates

`components/historical-plates.tsx` draws twelve plates as inline SVG on an ivory paper ground with a fine hatch: MacCullagh’s rotational aether (1839), Kelvin’s gyrostatic ether (1889), the Cosserats’ oriented points (1909), Heisenberg’s array (1925), de Broglie’s internal clock (1927) and Bell’s local beables (1975) for the paper’s chapters, and, for the primer, Michelson and Morley’s interferometer (1887), Rutherford’s gold foil (1911), Madelung’s quantum fluid (1926), Derrick’s guillotine (1964), Volterra’s cut-and-glue defects (1907) and Wu’s mirror-breaking decay (1957). Each is a diagram of the idea named beside it. None is a portrait, a reconstruction of an apparatus or a reproduction of a historical document, and the plates make no claim about what any of these people looked like. The work each plate refers to is linked from its card.

The question chapter shows the Heisenberg plate as a sticky figure beside the timeline, and the gallery of the first six below it. The primer path shows subsets of the gallery beside the sections that introduce each idea.

## Mathematical exhibits

D3 scales draw the dispersion plots, the spacetime diagram, the sidereal arrival curve, the far-infrared trough, the mirror-circuit cliff, the lepton ladder, the anomaly balance, the relaxation family and the primer’s own instruments: the river race, the diatomic necklace, Einstein’s relation read off a curve, the skin, the helical free energy, the quantum potential, Derrick’s scaling, the neutrino bridge, the Regge line and the zero-point ledger. The two scroll-driven stories, the paper’s audit and the primer’s ladder, use D3 joins and transitions. Three.js renders the isorotating knot as an instanced field of arrows on eight shells; a flat x–z section is drawn as SVG for the fallback. These are drawings of mathematical textures over parameter space, not pictures of particles.

## The films

`components/chaptered-film.tsx` is the shared shell: scenes drawn as pure functions of time as SVG, with chapter buttons, a scrubber, captions and a text transcript. The films pause off-screen, obey the page-wide pause control, and under a reduced-motion preference step between chapters without playing. They have no audio track and no rendered file; there is nothing to copy at build time.

`components/gum-film.tsx` is the argument in six chapters, 54 seconds. `components/primer-film.tsx` is the primer in eight scenes, 64 seconds: one STEP-UP analogy per part, from the swimmer in the river to the gloves in a corkscrew breeze.

## The primer’s text

`scripts/primer-parser.mjs` turns `gum/primer/gum-primer.md` into typed blocks at sync time, keeping the text nearly verbatim: paragraphs carry their inline Markdown, and the primer’s devices (the nine tags, TRY THIS, STEP-UP, WHAT CHANGED, NUMBERS TO HOLD, A SLIP CAUGHT, CHEW ON THIS, the ★ sections, the two tables, the glossary, the answer notes and the final project) become blocks the page folds and styles. `components/primer-text.tsx` renders them, turning “Chapter n” and “§n.m” into links, `^{…}` and `_{…}` into superscripts and subscripts, the tag glyphs into labelled marks, and the first mention of each glossary term in a chapter into a tooltip.
