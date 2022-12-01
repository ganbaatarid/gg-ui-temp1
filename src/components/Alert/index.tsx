import React, { FC } from "react";

export interface Props {
  label: string;
  variant?: "success" | "warning" | "danger" | "info";
  width?: "g-fit" | "g-full";
}

interface IButtonClass {
  name: string;
  style: string;
  width: string;
}

export const Alert: FC<Props> = ({
  label,
  variant = "success",
  width = "g-fit"
}) => {
  const styling: IButtonClass | undefined = buttonClasses.find((classes) => {
    return classes.name === variant;
  });

  return (
    <div className={`py-[5px] 2xl:py-[0.347vw] px-2 2xl:px-[0.556vw] rounded 2xl:rounded-[0.278vw] ${styling?.style} ${width}`} role="alert">
      <div className="text-caption 2xl:text-[0.833vw]">{`${label}`}</div>
    </div>
  );
};

const buttonClasses: Array<IButtonClass> = [
  {
    name: "success",
    style: "text-graphite bg-green",
    width: "g-fit",
  },
  {
    name: "warning",
    style: "text-amber-700 bg-amber-50 border-amber-900/10",
    width: "w-full",
  },
  {
    name: "danger",
    style: "text-red-700 border border-red-900/10 bg-red-50",
    width: "w-full",
  },
  {
    name: "info",
    style: "text-sky-700 bg-sky-50 border-sky-900/10",
    width: "w-full",
  },
];
