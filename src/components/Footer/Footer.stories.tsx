import React from "react";
import { Meta, Story } from "@storybook/react";
import { Footer, FooterProps } from "./index";


const meta: Meta = {
    title: "Footer/footer",
    component: Footer,
};
export default meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
    className: "",
};
