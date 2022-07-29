import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './index';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    label: {
      defaultValue: 'Example',
    },
  },
} as ComponentMeta<typeof Button>;

export const Example: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);
