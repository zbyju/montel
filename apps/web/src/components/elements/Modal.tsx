// src/components/Modal.jsx

import { useEffect, useState, MouseEvent } from "react";
import type { ElementInfo } from "../../types/element.types";
import Button from "./Button";

interface Props extends ElementInfo {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({
  title,
  description,
  isOpen,
  onClose,
  className,
}: Props) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  function preventPropagation(e: MouseEvent<HTMLElement>): void {
    e.stopPropagation();
  }

  return (
    <>
      {isOpen ? (
        <div
          className={`${className} fixed top-0 left-0 w-full h-full`}
          onClick={onClose}
        >
          <div
            className="absolute inset-0 bg-gray-800 opacity-20"
            onClick={onClose}
          ></div>
          <div className="relative flex items-center justify-center h-full">
            <div
              className="bg-white text-black rounded-lg w-1/3 p-4"
              onClick={preventPropagation}
            >
              <h3 className="text-lg font-bold mb-4">{title}</h3>
              <p className="mb-4">{description}</p>
              <Button text="Zavřít" color="rose-700" onClick={onClose} />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
