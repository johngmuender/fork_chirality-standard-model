/** Repository coordinates for links and the source snapshot. */
export const repository =
  'https://github.com/johngmuender/gumai-website-intro-v5-1';
/** GitHub resolves HEAD to the default branch, whatever it is named. */
export const snapshot = 'HEAD';
export const paperPath = 'gum/paper/gum-paper.md';
export const paperTitle =
  'What Material Could Possess Quantum Mechanics as Its Coarse-Grained Bookkeeping?';
export const paperDate = '2026-09-28';
export const source = (path: string) =>
  repository + '/blob/' + snapshot + '/' + path;
