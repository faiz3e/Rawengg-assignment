import React, { Component } from 'react';
import { Button, InputBox } from '../../../common/components';
import PropTypes from 'prop-types';

import { Formik,Field } from 'formik';
import { validateEmail, validatePassword } from '../../../common/helpers/validators';

class Login extends Component {
  render() {
    return (
      <div >
        <Formik initialValues={{ email: '', password: '' }}
         

          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({handleSubmit}) => (
              <form onSubmit={handleSubmit}>
                <h2>login</h2>
                <Field name="email" component={InputBox} type={'email'} validate={validateEmail} placeholder={'Email Id'}/>
                <Field name="password" component={InputBox} type={'password'} placeholder={'Password'} validate={validatePassword}/>

                <Button title='LOG IN' type="submit" onClicked={() => {
                }} />
                <Button title='SIGN UP' onClicked={() => {
                  //redirect to SIGN UP
                }} >
                  Submit
              </Button>
              </form>
            )}



        </Formik>
      </div>
    );
  }
}

export default Login;
