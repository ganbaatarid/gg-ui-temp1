import React from "react";
import { Meta, Story } from "@storybook/react";
import { Alert, Props } from "../components/Alert";

const meta: Meta = {
  title: "Components/Alert",
  component: Alert,
};
export default meta;

const Template: Story<Props> = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Form-Level Message!",
  variant: "primary",
};

export const tt = Template.bind({});
tt.args = {
  label: "Form Validation!",
  variant: "primary",
};
