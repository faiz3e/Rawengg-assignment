import {
	LOGIN,
	LOGOUT,
	REHYDRATE_REDUCER,
} from './actionTypes'

export function doLogin(values) {
	const { email, password } = values
	return {
		type: LOGIN,
		payload: { email, password }
	};
}

export function doLogout() {
	return {
		type: LOGOUT,
	};
}

export function rehydrateReducer(values) {
	return {
		type: REHYDRATE_REDUCER,
		payload: values
	}
}