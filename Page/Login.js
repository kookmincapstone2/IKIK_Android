import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Form from '../Component/Form.js';
import Signup from "../Page/Signup";
import Class from "../Page/class";
const LogoImg = require('../img/Mainlogo.png');

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={LogoImg}
        style={{
          marginTop: 150,
          width: 100,
          height: 110,
          marginBottom: 10,
        }}
      />
      {/* logo img */}
      <Text style={{marginBottom: 50, fontSize: 18}}>Welcome to IKIK!</Text>
      {/*logo text*/}
      <Form type="Login" />
      <View style={styles.signupCont}>
        <Text style={styles.signupText}>Don't have an account yet? </Text>
        <TouchableOpacity onPress = {()=> navigation.navigate('Signup')}>
          <Text style={styles.signupBtn}>Sing Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress= {()=> navigation.navigate('AddClass')}>
          <Text style={styles.singupBtn}>AddClass</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupCont: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: 10,
    flexDirection: 'row',
  },
  signupText: {
    //   color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
  },
  signupBtn: {
    color: '#87ceaf',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default Login;
