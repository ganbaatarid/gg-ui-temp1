import React, { FC } from "react";

export interface BannerProps {
  label: string;
  href: string;
  img: string;
}

export const Banner: FC<BannerProps> = ({ label }) => {
  return (
    <div className="relative z-0">
      <div className="relative before:left-0 before:right-0 before:bottom-0 before:top-[100px] before:absolute before:z-10 bg-graphite">
        <img
          className="w-[344px] h-[492px]"
          src="https://cdn.shopify.com/s/files/1/0282/0718/5965/files/4_b3321708-6344-4579-9c68-531edfd94d53.jpg?v=1664779197"
        ></img>
      </div>
      <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 flex items-center flex-col justify-center z-20 w-[194px]">
        <h4 className="mb-20 lg:mb-20 2xl:mb-20-2xl text-center text-white px-10 lg:px-20 2xl:px-[1.389vw] whitespace-normal">
          {label}
        </h4>
      </div>
    </div>
  );
};
export default Banner;
