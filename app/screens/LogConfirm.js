import React from 'react';
import { StyleSheet, ScrollView, View, Text, Button } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '92%',
    height: 120,
    marginTop: '60%',
    backgroundColor: '#FCE4EC',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  }
});

export default class LogConfirm extends React.Component {
  constructor() {
    super();
    this.onPressHome = this.onPressHome.bind(this);
  }
  onPressHome() {
    this.props.navigation.navigate('Home');
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.card}>
            <View style={{flex:1}}>
              <Text style={{fontSize: 20}}> Your log is successfully recorded! </Text>
            </View>
            <View style={{flex:1,width:60,height:40}}>
              <Button onPress={this.onPressHome} title='Home' color='#880E4F' />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
