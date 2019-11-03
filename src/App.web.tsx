import React, { Component } from 'react';
import {
  StyleSheet, View, Text
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'

export default class App extends Component<any> {
  public componentDidMount() {
    setTimeout(() => {
      // SplashScreen.hide();
    }, 1000);
  }


  public render() {
   return (
     <View>
       <Text>
         Text
       </Text>
     </View>
   )
  }
};
