import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Login from "./Page/Login";
import Signup from "./Page/Signup";

class Routes extends Component<{}> {
    render() {
        return (
            <Router>
                <Scene key="root" hideNavBar={true}>
                    <Scene key="login" component={Login} title="Login" initial={true}/>
                    <Scene key="signup" component={Signup} title="Signup"/>
                </Scene>
            </Router>
        )
    }
}

export default Routes;