import React from "react";
import { Meta, Story } from "@storybook/react";
import { NotFound, NotFoundProps } from "./NotFound";

const meta: Meta = {
    title: "Components/NotFound",
    component: NotFound,
};
export default meta;

const Template: Story<NotFoundProps> = (args) => <NotFound {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: `Boxing Day Sale Up to 70% off`,
    href: `/collections/sale/`,
    imageUrl: 'https://cdn.shopify.com/s/files/1/0282/0718/5965/files/banner-1_c495ca86-af3a-4a47-a205-88ecbd58b3f7.jpg?v=1669706894'
};

