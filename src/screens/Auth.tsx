import React, { FunctionComponent, useEffect } from 'react';
import * as Keychain from 'react-native-keychain';

import { Model as ModelEnum } from '../enums/Model';
import { IScreenProps } from '../interfaces/IScreen';
import { NavigationRoutes } from '../config/navigation';
import { getSession, getShows } from '../services/api';

export const Auth: FunctionComponent<IScreenProps> = ({
  navigation,
  store,
}) => {
  useEffect(() => {
    checkCredentials()
      .then(() => {
        navigation.navigate(NavigationRoutes.AppStack);
      })
      .catch(() => {
        navigation.navigate(NavigationRoutes.AuthStack);
      })
  }, []);

  const checkCredentials = async() => {
    try {
      const credentials = await Keychain.getGenericPassword();

      if (credentials) {
        const { username, password} = credentials;

        await getSession({ email: username, password})
          .then(async() => {
            const shows = await getShows();
            store.base.add(shows, ModelEnum.SHOW);

            return Promise.resolve();
          })
          .catch((error) => {
          return Promise.reject(error);
          })
      } else {
        return Promise.reject();
      }
    } catch (error) {
    console.log('Keychain couldn\'t be accessed!', error);
    return Promise.reject();
    }
  }

  return null;
}
