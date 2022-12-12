import React from "react";
import { Meta, Story } from "@storybook/react";
import { CartFooter, CartFooterProps } from "./CartFooter";

const meta: Meta = {
  title: "Cart/footer",
  component: CartFooter,
};
export default meta;

const Template: Story<CartFooterProps> = (args) => <CartFooter {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: "",
};
