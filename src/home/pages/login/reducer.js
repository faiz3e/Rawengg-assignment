import { LOGIN, LOGIN_INITIATED, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT, LOGOUT_CALL, REHYDRATE_REDUCER } from "./actionTypes";

const initialState = {
  fetching: false,
  error: false,
  success: false,
  userData: {},
  isLoggedIn: false
};

export function loginReducer(state = initialState, action) {
  switch (action.type) {

    case LOGIN_INITIATED:
      return { ...state, fetching: true, error: false, success: false };

    case LOGIN_SUCCESS:
      return { ...state, fetching: false, error: false, success: true, userData: action.payload, isLoggedIn: true };

    case LOGIN_FAILED:
      return { ...state, fetching: false, error: true, success: false, userData: {}, isLoggedIn: false };

    case LOGOUT_CALL:
      return { ...state, fetching: false, error: false, success: false, userData: {}, isLoggedIn: false };

    case REHYDRATE_REDUCER:
    return { ...state, fetching: false, error: false, success: true, userData: action.payload, isLoggedIn: true };

    default:
      return state;
  }
}

