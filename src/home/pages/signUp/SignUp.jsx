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

	jumpToLogin(){
		
	}

	render() {
		return (
			<div className='container mt-5 pt-5' >
				<div className='row'>
					<div className='col-md-12'>
						<Formik initialValues={{ email: '', password: '', username: '' }}
							onSubmit={(values, { setSubmitting }) => {
								this.startLoading()
								signUpAPI(values.email, values.password, values.username).then((result) => {
									let successFlag = false;
									let error = ''
									// error = result && result.status !== 200 ? result.error.message : ''
									if (result.error)
										error = result.error && result.error.message
									else
										successFlag = true
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
									<br />
									<Field name="username" component={InputBox} validate={validateUserName} placeholder={'User name'} />
									<br />
									<Field name="email" component={InputBox} type={'email'} validate={validateEmail} placeholder={'Email Id'} />
									<br />
									<Field name="password" component={InputBox} type={'password'} placeholder={'Password'} validate={validatePassword} />
									<br />
									<div className='row pt-4'>
										<div className='col-md-12 align-center justify-content-center d-flex'>
									{!this.state.signUpSuccess &&
										<button className='btn-primary p-2 pl-4 pr-4 rounded-pill' type="submit" onClick={() => this.startLoading} >{'SIGN UP'}</button>
									}
									</div></div>
									<br />
									<div className='row'>
										<div className='col-md-12 align-center justify-content-center d-flex'>
											{!this.state.signUpSuccess &&
												<p className='text-primary pointer' onClick={()=>this.props.history.push('/login')}>{'LOGIN IN INSTEAD'}</p>
											}
											<StatusMessage message={this.state.errorStatus} />
										</div>
									</div>


									{/* {this.state.errorStatus.length > 0 && <p>{this.state.errorStatus}</p>} */}
									<br />
									<div className='row'>
										<div className='col-md-12 align-center justify-content-center d-flex'>
									{this.state.signUpSuccess &&
										<button className='btn btn-success p-2 pl-4 pr-4 rounded-pill' type="button" onClick={
											() => this.props.history.push('/dashboard')
										} >{'Success lets go to forms'}</button>}
									<br />
									</div></div>
								</form>
							)}
						</Formik>
					</div>
				</div>
			</div>
		);
	}
}

export default SignUp

