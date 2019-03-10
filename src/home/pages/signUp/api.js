import { BASE_URL, KEY } from "../../../common/helpers/url";

export const signUpAPI = async (email, password) => {
    console.log("email, password",email, password);
    
    const authData = {
        method: 'POST',
        headers: new Headers(),
        body: JSON.stringify({
            email: email,
            password: password
        })
    }
    const response = await fetch(`${BASE_URL}/signupNewUser?key=${KEY}`,authData);
    // const response = await fetch(`${BASE_URL}/verifyPassword?key=${KEY}`, authData);
    const resp = await response.json();
    console.log("response", resp);
    // let token = {
    //     idToken: resp.idToken,
    //     localId: resp.localId,
    //     registered: resp.registered
    // }
    // return token
}
