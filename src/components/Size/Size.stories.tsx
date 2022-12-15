import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Size } from "./Size";

export default {
    title: "Components/Size",
    component: Size,
} as ComponentMeta<typeof Size>;


const Template: ComponentStory<typeof Size> = (args) => <Size {...args} />;

export const Default = Template.bind({});

Default.args = {
    type: "button",
    label: "XL",
    variants: "primary",
};

