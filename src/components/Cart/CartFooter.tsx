import React, { FC } from "react";
import { Button } from "../../components/Button/index";

export interface CartFooterProps {
  label?: string;
  totalPrice?: string;
}

export const CartFooter: FC<CartFooterProps> = ({
  label = "Subtotal",
  totalPrice = "€ 160.30",
}) => {
  return (
    <div className="absolute bottom-0 bg-primary p-20 w-full md:p-20-md lg:px-40 lg:py-20 2xl:px-40-2xl 2xl:py-20-2xl space-y-[14px] md:space-y-[1.823vw] lg:space-y-[14px] 2xl:space-y-[0.972vw]">
      <div className="flex justify-between items-center">
        <div className="text-body-large-lg md:text-body-large-md lg:text-body-large-lg 2xl:text-body-large-16-2xl">
          {label}
        </div>
        <div className="text-body-large-lg md:text-body-large-md lg:text-body-large-lg 2xl:text-body-large-16-2xl">
          {totalPrice}
        </div>
      </div>
      <Button className="w-full" variants="primary" label="Checkout" />
      <div className="text-caption md:text-caption-md lg:text-caption text-subdued text-center 2xl:text-caption-2xl">
        By selecting ‘Checkout’ you are agreeing to our
      </div>
    </div>
  );
};
export default CartFooter;
