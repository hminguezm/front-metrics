import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from './Input';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    type: {
      defaultValue: 'text',
    },
    label: {
      defaultValue: 'label',
    },
    maxLength: {
      defaultValue: 16,
    },
    placeHolder: {
      defaultValue: 'placeholder',
    },
  },
} as ComponentMeta<typeof Input>;

export const Example: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
);
