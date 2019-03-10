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
    // const response = await fetch('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyAvm6smMNXala7bMtFO_s2tAX39tbMmN08',authData);
    const response = await fetch(`${BASE_URL}/verifyPassword?key=${KEY}`, authData);
    const resp = await response.json();
    console.log("response", resp);
    let token = {
        idToken: resp.idToken,
        localId: resp.localId,
        registered: resp.registered
    }
    return token
}
