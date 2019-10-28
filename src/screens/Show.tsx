import React, { FunctionComponent } from 'react';
import { View, Button } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { NavigationRoutes } from '../config/navigation';

export const Show: FunctionComponent<NavigationStackScreenProps> = ({
  navigation
}) => {
  const onHomeButtonPress = () => {
    navigation.navigate(NavigationRoutes.AppStack);
  }

  const onEpisodeButtonPress = () => {
    navigation.push(NavigationRoutes.Episode);
  }

  return (
    <View>
      <Button
        title="HOME"
        onPress={onHomeButtonPress}
      />
      <Button
        title="EPISODE"
        onPress={onEpisodeButtonPress}
      />
    </View>
  )
}