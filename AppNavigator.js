import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import { BottomTabNavigator } from './app/components';
import { AuthLoadingPage, LoginPage, RegisterPage, StatsPage, BrowsingPage } from './app/views';

const AppStack = createStackNavigator({
  Home: BottomTabNavigator,
  Stats: StatsPage,
  Browsing: BrowsingPage
});
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
