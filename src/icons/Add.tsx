import React, { FC } from "react";

export interface AddProps {
  style: string;
}
export const Add: FC<AddProps> = ({
  style
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
      <path d="M0 7H14" stroke={`${style}`} />
      <path d="M7 0V14" stroke="#1A1817" />
    </svg>
  );
};

export default Add;
