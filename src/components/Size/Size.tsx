import * as React from "react";
import clsx from "clsx";
interface SizeProps {
  variants?: "primary" | "soldout" | "sold";
  type?: "button";
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
    "rounded 2xl:rounded-[0.278vw] text-body-large 2xl:text-body-large-2xl py-[10px] 2xl:py-[0.694vw] px-[12px] 2xl:px-[0.833vw] hover:bg-quaternary",
  soldout:
    "rounded bg-primary border border-warmTone-4 text-graphite hover:bg-warmTone-4 hover:text-graphite py-[16.5px] px-[20px] lg:py-[15px] 2xl:py-[1.042vw] 2xl:px-[1.389vw] 2xl:text-[0.972vw] 2xl:rounded-[0.278vw] lg:text-[14px] text-[14px] leading-[140%] disabled:border-neutral disabled:bg-white disabled:text-neutral ease-linear",
  sold: "rounded bg-primary border border-warmTone-4 text-graphite hover:bg-warmTone-4 hover:text-graphite py-[16.5px] px-[20px] lg:py-[15px] 2xl:py-[1.042vw] 2xl:px-[1.389vw] 2xl:text-[0.972vw] 2xl:rounded-[0.278vw] lg:text-[14px] text-[14px] leading-[140%] disabled:border-neutral disabled:bg-white disabled:text-neutral ease-linear",
};
const sizeStyles = {
  default: "",
  small: "",
  medium: "",
  large: "",
};

export const Size = ({
  variants = "primary",
  type = "button",
  id,
  ariaLabel = "button",
  size = "default",
  label,
  className = "",
  disabled = false,
  onClick,
  ...props
}: SizeProps) => {
  const buttonClass = disabled
    ? clsx(variantStyles[variants], sizeStyles[size])
    : clsx(variantStyles[variants], sizeStyles[size]);

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
