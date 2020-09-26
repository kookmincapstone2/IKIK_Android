import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Login from "./Page/Login";
import Signup from "./Page/Signup";
import Routes from './Routes';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator ();

// const Homescreen =() => {
//   return (
//     <View>
//     <Text>test</Text>
//     </View>
//   )
// }

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <AuthStack.Navigator>
          <AuthStack.Screen name="Login" component={Login} initial/>
          <AuthStack.Screen name="Signup" component={Signup} />
        </AuthStack.Navigator>
       </NavigationContainer>
      // <View style={styles.mainView}>
      //   <Routes/>
      //   <Signup/>
      //   <Login/>
      // </View>
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
export default App(navigation);
