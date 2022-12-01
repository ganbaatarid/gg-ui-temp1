import React, { FC } from "react";

export interface Props {
  message: string;
  variant?: "success" | "warning" | "danger" | "info";
}

interface IButtonClass {
  name: string;
  style: string;
}

export const Alert: FC<Props> = ({ message, variant = "info" }) => {
  const styling: IButtonClass | undefined = buttonClasses.find((classes) => {
    return classes.name === variant;
  });
  return (
    <div className={` ${styling?.style}`} role="alert">
      <div className=" text-graphite text-caption 2xl:text-[0.833vw]">{` ${message} `}</div>
    </div>
  );
};

const buttonClasses: Array<IButtonClass> = [
  {
    name: "success",
    style: "bg-green p-10",
  },
  {
    name: "warning",
    style: "text-amber-700 bg-amber-50 border-amber-900/10",
  },
  {
    name: "danger",
    style: "text-red-700 border border-red-900/10 bg-red-50",
  },
  {
    name: "info",
    style: "text-sky-700 bg-sky-50 border-sky-900/10",
  },
];
