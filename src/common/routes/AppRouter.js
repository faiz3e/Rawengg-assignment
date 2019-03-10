import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import { PrivateRoutes } from './PrivateRoutes';
import { connect } from 'react-redux'
import { selectLoginState } from '../../home/pages/login/selector';

const loading = () => <div>Loading...</div>;

// Pages
const Login = Loadable({
	loader: () => import('../../home/pages/login/Login'),
	loading
});
const Dashboard = Loadable({
	loader: () => import('../../home/pages/dashboard/Dashboard'),
	loading
});
const PageNotFound = Loadable({
	loader: () => import('../../home/pages/pageNotFound/PageNotFound'),
	loading
});
const SignUp = Loadable({
	loader: () => import('../../home/pages/signUp/SignUp'),
	loading
});
class AppRouterComponent extends Component {
	render() {
		const isLoggedIn = this.props.isLoggedIn
		return (
			<Router>
				<Switch>
					<Route exact path="/" render={() => (<Redirect to="/dashboard" />)} />
					<Route exact path="/login" name="login" component={Login} />
					<PrivateRoutes exact path="/dashboard" component={Dashboard} isLoggedIn={this.props.isLoggedIn}/>
					<PrivateRoutes exact path="/signup" component={SignUp}  isLoggedIn={this.props.isLoggedIn}/>
					<Route exact path="/*" name="pageNotFound" component={PageNotFound}/>
				</Switch>
			</Router>
		);
	}
}

const mapStateToprops = (state) => {
  return {
    isLoggedIn: selectLoginState(state)
  }
}

export const AppRouter = connect(mapStateToprops)(AppRouterComponent)



