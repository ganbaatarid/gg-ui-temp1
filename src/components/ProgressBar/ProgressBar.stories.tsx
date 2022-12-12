import React from "react";
import { Meta, Story } from "@storybook/react";
import { ProgressBar, ProgressBarProps } from "./index";


const meta: Meta = {
    title: "Components/progressbar",
    component: ProgressBar,
};
export default meta;

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
    className: "",
};
