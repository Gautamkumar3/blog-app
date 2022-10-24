import { legacy_createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"
import { authReducer } from "./auth/Auth.reducer";
import { commentReducer } from "./comment/Comment.reducer";
import { postReducer } from "./Post/Post.reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    posts: postReducer,
    comments: commentReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))


