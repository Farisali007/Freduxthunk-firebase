import { EMAIL_CHANGED,PASSWORD_CHANGED } from "./types";
import { Actions } from "react-native-router-flux";
export const emailChanged = text => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};
export const passwordChanged = text => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    Actions.employeeList();
};
export const loginUser = ({ email, password }) => {
    return dispatch => {
        console.log(email);
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(user => this.loginUserSuccess(dispatch, user))
            .catch(() => {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password)
                    .then(user => this.loginUserSuccess(dispatch, user));
            });
    };
};