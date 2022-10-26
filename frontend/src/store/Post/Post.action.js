import axios from "axios"
import { ADD_POST_ERROR, ADD_POST_LOADING, ADD_POST_SUCCESS, DELETE_POST_ERROR, DELETE_POST_LOADING, DELETE_POST_SUCCESS, GET_POST_ERROR, GET_POST_LOADING, GET_POST_SUCCESS, UPDATE_POST_ERROR, UPDATE_POST_LOADING } from "./Post.types"

const token = JSON.parse(localStorage.getItem("token")) || "";


export const getPostsData = (id) => async (dispatch) => {
    console.log(id, "idsssss")
    dispatch({ type: GET_POST_LOADING });
    try {
        const res = await axios.get(`http://localhost:8080/posts/${id}`, {
            headers: {
                authorization: token.token
            }
        })
        dispatch({ type: GET_POST_SUCCESS, payload: res.data });
        return res;
    } catch (er) {
        dispatch({ type: GET_POST_ERROR })
    }
}

export const AddPostData = (data) => async (dispatch) => {
    dispatch({ type: ADD_POST_LOADING });

    try {
        const res = await axios.post("http://localhost:8080/posts", data, {
            headers: {
                authorization: token.token,
            }
        })
        dispatch({ type: ADD_POST_SUCCESS, payload: res.data });
       
    } catch (er) {
        dispatch({ type: ADD_POST_ERROR })
    }
}

export const DeletePostData = (id) => async (dispatch) => {
    dispatch({ type: DELETE_POST_LOADING })

    try {
        const res = await axios.delete(`http://localhost:8080/posts/${id}`, {
            headers: {
                authorization: token.token,
                unique: id
            }
        })
        dispatch({ type: DELETE_POST_SUCCESS, payload: res.data })
        dispatch(getPostsData(id))
    } catch (er) {
        dispatch({ type: DELETE_POST_ERROR })
    }
}

export const UpdatePostData = () => async (dispatch) => {
    dispatch({ type: UPDATE_POST_LOADING })

    try {

    } catch (er) {
        dispatch({ type: UPDATE_POST_ERROR })
    }
}