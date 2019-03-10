import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Formik, Field } from 'formik';

import { Button, InputBox } from '../../../common/components';
import { validateEmail, validatePassword } from '../../../common/helpers/validators';
import { doLogin, doLogout, rehydrateReducer } from './ActionCreators';
import { selectLoginState } from './selector';
import { doSignUp } from '../signUp/ActionCreators';

class Login extends Component {
  componentDidMount() {
    const localData = localStorage.getItem('userData');
    if (localData && localData.length > 0) {
      let localDataCopy = JSON.parse(localData)
      this.props.rehydrateReducer(localDataCopy)
    }
  }
  componentDidUpdate() {
    this.props.isLoggedIn &&
      this.props.history.push('/')
  }

  render() {
    return (
      <div >
        <Formik initialValues={{ email: '', password: '' }}
          onSubmit={(values) => {
            this.props.login(values)
          }}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <h2>login</h2>
              <Field name="email" component={InputBox} type={'email'} validate={validateEmail} placeholder={'Email Id'} />
              <Field name="password" component={InputBox} type={'password'} placeholder={'Password'} validate={validatePassword} />
              <Button title='LOG IN' type="submit" onClicked={() => {
              }} />
              <Button title='SIGN UP' type='button' onClicked={
                ()=>{}
              } >
              </Button>
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

const mapStateToprops = (state) => {
  return {
    isLoggedIn: selectLoginState(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (values) => dispatch(doLogin(values)),
    signup:(values)=>dispatch(doSignUp(values)),
    rehydrateReducer: (values) => dispatch(rehydrateReducer(values))
  }
}

export default Login = connect(mapStateToprops, mapDispatchToProps)(Login)

