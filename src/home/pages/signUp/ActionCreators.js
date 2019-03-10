import {
	SIGN_UP,
} from './actionTypes'

export function doSignUp(values) {
	console.log("doSignUp",values);
	const { email, password } = values
	return {
		type: SIGN_UP,
		payload: { email, password }
	};
}
