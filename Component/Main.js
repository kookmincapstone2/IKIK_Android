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
        <Image source={LogoImg} style = {{ marginVertical: 10}}/>
        <Text style = {{ marginVertical: 10}}> Welcome</Text>
        <TextInput placeholder="ID" style = {styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)' />
        <TextInput placeholder="Password" style = {styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'/>
        <Button
          title="Login"
          onPress={() => Alert.alert('test')}
          color="#87ceaf"
          style = {{ marginVertical: 30, width: 50, height: 30}}
        />
        <Button
          title="Sing up"
          onPress={() => Alert.alert('test')}
          color="#87ceaf"
          style = {{ marginVertical: 30, width: 50, height: 30}}  
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
  },
  inputBox: {
      width: 200,
      height: 30,
      marginVertical: 10,
      backgroundColor: '#c7ffef',
      paddingHorizontal: 15,
      borderRadius: 25,
  }
});

export default Main;
