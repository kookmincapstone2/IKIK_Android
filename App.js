/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Alert, Image} from 'react-native';
import Main from "./Component/Main";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// const LogoImg = require("./img/Mainlogo.png")

class App extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Main/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
  },
});
export default App;
