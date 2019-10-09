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

const SettingStack = createStackNavigator(
  {
    Main: SettingPage,
    Info: InfoPage,
    Doctor: DoctorPage,
    Reminder: ReminderPage,
    About: AboutPage
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      headerTitleStyle: { ...headerStyle, marginLeft: -5 }
    }
  }
);

const AppStack = createStackNavigator(
  {
    Home: BottomTabNavigator,
    Stats: StatsPage,
    Browsing: BrowsingStack,
    Tips: TipsPage,
    Settings: {
      screen: SettingStack,
      navigationOptions: {
        header: null
      }
    }
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
