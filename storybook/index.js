import { getStorybookUI, configure } from '@storybook/react-native';
import { loadStories } from './storyLoader';

import './rn-addons';

const StorybookUIRoot = getStorybookUI({
  tabOpen: -1,
  onDeviceUI: true,
});

configure(() => {
  loadStories();
}, module);

export default StorybookUIRoot;
