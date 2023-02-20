import axios from "axios";
import {
  ADD_POST_ERROR,
  ADD_POST_LOADING,
  ADD_POST_SUCCESS,
  DELETE_POST_ERROR,
  DELETE_POST_LOADING,
  DELETE_POST_SUCCESS,
  GET_POST_ERROR,
  GET_POST_LOADING,
  GET_POST_SUCCESS,
  UPDATE_POST_ERROR,
  UPDATE_POST_LOADING,
  UPDATE_POST_SUCCESS,
} from "./Post.types";

const token = JSON.parse(localStorage.getItem("token")) || "";

const api = "https://backend-deploy-render-production-c99e.up.railway.app";
// const api = "https://backend-deploy-render-production.up.railway.app";
// const api = "http://localhost:8080";

export const getPostsData = (id) => async (dispatch) => {
  dispatch({ type: GET_POST_LOADING });
  try {
    const res = await axios.get(`${api}/posts/${id}`, {
      headers: {
        authorization: token.token,
      },
    });
    dispatch({ type: GET_POST_SUCCESS, payload: res.data });
    return res;
  } catch (er) {
    dispatch({ type: GET_POST_ERROR, payload: er });
  }
};

export const AddPostData = (data) => async (dispatch) => {
  dispatch({ type: ADD_POST_LOADING });

  try {
    const res = await axios.post(`${api}/posts`, data, {
      headers: {
        authorization: token.token,
      },
    });
    return dispatch({ type: ADD_POST_SUCCESS, payload: res.data });
  } catch (er) {
    return dispatch({ type: ADD_POST_ERROR, payload: er });
  }
};

export const DeletePostData = (id, userId) => async (dispatch) => {
  dispatch({ type: DELETE_POST_LOADING });

  try {
    const res = await axios.delete(`${api}/posts/${id}`, {
      headers: {
        authorization: token.token,
        unique: userId,
      },
    });
    dispatch({ type: DELETE_POST_SUCCESS, payload: res.data });
    dispatch(getPostsData(userId));
  } catch (er) {
    dispatch({ type: DELETE_POST_ERROR, payload: er });
  }
};

export const UpdatePostData = (id, userId, data) => async (dispatch) => {
  dispatch({ type: UPDATE_POST_LOADING });
  try {
    const res = await axios.patch(`${api}/posts/${id}`, data, {
      headers: {
        authorization: token.token,
        unique: userId,
      },
    });
    dispatch({ type: UPDATE_POST_SUCCESS, payload: res.data });
    dispatch(getPostsData(userId));
  } catch (er) {
    dispatch({ type: UPDATE_POST_ERROR, payload: er });
  }
};
