import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { QuickBuy } from "./QuickBuy";

export default {
    title: "Components/QuickBuy",
    component: QuickBuy,
} as ComponentMeta<typeof QuickBuy>;


const Template: ComponentStory<typeof QuickBuy> = (args) => <QuickBuy {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    type: "button",
    label: "Add To Bag",
    variants: "primary",
};

