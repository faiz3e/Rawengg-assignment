import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import { PrivateRoutes } from './PrivateRoutes';

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
export class AppRouter extends Component {
	render() {
		return (
			<Router>
				<Switch>
				<Route exact path="/" render={() => (<Redirect to="/dashboard" />)} />
					<Route exact path="/login" name="login" component={Login} />
					<PrivateRoutes exact path="/dashboard" component={Dashboard} />
					<PrivateRoutes exact path="/signup" component={SignUp} />
				
					<Route exact path="/*" name="pageNotFound" component={PageNotFound} />
				</Switch>
			</Router>
		);
	}
}
