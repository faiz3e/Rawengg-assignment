import { SIGN_UP_INITIATED, SIGN_UP_SUCCESS, SIGN_UP_FAILED } from "./actionTypes";

const initialState = {
  fetching: false,
  error: false,
  success: false,
};

export function signupReducer(state = initialState, action) {
  switch (action.type) {

    case SIGN_UP_INITIATED:
      console.log("SIGN_UP_INITIATED");
      return { ...state, fetching: true, error: false, success: false };

    case SIGN_UP_SUCCESS:
      console.log("SIGN_UP_INITIATED");
      return { ...state, fetching: false, error: false, success: true };

    case SIGN_UP_FAILED:
      console.log("SIGN_UP_INITIATED");
      return { ...state, fetching: false, error: true, success: false };

    default:
      return state;
  }
}

