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
        <Image source={LogoImg} />
        <Text>Welcome</Text>
        <TextInput placeholder="Id" />
        <TextInput placeholder="Password" />
        <Button
          title="Login"
          onPress={() => Alert.alert('test')}
          color="#87ceaf"
          width="50"
        />
        <Button
          title="Sing up"
          onPress={() => Alert.alert('test')}
          color="#87ceaf"
          width="50"
        />
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

export default Main;
