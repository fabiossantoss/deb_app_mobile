import { createStackNavigator } from 'react-navigation';

import Feed from 'pages/postspessoas';
import Profile from 'pages/profile';

const Home = createStackNavigator({
  Feed,
  Profile,
});

export default Home;
