import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Form from '../Component/Form.js';
import SignupForm from '../Component/SingupForm';
const LogoImg = require('../img/Mainlogo.png');

class Login extends Component<{}> {
  //   singup() {
  //     Actions.singup();
  //   }
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={LogoImg}
          style={{
            marginTop: 70,
            width: 100,
            height: 110,
            marginBottom: 10,
          }}
        />
        {/* logo img */}
        <Text style={{marginBottom: 50, fontSize: 18, }}>
          Welcome to IKIK!
        </Text>
        {/*logo text*/}
        {/* <Form type="Singup"/> */}
        <SignupForm/>
        <View style={styles.signupCont}>
          <Text style={styles.signupText}>Already have an account? </Text>
          <Text style={styles.signupBtn}>Sing In</Text>
        </View>
      </View>
    );
  }
}

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
    // paddingVertical: 10,
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
