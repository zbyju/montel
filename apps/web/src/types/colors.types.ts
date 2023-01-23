export type ComplexColor =
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

export type SimpleColor = "black" | "white";

export type Color = ComplexColor | SimpleColor;

export type ColorWeight =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

export type ColorBg = `bg-${Color}-${ColorWeight}` | `bg-${OneColor}`;
export type ColorText = `text-${Color}-${ColorWeight}` | `text-${OneColor}`;
export type ColorBgHover = `hover:${ColorBg}`;
export type ColorTextHover = `hover:${ColorText}`;
