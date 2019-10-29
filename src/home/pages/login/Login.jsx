import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { Formik, Field } from 'formik'
import { Button, InputBox } from '../../../common/components';
import { validateEmail, validatePassword } from '../../../common/helpers/validators';
import { doLogin, rehydrateReducer } from './ActionCreators';
import { selectLoginState, selectErrorMessage } from './selector';
import { StatusMessage } from '../../../common/components/statusMessage/StatusMessage';
import Log from '../../../common/helpers/logger';
import { addDetailsApi } from './api';

class Login extends Component {

  componentDidMount() {
    Log.trace('Login Component!', 'Mounting');
    const localData = localStorage.getItem('userData');
    if (localData && localData.length > 0) {
      let localDataCopy = JSON.parse(localData)
      this.props.rehydrateReducer(localDataCopy)
      Log.info('Login Component!', 'rehydrating Reducer');
    }
  }

  componentDidUpdate() {
    Log.trace('Login componentDidUpdate!', this.props);
    this.props.isLoggedIn &&
      this.props.history.replace('/dashboard')
  }

  jumpToSignup = () => {
    this.props.history.push('/signup')
  }

  render() {
    return (
      <div className='container mt-5 pt-5' >
        <div className='row'>
          <div className='col-md-12'>
          <Formik initialValues={{ email: '', password: '' }}
          onSubmit={(values) => {
            this.props.login(values)
          }}>
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <h2>Login</h2>
              <br/>

              <Field name="email" component={InputBox} type={'email'} validate={validateEmail} placeholder={'Email Id'} />
              <br/>
              <Field name="password" component={InputBox} type={'password'} placeholder={'Password'} validate={validatePassword} /><br />
              <br/> 
              <div className='row'>
                <div className='col-md-12 align-center justify-content-center d-flex'>
              <button className='btn-primary p-2 pl-4 pr-4 rounded-pill' type="submit" onClick={() => { }} >{'LOG IN'}</button>
                </div>
                </div>             
              <br />
              <div className='row'>
                <div className='col-md-12 align-center justify-content-center d-flex'>
              <p className='text-primary pointer' onClick={this.jumpToSignup}>{'SIGN UP'}</p>
                </div>
                </div>
              {/* <Button title='SIGN UP' type='button' onClicked={() => { }} navigateTo={'/signup'} /> */}
              <br />
              <StatusMessage message={this.props.feedBackMessage} />
            </form>
          )}
        </Formik>
          </div>
        </div>
     
        {/* <button type='button' onClick={()=>addUser({name:'faizan',email:"faizan@sad.com"})} >Add user</button> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
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

export default Login = connect(mapStateToProps, mapDispatchToProps)(Login)

