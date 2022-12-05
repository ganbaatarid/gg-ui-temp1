import React, { FC } from "react";

export interface Props {
  label: string;
  variant?: "primary" | "secondary";
  size?: "small" | "medium"
}

interface IButtonClass {
  name: string;
  style: string;
  widths: string;
}

export const Alert: FC<Props> = ({
  label,
  variant = "primary",
  size = "small"
}) => {


  const widthStyle: IButtonClass | undefined = buttonClasses.find((classes) => {
    return classes.widths === size;
  });

  return (
    <div
      className={`py-[5px] 2xl:py-[0.347vw] px-2 2xl:px-[0.556vw] rounded 2xl:rounded-[0.278vw] ${variant} ${widthStyle?.style}`}
      role="alert"
    >
      <div className="text-caption 2xl:text-[0.833vw]">{`${label}`}</div>
    </div>
  );
};

const buttonClasses: Array<IButtonClass> = [
  {
    name: "primary",
    style: "text-graphite bg-green w-fit",
    widths: 'small'
  },
  {
    name: "secondary",
    style: "text-graphite bg-red",
    widths: ''
  },
];
