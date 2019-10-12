// A计权
export function aWeighting(f: number): number {
  // const f1 = 20.6;
  // const f2 = 107.7;
  // const f3 = 737.9;
  // const f4 = 12200;
  const f1f1 = 424.36;
  const f2f2 = 11599.29;
  const f3f3 = 544496.41;
  const f4f4 = 148840000;

  const ff = f * f;

  return 1.2588966 * f4f4 * ff * ff /
    ((ff + f1f1) * Math.sqrt((ff + f2f2) * (ff + f3f3)) * (ff + f4f4));

}

// 高斯函数
export function gauss(x: number, sigma: number = 1, mu: number = 0): number {
  return Math.pow(Math.E, -(Math.pow(x - mu, 2) / (2 * sigma * sigma)));
}
