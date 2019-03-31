import {
	LOGIN,
	LOGOUT,
	REHYDRATE_REDUCER,
	CREATE_OFFER,
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


export function createOfferAction(values) {	
	const counter = values
	return {
		type: CREATE_OFFER,
		payload: counter 
	};
}