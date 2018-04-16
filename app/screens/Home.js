import React from 'react';
import { StyleSheet, ScrollView, Text, View, Button, Image, ImageBackground, Dimensions } from 'react-native';

var win = Dimensions.get('window');

const styles = StyleSheet.create({
  backgroundImageContainer:{
    height:'100%',
    width:'100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoAndTitleContainer:{
    flex:1,
    height:(win.height/3)+50
  },
  scrollContainer:{
    flex:1
  },
  logo:{
    height:200,
    width:220,
    flex:1,
    marginTop:20,
  },
  logoContainer:{
    flex:1,
    alignItems:'center'
  },
  titleText:{
    color:'white',
    fontSize:35,
    fontWeight:'bold',
    textAlign:'center'
  },
  leftTagLine:{
    fontSize:15,
    textAlign:'center',
    color:'white',
    marginRight:140
  },
  rightTagLine:{
    fontSize:15,
    textAlign:'center',
    color:'white',
    marginLeft:140
  },
  navigation: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginTop: '30%',
    marginLeft: '25%',
    marginRight: '25%'
  }
});

export default class Home extends React.Component {
  render() {
    return (
      <ImageBackground source={require('./../images/background.jpg')} style={styles.backgroundImageContainer}>
        <ScrollView style={styles.scrollContainer}>

          <View style={styles.logoAndTitleContainer}>
            <View style={styles.logoContainer}>
              <Image source={require('./../images/logo.png')} style={styles.logo}/>
              <Text style={styles.leftTagLine}>Seeing is Believing</Text>
              <Text style={styles.titleText}>Rapid Prototyping</Text>
            </View>

            <View>
              <Text style={styles.rightTagLine}>Concept to Reality</Text>
            </View>
          </View>
            <View style={styles.navigation}>
              <Button onPress={()=>this.props.navigation.navigate('VisitorsLog')} title="Visitor's Book" color='grey'/>
              <Button onPress={()=>this.props.navigation.navigate('Logs')} title="Log" color="#880E4F"/>
            </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
