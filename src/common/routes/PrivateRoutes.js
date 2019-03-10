import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoutes = ({ component: Component, isLoggedIn, ...rest }) => (
	<React.Fragment>
		<Route {...rest} render={(props) => (
			isLoggedIn === true
				?
				<Component {...props} />
				:
				<Redirect to={{ pathname: '/login', state: { from: props.location } }} />
		)} />
	</React.Fragment>
)
