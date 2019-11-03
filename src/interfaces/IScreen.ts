import { NavigationStackProp } from 'react-navigation-stack';
import { RootStore } from '../store/RootStore';
import { Theme } from '../styles/themes';
import { NavigationRoute, NavigationParams } from 'react-navigation';

export interface IScreenProps{
  navigation: NavigationStackProp<NavigationRoute<NavigationParams>, any>;
  screenProps: any;
  store: RootStore;
  theme: Theme;
}