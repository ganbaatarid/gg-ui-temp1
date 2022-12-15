import React from "react";
import { Meta, Story } from "@storybook/react";
import { Footer, FooterProps } from "./index";

const meta: Meta = {
  title: "Footer/footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  }
};
export default meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: "",
  title: "About Us",
  description: 'Great cashmere should be comfortable responsibly made, humane and in your budget—and at GOBI Cashmere we’ve proven that it can since 1981.'
};
export const Primary = Template.bind({});
Primary.args = {
  className: "",
  description: 'df.'
};
