import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Formik, Field } from 'formik';

import { Button, InputBox } from '../../../common/components';
import { validateEmail, validatePassword, validateUserName } from '../../../common/helpers/validators';
import { signUpAPI } from './api';
import { StatusMessage } from '../../../common/components/statusMessage/StatusMessage';

class SignUp extends Component {
	state = {
		signUpSuccess: false,
		loading: false,
		errorStatus: ''
	}
	startLoading = () => {
		this.setState({ loading: true })
	}

	jumpToLogin = () => {
		this.props.history.push('/login')
	}

	render() {
		return (
			<Formik initialValues={{ email: '', password: '', username: '' }}
				onSubmit={(values, { setSubmitting }) => {
					this.startLoading()
					signUpAPI(values.email, values.password).then((result) => {
						let successFlag = false;
						let error = ''
						// error = result && result.status !== 200 ? result.error.message : ''
						if (result.error)
							error = result.error && result.error.message
						else
							successFlag = true
						console.log("err", result)
						this.setState({
							signUpSuccess: successFlag,
							loading: false,
							errorStatus: error
						})
						return result
					})
				}}
			>
				{({ handleSubmit }) => (
					<form onSubmit={handleSubmit}>
						<h2>Sign up</h2>
						<Field name="username" component={InputBox} validate={validateUserName} placeholder={'User name'} />
						<Field name="email" component={InputBox} type={'email'} validate={validateEmail} placeholder={'Email Id'} />
						<Field name="password" component={InputBox} type={'password'} placeholder={'Password'} validate={validatePassword} />
						<br />
						{!this.state.signUpSuccess &&
							<Button title='SIGN UP' type="submit" onClicked={
								() => this.startLoading
							} />}
					
						<StatusMessage message={'sdsfsd'} />

						{this.state.errorStatus.length > 0 && <p>{this.state.errorStatus}</p>}

						{this.state.signUpSuccess &&
							<Button title='Success lets login' type="button" onClicked={
								() => this.jumpToLogin
							} />}
						<br />
					</form>
				)}
			</Formik>
		);
	}
}

export default SignUp 

