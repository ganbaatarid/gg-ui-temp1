import React, { FC } from "react";

export interface ProgressBarProps {
    width: string;
}

export const ProgressBar: FC<ProgressBarProps> = ({ width = 400 }) => {
    return (
        <div className={`relative bg-secondary h-[5px] max-w-full p-[1px] rounded-[10px] overflow-hidden 2xl:rounded-[0.694vw] 2xl:h-[0.347vw] 2xl:p-[0.069vw] w-[500px]`}>
            <div
                className={`bg-quaternary h-[3px] rounded-[10px] 2xl:h-[0.208vw] 2xl:rounded-[0.694vw] max-w-full w-[${width}]`}
            >
                {" "}
            </div>
        </div>
    );
};
export default ProgressBar;
