import { createStackNavigator, createAppContainer } from 'react-navigation';
import { GreetingPage, LoginPage } from './app/views';
import { Navigator } from './app/components';

const AppNavigator = createStackNavigator(
  {
    Greeting: {
      screen: GreetingPage
    },
    Login: {
      screen: LoginPage
    },
    Home: {
      screen: Navigator
    }
  },
  {
    initialRouteName: 'Greeting'
  }
);

export default createAppContainer(AppNavigator);
