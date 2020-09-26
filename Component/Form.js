import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
} from 'react-native';

class Form extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="ID"
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
        />
        <Button
          title="Log In"
          onPress={() => Alert.alert('test')}
          color="#87ceaf"
          style={styles.button}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
});

export default Form;
