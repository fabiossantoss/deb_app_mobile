import { createStackNavigator } from 'react-navigation';

import Feed from 'pages/feed';
import Profile from 'pages/profile';

const Home = createStackNavigator({
  Feed,
  Profile,
});

export default Home;
