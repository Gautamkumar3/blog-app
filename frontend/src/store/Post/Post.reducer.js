import { ADD_POST_ERROR, ADD_POST_LOADING, ADD_POST_SUCCESS, GET_POST_ERROR, GET_POST_LOADING, GET_POST_SUCCESS, UPDATE_POST_ERROR, UPDATE_POST_LOADING, UPDATE_POST_SUCCESS } from "./Post.types";

const initialState = {
    getPosts: {
        loading: false,
        error: false
    },
    addPosts: {
        loading: false,
        error: false
    },
    removePosts: {
        loading: false,
        error: false
    },
    deletePosts: {
        loading: false,
        error: false
    },
    data: [],

}

export const postReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_POST_LOADING: {
            return {
                ...state, getPosts: { ...state.getPosts, loading: true }
            }
        }
        case GET_POST_ERROR: {
            return {
                ...state, getPosts: { ...state.getPosts, loading: false, error: true }
            }
        }
        case GET_POST_SUCCESS: {
            return {
                ...state,
                getPosts: { ...state.getPosts, loading: false, error: false },
                data: [...payload]
            }
        }
        case ADD_POST_LOADING: {
            return {
                ...state, addPosts: { ...state.addPosts, loading: true }
            }
        }
        case ADD_POST_ERROR: {
            return {
                ...state, addPosts: { ...state.addPosts, loading: false, error: true }
            }
        }
        case ADD_POST_SUCCESS: {
            return {
                ...state,
                addPosts: { ...state.addPosts, loading: false, error: false },
                data: [...state.data, payload]
            }
        }
        case UPDATE_POST_LOADING: {
            return {
                ...state, updatePosts: { ...state.Posts, loading: true }
            }
        }
        case UPDATE_POST_ERROR: {
            return {
                ...state, updatePosts: { ...state.updatePosts, loading: false, error: true }
            }
        }
        case UPDATE_POST_SUCCESS: {
            return {
                ...state,
                updatePosts: { ...state.updatePosts, loading: false, error: false },
                data: [...state.data, payload]
            }
        }

        default: {
            return state;
        }
    }
}