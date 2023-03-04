import axios from "axios";
import {
  ADMIN_GET_DATA_ERROR,
  ADMIN_GET_DATA_LOADING,
  ADMIN_GET_DATA_SUCCESS,
} from "./admin.types";

const api = "http://localhost:8080/users";

export const getAllUserData = () => async (dispatch) => {
  dispatch({ type: ADMIN_GET_DATA_LOADING });
  try {
    let res = await axios.get(`${api}/all_user`);
    dispatch({ type: ADMIN_GET_DATA_SUCCESS, payload: res.data.data });
  } catch (er) {
    dispatch({ type: ADMIN_GET_DATA_ERROR });
  }
};
