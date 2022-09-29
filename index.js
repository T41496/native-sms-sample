/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerHeadlessTask('RECEIVE_SMS', () =>
  require('./RECEIVESMS')
);
AppRegistry.registerComponent(appName, () => App);
