import { BASE_URL, KEY } from "../../../common/helpers/url";

export const signUpAPI = async (email, password) => {
    const authData = {
        method: 'POST',
        headers: new Headers(),
        body: JSON.stringify({
            email: email,
            password: password
        })
    }
    const response = await fetch(`${BASE_URL}/signupNewUser?key=${KEY}`, authData);
    const resp = await response.json();
    console.log("response", resp);
    return resp

}
