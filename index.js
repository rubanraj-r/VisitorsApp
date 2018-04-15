import { AppRegistry } from 'react-native';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import  App  from './app/App.js';
import Home from './app/screens/Home.js';
import LogConfirm from './app/screens/LogConfirm.js';
import Logs from './app/screens/Logs.js';

AppRegistry.registerComponent('VisitorsApp', () => App);
