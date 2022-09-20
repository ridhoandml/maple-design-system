import ButtonText from '../../components/buttons/ButtonText.vue';
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
Fill.args = { label: 'Button', type: 'fill' };

export const Outline = Template.bind({});
Outline.storyName = 'Type Outline';
Outline.args = { labe: 'Button', type: 'outline' };

export const Flat = Template.bind({});
Flat.storyName = 'Type Flat';
Flat.args = { label: 'Button', type: 'flat' };
