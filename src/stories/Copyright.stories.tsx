import React from "react";
import { Meta, Story } from "@storybook/react";
import { Copyright, CopyrightProps } from "../components/Copyright";
// import { Copyright, CopyrightProps } from "../components/Copyright";

const meta: Meta = {
  title: "Components/Copyright",
  component: Copyright,
};
export default meta;

const Template: Story<CopyrightProps> = (args) => <Copyright {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Gobi Cashmere. All rights reserved",
};
