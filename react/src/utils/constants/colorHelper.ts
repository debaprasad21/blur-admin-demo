// Converted from src/app/theme/theme.constants.js

type ColorHelper = {
  tint: (color: string, weight: number) => string;
  shade: (color: string, weight: number) => string;
};

const mix = (color1: string, color2: string, weight: number): string => {
  const d2h = (d: number): string => d.toString(16);
  const h2d = (h: string): number => parseInt(h, 16);

  let result = "#";
  for (let i = 1; i < 7; i += 2) {
    const color1Part = h2d(color1.substr(i, 2));
    const color2Part = h2d(color2.substr(i, 2));
    const resultPart = d2h(Math.floor(color2Part + (color1Part - color2Part) * (weight / 100.0)));
    result += ('0' + resultPart).slice(-2);
  }
  return result;
};

const colorHelper: ColorHelper = {
  tint: (color: string, weight: number): string => {
    return mix('#ffffff', color, weight);
  },
  shade: (color: string, weight: number): string => {
    return mix('#000000', color, weight);
  },
};

export default colorHelper;
