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
    backgroundColor: '#FCE4EC',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
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
      logs: [
        {
          name: 'Ruban',
          date: '1/4/2018',
          comment: 'Very Nice',
          feel: 3
        },
        {
          name: 'Raj',
          date: '3/4/2018',
          comment: 'Very Nice',
          feel: 5
        }
      ]
    };
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
                      <View style={{width:200}}>
                        <Text style={{fontSize:22}}>{item.name}</Text>
                      </View>
                      <View style={{width:60}}>
                        <Text>{item.date}</Text>
                      </View>
                    </View>
                    <View>
                      <Text style={{fontSize:12, fontStyle:'italic', }}>Commented : </Text>
                    </View>
                    <View style={{flex:2}}>
                      <Text style={{fontSize:16}}> &#09; {item.comment}</Text>
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
