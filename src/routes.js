import { createStackNavigator } from 'react-navigation';
import { colors } from 'styles';

import TabNavigator from 'pages/tabnavigator';
import SignIn from 'pages/signin';
// import Home from 'pages/home';
import SignUp from 'pages/signup';

const createNavigator = (isLogged = false) => createStackNavigator(
  {
    SignIn: { screen: SignIn },
    TabNavigator: { screen: TabNavigator },
    SignUp: { screen: SignUp },
  },
  {
    initialRouteName: isLogged ? 'TabNavigator' : 'SignIn',
    navigationOptions: {
      headerTintColor: colors.green,
      headerBackTitle: null,
    },
  },
);

export default createNavigator;
