import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import { BottomTabNavigator } from './app/components';
import { AuthLoadingPage, LoginPage } from './app/views';

const AppStack = createStackNavigator({ Home: BottomTabNavigator });
const AuthStack = createStackNavigator({ Login: LoginPage });

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
