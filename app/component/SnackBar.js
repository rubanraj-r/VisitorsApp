import React from 'react';
import { Animated, View, StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  SnackBarContainterView: {
   position: 'absolute',
   backgroundColor: '#880E4F',
   flexDirection: 'row',
   alignItems: 'center',
   left: 68,
   bottom: 0,
   right: 68,
   height: 60,
   paddingLeft: 10,
   paddingRight: 55,
   borderRadius: 50
 },
 SnackBarInsideTextStyle:{
    color: '#fff',
    fontSize: 18,
    textAlign: 'center'
  }
});

export default class SnackBar extends React.Component {
   constructor() {
      super();
      this.animatedValue = new Animated.Value(150);
      this.ShowSnackBar = false;
      this.HideSnackBar = true;
      this.state = { SnackBarInsideMsgHolder: '' };
   }
  ShowSnackBarFunction(SnackBarInsideMsgHolder="Default SnackBar Message...", duration=1500) {
    if (this.ShowSnackBar === false) {
      this.setState({ SnackBarInsideMsgHolder: SnackBarInsideMsgHolder });
      this.ShowSnackBar = true;
      Animated.timing(this.animatedValue, { toValue: 0, duration: 350 }).start(this.hide(duration));
    }
  }

  hide = (duration) => {
    this.timerID = setTimeout(() => {
      if (this.HideSnackBar === true) {
          this.HideSnackBar = false;
          Animated.timing(this.animatedValue, { toValue: 60, duration: 350 })
                  .start(()=>{
                    this.HideSnackBar = true;
                    this.ShowSnackBar = false;
                    clearTimeout(this.timerID);
                  });
      }
    }, duration);
  };

  SnackBarCloseFunction = () => {
    if (this.HideSnackBar === true) {
        this.HideSnackBar = false;
        clearTimeout(this.timerID);
        Animated.timing(this.animatedValue, { toValue: 60, duration: 350 })
                .start(() => {
                    this.ShowSnackBar = false;
                    this.HideSnackBar = true;
                });
    }
  }

  render() {
    return (
      <Animated.View style = {[{ transform: [{ translateY: this.animatedValue }]}, styles.SnackBarContainterView ]}>
          <Text numberOfLines={1} style={styles.SnackBarInsideTextStyle}> {this.state.SnackBarInsideMsgHolder} </Text>
       </Animated.View>
    );
  }
}
