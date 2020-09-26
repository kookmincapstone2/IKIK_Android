import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Routes from "../IKIK_Front/Routes";
// import Login from "./Page/Login";

class App extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Routes/>
        {/* <Login/> */}
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
