export type ComplexColorName =
  | "slate"
  | "blue"
  | "pink"
  | "cyan"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "sky"
  | "indigo"
  | "violet"
  | "rose";

export type SimpleColorName = "black" | "white";

export type ColorName = ComplexColorName | SimpleColorName;

export type LightColor = 50 | 100 | 200 | 300 | 400;
export type MediumColor = 500;
export type DarkColor = 600 | 700 | 800 | 900;

export type ColorWeight = LightColor | MediumColor | DarkColor;

export type ColorWeighted = `${ComplexColorName}-${ColorWeight}` | SimpleColorName

export type ColorBg = `bg-${ColorWeighted}`;
export type ColorText = `text-${ColorWeighted}`
export type ColorBgHover = `hover:${ColorBg}`;
export type ColorTextHover = `hover:${ColorText}`;
