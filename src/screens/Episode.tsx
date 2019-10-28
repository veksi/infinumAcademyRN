import React, { FunctionComponent } from 'react';
import { View, Button } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { NavigationRoutes } from '../config/navigation';

export const Episode: FunctionComponent<NavigationStackScreenProps> = ({
  navigation
}) => {
  const onAddEpisodeButtonPress = () => {
    navigation.push(NavigationRoutes.NewEpisode)
  }

  const onShowButtonPress = () => {
    navigation.navigate(NavigationRoutes.Home)
  }

  return (
    <View>
      <Button
        title="ADD NEW"
        onPress={onAddEpisodeButtonPress}
      />
      <Button
        title="HOME"
        onPress={onShowButtonPress}
      />
    </View>
  )
}