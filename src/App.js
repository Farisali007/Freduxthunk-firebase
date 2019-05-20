import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers'
import firebase from "firebase";
import LoginForm from "./components/LoginForm";
import EmployeeList from "./components/EmployeeList";
import { Scene,Router } from
    "react-native-router-flux";

export default class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDnagRezL-rbrBja_w-RDXbMxfWE_pnPfc",
            authDomain: "firstapp-191e9.firebaseapp.com",
            databaseURL: "https://firstapp-191e9.firebaseio.com",
            projectId: "firstapp-191e9",
            storageBucket: "firstapp-191e9.appspot.com",
            messagingSenderId: "824965216994",
            appId: "1:824965216994:web:bde5bfd38efe8ea6"
        });
    }
    render() {
        const store = createStore(reducers, {},
            applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
               < Router>
<Scene key="root" hideNavBar>
                    <Scene key="auth">
                        <Scene
                            key="login"
                            component={LoginForm}
                            title="Please Login"
                            initial
                        />
                    </Scene>
                    <Scene key="main">
                        <Scene
                            key="employeeList"
                            component={EmployeeList}
                            title="Employees"
                        />
                    </Scene>
                </Scene>
</Router>
            </Provider >
        );
    }
}
