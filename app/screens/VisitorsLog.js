import React from 'react';
import { StyleSheet, Text, TextInput, ScrollView, View,
  Button, Picker, Image, TouchableOpacity } from 'react-native';
import SnackBar from './../component/SnackBar.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 22,
    overflow: 'scroll'
  },
  layoutCard: {
    borderStyle: 'solid'
  },
  form: {
    flex: 1,
    width: 200,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  formField: {
    flex: 1,
    flexDirection: 'row'
  },
  formFieldValue:{
    width: 200,
    fontSize: 16
  },
  actions: {
    flex: 1,
    flexDirection: 'row',
    marginTop:50,
    justifyContent: 'space-around'
  }
});
export default class VisitorsLog extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      vertical: '',
      feel: 0,
      feelTrick: false,
      comments: '',
      email: '',
      emailProvider: 'wipro.com'
    }
    this.onPressSubmit = this.onPressSubmit.bind(this);
  }
  onPressSubmit(e) {
    console.log('name - > ', this.state.name);
    console.log('vertical - > ', this.state.vertical);
    console.log('email - >', this.state.email);
    console.log('emailProvider - > ', this.state.emailProvider);
    console.log('feel - > ', this.state.feel);
    console.log('comment - > ', this.state.comments);
    if ((this.state.name.length !== 0) &&
        (this.state.vertical.length !== 0) &&
        (this.state.email.length !== 0) &&
        (this.state.feel !==0) &&
        (this.state.comments.length !== 0)) {
          this.setState({name:'', vertical:'', email: '', feel:0, comments:''});
          this.props.navigation.navigate('LogConfirm');
    } else {
      this.refs.SnackBar.ShowSnackBarFunction("Fill all the fields");
    }
  }
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.layoutCard}>
        <View style={styles.form}>
          <View style={styles.formField}>
            <TextInput
              style={styles.formFieldValue}
              placeholder='Name'
              onChangeText={(name) => this.setState({name})}
              value={this.state.name}
            />
          </View>
          <View style={styles.formField}>
            <View style={{width:50, height:50, marginTop:15}}>
              <Text style={{fontSize:16}}>
                CBU &nbsp; -
              </Text>
            </View>
            <View style={{width:150, height:50}}>
              <Picker
                selectedValue={this.state.vertical}
                onValueChange={(itemValue, itemIndex) => this.setState({vertical: itemValue})}>
                <Picker.Item label='Choose a Vertical' disabled />
                <Picker.Item label="Retail" value="Retail" />
                <Picker.Item label="HTTP" value="HTTP" />
                <Picker.Item label="Consumer Goods" value="Consumer Goods" />
                <Picker.Item label="N.ME" value="N.ME" />
              </Picker>
            </View>
          </View>
          <View style={styles.formField}>
            <View style={{width:100, height:50}}>
              <TextInput
                style={styles.formFieldValue}
                placeholder='email'
                value={this.state.email}
                onChangeText={(email) => this.setState({email})}
              />
            </View>
            <View style={{width:15, height:50}}>
              <Text> @ </Text>
            </View>
            <View style={{width:80, height:50}}>
              <Picker
                selectedValue={this.state.emailProvider}
                onValueChange={(itemValue, itemIndex) => this.setState({emailProvider: itemValue})}>
                <Picker.Item label="wipro.com" value="wipro.com" />
                <Picker.Item label="outlook.com" value="outlook.com" />
                <Picker.Item label="gmail.com" value="gmail.com" />
              </Picker>
            </View>
          </View>
          <View style={styles.formField}>
            <View style={{width:40, height:50, marginTop:40}}>
              <TouchableOpacity onPress={()=>this.setState({feel:1, feelTrick:true})}>
                <Image source={require('./../images/mad.png')} />
              </TouchableOpacity>
            </View>
            <View style={{width:40, height:50, marginTop:40}}>
              <TouchableOpacity onPress={()=>this.setState({feel:2, feelTrick:true})}>
                <Image source={require('./../images/sad.png')} />
              </TouchableOpacity>
            </View>
            <View style={{width:40, height:50, marginTop:40}}>
              <TouchableOpacity onPress={()=>this.setState({feel:3, feelTrick:true})}>
                <Image source={require('./../images/confused.png')} />
              </TouchableOpacity>
            </View>
            <View style={{width:40, height:50, marginTop:40}}>
              <TouchableOpacity onPress={()=>this.setState({feel:4, feelTrick:true})}>
                <Image source={require('./../images/happy.png')} />
              </TouchableOpacity>
            </View>
            <View style={{width:40, height:50, marginTop:40}}>
              <TouchableOpacity onPress={()=>this.setState({feel:5, feelTrick:true})}>
                <Image source={require('./../images/in-love.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.formField}>
            <TextInput
              style={{width:200, height:100, marginTop:10}}
              multiline={true}
              numberOfLines = {4}
              placeholder='Comments'
              onChangeText={(comments) => this.setState({comments})}
              value={this.state.comments}
            />
          </View>
        </View>
        <View style={styles.actions}>
          <View style={{width:40, height:50}}>
            <TouchableOpacity onPress={this.onPressSubmit}>
              <Image source={require('./../images/submit.png')} />
            </TouchableOpacity>
          </View>
        </View>
        </View>
      </View>
      <SnackBar ref='SnackBar' />
    </ScrollView>
    );
  }
}
