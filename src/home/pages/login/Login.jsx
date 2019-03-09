import React, { Component } from 'react';
import { Button, InputBox } from '../../../common/components';
import PropTypes from 'prop-types';


class Login extends Component {
  render() {
    return (
      <div >
        <div>login</div>
        <InputBox type={'text'} placeholder={'username'}> </InputBox>
        <InputBox type={'password'} placeholder={'password'}> </InputBox>

        <Button title='SIGN in' onClicked={() => { 
          
        }} />
      </div>
    );
  }
}

export default Login;
