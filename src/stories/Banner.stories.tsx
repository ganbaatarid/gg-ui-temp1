import React from "react";
import { Meta, Story } from "@storybook/react";
import { Banner, BannerProps } from "../components/Banner"
// import { Copyright, CopyrightProps } from "../components/Copyright";

const meta: Meta = {
    title: "Components/Bunners",
    component: Banner,
};
export default meta;

const Template: Story<BannerProps> = (args) => <Banner {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: `Holiday Sale Up to 70% off`,
};

export const MenuBanner = Template.bind({});
MenuBanner.args = {
    label: `F/W 2022 New Arrivals`,
};

export const CollectionBanner = Template.bind({});
CollectionBanner.args = {
    label: `Holiday Sale Up to 70% off`,
};
