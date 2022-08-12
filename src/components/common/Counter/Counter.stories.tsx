import { ComponentMeta, ComponentStory } from '@storybook/react';
import Counter from './index';

export default {
  title: 'Counter',
  component: Counter,
  argTypes: {
    handleOnValue: {
      defaultValue: () => {},
    },
  },
} as ComponentMeta<typeof Counter>;

export const Example: ComponentStory<typeof Counter> = (args) => (
  <Counter {...args} />
);
