export function motionAllowed(
  paused: boolean,
  reduced: boolean,
  foreground: boolean,
  visible = true,
) {
  return !paused && !reduced && foreground && visible;
}
