import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  title: string;
  onClick?: () => void;
  isPrimary?: boolean;
  className?: string;
}

export function Button({ title, isPrimary, className, onClick }: ButtonProps) {
  return (
    <button
      className={twMerge(
        "rounded-lg px-4 py-2 border-2 min-h-12",
        isPrimary
          ? "bg-primary-500 border-primary-500 text-white"
          : "bg-white border-primary-500 text-primary-500",
        className
      )}
    >
      {title}
    </button>
  );
}
