import ButtonIcon from '../../components/buttons/ButtonIcon.vue';
import type { ArgTypes, Args, Meta, StoryFn } from '@storybook/vue3';

const argumentsType: Partial<ArgTypes<Args>> = {
  icon: {
    description: 'Add icon button',
    control: 'text',
  },
  type: {
    description: 'Change type button',
    control: { type: 'select' },
    options: ['fill', 'outline', 'flat'],
    defaultValue: 'fill',
  },
  size: {
    description: 'Change size',
    control: { type: 'select' },
    options: ['x-small', 'small', 'normal', 'large', 'x-large'],
    defaultValue: 'normal',
  },
  color: {
    description: 'Change color theme',
    control: { type: 'select' },
    options: ['blue', 'teal', 'green', 'red', 'yellow'],
    defaultValue: 'blue',
  },
};

export default {
  title: 'Design System/Button/Button Icon',
  component: ButtonIcon,
  argTypes: argumentsType,
} as Meta<typeof ButtonIcon>;

const Template: StoryFn<typeof ButtonIcon> = (args) => ({
  components: { ButtonIcon },
  setup() {
    return { args };
  },
  template: `<ButtonIcon v-bind="args"></ButtonIcon>`,
});

// Type Button
export const Teal = Template.bind({});
Teal.storyName = 'Type Fill';
Teal.args = { icon: '', type: 'fill' };

export const Blue = Template.bind({});
Blue.storyName = 'Type Outline';
Blue.args = { icon: '', type: 'outline' };

export const Green = Template.bind({});
Green.storyName = 'Type Flat';
Green.args = { icon: '', type: 'flat' };
