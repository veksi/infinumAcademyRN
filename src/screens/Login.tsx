import React, { FunctionComponent, useEffect, useState } from 'react';
import { View, Button } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { NavigationRoutes } from '../config/navigation';
import SplashScreen from 'react-native-splash-screen';
import { Input } from '../components/Input/Input';

export const Login: FunctionComponent<NavigationStackScreenProps> = ({
  navigation
}) => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onLoginButtonPress = () => {
    navigation.navigate(NavigationRoutes.AppStack)
  }

  const onRegisterButtonPress = () => {
    navigation.push(NavigationRoutes.Register)
  }

  const onEmailInputChange = (value: string) => {
    setEmail(value);
  }

  const onPasswordChange = (value: string) => {
    setPassword(value);
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
      <Input
        error={false}
        placeholderText="E-mail"
        value={email}
        onChange={onEmailInputChange}
      />
      <Input
        error={false}
        placeholderText="Password"
        value={password}
        onChange={onPasswordChange}
      />

    </View>
  )
}