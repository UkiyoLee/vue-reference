export namespace ArrayUtils {
  export function createVortexArray(line: number, column: number): number[][] {
    const vortex: number[][] = Array(line).fill(NaN).map(() => Array(column).fill(NaN));
    for (let i = 0; i < vortex.length; i++) {
      continue;
    }
    return vortex;
  }
}