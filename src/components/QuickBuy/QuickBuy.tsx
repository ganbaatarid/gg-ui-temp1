import * as React from "react";
import clsx from "clsx";
interface QuickBuyProps {
    variants?: "primary" | "secondary" | "tertiary";
    type?: "button";
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
        "rounded text-body-large 2xl:text-body-large-2xl py-[15px] 2xl:py-[1.042vw] px-[15px] 2xl:px-[1.042vw]",

    secondary:
        "rounded bg-primary border border-warmTone-4 text-graphite hover:bg-warmTone-4 hover:text-graphite py-[16.5px] px-[20px] lg:py-[15px] 2xl:py-[1.042vw] 2xl:px-[1.389vw] 2xl:text-[0.972vw] 2xl:rounded-[0.278vw] lg:text-[14px] text-[14px] leading-[140%] disabled:border-neutral disabled:bg-white disabled:text-neutral ease-linear",

    tertiary:
        "text-graphite text-body-text lg:text-body-text-lg 2xl:text-body-text-2xl border-0 rounded-none relative disabled:bg-transparent disabled:text-neutral disabled:before:bg-neutral disabled:hover:before:scale-100 hover:text-subdued before:bg-graphite before:absolute before:w-full before:h-px before:left-0 before:scale-x-100 before:transition-transform before:duration-300 before:top-[calc(100%+2px)]   before:origin-top-left-0-2/4 hover:before:scale-x-0 hover:before:origin-top-left-full-2/4 hover:before:bg-subdued",
};
const sizeStyles = {
    default: "",
    small: "",
    medium: "",
    large: "",
};

export const QuickBuy = ({
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
}: QuickBuyProps) => {
    const buttonClass = disabled
        ? clsx(variantStyles[variants], sizeStyles[size])
        : clsx(variantStyles[variants], sizeStyles[size]);

    return (
        <div className="w-full bg-tertiary rounded py-[5px] 2xl:py-[0.361vw] text-center cursor-pointer">
            <button
                type={type}
                id={id}
                aria-label={ariaLabel}
                className={`${buttonClass} ${className} `}
                disabled={disabled}
                onClick={onClick}
                {...props}
            >
                <span>{label}</span>
            </button>
        </div>
    );
};
