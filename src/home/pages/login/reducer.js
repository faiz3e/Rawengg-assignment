
const initialState = {
  products: false,
  users: null,
  error: null,
  success: false
};

export function loginReducer(state = initialState, action) {
  switch (action.type) {

    case 'IS_LOGGED_IN':
      return { ...state };

    // case FETCH_PRODUCT_INITIATE:
    //   return { ...state, fetching: true, error: false, success: false };

    // case FETCH_PRODUCT_SUCCESS:
    //   return { ...state, fetching: false, error: false, success: true, products: action.payload };

    // case FETCH_PRODUCT_FAILED:
    //   return { ...state, fetching: false, error: true, success: false };

    default:
      return state;
  }
}

