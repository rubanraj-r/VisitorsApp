import react from 'react';
import { StackNavigator } from 'react-navigation';

import Home from './../screens/Home.js';
import Logs from './../screens/Logs.js';
import VisitorsLog from './../screens/VisitorsLog.js';
import LogConfirm from '../screens/LogConfirm.js';

const RootStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: ()=>null
    }
  },
  Logs: {
    screen: Logs
  },
  VisitorsLog: {
    screen: VisitorsLog
  },
  LogConfirm: {
    screen: LogConfirm
  }
}, {
  initialRouteName: 'Home',
});

export default RootStack;
