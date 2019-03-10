

export const selectLoginState = (state) => {
  return state.loginReducer && state.loginReducer.isLoggedIn
}

export const selectUserInfo = (state) => {
  return state.loginReducer && state.loginReducer.userData && state.loginReducer.userData.email
}

export const selectErrorMessage = (state) => {
  return state.loginReducer && state.loginReducer.message 
}

