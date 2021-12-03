export const clampNumber = (num: number, min: number, max: number): number =>
  Math.max(min, Math.min(max, num));
