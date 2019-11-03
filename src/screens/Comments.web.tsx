import React, { FunctionComponent } from 'react';
import { View, Button } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';

export const Comments: FunctionComponent<NavigationStackScreenProps> = ({
  navigation
}) => {
  const onButtonPress = () => {
    // navigation.navigate()
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