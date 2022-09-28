// .storybook/manager.js

import { addons } from '@storybook/addons';
import * as customTheme from './theme';

addons.setConfig({
  theme: customTheme.dark,
  panelPosition: 'bottom',
});
