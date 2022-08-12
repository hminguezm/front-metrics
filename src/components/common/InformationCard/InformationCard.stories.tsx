import { ComponentMeta, ComponentStory } from '@storybook/react';
import InformationCard from './index';

export default {
  title: 'Information Card',
  component: InformationCard,
  argTypes: {
    title: {
      defaultValue: 'Information Card',
    },
    details: {
      defaultValue: 'Content example',
    },
  },
} as ComponentMeta<typeof InformationCard>;

export const Example: ComponentStory<typeof InformationCard> = (args) => (
  <InformationCard {...args} />
);
