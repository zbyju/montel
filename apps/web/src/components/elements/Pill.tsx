import { useState } from "react";
import type { PillInfo } from "../../types/pill.types";
import { oppositeColor } from "../../utils/colors";
import Modal from "./Modal";

interface Props {
  pill: PillInfo;
  className?: string;
}

export default function Pill({ pill, className }: Props) {
  const bg = `bg-${pill.color}`;
  const text = `text-${oppositeColor(pill.color)}`;

  const [isOpen, setIsOpen] = useState(false)
  console.log(`is open: ${isOpen}`)

  const clickClass = pill.description ? "cursor-pointer" : ""

  return (
    <>
      <div
        className={`${bg} ${text} ${className} ${clickClass} inline-flex items-center align-center rounded-full px-6 py-2`}
        onClick={() => {
          console.log("test")
          setIsOpen(true)
        }}
      >
        {pill.title}

      </div>
      {pill.description ? <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={pill.title} description={pill.description} /> : undefined}
    </>
  )
}
