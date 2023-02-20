import { useToast } from "@chakra-ui/react";
import axios from "axios";
import {
  AUTH_LOGIN_ERROR,
  AUTH_LOGIN_LOADING,
  AUTH_LOGIN_SUCCESS,
  AUTH_SIGNUP_ERROR,
  AUTH_SIGNUP_LOADING,
  AUTH_SIGNUP_SUCCESS,
  LOGOUT_SUCCESS,
} from "./Auth.types";

const api = "https://backend-deploy-render-production-c99e.up.railway.app";
// const api = "https://backend-deploy-render-production.up.railway.app";
// const api = "http://localhost:8080";

export const UserSignup = (data) => async (dispatch) => {
  dispatch({ type: AUTH_SIGNUP_LOADING });
  try {
    const res = await axios.post(`${api}/users/signup`, data);
    dispatch({ type: AUTH_SIGNUP_SUCCESS, payload: res.data });
    return res.data;
  } catch (er) {
    return dispatch({ type: AUTH_SIGNUP_ERROR, msg: er.message });
  }
};

export const UserLogin = (data) => async (dispatch) => {
  dispatch({ type: AUTH_LOGIN_LOADING });
  try {
    const res = await axios.post(`${api}/users/login`, data);
    dispatch({ type: AUTH_LOGIN_SUCCESS, payload: res.data });
    return res;
  } catch (er) {
    return dispatch({ type: AUTH_LOGIN_ERROR, payload: er });
  }
};

export const UserLogout = () => async (dispatch) => {
  dispatch({ type: LOGOUT_SUCCESS });
};
