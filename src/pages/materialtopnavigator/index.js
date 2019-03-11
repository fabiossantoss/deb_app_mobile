import { createMaterialTopTabNavigator } from 'react-navigation';

import PostPessoas from 'pages/postspessoas';
import PostAutomobiles from 'pages/postsautomobiles';

const TopNavigator = createMaterialTopTabNavigator(
  {
    Pessoas: {
      screen: PostPessoas,
      navigationOptions: { header: null, title: 'Pessoas' },
    },
    Automoveis: {
      screen: PostAutomobiles,
      navigationOptions: { header: null, title: 'Automóveis' },
    },
  },
  {
    tabBarPosition: 'top',
  },
);

export default TopNavigator;
