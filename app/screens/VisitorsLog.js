import React from 'react';
import { StyleSheet, Text, TextInput, ScrollView, View,
  Button, Picker, Image, TouchableOpacity, Dimensions } from 'react-native';
import SnackBar from './../component/SnackBar.js';

var win = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    overflow: 'scroll',
    height: '100%'
  },
  form: {
    flex: 1,
    flexDirection: 'column',
    width: 320,
    marginTop: 22,
    alignItems: 'center',
    justifyContent: 'center'
  },
  formField: {
    flex: 1,
    flexDirection: 'row'
  },
  formFieldValue:{
    width: 320,
    fontSize: 18
  },
  actions: {
    flex: 1,
    flexDirection: 'row',
    marginTop: win.height/5 - 45,
    justifyContent: 'flex-end'
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
      comment: '',
      commentLength: 160,
      email: '',
      emailProvider: 'wipro.com'
    }
    this.commentLength = 160;
    this.onPressSubmit = this.onPressSubmit.bind(this);
  }
  onChangeComment(comment){
    var len = this.commentLength - comment.length;
    this.setState({
      comment: comment,
      commentLength: len
    });
    console.log('len - > ', this.state.commentLength);
  }
  onPressSubmit() {
    console.log('name - > ', this.state.name);
    console.log('vertical - > ', this.state.vertical);
    console.log('email - >', this.state.email);
    console.log('emailProvider - > ', this.state.emailProvider);
    console.log('feel - > ', this.state.feel);
    console.log('comment - > ', this.state.comment);
    if ((this.state.name.length !== 0) &&
        (this.state.vertical.length !== 0) &&
        (this.state.email.length !== 0) &&
        (this.state.feel !==0) &&
        (this.state.comment.length !== 0)) {
          console.log('inside if');
          var data = {
            name: this.state.name,
            vertical: this.state.vertical,
            email: this.state.email,
            emailProvider: this.state.emailProvider,
            feel: this.state.feel,
            comment: this.state.comment
          };
          fetch('http://ec2-13-232-6-202.ap-south-1.compute.amazonaws.com:8082/setLog', {
            method: 'POST',
            cache: 'no-cache',
            credentials: 'include',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            mode: 'cors',
            redirect: 'follow',
            referrer: 'client'
          })
          .then((response) => response)
          .then((responseJson) => {
            console.log('res - > ', responseJson);
          })
          .catch((error) => {
            console.error(error);
          });
          this.props.navigation.navigate('LogConfirm');
    } else {
      this.refs.SnackBar.ShowSnackBarFunction("Please fill all fields");
    }
  }
  render() {
    var smileySelected = '';
    if (this.state.feelTrick) {
      var imgUrl;
      var imgComment;
      if (this.state.feel==1) {
        imgUrl = require('./../images/1.png');
        imgComment = 'Disappointing';
      } else if(this.state.feel==2){
        imgUrl = require('./../images/2.png');
        imgComment = 'Not good enough';
      } else if (this.state.feel==3) {
        imgUrl = require('./../images/3.png');
        imgComment = 'Sounds Okay';
      } else if (this.state.feel==4) {
        imgUrl = require('./../images/4.png');
        imgComment = 'Commendable';
      } else if (this.state.feel==5) {
        imgUrl = require('./../images/5.png');
        imgComment = 'Loved it!';
      }
      smileySelected = (
        <View style={styles.formField}>
          <View style={{width:250, height:50, marginTop:40, alignItems:'center'}}>
            <TouchableOpacity onPress={()=>this.setState({feel:0, feelTrick:false})}>
              <Image source={imgUrl} />
            </TouchableOpacity>
            <Text style={{fontSize:18, marginTop:5, color:'#212121'}}>{imgComment}</Text>
          </View>
        </View>
      );
    } else {
      smileySelected = (
        <View style={styles.formField}>
          <View style={{width:48, height:50, marginTop:40}}>
            <TouchableOpacity onPress={()=>this.setState({feel:1, feelTrick:true})}>
              <Image source={require('./../images/mad.png')} />
            </TouchableOpacity>
          </View>
          <View style={{width:48, height:50, marginTop:40}}>
            <TouchableOpacity onPress={()=>this.setState({feel:2, feelTrick:true})}>
              <Image source={require('./../images/sad.png')} />
            </TouchableOpacity>
          </View>
          <View style={{width:48, height:50, marginTop:40}}>
            <TouchableOpacity onPress={()=>this.setState({feel:3, feelTrick:true})}>
              <Image source={require('./../images/confused.png')} />
            </TouchableOpacity>
          </View>
          <View style={{width:48, height:50, marginTop:40}}>
            <TouchableOpacity onPress={()=>this.setState({feel:4, feelTrick:true})}>
              <Image source={require('./../images/happy.png')} />
            </TouchableOpacity>
          </View>
          <View style={{width:48, height:50, marginTop:40}}>
            <TouchableOpacity onPress={()=>this.setState({feel:5, feelTrick:true})}>
              <Image source={require('./../images/in-love.png')} />
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    return (
      <ScrollView>
      <View style={styles.container}>
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
            <View style={{width:75, height:50, marginTop:15}}>
              <Text style={{fontSize:16, marginLeft:5}}>
                CBU &nbsp; -
              </Text>
            </View>
            <View style={{width:245, height:50}}>
              <Picker
                selectedValue={this.state.vertical}
                onValueChange={(itemValue, itemIndex) => this.setState({vertical: itemValue})}>
                <Picker.Item style={{fontStyle:'italic', color:'lightgrey'}} label='Choose a vertical' disabled />
                <Picker.Item label="Retail" value="Retail" />
                <Picker.Item label="HTTP" value="HTTP" />
                <Picker.Item label="Consumer Goods" value="Consumer Goods" />
                <Picker.Item label="N.ME" value="N.ME" />
              </Picker>
            </View>
          </View>
          <View style={styles.formField}>
            <View style={{width:180, height:50}}>
              <TextInput
                style={{width:180, fontSize:18}}
                placeholder='email'
                value={this.state.email}
                onChangeText={(email) => this.setState({email})}
              />
            </View>
            <View style={{width:12, height:50}}>
              <Text> @ </Text>
            </View>
            <View style={{width:130, height:50}}>
              <Picker
                selectedValue={this.state.emailProvider}
                onValueChange={(itemValue, itemIndex) => this.setState({emailProvider: itemValue})}>
                <Picker.Item label="wipro.com" value="wipro.com" />
                <Picker.Item label="outlook.com" value="outlook.com" />
                <Picker.Item label="gmail.com" value="gmail.com" />
              </Picker>
            </View>
          </View>
          {smileySelected}
          <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{height: 150}}>
              <TextInput
                style={{width:320, height:150, fontSize:18}}
                multiline={true}
                numberOfLines = {5}
                maxLength = {160}
                placeholder='Comments'
                onChangeText={this.onChangeComment.bind(this)}
                value={this.state.comment}
                />
              <Text style={{fontSize:10, color:'lightgrey', textAlign:'right'}}>
                {this.state.commentLength}
              </Text>
            </View>
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
      <SnackBar ref='SnackBar' />
    </ScrollView>
    );
  }
}
