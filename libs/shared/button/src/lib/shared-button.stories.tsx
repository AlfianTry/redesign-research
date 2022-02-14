import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SharedButton } from './shared-button';

export default {
  component: SharedButton,
  title: 'SharedButton',
} as ComponentMeta<typeof SharedButton>;

const Template: ComponentStory<typeof SharedButton> = (args) => (
  <SharedButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'Penjualan',
};
