export function throttle<T extends (...args: any) => any>(
  func: T,
  timeFrame: number
): T {
  let lastTime = 0;
  let timer: any;
  return function () {
    const now = Date.now();
    clearTimeout(timer);
    if (now - lastTime >= timeFrame) {
      lastTime = now;
      return func();
    } else {
      timer = setTimeout(func, timeFrame);
    }
  } as T;
}

export function getContrastColor(hexcolor: string) {
  const r = parseInt(hexcolor.substring(1, 2), 16);
  const g = parseInt(hexcolor.substring(3, 4), 16);
  const b = parseInt(hexcolor.substring(5, 6), 16);
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 8 ? "black" : "white";
}
