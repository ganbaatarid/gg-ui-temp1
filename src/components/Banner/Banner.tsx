import React, { FC } from "react";
import { Button } from "../Button";

export interface BannerProps {
    label: string;
    href: string;
    imageUrl: string;
}

export const Banner: FC<BannerProps> = ({
    label,
    imageUrl
}) => {

    return (
        <div className="relative z-0">
            <div className="relative before:left-0 before:right-0 before:bottom-0 before:top-[100px] before:absolute before:z-10 bg-graphite">
                <img
                    className="w-[344px] h-[492px]"
                    src={imageUrl}
                ></img>
            </div>
            <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 flex items-center flex-col justify-center z-20 w-full">
                <h4 className="mb-20 lg:mb-20 2xl:mb-20-2xl text-center text-white px-10 lg:px-20 2xl:px-20-2xl whitespace-normal">
                    {label}
                </h4>
                <Button variants="tertiary" color="white" label="Shop Now" onClick={() => { }} />
            </div>
        </div>
    );
};
export default Banner;
