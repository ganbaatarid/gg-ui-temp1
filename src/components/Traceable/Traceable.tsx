import React, { FC } from "react";
import { Button } from "../Button";

export interface Props {
  valueProp: TraceableProps;
}

export interface TraceableProps {
  className: string;
  title: string;
  description: string;
  learnMore: string;
  imageUrl: Array<string>;
}
export const Traceable: FC<Props> = ({ valueProp }) => {
  const { title, description } = valueProp;
  return (
    <div className="bg-warmTone-3 lg:pt-[7.5rem] 2xl:pt-[8.333vw] lg:pb-[5rem] 2xl:pb-[5.556vw]">
      <div className="lg:pb-[2.5rem] 2xl:pb-[2.778vw]">
        <div className="grid grid-cols-1 lg:grid-cols-4">
          <div className="tw-container relative pb-[2.5rem] md:pb-[5.208vw] lg:pb-[2.5rem] 2xl:pb-[2.778vw] pt-[2.5rem] lg:pt-0">
            <h4 className="mb-10-10 lg:max-w-[280px] 2xl:max-w-[16.667vw]">
              {title}
            </h4>
            <div className="lg:absolute lg:bottom-[2px] 2xl:bottom-[0.208vw]">
              <p className="text-12-14 mb-10-10 lg:max-w-[280px] 2xl:max-w-[16.667vw] lg:hidden value-prop:block lg:pr-[2.5rem] 2xl:pr-[2.778vw]">
                {description}
              </p>
              <Button variants="tertiary" label="Learn More" />
            </div>
          </div>

          {valueProp.imageUrl &&
            valueProp.imageUrl.length > 0 &&
            valueProp.imageUrl.map((item: any, index) => (
              <div className="overflow-hidden" key={index}>
                <img className="w-full" src={item.image} alt={item.imgTitle} />
                <h5 className="mt-10 md:mt-10-md lg:mt-10 2xl:mt-10-2xl pb-40 md:pb-40-md lg:pb-40 2xl:pb-40-2xl px-[1.25rem] md:px-[2.604vw] lg:px-0">
                  {item.imgTitle}
                </h5>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Traceable;
