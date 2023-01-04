import React from "react";
import Background404 from "../../icons/Background404";
// import dynamic from "next/dynamic";
// import Link from "next/link";

/* A way to import a component that is not used in the main page. */
// const Button = dynamic(() => import("./Button"));
// const Background404 = dynamic(() => import("@components/Icons/Background404"));
// const Goat404 = dynamic(() => import("@components/Icons/Goat404"));

export interface NotFoundProps {
    title?: string;
    label?: string;
    handle?: string;
}
export const NotFound: React.FC<NotFoundProps> = ({
    title = "",

}) => {
    return (
        <div className="relative w-full h-screen flex flex-col justify-center items-center px-20 md:px-0 -mt-[6rem] md:-mt-[5vw] lg:-mt-[6rem] 2xl:-mt-[6.667vw]">
            <div className="relative z-10 flex flex-col justify-center items-center gap-[5rem] md:gap-[10.417vw] lg:gap-[5rem] 2xl:gap-[5.556vw] bg-transparent ">
                <div className="">
                    <div className="flex flex-row items-center justify-center gap-10 md:gap-10-md lg:gap-10 2xl:gap-10-2xl">
                        <h1 className="text-graphite flex items-center">
                            4
                            <span className="h-[3.541rem] w-[2.985rem] md:h-[7.378vw] md:w-[6.219vw] lg:h-[6rem] lg:w-[5.125rem] 2xl:h-[6.667vw] 2xl:w-[5.694vw]">
                                {/* <Goat404 /> */}
                            </span>
                            4
                        </h1>
                    </div>
                    <h4 className="text-graphite text-center ">{title}</h4>
                </div>
                <div className="cursor-pointer">
                    {/* <Link href={`${handle}`} passHref>
                        <Button variants="primary" label={`${label}`} />
                    </Link> */}
                </div>
            </div>
            <div className="absolute overflow-hidden w-full h-full -z-1 ">
                <div className="lg:w-full 2xl:w-full lg:h-[22.063rem] 2xl:h-[24.514vw] absolute bottom-0 lg:px-[6.438rem] 2xl:px-[7.153vw] flex items-end justify-center mx-auto -right-[100%] -left-[100%] md:-right-[20%] md:-left-[20%] lg:left-0 lg:right-0">
                    <Background404 />
                </div>
            </div>
        </div>
    );
};

export default NotFound;
