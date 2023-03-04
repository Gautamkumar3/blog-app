import {
  ADMIN_GET_DATA_ERROR,
  ADMIN_GET_DATA_LOADING,
  ADMIN_GET_DATA_SUCCESS,
} from "./admin.types";

const initialState = {
  loading: false,
  error: false,
  data: [],
};

export const adminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADMIN_GET_DATA_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
        data: [],
      };

    case ADMIN_GET_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    case ADMIN_GET_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    default:
      return {
        ...state,
      };
  }
};
