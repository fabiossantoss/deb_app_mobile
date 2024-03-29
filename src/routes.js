import { createStackNavigator } from 'react-navigation';

import SignIn from 'pages/signin';
import Profile from 'pages/profile';
import SignUp from 'pages/signup';
import Comments from 'pages/comments';
import RegisterPeople from 'pages/registerpeople';
import RegisterAutomobile from 'pages/registerautomobile';
import TabNavigator from 'pages/tabnavigator';

const createNavigator = (isLogged = false) => createStackNavigator(
  {
    SignIn: { screen: SignIn },
    TabNavigator: { screen: TabNavigator },
    SignUp: { screen: SignUp },
    Profile: { screen: Profile },
    Comments: { screen: Comments },
    RegisterPeople: { screen: RegisterPeople },
    RegisterAutomobile: { screen: RegisterAutomobile },
  },
  {
    initialRouteName: isLogged ? 'TabNavigator' : 'SignIn',
  },
);

export default createNavigator;
