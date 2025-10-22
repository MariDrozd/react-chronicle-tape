export const normalizeAngle = (angle: number) => ((angle % 360) + 360) % 360;

export const shortestAngle = (start: number, end: number) => {
  let deltaAngle = normalizeAngle(end - start);
  if (deltaAngle > 180) {
    deltaAngle -= 360;
  }
  return deltaAngle;
};

export const degToRad = (deg: number) => (deg * Math.PI) / 180;

export const stepAngleFor = (count: number) => (count ? 360 / count : 0);
