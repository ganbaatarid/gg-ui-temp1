import React, { FC } from "react";

export interface TagProps {
  label: string;
  variant?: "sale" | "soldout";
  size?: "small" | "normal" | "large";
  color: string;
  onClick?: () => void;
}

interface IButtonClass {
  name: string;
  style: string;
  size: string;
}

export const Tag: FC<TagProps> = ({
  label,
  variant = "sale",
  size,
  onClick,
}) => {
  const styling: IButtonClass | undefined = buttonClasses.find((classes) => {
    return classes.name === variant;
  });

  return (
    <button
      className={`py-10 2xl:py-[0.694vw] px-[15px] 2xl:px-[1.042vw] text-graphite-500 text-[14px] 2xl:text-[0.972vw] leading-[15.4px] 2xl:leading-[1.069vw] uppercase text-center rounded-[3px] 2xl:rounded-[0.208vw] block w-full ${styling?.style} ${size}`}
      onClick={onClick}
      aria-label="Button"
      type="button"
    >
      {label}
    </button>
  );
};
export default Tag;

const buttonClasses: Array<IButtonClass> = [
  {
    name: "sale",
    style: "bg-quaternary",
    size: "small",
  },
  {
    name: "soldout",
    style: "bg-white",
    size: "",
  },
];
