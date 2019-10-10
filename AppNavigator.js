/* eslint-disable no-unused-vars */
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
  InfoPage,
  DoctorPage,
  AboutPage,
  ReminderPage,
  RecipeDetailPage,
  SettingPage
} from './app/views';
import { headerStyle } from './app/styles/base';
import RemainderPage from './app/views/ReminderPage';

const BrowsingStack = createStackNavigator(
  {
    Browsing: BrowsingPage,
    Details: RecipeDetailPage
  },
  {
    initialRouteName: 'Browsing'
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

const AppStack = createStackNavigator(
  {
    Home: BottomTabNavigator,
    Stats: StatsPage,
    Browsing: BrowsingStack,
    Tips: TipsPage,
    Info: InfoPage,
    Doctor: DoctorPage,
    Reminder: RemainderPage,
    About: AboutPage
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerTitleStyle: { ...headerStyle, marginLeft: -5 }
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
