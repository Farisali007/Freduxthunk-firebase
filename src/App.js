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
            apiKey: "AIzaSyDaYqYZDOKWDpL37RRSBvNSqLDENNbhdQI",
            authDomain: "rnfinalproject.firebaseapp.com",
            databaseURL: "https://rnfinalproject.firebaseio.com",
            projectId: "rnfinalproject",
            storageBucket: "rnfinalproject.appspot.com",
            messagingSenderId: "526789386106",
            appId: "1:526789386106:web:7590913b4466f208"
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
