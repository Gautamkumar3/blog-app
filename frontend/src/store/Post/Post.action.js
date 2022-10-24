import axios from "axios"
import { ADD_POST_ERROR, ADD_POST_LOADING, ADD_POST_SUCCESS, GET_POST_ERROR, GET_POST_LOADING, GET_POST_SUCCESS } from "./Post.types"

const token = JSON.parse(localStorage.getItem("token")).token || "";


export const getPostsData = (id) => async (dispatch) => {
    dispatch({ type: GET_POST_LOADING });
    try {
        const res = await axios.get(`http://localhost:8080/post/${id}`, {
            headers: {
                authorization: token
            }
        })
        dispatch({ type: GET_POST_SUCCESS, payload: res.data });
        return res;
    } catch (er) {
        dispatch({ type: GET_POST_ERROR })
    }
}

export const PostPostData = (data, id) => async (dispatch) => {
    dispatch({ type: ADD_POST_LOADING });

    try {
        const res = await axios.post("http://localhost:8080/posts", data, {
            headers: {
                authorization: token,
            }
        })
        dispatch({ type: ADD_POST_SUCCESS, payload: res.data });
        dispatch(getPostsData(id))
    } catch (er) {
        dispatch({ type: ADD_POST_ERROR })
    }
}