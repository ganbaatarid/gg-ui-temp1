import React from "react";
import { Meta, Story } from "@storybook/react";
import { Tag, TagProps } from "./index";

const meta: Meta = {
  title: "Components/Tag",
  component: Tag,
};
export default meta;

const Template: Story<TagProps> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "-30%",
  variant: "sale",
};
export const Sale = Template.bind({});
Sale.args = {
  label: "-30%",
  variant: "sale",
};

export const SoldOut = Template.bind({});
SoldOut.args = {
  label: "Sold Out",
  variant: "soldout",
};
