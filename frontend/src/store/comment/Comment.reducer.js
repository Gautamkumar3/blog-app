import { ADD_COMMENT_ERROR, ADD_COMMENT_LOADING, ADD_COMMENT_SUCCESS, DELETE_COMMENT_ERROR, DELETE_COMMENT_LOADING, DELETE_COMMENT_SUCCESS, GET_COMMENT_ERROR, GET_COMMENT_LOADING, GET_COMMENT_SUCCESS, UPDATE_COMMENT_ERROR, UPDATE_COMMENT_LOADING, UPDATE_COMMENT_SUCCESS } from "./Comment.types"

const initialState = {
    getComments: {
        loading: false,
        error: false
    },
    addComments: {
        loading: false,
        error: false
    },
    removeComments: {
        loading: false,
        error: false
    },
    deleteComments: {
        loading: false,
        error: false
    },
    data: [],

}

export const commentReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_COMMENT_LOADING: {
            return {
                ...state, getComments: { ...state.getComments, loading: true }
            }
        }
        case GET_COMMENT_ERROR: {
            return {
                ...state, getComments: { ...state.getComments, loading: false, error: true }
            }
        }
        case GET_COMMENT_SUCCESS: {
            return {
                ...state,
                getComments: { ...state.getComments, loading: false, error: false },
                data: [...payload]
            }
        }
        case ADD_COMMENT_LOADING: {
            return {
                ...state, addComments: { ...state.addComments, loading: true }
            }
        }
        case ADD_COMMENT_ERROR: {
            return {
                ...state, addComments: { ...state.addComments, loading: false, error: true }
            }
        }
        case ADD_COMMENT_SUCCESS: {
            return {
                ...state,
                addComments: { ...state.addComments, loading: false, error: false },
                data: [...state.data, payload]
            }
        }
        case UPDATE_COMMENT_LOADING: {
            return {
                ...state, updateComments: { ...state.Comments, loading: true }
            }
        }
        case UPDATE_COMMENT_ERROR: {
            return {
                ...state, updateComments: { ...state.updateComments, loading: false, error: true }
            }
        }
        case UPDATE_COMMENT_SUCCESS: {
            return {
                ...state,
                updateComments: { ...state.updateComments, loading: false, error: false },
                data: [...state.data, payload]
            }
        }
        case DELETE_COMMENT_LOADING : {
            return {
                ...state, 
                deleteComments : {...state.deleteComments, loading:true}
            }
        }
        case DELETE_COMMENT_ERROR : {
            return {
                ...state, 
                deleteComments : {...state.deleteComments, loading:false, error:true}
            }
        }
        case DELETE_COMMENT_SUCCESS : {
            return {
                ...state, 
                deleteComments : {...state.deleteComments, loading:false,error:false}
            }
        }

        default: {
            return state;
        }
    }
}