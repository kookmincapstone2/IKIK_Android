import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';

class Form extends Component<{}> {

  // constructor(props) {
  //   super(props)
  // }
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
        <TouchableOpacity
          title="Log In"
          color="#87ceaf"
          style={styles.button}>
          <Text style={styles.buttonText}>{this.props.type}</Text>
        </TouchableOpacity>
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
    marginVertical: 30,
    width: 300,
    height: 50,
  },
  buttonText: {
    color: "#87ceaf",
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  }
});

export default Form;
