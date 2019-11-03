import React, { FunctionComponent, useState } from 'react';
import { View, Button, Text } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { NavigationRoutes } from '../config/navigation';

export const Shows: FunctionComponent<NavigationStackScreenProps> = ({
  navigation
}) => {

  const [modalVisibility, setModalVisibility] = useState(false);

  const onButtonPress = () => {
    navigation.push(NavigationRoutes.Show);
  }

  const toogleModal = () => {
    setModalVisibility(!modalVisibility);
  }

  return (
    <View>
      <Button
        title="SHOW"
        onPress={onButtonPress}
      />
      <Button
        title="Show modal"
        onPress={toogleModal}
      />
      <View>
        <Text>{`MODAL VISIBILITY ${modalVisibility}`}</Text>
      </View>
    </View>
  )
}