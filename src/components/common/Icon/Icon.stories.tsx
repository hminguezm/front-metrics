import Icon from './Icon';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

export const Example: ComponentStory<typeof Icon> = (args) => (
  <Icon {...args} />
);
