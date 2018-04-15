import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  images: {
    width: 200,
    height: 200,
    left: 20
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    margin: 10,
  },
  tagLine: {
    fontSize: 18,
    textAlign: 'center'
  },
  navigation: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  nav_text: {
    fontSize: 22
  }
});

export default class Home extends React.Component {
  // constructor() {
  //   super();
  //   // this.navToVisitorsLog = this.navToVisitorsLog.bind(this);
  //   // this.navToLogs = this.navToLogs.bind(this);
  // }
  // // navToVisitorsLog(e) {
  // //   console.log('-- > ', e);
  // //
  // // }
  // // navToLogs() {
  // //   ;
  // // }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image style={styles.images} source={require('./../images/logo.png')} />
          <Text style={styles.title}>
            Rapid Prototyping
          </Text>
          <Text style={styles.tagLine}>
            Concept to Reality
          </Text>
        </View>
        <View style={styles.navigation}>
          <Button onPress={()=>this.props.navigation.navigate('VisitorsLog')} title="Visitor's Book" color='grey'/>
          <Button onPress={()=>this.props.navigation.navigate('Logs')} title="Log" color="#880E4F"/>
        </View>
      </View>
    );
  }
}
