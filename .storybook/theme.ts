import { create } from '@storybook/theming';

const white = '#FFFFFF';
const blueLighted = '#394358';
const blue = '#293347';
const blueDarked = '#232531';
const coral = '#8FDEF1';
const border = 'rgba(255,255,255,0.2)';
const transparent = '#ffffff00';

export const dark = create({
  base: 'dark',

  colorPrimary: blueDarked,
  colorSecondary: coral,

  // UI
  appBg: blueDarked,
  appContentBg: blueLighted,
  appBorderColor: border,
  appBorderRadius: 4,

  // Typography
  fontBase: '"Plus Jakarta Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: white,
  textInverseColor: white,

  // Toolbar default and active colors
  barTextColor: white,
  barSelectedColor: coral,
  barBg: blue,

  // Form colors
  inputBg: blue,
  inputBorder: transparent,
  inputTextColor: white,
  inputBorderRadius: 4,

  brandTitle: 'Maple Design System',
  brandUrl: 'https://mapleds.ridhoandml.com',
  brandImage: 'https://place-hold.it/350x150',
  brandTarget: '_self',
});
