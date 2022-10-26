import axios from "axios";
import { AUTH_LOGIN_ERROR, AUTH_LOGIN_LOADING, AUTH_LOGIN_SUCCESS, AUTH_SIGNUP_ERROR, AUTH_SIGNUP_LOADING, AUTH_SIGNUP_SUCCESS, getWriterId, LOGOUT_SUCCESS } from "./Auth.types";



export const UserSignup = (data) => async (dispatch) => {
    dispatch({ type: AUTH_SIGNUP_LOADING })
    try {
        const res = await axios.post("http://localhost:8080/users/signup", data);
        dispatch({ type: AUTH_SIGNUP_SUCCESS });
        return res;
    } catch (er) {
        dispatch({ type: AUTH_SIGNUP_ERROR })
    }
}


export const UserLogin = (data) => async (dispatch) => {
    dispatch({ type: AUTH_LOGIN_LOADING })
    try {
        const res = await axios.post("http://localhost:8080/users/login", data);
        dispatch({ type: AUTH_LOGIN_SUCCESS, payload: res.data });
        return res
    } catch (er) {
        dispatch({ type: AUTH_LOGIN_ERROR })
    }
}

export const UserLogout = () => async (dispatch) => {
    dispatch({ type: LOGOUT_SUCCESS })
}

export const writerId = (id) => async (dispatch) => {
    dispatch({ type: getWriterId, payload: id })
}

