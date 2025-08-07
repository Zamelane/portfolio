import React from "react";
import { cn } from "../lib/utils";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function Button({ className, disabled, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "px-3 py-2.5 cursor-pointer",
        "bg-primary-background text-primary-inverted",
        "hover:bg-primary-hover hover:text-primary-hover-inverted",
        "disabled:text-slate-500 disabled:bg-slate-700 rounded-lg",
        "transition-all duration-300 ease-in-out", // Базовые анимации
        "transform hover:-translate-y-0.5 hover:scale-[102%]", // Эффект при наведении
        "active:translate-y-0 active:scale-95", // Эффект при нажатии
        "focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-primary-focus", // Фокус-стили
        "disabled:transform-none disabled:cursor-not-allowed", // Отключенное состояние
        className
      )}
      disabled={disabled}
      {...props}
    />
  );
}