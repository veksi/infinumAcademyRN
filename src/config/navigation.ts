import { createAppContainer, createSwitchNavigator, NavigationStackRouterConfig, NavigationRouter, NavigationProp, NavigationContainer } from 'react-navigation';
import { createStackNavigator, NavigationStackScreenProps, NavigationStackScreenComponent } from 'react-navigation-stack';
import { Shows } from '../screens/Shows';
import { Show } from '../screens/Show';
import { Episode } from '../screens/Episode';
import { AddEpisode } from '../screens/AddEpisode';
import { Comments } from '../screens/Comments';
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { RegisterRedirect } from '../screens/RegisterRedirect';

export enum NavigationRoutes {
  AppStack = 'App',
  AuthStack = 'Auth',
  Home = 'Home',
  Show = 'Show',
  Episode = 'Episode',
  NewEpisode = 'AddEpisode',
  Comments = 'Comments',
  Login = 'Login',
  Register = 'Register',
  SuccessfulRegistration = 'SuccsessfulRegistration',
}

const AppStack: NavigationStackScreenComponent = createStackNavigator(
  {
    Home: Shows,
    Show: Show,
    Episode: Episode,
    AddEpisode: AddEpisode,
    Comments: Comments,
  }, {
    initialRouteName: 'Home'
  }
);

const AuthStack: NavigationStackScreenComponent = createStackNavigator(
  {
    Login: Login,
    Register: Register,
    SuccsessfulRegistration: RegisterRedirect,
  }
);

export const AppContainer: NavigationContainer = createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Auth'
    }
  )
);