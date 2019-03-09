import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

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

export class AppRouter extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/login" name="Page 500" component={Login} />
					<Route exact path="/dashboard" name="Dashboard" component={Dashboard} />
					<Route exact path="/" name="Login" component={Login} />
					<Route exact path="/*" name="pageNotFound" component={PageNotFound} />

					
				</Switch>
			</Router>
		);
	}
}
