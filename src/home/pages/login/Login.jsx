import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Formik, Field } from 'formik';

import { Button, InputBox } from '../../../common/components';
import { validateEmail, validatePassword } from '../../../common/helpers/validators';
import { doLogin, rehydrateReducer } from './ActionCreators';
import { selectLoginState, selectErrorMessage } from './selector';
import { StatusMessage } from '../../../common/components/statusMessage/StatusMessage';

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

  jumpToSignup = () => {
    this.props.history.push('/signup')
  }

  render() {
    return (
      <div >
        <Formik initialValues={{ email: '', password: '' }}
          onSubmit={(values) => {
            this.props.login(values)
          }}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <h2>Login</h2>
              <Field name="email" component={InputBox} type={'email'} validate={validateEmail} placeholder={'Email Id'} />
              <Field name="password" component={InputBox} type={'password'} placeholder={'Password'} validate={validatePassword} /><br />
              <Button title='LOG IN' type="submit" onClicked={() => { }} /><br />
              <Button title='SIGN UP' type='button' onClicked={
                () => this.jumpToSignup
              } />
              <br />
              <StatusMessage message={this.props.feedBackMessage} />
            </form>
          )}
        </Formik>
      </div>
    );
  }
}

const mapStateToprops = (state) => {
  return {
    isLoggedIn: selectLoginState(state),
    feedBackMessage: selectErrorMessage(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (values) => dispatch(doLogin(values)),
    rehydrateReducer: (values) => dispatch(rehydrateReducer(values))
  }
}

export default Login = connect(mapStateToprops, mapDispatchToProps)(Login)

