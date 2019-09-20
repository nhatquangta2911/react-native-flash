import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import { BottomTabNavigator } from './app/components';
import {
  AuthLoadingPage,
  LoginPage,
  RegisterPage,
  StatsPage,
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
    initialRouteName: 'Browsing'
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
const AuthStack = createStackNavigator(
  { Login: LoginPage, Register: RegisterPage },
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
