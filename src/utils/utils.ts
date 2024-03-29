export const degreesToRadians = (degrees: number): number => {
  return (degrees / 180) * Math.PI;
};

export const randomlySpreadValue = (
  val: number,
  spread: number = 5
): number => {
  return val / spread + Math.random() * val * (1 - 1 / spread);
};

export const randomInRange = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};

export const randomHexColor = () => {
  const color = Math.floor(Math.random() * 16777215).toString(16);
  return `#${color}`;
};
