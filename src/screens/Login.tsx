import React, { FunctionComponent } from 'react';
import { View, Button } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { NavigationRoutes } from '../config/navigation';

export const Login: FunctionComponent<NavigationStackScreenProps> = ({
  navigation
}) => {
  const onLoginButtonPress = () => {
    navigation.navigate(NavigationRoutes.AppStack)
  }

  const onRegisterButtonPress = () => {
    navigation.push(NavigationRoutes.Register)
  }

  return (
    <View>
      <Button
        title="LOGIN"
        onPress={onLoginButtonPress}
      />
      <Button
        title="REGISTER"
        onPress={onRegisterButtonPress}
      />
    </View>
  )
}