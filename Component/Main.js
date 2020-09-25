import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  Image,
} from 'react-native';

const LogoImg = require('../img/Mainlogo.png');

class Main extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Image source={LogoImg} 
        style = {{ 
            marginTop: 150, 
            width: 100, 
            height: 110,
            marginBottom:10}}/>
        <Text 
        style = {{
            marginBottom: 50,
            fontSize: 18
            }}> Welcome to IKIK!</Text>
        <TextInput placeholder="ID" style = {styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' />
        <TextInput placeholder="Password" style = {styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'/>
        <Button
          title="Log In"
          onPress={() => Alert.alert('test')}
          color="#87ceaf"
          style = {styles.button}
        />
        <View style= {styles.signupCont}>
            <Text style = {styles.signupText}>Don't have an account yet? </Text>
            <Text style = {styles.signupBtn}>Sing Up</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    fontSize: 18,
  },
  inputBox: {
      width: 300,
      height: 50,
      marginVertical: 7,
      backgroundColor: '#c7ffef',
      paddingHorizontal: 15,
      borderRadius: 25,
  },
  button: {
      borderRadius: 25,
      fontWeight: '500',
      textAlign: 'center',
      marginVertical: 30,
      width: 300,
      height: 50,
      fontWeight: '700',
  },
  signupCont : {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent : 'flex-end',
      paddingVertical: 10,
      flexDirection: 'row'
  },
  signupText: {
    //   color: 'rgba(255,255,255,0.6)',
      fontSize: 16
  },
  signupBtn: {
      color: '#87ceaf',
      fontSize: 16,
      fontWeight: '700', 
  }
});

export default Main;
