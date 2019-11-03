import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { ThemeProvider } from 'emotion-theming'

import store from './store';
import { AppContainer } from './config/navigation';
import base from './styles/themes/base';

export default class App extends Component<any> {
  public render() {
   return (
    <Provider state={store}>
      <ThemeProvider theme={base}>
        <AppContainer />
      </ThemeProvider>
    </Provider>
   )
  }
};
