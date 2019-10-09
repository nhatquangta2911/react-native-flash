/* eslint-disable object-shorthand */
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { BottomTabNavigator } from './app/components';
import {
  AuthLoadingPage,
  LoginPage,
  StatsPage,
  RegisterPage,
  RegisterStep1,
  RegisterStep2,
  RegisterStep3,
  RegisterStep4,
  BrowsingPage,
  TipsPage,
  RecipeDetailPage
} from './app/views';

const BrowsingStack = createStackNavigator(
  {
    Browsing: BrowsingPage,
    Details: RecipeDetailPage
  },
  {
    initialRouteName: 'Browsing',
    navigationOptions: {
      header: null
    }
  }
);

const AppStack = createStackNavigator(
  {
    Home: BottomTabNavigator,
    Stats: StatsPage,
    Browsing: BrowsingStack,
    Tips: TipsPage
  },
  {
    initialRouteName: 'Home'
  }
);

const RegisterStack = createStackNavigator(
  {
    RegisterMain: RegisterPage,
    RegisterStep1,
    RegisterStep2,
    RegisterStep3,
    RegisterStep4
  },
  {
    initialRouteName: 'RegisterMain',
    navigationOptions: {
      header: null
    }
  }
);

const AuthStack = createStackNavigator(
  { Login: LoginPage, Register: RegisterStack },
  { initialRouteName: 'Login' }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingPage,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
);
