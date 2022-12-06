import React, { FC } from "react";

export interface CopyrightProps {
  label: string;
}

export const Copyright: FC<CopyrightProps> = ({ label }) => {
  return (
    <div className="text-[1rem] md:text-[1.563vw] lg:text-[0.95rem] 2xl:text-[0.9vw] text-footerTxt mt-[0.625rem] lg:mt-0">
      {" "}
      © {new Date().getFullYear()} {label}
    </div>
  );
};
export default Copyright;
