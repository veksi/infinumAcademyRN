import React, { FunctionComponent } from 'react';
import { View, Button } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { NavigationRoutes } from '../config/navigation';

export const Register: FunctionComponent<NavigationStackScreenProps> = ({
  navigation
}) => {
  const onButtonPress = () => {
    navigation.navigate(NavigationRoutes.SuccessfulRegistration)
  }

  return (
    <View>
      <Button
        title="REGISTER"
        onPress={onButtonPress}
      />
    </View>
  )
}