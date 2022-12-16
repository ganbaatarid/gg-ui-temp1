import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Size } from "./Size";

export default {
  title: "Components/Button",
  component: Size,
} as ComponentMeta<typeof Size>;

const Template: ComponentStory<typeof Size> = (args) => <Size {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  type: "button",
  label: "XL",
  variants: "primary",
};
