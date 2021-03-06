import React, { FunctionComponent } from 'react';
import { View, Button } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { NavigationRoutes } from '../config/navigation';

export const AddEpisode: FunctionComponent<NavigationStackScreenProps> = ({
  navigation
}) => {
  const onButtonPress = () => {
    navigation.push(NavigationRoutes.Episode)
  }

  return (
    <View>
      <Button
        title="SHOW"
        onPress={onButtonPress}
      />
    </View>
  )
}