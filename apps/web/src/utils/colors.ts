import type {
  Color,
  ColorBg,
  ColorText,
  ColorWeight,
} from "../types/colors.types";

export function createColor(
  color: Color,
  weight: ColorWeight,
  prepend: string
): string {
  return color === "white" && weight < 500
    ? `${prepend}-white`
    : color === "white"
    ? `${prepend}-black`
    : color === "black" && weight > 500
    ? `${prepend}-black`
    : color === "black"
    ? `${prepend}-white`
    : `${prepend}-${color}-${weight}`;
}
export function colorBg(color: Color, weight: ColorWeight): ColorBg {
  return createColor(color, weight, "bg") as ColorBg;
}
export function colorBgHover(color: Color, weight: ColorWeight): ColorBg {
  return createColor(color, weight, "hover:bg") as ColorBg;
}
export function colorText(color: Color, weight: ColorWeight): ColorBg {
  return createColor(color, weight, "text") as ColorBg;
}
export function colorTextHover(color: Color, weight: ColorWeight): ColorBg {
  return createColor(color, weight, "hover:text") as ColorBg;
}

export const darkColorBg = (color: Color): ColorBg => colorBg(color, 900);
export const lightColorBg = (color: Color): ColorBg => colorBg(color, 100);
export const darkColorText = (color: Color): ColorBg => colorText(color, 900);
export const lightColorText = (color: Color): ColorBg => colorText(color, 900);
