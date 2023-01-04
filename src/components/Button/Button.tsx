import * as React from "react";
import classNames from "classnames";
interface ButtonProps {
  variants?: "primary" | "secondary" | "tertiary";
  type?: "button" | "submit" | "reset";
  color?: "default" | "black" | "white";
  size?: "default" | "small" | "medium" | "large";
  id?: string;
  ariaLabel?: string;
  label: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const variantStyles = {
  primary:
    "rounded bg-graphite border-graphite text-white hover:bg-subdued hover:border-subdued py-[16.5px] px-20 md:py-[2.148vw] lg:py-[15px] 2xl:py-[1.042vw] 2xl:px-[1.389vw] text-body-small md:text-body-small-md lg:text-body-large 2xl:text-body-small-2xl 2xl:rounded-[0.278vw] disabled:border-neutral disabled:bg-neutral ease-linear",

  secondary:
    "rounded bg-primary border border-warmTone-4 text-graphite hover:bg-warmTone-4 hover:text-graphite py-[16.5px] px-[20px] lg:py-[15px] 2xl:py-[1.042vw] 2xl:px-[1.389vw] 2xl:text-[0.972vw] 2xl:rounded-[0.278vw] lg:text-[14px] text-[14px] leading-[140%] disabled:border-neutral disabled:bg-white disabled:text-neutral ease-linear",

  tertiary:
    "text-graphite text-body-text lg:text-body-text-lg 2xl:text-body-text-2xl border-0 rounded-none relative disabled:bg-transparent disabled:text-neutral disabled:before:bg-neutral disabled:hover:before:scale-100 hover:text-subdued before:bg-graphite before:absolute before:w-full before:h-px before:left-0 before:scale-x-100 before:transition-transform before:duration-300 before:top-[calc(100%+2px)]   before:origin-top-left-0-2/4 hover:before:scale-x-0 hover:before:origin-top-left-full-2/4 hover:before:bg-subdued",
};
const sizeStyles = {
  default: "w-fit",
  small: "w-fit",
  medium: "w-full",
  large: "w-full",
};

const colorStyles = {
  default: "",
  black: "",
  white: "text-white before:bg-white hover:text-white hover:before:bg-white",
}

export const Button = ({
  variants = "primary",
  type = "button",
  color = "default",
  id,
  ariaLabel = "button",
  size = "default",
  label,
  className = "cursor-pointer outline-none inline-block transition-all duration-300 disabled:cursor-not-allowed",
  disabled = false,
  onClick,
  ...props
}: ButtonProps) => {
  const buttonClass = disabled
    ? classNames(variantStyles[variants], sizeStyles[size], colorStyles[color])
    : classNames(variantStyles[variants], sizeStyles[size], colorStyles[color]);

  return (
    <button
      type={type}
      id={id}
      aria-label={ariaLabel}
      className={`${buttonClass} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      <span>{label}</span>
    </button>
  );
};
