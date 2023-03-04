import { legacy_createStore, applyMiddleware, combineReducers, compose } from "redux"
import thunk from "redux-thunk"
import { adminReducer } from "./admin/admin.reducer";
import { authReducer } from "./auth/Auth.reducer";
import { commentReducer } from "./comment/Comment.reducer";
import { postReducer } from "./Post/Post.reducer";

const rootReducer = combineReducers({
    auth: authReducer,
    posts: postReducer,
    comments: commentReducer,
    admin : adminReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


