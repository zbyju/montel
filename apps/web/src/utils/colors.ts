import type {
  ColorName,
  ColorBg,
  ColorText,
  ColorWeight,
  ColorWeighted,
  LightColor,
  MediumColor,
  DarkColor,
  ComplexColorName,
  ColorTextHover,
  ColorBgHover,
} from "../types/colors.types";

export function colorWeighted(
  color: ColorName,
  weight: ColorWeight,
): ColorWeighted {
  return color === "white" && weight < 500
    ? "white"
    : color === "white"
      ? "black"
      : color === "black" && weight > 500
        ? "black"
        : color === "black"
          ? "white"
          : `${color}-${weight}`;
}

export function colorBg(color: ColorName, weight: ColorWeight): ColorBg {
  return `bg-${colorWeighted(color, weight)}`;
}
export function colorBgHover(
  color: ColorName,
  weight: ColorWeight,
): ColorBgHover {
  return `hover:bg-${colorWeighted(color, weight)}`;
}
export function colorText(color: ColorName, weight: ColorWeight): ColorText {
  return `text-${colorWeighted(color, weight)}`;
}
export function colorTextHover(
  color: ColorName,
  weight: ColorWeight,
): ColorTextHover {
  return `hover:text-${colorWeighted(color, weight)}`;
}

export const isLightColor = (weight: number): weight is LightColor =>
  [50, 100, 200, 300, 400].includes(weight);
export const isMediumColor = (weight: number): weight is MediumColor =>
  weight === 500;
export const isDarkColor = (weight: number): weight is DarkColor =>
  [600, 700, 800, 900].includes(weight);

export const splitColorWeighted = (
  color: ColorWeighted,
): [ColorName, ColorWeight] => {
  const split = color.split("-");
  const name = split[0];
  const weight = parseInt(split[1]);
  return [name as ColorName, weight as ColorWeight];
};

export const oppositeColor = (
  color: ColorWeighted,
  lightWeight: ColorWeight = 50,
  darkWeight: ColorWeight = 900,
): ColorWeighted => {
  if (color === "black") return "white";
  if (color === "white") return "black";
  const [name, weight] = splitColorWeighted(color);
  if (isDarkColor(weight)) return `${name}-${lightWeight}` as ColorWeighted;
  if (isLightColor(weight)) return `${name}${darkWeight}` as ColorWeighted;
  if (isMediumColor(weight)) return `${name}-${lightWeight}` as ColorWeighted;

  return color;
};

export const hoverColor = (color: ColorWeighted): ColorWeighted => {
  if (["black", "white"].includes(color)) return color;
  const [name, weight] = splitColorWeighted(color);
  const newWeight = weight === 50 ? 100 : weight === 900 ? 800 : weight + 100;
  return `${name as ComplexColorName}-${newWeight as ColorWeight}`;
};

export const darkColorBg = (color: ColorName): ColorBg => colorBg(color, 900);
export const lightColorBg = (color: ColorName): ColorBg => colorBg(color, 100);
export const darkColorText = (color: ColorName): ColorText =>
  colorText(color, 900);
export const lightColorText = (color: ColorName): ColorText =>
  colorText(color, 100);

export const tailwindToHex = (color: ColorName): string => {
  return color.includes("yellow") ? "#fdf6b2" : color.includes("amber") ? "#fef3c7" : color.includes("lime") ? "#ecfccb" : color.includes("green") ? "#dcfce7" : color.includes("emerald") ? "#d1fae5" : color.includes("teal") ? "#ccfbf1" : color.includes("cyan") ? "#cffafe" : color.includes("sky") ? "#e0f2fe" : color.includes("blue") ? "#e1effe" : color.includes("indigo") ? "#e5edff" : color.includes("violet") ? "#ede9fe" : color.includes("purple") ? "#f3e8ff" : color.includes("fuchsia") ? "#fae8ff" : color.includes("pink") ? "#fce8f3" : color.includes("rose") ? "#ffe4e6" : color.includes("white") ? "#ffffff" : color.includes("black") ? "#000000" : "#ffffff"
}
