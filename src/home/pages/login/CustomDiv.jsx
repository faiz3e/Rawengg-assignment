import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Formik, Field } from 'formik';
import Select from 'react-select';

import { Button, InputBox } from '../../../common/components';
import { validateEmail, validatePassword } from '../../../common/helpers/validators';
import { doLogin, rehydrateReducer } from './ActionCreators';
import { selectLoginState, selectErrorMessage } from './selector';
import { StatusMessage } from '../../../common/components/statusMessage/StatusMessage';

export class CustomDiv extends Component {

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

  render() {
    return (
      <div >
        <Button title='SIGN UP' type='button' onClicked={
          () => this.jumpToSignup
        } />

        <Select
          value={null}
          onChange={this.handleChange}
          options={options}
        />
      </div>
    );
  }
}

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];
