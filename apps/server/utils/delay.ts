export function delay(ms: number = 5_000) {
  return new Promise(res => setTimeout(res, ms));
}
