import React, { Component } from 'react';
import StorybookUI from '../storybook';
import { Provider } from 'mobx-react';
import { ThemeProvider } from 'emotion-theming'

import store from './store';
import { AppContainer } from './config/navigation';
import base from './styles/themes/base';
import SplashScreen from 'react-native-splash-screen';
import { css } from '@emotion/native';
import { View } from 'react-native';

const globalStyle = css`
  flex: 1;
`;

export default class App extends Component<any> {
  public render() {
  SplashScreen.hide();

   return (
    <Provider state={store}>
      <ThemeProvider theme={base}>
        <AppContainer />
        {/* <View style={globalStyle}>
          <StorybookUI />
        </View> */}
      </ThemeProvider>
    </Provider>
   )
  }
};
