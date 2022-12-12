import type { FunctionComponent, ComponentProps } from 'react';
import React from 'react';
import { styled } from '@storybook/theming';
import { icons } from './icons';

const Svg = styled.svg`

`;

export interface IconsProps extends ComponentProps<typeof Svg> {
  icon: IconType;
}

export const Icons: FunctionComponent<IconsProps> = ({ icon, ...props }: IconsProps) => {
  return (
    <Svg viewBox="0 0 24 24" width="" height="" {...props}>
      {icons[icon]}
    </Svg>
  );
};

export type IconType = keyof typeof icons;


