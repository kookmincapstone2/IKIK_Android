/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';

// import Login from './Page/Login';
// import Signup from './Page/Signup';

// const AuthStack = createStackNavigator();

// export default () => (
//   <NavigationContainer>
//     <AuthStack.Navigator>
//       <AuthStack.Screen name="Login" component={Login} />
//       <AuthStack.Screen name="Signup" component={Signup} />
//     </AuthStack.Navigator>
//   </NavigationContainer>
// );

AppRegistry.registerComponent(appName, () => App);
