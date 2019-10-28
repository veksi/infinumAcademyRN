import React, { FunctionComponent, useEffect } from 'react';
import { Text, View } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { NavigationRoutes } from '../config/navigation';

export const RegisterRedirect: FunctionComponent<NavigationStackScreenProps> = ({
  navigation
}) => {

  useEffect(() => {
    navigation.navigate(NavigationRoutes.Home)
  }, []);

  return (
    <View>
      <Text>
        REGISTERED
      </Text>
    </View>
  )
}