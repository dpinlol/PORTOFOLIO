export const clamp = (value: number, min = 0, max = 1): number =>
  Math.min(max, Math.max(min, value));

export const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;

export const smoothstep = (edge0: number, edge1: number, value: number): number => {
  const t = clamp((value - edge0) / (edge1 - edge0));
  return t * t * (3 - 2 * t);
};

export const easeInOut = (t: number): number =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

/** Progress inside a segment, eased. Returns 0 before, 1 after. */
export const segment = (progress: number, start: number, end: number): number =>
  easeInOut(clamp((progress - start) / (end - start)));

export const damp = (current: number, target: number, lambda: number, dt: number): number =>
  lerp(current, target, 1 - Math.exp(-lambda * dt));

export type Vec3Tuple = [number, number, number];

export type CameraKey = {
  at: number;
  position: Vec3Tuple;
  target: Vec3Tuple;
  fov: number;
};

export type CameraPose = {
  position: Vec3Tuple;
  target: Vec3Tuple;
  fov: number;
};

export function sampleCamera(keys: CameraKey[], progress: number): CameraPose {
  if (progress <= keys[0]!.at) {
    const key = keys[0]!;
    return { position: key.position, target: key.target, fov: key.fov };
  }

  for (let i = 1; i < keys.length; i += 1) {
    const next = keys[i]!;
    const previous = keys[i - 1]!;
    if (progress <= next.at) {
      const t = easeInOut((progress - previous.at) / (next.at - previous.at));
      return {
        position: [
          lerp(previous.position[0], next.position[0], t),
          lerp(previous.position[1], next.position[1], t),
          lerp(previous.position[2], next.position[2], t),
        ],
        target: [
          lerp(previous.target[0], next.target[0], t),
          lerp(previous.target[1], next.target[1], t),
          lerp(previous.target[2], next.target[2], t),
        ],
        fov: lerp(previous.fov, next.fov, t),
      };
    }
  }

  const last = keys[keys.length - 1]!;
  return { position: last.position, target: last.target, fov: last.fov };
}

/** Deterministic pseudo-random, so the studio looks the same on every load. */
export function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
