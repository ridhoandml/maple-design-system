import ButtonText from '../components/buttons/ButtonText.vue';
import type { ArgTypes, Args, Meta, StoryFn } from '@storybook/vue3';

const argumentsType: Partial<ArgTypes<Args>> = {
  label: {
    description: 'Label for button',
    control: { type: 'text', required: true },
    defaultValue: 'Button',
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
  leftIcon: {
    description: 'Add icon on left side',
    control: 'text',
  },
  rightIcon: {
    description: 'Add icon on right side',
    control: 'text',
  },
};

export default {
  title: 'Design System/Button/Button Text',
  component: ButtonText,
  argTypes: argumentsType,
} as Meta<typeof ButtonText>;

const Template: StoryFn<typeof ButtonText> = (args) => ({
  components: { ButtonText },
  setup() {
    return { args };
  },
  template: `<ButtonText v-bind="args"></ButtonText>`,
});

// Type Button
export const Fill = Template.bind({});
Fill.storyName = 'Type Fill';
Fill.args = { type: 'fill' };

export const Outline = Template.bind({});
Outline.storyName = 'Type Outline';
Outline.args = { type: 'outline' };

export const Flat = Template.bind({});
Flat.storyName = 'Type Flat';
Flat.args = { type: 'flat' };

// Color Button
export const Blue = Template.bind({});
Blue.storyName = 'Color Blue';
Blue.args = { color: 'blue' };

export const Teal = Template.bind({});
Teal.storyName = 'Color Teal';
Teal.args = { color: 'teal' };

export const Green = Template.bind({});
Green.storyName = 'Color Green';
Green.args = { color: 'green' };

export const Red = Template.bind({});
Red.storyName = 'Color Red';
Red.args = { color: 'red' };

export const Yellow = Template.bind({});
Yellow.storyName = 'Color Yellow';
Yellow.args = { color: 'yellow' };
