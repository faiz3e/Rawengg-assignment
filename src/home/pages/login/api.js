import { BASE_URL, KEY } from "../../../common/helpers/url";

export const loginAPI = async (email, password) => {
	const authData = {
		method: 'POST',
		headers: new Headers(),
		body: JSON.stringify({
			email: email,
			password: password
		})
	}
	const response = await fetch(`${BASE_URL}/verifyPassword?key=${KEY}`, authData);
	const resp = await response.json();
	if (resp.error) {
		return resp.error
	} else {
		let token = {
			idToken: resp.idToken,
			localId: resp.localId,
			email: resp.email,
			registered: resp.registered
		}
		return token
	}
}

export const addDetailsApi=async(values)=>{
	const authData = {
        method: 'GET',
        // headers: new Headers(),
        // body: JSON.stringify({
        //     values:values
           
        // })
	}
	
	const resp = fetch(`https://rawengg-92652.firebaseio.com/data.json`,authData);
	const r = await resp;
	let data = await r.json();
	console.log("data",data);
	
}
