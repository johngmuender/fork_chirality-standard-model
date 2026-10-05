# Illustration and film notes

The GUM edition ships no raster artwork and no video file. Its plates and its film are drawn in code from the same palette as the chirality essay: midnight navy, faded blue, copper and ivory, with an engraved-ink texture.

## Historical plates

`components/historical-plates.tsx` draws six plates as inline SVG on an ivory paper ground with a fine hatch: MacCullagh’s rotational aether (1839), Kelvin’s gyrostatic ether (1889), the Cosserats’ oriented points (1909), Heisenberg’s array (1925), de Broglie’s internal clock (1927) and Bell’s local beables (1975). Each is a diagram of the idea named beside it. None is a portrait, a reconstruction of an apparatus or a reproduction of a historical document, and the plates make no claim about what any of these people looked like. The work each plate refers to is linked from its card.

The question chapter shows the Heisenberg plate as a sticky figure beside the timeline, and the gallery of all six below it.

## Mathematical exhibits

D3 scales draw the dispersion plot, the spacetime diagram, the sidereal arrival curve, the far-infrared trough, the mirror-circuit cliff, the lepton ladder, the anomaly balance and the relaxation family. The scroll-driven audit uses D3 joins and transitions. Three.js renders the isorotating knot as an instanced field of arrows on eight shells; a flat x–z section is drawn as SVG for the fallback. These are drawings of mathematical textures over parameter space, not pictures of particles.

## The film

`components/gum-film.tsx` renders a six-chapter film of 54 seconds live in the browser: each scene is a pure function of time drawn as SVG, with chapter buttons, a scrubber, captions and a text transcript. The film pauses off-screen, obeys the page-wide pause control, and under a reduced-motion preference steps between chapters without playing. It has no audio track and no rendered file; there is nothing to copy at build time.
