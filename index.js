import { AppRegistry } from 'react-native';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import  App  from './app/App.js';

AppRegistry.registerComponent('VisitorsApp', () => App);
