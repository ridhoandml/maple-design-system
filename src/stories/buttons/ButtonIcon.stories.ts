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
  onClick: {
    action: 'testClick',
  },
};

export default {
  title: 'Design System/Button/Button Icon',
  component: ButtonIcon,
  argTypes: argumentsType,
  parameters: {
    backgrounds: {
      values: [
        { name: 'white', value: '#ffffff' },
        { name: 'light', value: '#f5f5f5' },
        { name: 'dark', value: '#2a2a2a' },
      ],
    },
  },
} as Meta<typeof ButtonIcon>;

const Template: StoryFn<typeof ButtonIcon> = (args) => ({
  components: { ButtonIcon },
  setup() {
    return { args };
  },
  template: `<ButtonIcon v-bind="args"></ButtonIcon>`,
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

// Style Button
export const Blue = Template.bind({});
Blue.storyName = 'Style Blue';
Blue.args = { color: 'blue' };

export const Teal = Template.bind({});
Teal.storyName = 'Style Teal';
Teal.args = { color: 'teal' };

export const Green = Template.bind({});
Green.storyName = 'Style Green';
Green.args = { color: 'green' };

export const Red = Template.bind({});
Red.storyName = 'Style Red';
Red.args = { color: 'red' };

export const Yellow = Template.bind({});
Yellow.storyName = 'Style Yellow';
Yellow.args = { color: 'yellow' };

// Size Button
export const xSmall = Template.bind({});
xSmall.storyName = 'Size x-Small';
xSmall.args = { size: 'x-small' };

export const Small = Template.bind({});
Small.storyName = 'Size Small';
Small.args = { size: 'small' };

export const Normal = Template.bind({});
Normal.storyName = 'Size Normal';
Normal.args = { size: 'normal' };

export const Large = Template.bind({});
Large.storyName = 'Size Large';
Large.args = { size: 'large' };

export const xLarge = Template.bind({});
xLarge.storyName = 'Size x-large';
xLarge.args = { size: 'x-large' };
