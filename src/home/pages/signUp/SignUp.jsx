import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Formik, Field } from 'formik';

import { Button, InputBox } from '../../../common/components';
import { validateEmail, validatePassword } from '../../../common/helpers/validators';
import { doSignUp } from './ActionCreators';

class SignUp extends Component {
	render() {
		return (
			<div >
				<Formik initialValues={{ email: '', password: '' }}
					onSubmit={(values) => {
						console.log("calues",values);
						this.props.signup(values)
					}}
				>
					{({ handleSubmit }) => (
						<form onSubmit={handleSubmit}>
							<h2>Sign up</h2>
							<Field name="email" component={InputBox} type={'email'} validate={validateEmail} placeholder={'Email Id'} />
							<Field name="password" component={InputBox} type={'password'} placeholder={'Password'} validate={validatePassword} />
							<Button title='SIGN UP' type="submit" onClicked={() => {
							}} />
						</form>
					)}
				</Formik>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
    signup:(values)=>dispatch(doSignUp(values)),
  }
}

export default SignUp = connect(null, mapDispatchToProps)(SignUp)

