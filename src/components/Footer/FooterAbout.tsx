import React, { FC } from "react";
import { Button } from "../Button/Button";

interface FooterAboutProps {
  className?: string;
  title: string;
  description: string;
  btnLabel: string;
}
const FooterAbout: FC<FooterAboutProps> = ({
  className,
  title,
  description,
  btnLabel = "Learn More",
}) => {
  return (
    <div
      className={`${className} mr-auto lg:max-w-[29.653vw] 2xl:max-w-[29.653vw]`}
    >
      <div className="text-[0.9rem] font-normal capitalize leading-[140%] text-[#3C3C3C] 2xl:text-[0.833vw] mb-20 lg:mb-20 2xl:mb-20-2xl">
        {title}
      </div>
      <div className="text-[0.875rem]  font-normal not-italic leading-[140%] text-graphite md:text-[1.823vw] lg:text-[1rem] 2xl:text-[1.111vw]">
        {description}
      </div>
      <Button variants="tertiary" label={btnLabel} />
    </div>
  );
};

export default FooterAbout;
