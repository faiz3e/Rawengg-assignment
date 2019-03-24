

export const selectLoginState = (state) => {
  return state.loginReducer && state.loginReducer.isLoggedIn
}

export const selectUserInfo = (state) => {
  return state.loginReducer && state.loginReducer.userData && state.loginReducer.userData.email
}

export const selectErrorMessage = (state) => {
  if (state.loginReducer && state.loginReducer.error)
    return state.loginReducer.message
  if (state.loginReducer && state.loginReducer.fetching)
    return 'Loading...'
  if (state.loginReducer && state.loginReducer.success)
    return ''
  else
    return ''
}

