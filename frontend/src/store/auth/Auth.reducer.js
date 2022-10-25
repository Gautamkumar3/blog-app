import { AUTH_LOGIN_ERROR, AUTH_LOGIN_LOADING, AUTH_LOGIN_SUCCESS, AUTH_SIGNUP_ERROR, AUTH_SIGNUP_LOADING, AUTH_SIGNUP_SUCCESS, LOGOUT_SUCCESS } from "./Auth.types";

// const token = JSON.parse(localStorage.getItem("token")).token || "";

const initialState = {
    token: "",
    loading: false,
    error: false
}

export const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case AUTH_SIGNUP_LOADING: {
            return {
                ...state, loading: true
            }
        }
        case AUTH_SIGNUP_ERROR: {
            return {
                ...state, error: true, loading: false
            }
        }
        case AUTH_SIGNUP_SUCCESS: {
            return {
                ...state, loading: false, error: false
            }
        }
        case AUTH_LOGIN_LOADING: {
            return {
                ...state, loading: true
            }
        }
        case AUTH_LOGIN_ERROR: {
            return {
                ...state, loading: false, error: true
            }
        }
        case AUTH_LOGIN_SUCCESS: {
            localStorage.setItem("token", JSON.stringify(payload))
            return {
                ...state, loading: false, error: false, token: payload.token
            }
        }
        case LOGOUT_SUCCESS: {
            console.log("Yes")
            localStorage.removeItem("token")
        }
        default: {
            return state;
        }
    }
}