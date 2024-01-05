import type { ColorWeighted } from "../../types/colors.types";
import { hoverColor, oppositeColor } from "../../utils/colors";

interface Props {
  text: string;
  color: ColorWeighted;
  onClick: () => void;
  className?: string;
}

export default function Button({ text, color, onClick, className }: Props) {
  const bg = `bg-${color}`;
  const hover = hoverColor(color);
  const bgHover = `hover:bg-${hover}`;
  const textColor = `text-${oppositeColor(color)}`;
  const textHover = `hover:text-${oppositeColor(hover)}`;
  return (
    <button
      className={`${className} shadow-lg inline-flex w-auto px-4 py-2 hover:text-white rounded-full ${bg} ${textColor} ${bgHover} ${textHover} transition-all duration-500 ease-in-out`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
