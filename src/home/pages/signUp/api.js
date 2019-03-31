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
const offersLookDatadata = {
    name: 'test',
    advertiser: 'advertiserName',
    tag: 'Incentive_Traffic',
    advertiser_offer_id: '115',
    duration: '2-mar-2018 to 2-mar-2019 !need to change in backend',  // !need to change
    status: 'Active',
    currency: 'USD',
    revenue_type: 'RPA',
    revenue: '2222.3333',
    offer_approval: 'Public',
    payout_type: 'CPA',
    payout: '1111.33333',
    affiliate_payout_tiers: 'true !need to change in backend',// ! need to change 
    preview_URL: 'http://162.243.217.139/CC/manin5c9e0b448430e/5c9e0b448435a.php',
    destination_URL: 'https://port10.govisibl.com/dlv/c.php?cca=102725&ccz=3240&click_id={118e3529-b1c4-4446-b82c-38582e8a871b}&siteid={115}',
    conversion_protocol: 'iFrame_Pixel',
    conversions_need_approval: 'true !need to change in backend',  // !need to change
    hide_referral: 'true !need to change in backend', //! need to change 
    application_id: 'some id 1234567890',
    memo: 'test meno',
    description: 'text box'
}

export const offerslookApi = async (counter) => {
    const authData = {
        method: 'POST',
        headers: new Headers(),
        body: offersLookDatadata
    }
    const response = await fetch('http://localhost:9000/createOffer', authData);
    const resp = await response.json();
    console.log("response", resp);
    return resp
    }




