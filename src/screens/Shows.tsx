import React, { FunctionComponent, useState, useEffect } from 'react';
import { View, Button, Modal, Text, SafeAreaView } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { NavigationRoutes } from '../config/navigation';
import SplashScreen from 'react-native-splash-screen';

export const Shows: FunctionComponent<NavigationStackScreenProps> = ({
  navigation
}) => {

  const [modalVisibility, setModalVisibility] = useState(false);
  useEffect(() => {
    SplashScreen.hide();
  }, [])

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
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisibility}
      >
        <SafeAreaView
          style={{flex: 1, backgroundColor: 'red'}}
        >
          <View>
            <Text>MODAL TEXT</Text>
            <Button
              title="Toogle modal"
              onPress={toogleModal}
            />
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  )
}