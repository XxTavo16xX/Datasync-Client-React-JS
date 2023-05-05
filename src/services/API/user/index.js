
const APIBASEURL = 'http://localhost:2279/datasync/'


export const loginUser = async (userEmail, userPassword) => {

    const requestBody = {
        userEmail: userEmail,
        userPassword: userPassword
    }

    const requestRespone = await fetch(APIBASEURL + 'v1/user/login', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return requestRespone.json()

}