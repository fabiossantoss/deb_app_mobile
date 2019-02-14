import { AppRegistry, YellowBox } from 'react-native';
// import App from 'index';
import 'config/Reactotronconfig';

import App from './src';

YellowBox.ignoreWarnings(['Warning:']);
console.disableYellowBox = true;

AppRegistry.registerComponent('deb_app_mobile', () => App);
