import type { ComponentProps } from "react";
import React from "react";
import { styled, css } from "@storybook/theming";

import { Icons } from "./icon";
import type { IconKey } from "./icons";
import { icons } from "./icons";

const Meta = styled.div`
  color: #666;
  font-size: 12px;
`;

const Item = styled.li<{ minimal?: boolean }>`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  flex: 0 1 16%;
  min-width: 120px;
  margin: 16px;
  svg {
    margin-right: 6px;
    width: 14px;
    height: 14px;
  }
  ${(props) =>
    props.minimal &&
    css`
      flex: none;
      min-width: auto;
      padding: 0;
      margin: 16px;
      svg {
        display: block;
        margin-right: 0;
        width: 14px;
        height: 14px;
      }
    `};
`;

export default {
  component: Icons,
  argTypes: {
    color: { control: "color" },
  },
};

export const Basic = (args: ComponentProps<typeof Icons>) => (
  <Icons {...args} />
);
Basic.args = { icon: "search" };

export const Labels = (args: ComponentProps<typeof Icons>) => (
  <>
    <div className="text-2xl text-primary">
      {" "}
      {Object.keys(icons).length} icons
    </div>
    <div className="grid grid-cols-6 gap-9">
      {Object.keys(icons).map((key) => (
        <div
          className="flex flex-col items-center justify-center space-y-4"
          key={key}
        >
          <Icons icon={key as IconKey} aria-hidden {...args} />
          <div>{key}</div>
        </div>
      ))}
    </div>
  </>
);
