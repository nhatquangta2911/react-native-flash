import { createStackNavigator, createAppContainer } from 'react-navigation';
import { GreetingPage, LoginPage } from './app/views';

const OpeningNavigator = createStackNavigator(
  {
    Greeting: {
      screen: GreetingPage
    },
    Login: {
      screen: LoginPage
    }
  },
  {
    initialRouteName: 'Greeting',
    headerMode: 'none',
    header: null
  }
);

export default createAppContainer(OpeningNavigator);
