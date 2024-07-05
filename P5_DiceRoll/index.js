/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import VibrationAPI from "./VibrationAPI"
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => VibrationAPI);
