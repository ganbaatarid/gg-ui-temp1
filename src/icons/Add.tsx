import React, { FC } from "react";

export interface AddProps {
  stroke: string;
}
export const Add: FC<AddProps> = ({
  stroke
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 14 14"
      fill="none"
      role="img"
      aria-labelledby="addIcon"
    >
      <path d="M0 7H14" stroke={`${stroke}`} />
      <path d="M7 0V14" stroke={`${stroke}`} />
    </svg>
  );
};

export default Add;
