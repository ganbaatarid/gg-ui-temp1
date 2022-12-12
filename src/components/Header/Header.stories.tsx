import React from "react";
import { Meta, Story } from "@storybook/react";
import { Header, HeaderProps } from "./index";


const meta: Meta = {
    title: "Header/header",
    component: Header,
};
export default meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
    className: "",
};
