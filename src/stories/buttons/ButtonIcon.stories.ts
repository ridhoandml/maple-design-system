import ButtonIcon from '../../components/buttons/ButtonIcon.vue';
import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Atoms/Buttons/Button Icon',
  component: ButtonIcon,
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

// Custom Template
const CustomTemplate: StoryFn<typeof ButtonIcon> = (args) => ({
  components: { ButtonIcon },
  setup() {
    return { args };
  },
  template: `<ButtonIcon v-bind="args" />`,
});

// Custom Button
export const Custom = CustomTemplate.bind({});
Custom.storyName = 'Button Icon';
Custom.argTypes = {
  icon: {
    description: 'Add icon button',
    control: 'text',
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
  shape: {
    description: 'Change shape button',
    control: { type: 'select' },
    options: ['rectangle', 'round'],
  },
  onClick: {
    description: 'When button clicked',
    action: 'testClick',
  },
};
Custom.parameters = {
  docs: {
    description: {
      component: `
### Props Components

| Name      | Type     | List Value                                             | Default         |
|-----------|----------|--------------------------------------------------------|-----------------|
| Type      | string   | \`fill\` \`outline\` \`flat\`                          | \`fill\`        |
| Color     | string   | \`blue\` \`teal\` \`green\` \`red\` \`yellow\`         | \`teal\`        |
| Size      | string   | \`x-small\` \`small\` \`normal\` \`large\` \`x-large\` | \`normal\`      |
| Shape     | string   | \`rectangle\` \`round\`                                | \`rectangle\`   |
| Icon      | string   |                                                        | \`bx bxs-bell\` |

### Emits Components

| Name      | Type     |
|-----------|----------|
| onClick   | click    |
      `,
    },
    source: {
      code: `
<ButtonIcon 
  type="fill"
  color="teal"
  size="normal"
  icon=null />
			`,
      language: 'html',
      type: 'auto',
    },
  },
};

// Static Template
const TypeTemplate: StoryFn<typeof ButtonIcon> = () => ({
  components: { ButtonIcon },
  template: `
<div style="display: flex; gap: 1rem;">
	<ButtonIcon type="fill" />
	<ButtonIcon type="outline" />
	<ButtonIcon type="flat" />
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
  <ButtonIcon type="fill" />
  <ButtonIcon type="outline" />
  <ButtonIcon type="flat" />
</div>
			`,
      language: 'html',
      type: 'auto',
    },
  },
};

// Static Template
const ColorTemplate: StoryFn<typeof ButtonIcon> = () => ({
  components: { ButtonIcon },
  template: `
<div style="display: flex; gap: 1rem;">
	<ButtonIcon color="teal" />
	<ButtonIcon color="blue" />
	<ButtonIcon color="green" />
	<ButtonIcon color="red" />
	<ButtonIcon color="yellow" />
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
  <ButtonIcon color="teal" />
  <ButtonIcon color="blue" />
  <ButtonIcon color="green" />
  <ButtonIcon color="red" />
  <ButtonIcon color="yellow" />
</div>
			`,
      language: 'html',
      type: 'auto',
    },
  },
};

// Static Template
const SizeTemplate: StoryFn<typeof ButtonIcon> = () => ({
  components: { ButtonIcon },
  template: `
<div style="display: flex; gap: 1rem; align-items: start;">
	<ButtonIcon size="x-small" />
	<ButtonIcon size="small" />
	<ButtonIcon size="normal" />
	<ButtonIcon size="large" />
	<ButtonIcon size="x-large" />
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
  <ButtonIcon size="x-small" />
  <ButtonIcon size="small" />
  <ButtonIcon size="normal" />
  <ButtonIcon size="large" />
  <ButtonIcon size="x-large" />
</div>
			`,
      language: 'html',
      type: 'auto',
    },
  },
};

// Static Template
const ShapeTemplate: StoryFn<typeof ButtonIcon> = () => ({
  components: { ButtonIcon },
  template: `
<div style="display: flex; gap: 1rem; align-items: start;">
	<ButtonIcon shape="rectangle" />
	<ButtonIcon shape="round" />
</div>
	`,
});

export const Shape = ShapeTemplate.bind({});
Shape.storyName = 'Shape Arguments';
Shape.parameters = {
  docs: {
    description: {
      story: `
This example usage of Shape Arguments. The value needed is \`rectangle\` \`round\`
      `,
    },
    source: {
      code: `
<div>
	<ButtonIcon shape="rectangle" />
	<ButtonIcon shape="round" />
</div>
			`,
      language: 'html',
      type: 'auto',
    },
  },
};
