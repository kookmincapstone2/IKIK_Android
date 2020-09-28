import React from 'react';
import Login from './Page/Login';
import Signup from './Page/Signup';
import {createStackNavigator} from '@react-navigation/stack';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => {
  return (
    <RootStack.Navigator headermMde="none">
      <RootStack.Screen name="Login" component={Login} />
      <RootStack.Screen name="Signup" component={Signup} />
    </RootStack.Navigator>
  );
};

export default RootStackScreen;
