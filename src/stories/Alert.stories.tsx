import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Alert, Props } from '../components/Alert';

const meta: Meta = {
    title: 'Components/Alert',
    component: Alert,
};

export default meta;

const Template: Story<Props> = args => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {
    message: 'Hi, how are you?',
    variant: 'info',
};
