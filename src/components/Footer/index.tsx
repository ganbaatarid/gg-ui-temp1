import React, { FC } from "react";
import Copyright from "../Copyright";

export interface FooterProps {
    width: string;
}

export const Footer: FC<FooterProps> = () => {
    return (
        <footer className=" bg-warmTone-4 py-40 lg:py-40 2xl:py-40-2xl w-full">
            <div className="tw-container">
                <div className="flex flex-col-reverse lg:flex-row mb-60 lg:mb-20 2xl:mb-20-2xl space-x-0 lg:space-x-40">

                </div>
                <div className="flex flex-col-reverse lg:flex-row items-start lg:items-center space-x-0 lg:space-x-40 2xl:space-x-40-2xl">
                    <Copyright label="Gobi Cashmere. All rights reserved" />
                    {/* <Copyright label={`${getTranslate(`footer_copyright_text`)}`} /> */}
                    <div className="hidden lg:block bg-footerTxt w-px h-[17px] lg:h-[17px] 2xl:h-[1.181vw]"></div>
                    {/* <FooterFootMenu /> */}
                </div>
            </div>

        </footer>
    );
};
export default Footer;
