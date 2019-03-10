

export const selectLoginState = (state) => {
  console.log("selector value ",state);
  
    return state.loginReducer && state.loginReducer.isLoggedIn
  }