import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Traceable } from "./Traceable";

export default {
  title: "Components/Traceable",
  component: Traceable,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Traceable>;

const Template: ComponentStory<typeof Traceable> = (args) => (
  <Traceable {...args} />
);

export const Default = Template.bind({});

Default.args = {
  valueProp: {
    title: "Take comfort in traceable affordable exquisite quality",
    description:
      "Our standards for our cashmere are as high as they come with a focus on accessibility responsibility and traceability.",
    imageUrl: [
      {
        imgTitle: "Affordable luxury",
        image:
          "https://cdn.shopify.com/s/files/1/1953/2845/files/3_735b01dd-0491-454e-ba6f-fe8911e3c162.jpg?v=1656921728",
      },
      {
        imgTitle: "Premium quality",
        image:
          "https://cdn.shopify.com/s/files/1/1953/2845/files/2_59150542-9a86-4d8c-b83d-f329a89a6b27.jpg?v=1656921728",
      },
      {
        imgTitle: "Locally Made in Mongolia",
        image:
          "https://cdn.shopify.com/s/files/1/1953/2845/files/1_5d59caf1-c96e-450c-be63-a3e6ef068344.jpg?v=1656921714",
      },
    ],
  },
};
