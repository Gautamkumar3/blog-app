import axios from "axios"
import { ADD_COMMENT_ERROR, ADD_COMMENT_LOADING, ADD_COMMENT_SUCCESS, DELETE_COMMENT_ERROR, DELETE_COMMENT_LOADING, DELETE_COMMENT_SUCCESS, GET_COMMENT_ERROR, GET_COMMENT_LOADING, GET_COMMENT_SUCCESS, UPDATE_COMMENT_ERROR, UPDATE_COMMENT_LOADING, UPDATE_COMMENT_SUCCESS } from "./Comment.types"


const token = JSON.parse(localStorage.getItem("token")) || ""


export const getAllComments = (id) => async (dispatch) => {
  dispatch({ type: GET_COMMENT_LOADING })

  try {
    const res = await axios.get(`http://localhost:8080/comments`, {
      headers: {
        authorization: token.token,
        postid: id
      }
    })
    dispatch({ type: GET_COMMENT_SUCCESS, payload: res.data })
    return res.data
  } catch (er) {
    dispatch({ type: GET_COMMENT_ERROR })
  }
}



export const addAllComments = (id, data) => async (dispatch) => {
  dispatch({ type: ADD_COMMENT_LOADING })
 

  try {
    const res = await axios.post(`http://localhost:8080/comments`, data, {
      headers: {
        authorization: token.token,
        postid: id
      }
    })
    dispatch({ type: ADD_COMMENT_SUCCESS, payload: res.data })
    dispatch(getAllComments(id))
    return res.data
  } catch (er) {
    dispatch({ type: ADD_COMMENT_ERROR })
  }
}

export const updateComments = (id, commId, data) => async (dispatch) => {

  dispatch({ type: UPDATE_COMMENT_LOADING })

  try {
    const res = await axios.patch(`http://localhost:8080/comments/${commId}`, data, {
      headers: {
        authorization: token.token,
      }
    })
    dispatch({ type: UPDATE_COMMENT_SUCCESS, payload: res.data })
    dispatch(getAllComments(id))
    return res.data
  } catch (er) {
    dispatch({ type: UPDATE_COMMENT_ERROR })
  }
}


export const deleteComments = (id, commId) => async (dispatch) => {
  dispatch({ type: DELETE_COMMENT_LOADING })

  try {
    const res = await axios.delete(`http://localhost:8080/comments/${commId}`, {
      headers: {
        authorization: token.token,
      }
    })
    dispatch({ type: DELETE_COMMENT_SUCCESS, payload: res.data })
    dispatch(getAllComments(id))
    return res.data
  } catch (er) {
    dispatch({ type: DELETE_COMMENT_ERROR })
  }
}

