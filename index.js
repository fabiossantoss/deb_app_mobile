import { AppRegistry, YellowBox } from "react-native";
// import App from 'index';
import "config/Reactotronconfig";

YellowBox.ignoreWarnings(["Warning:"]);
console.disableYellowBox = true;

import App from "./App";

AppRegistry.registerComponent("deb_app_mobile", () => App);
