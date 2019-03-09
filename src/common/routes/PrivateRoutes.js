import React from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoutes = ({ component: Component, ...rest }) => (
	<div>
		<Route {...rest} render={(props) => (
			isAuth === true
				?
				<div>
					<Component {...props} />
					{console.log(props)
					}
				</div> :
				<Redirect to={{ pathname: '/login', state: { from: props.location } }} />
		)} />
	</div>
)

const isAuth = true;