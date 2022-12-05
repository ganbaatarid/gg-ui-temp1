import React from "react";
import { Meta, Story } from "@storybook/react";
import { Add, AddProps } from "../icons/Add";


const meta: Meta = {
    title: "Icons/Add",
    component: Add,
}
export default meta;

const Template: Story<AddProps> = (args) => <Add {...args} />;

export const Default = Template.bind({});
Default.args = {
    style: "#1A1817"
}