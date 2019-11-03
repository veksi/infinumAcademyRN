import { createAppContainer, createSwitchNavigator, NavigationContainer } from 'react-navigation';
import { createStackNavigator, NavigationStackScreenComponent } from 'react-navigation-stack';
import { Shows } from '../screens/Shows';
import { Show } from '../screens/Show';
import { Episode } from '../screens/Episode';
import { AddEpisode } from '../screens/AddEpisode';
import { Comments } from '../screens/Comments';
import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { RegisterRedirect } from '../screens/RegisterRedirect';
import { Auth } from '../screens/Auth';

export enum NavigationRoutes {
  AppStack = 'AppStack',
  PreloadStack = 'PreloadStack',
  AuthStack = 'AuthStack',
  Auth = 'Auth',
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
    initialRouteName: NavigationRoutes.Home,
  }
);

const AuthStack: NavigationStackScreenComponent = createStackNavigator(
  {
    Login: Login,
    Register: Register,
    SuccsessfulRegistration: RegisterRedirect,
  }, {
    initialRouteName: NavigationRoutes.Login,
  }
);

const PreloadStack: NavigationStackScreenComponent = createStackNavigator(
  {
    Auth: Auth,
  }
);

export const AppContainer: NavigationContainer = createAppContainer(
  createSwitchNavigator(
    {
      AppStack: AppStack,
      AuthStack: AuthStack,
      PreloadStack: PreloadStack,
    },
    {
      initialRouteName: NavigationRoutes.PreloadStack,
    }
  )
);