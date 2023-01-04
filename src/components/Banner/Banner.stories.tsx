import React from "react";
import { Meta, Story } from "@storybook/react";
import { Banner, BannerProps } from "./Banner";

const meta: Meta = {
  title: "Components/Bunners",
  component: Banner,
};
export default meta;

const Template: Story<BannerProps> = (args) => <Banner {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: `Boxing Day Sale Up to 70% off`,
  href: `/collections/sale/`,
  imageUrl: 'https://cdn.shopify.com/s/files/1/0282/0718/5965/files/banner-1_c495ca86-af3a-4a47-a205-88ecbd58b3f7.jpg?v=1669706894'
};

export const MenuBanner = Template.bind({});
MenuBanner.args = {
  label: `F/W 2022 New Arrivals`,
  href: `/collections/sale/`,
  imageUrl: 'https://cdn.shopify.com/s/files/1/0282/0718/5965/files/banner-1_c495ca86-af3a-4a47-a205-88ecbd58b3f7.jpg?v=1669706894'
};

export const CollectionBanner = Template.bind({});
CollectionBanner.args = {
  label: `Holiday Sale Up to 70% off`,
  href: `/collections/sale/`,
  imageUrl: 'https://cdn.shopify.com/s/files/1/0282/0718/5965/files/banner-3_4219239f-8c75-493e-8284-87e7f733819a.jpg?v=1669706895'
};
