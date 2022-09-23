import ButtonText from '../../components/buttons/ButtonText.vue';
import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Atoms/Buttons/Button Text',
  component: ButtonText,
} as Meta<typeof ButtonText>;

// Custom Template
const CustomTemplate: StoryFn<typeof ButtonText> = (args) => ({
  components: { ButtonText },
  setup() {
    return { args };
  },
  template: `<ButtonText v-bind="args" />`,
});

// Custom Button
export const Custom = CustomTemplate.bind({});
Custom.storyName = 'Button Text';
Custom.argTypes = {
  label: {
    description: 'Label for button',
    control: { type: 'text', required: true },
  },
  type: {
    description: 'Change type button',
    control: { type: 'select' },
    options: ['fill', 'outline', 'flat'],
  },
  size: {
    description: 'Change size',
    control: { type: 'select' },
    options: ['x-small', 'small', 'normal', 'large', 'x-large'],
  },
  color: {
    description: 'Change color theme',
    control: { type: 'select' },
    options: ['blue', 'teal', 'green', 'red', 'yellow'],
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
Custom.parameters = {
  docs: {
    description: {
      component: `
### Props Components

| Name       | Type     | List Value                                             | Default         |
|------------|----------|--------------------------------------------------------|-----------------|
| Label      | string   | text                                                   | Button          |
| Type       | string   | \`fill\` \`outline\` \`flat\`                          | \`fill\`        |
| Color      | string   | \`blue\` \`teal\` \`green\` \`red\` \`yellow\`         | \`teal\`        |
| Size       | string   | \`x-small\` \`small\` \`normal\` \`large\` \`x-large\` | \`normal\`      |
| Left Icon  | string   |                                                        | null            |
| Right Icon | string   |                                                        | null            |

### Emits Components

| Name      | Type     |
|-----------|----------|
| onClick   | click    |
      `,
    },
    source: {
      code: `
<ButtonText 
  label="Button"
  type="fill"
  color="teal"
  size="normal"
  leftIcon=null 
  rightIcon=null />
			`,
      language: 'html',
      type: 'auto',
    },
  },
};

// Static Template
const TypeTemplate: StoryFn<typeof ButtonText> = () => ({
  components: { ButtonText },
  template: `
<div style="display: flex; gap: 1rem;">
	<ButtonText type="fill" />
	<ButtonText type="outline" />
	<ButtonText type="flat" />
</div>
	`,
});

export const Type = TypeTemplate.bind({});
Type.storyName = 'Type Arguments';
Type.parameters = {
  docs: {
    description: {
      story: `
This example usage of Type Arguments. The value needed is \`fill\` \`outline\` \`flat\`
      `,
    },
    source: {
      code: `
<div>
  <ButtonText type="fill" />
  <ButtonText type="outline" />
  <ButtonText type="flat" />
</div>
			`,
      language: 'html',
      type: 'auto',
    },
  },
};

// Static Template
const ColorTemplate: StoryFn<typeof ButtonText> = () => ({
  components: { ButtonText },
  template: `
<div style="display: flex; gap: 1rem;">
	<ButtonText color="teal" />
	<ButtonText color="blue" />
	<ButtonText color="green" />
	<ButtonText color="red" />
	<ButtonText color="yellow" />
</div>
	`,
});

export const Color = ColorTemplate.bind({});
Color.storyName = 'Color Arguments';
Color.parameters = {
  docs: {
    description: {
      story: `
This example usage of Color Arguments. The value needed is \`blue\` \`teal\` \`green\` \`red\` \`yellow\` 
      `,
    },
    source: {
      code: `
<div>
  <ButtonText color="teal" />
  <ButtonText color="blue" />
  <ButtonText color="green" />
  <ButtonText color="red" />
  <ButtonText color="yellow" />
</div>
			`,
      language: 'html',
      type: 'auto',
    },
  },
};

// Static Template
const SizeTemplate: StoryFn<typeof ButtonText> = () => ({
  components: { ButtonText },
  template: `
<div style="display: flex; gap: 1rem; align-items: start;">
	<ButtonText size="x-small" />
	<ButtonText size="small" />
	<ButtonText size="normal" />
	<ButtonText size="large" />
	<ButtonText size="x-large" />
</div>
	`,
});

export const Size = SizeTemplate.bind({});
Size.storyName = 'Size Arguments';
Size.parameters = {
  docs: {
    description: {
      story: `
This example usage of Color Arguments. The value needed is \`x-small\` \`small\` \`normal\` \`large\` \`x-large\`
      `,
    },
    source: {
      code: `
<div>
  <ButtonText size="x-small" />
  <ButtonText size="small" />
  <ButtonText size="normal" />
  <ButtonText size="large" />
  <ButtonText size="x-large" />
</div>
			`,
      language: 'html',
      type: 'auto',
    },
  },
};

// Static Template
const IconTemplate: StoryFn<typeof ButtonText> = () => ({
  components: { ButtonText },
  template: `
<div style="display: flex; gap: 1rem; align-items: start;">
  <ButtonText />
	<ButtonText left-icon="bx bxs-bell"/>
	<ButtonText right-icon="bx bxs-bell"/>
	<ButtonText left-icon="bx bxs-bell" right-icon="bx bxs-bell"/>
</div>
	`,
});

export const Icon = IconTemplate.bind({});
Icon.storyName = 'Icon Arguments';
Icon.parameters = {
  docs: {
    description: {
      story: `
This example usage of Icon Arguments. The value needed is string based on <a href="https://boxicons.com/">Boxicons</a>
      `,
    },
    source: {
      code: `
<div>
  <ButtonText />
  <ButtonText left-icon="bx bxs-bell"/>
  <ButtonText right-icon="bx bxs-bell"/>
  <ButtonText left-icon="bx bxs-bell" right-icon="bx bxs-bell"/>
</div>
			`,
      language: 'html',
      type: 'auto',
    },
  },
};
