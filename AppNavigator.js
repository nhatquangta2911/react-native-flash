import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import { BottomTabNavigator } from './app/components';
import AuthLoadingScreen from './AuthLoadingScreen';
import { GreetingPage } from './app/views';
import OpeningNavigator from './OpeningNavigator';

const GreetingStack = createStackNavigator({ Greeting: GreetingPage });
const AppStack = createStackNavigator({ Home: BottomTabNavigator });
const AuthStack = createStackNavigator({ Login: OpeningNavigator });

export default createAppContainer(
  createSwitchNavigator(
    {
      Greeting: GreetingStack,
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
);
