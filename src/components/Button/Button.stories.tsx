import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  type: "button",
  label: "Button Text",
  variants: "primary",

};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "button",
  label: "Button Text",
  variants: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  type: "button",
  label: "Button Text",
  variants: "tertiary",
};
