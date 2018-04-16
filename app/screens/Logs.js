import React from 'react';
import { StyleSheet, ScrollView, View, Image, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    flex: 1,
    flexDirection: "row",
    width: "92%",
    minHeight: 100,
    backgroundColor: '#F8BBD0',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  feel: {
    width: 60,
    height: 100,
    marginTop: 20,
    alignItems: 'center'
  },
  description: {
    flex: 1,
    flexDirection: 'column',
    width: 260,
    height: 100,
    zIndex: 1
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    height: 20,
    paddingBottom: 10
  }
});

export default class Logs extends React.Component {
  constructor() {
    super();
    this.state = {
      logs: []
    };
  }
  componentDidMount() {
    return fetch('http://ec2-13-232-6-202.ap-south-1.compute.amazonaws.com:8082/getLog')
     .then((response) => response.json())
     .then((responseJson) => {
       console.log('res - > ', responseJson);
       this.setState({logs: responseJson});
     })
     .catch((error) =>{
       console.log(error);
     });
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          {
            this.state.logs.map((item, i) => {
              var imgUrl;
              if (item.feel==1) {
                imgUrl = require('./../images/1.png');
              } else if(item.feel==2){
                imgUrl = require('./../images/2.png');
              } else if (item.feel==3) {
                imgUrl = require('./../images/3.png');
              } else if (item.feel==4) {
                imgUrl = require('./../images/4.png');
              } else if (item.feel==5) {
                imgUrl = require('./../images/5.png');
              }
              return (
                <View style={styles.card} key={i}>
                  <View style={styles.feel}>
                    <Image source={imgUrl} />
                  </View>
                  <View style={styles.description}>
                    <View style={styles.header}>
                      <View style={{width:185, marginTop: 5}}>
                        <Text style={{fontSize:22, color:'#212121', fontWeight:'bold'}}>{item.name}</Text>
                      </View>
                      <View style={{width:75, marginTop: 5}}>
                        <Text style={{color:'#212121'}}>{item.date}</Text>
                      </View>
                    </View>
                    <View style={{flex:2}}>
                      <Text style={{fontSize:16, color:'#212121'}}> &#09; {item.comment}</Text>
                    </View>
                  </View>
                </View>
              );
            })
          }
        </View>
      </ScrollView>
    );
  }
}
