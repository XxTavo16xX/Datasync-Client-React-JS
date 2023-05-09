
const APIBASEURL = 'http://localhost:2279/datasync/'

// * This function will send the values required to create a new user account

export const createNewAccount = async (userEmail, userPassword, userFullName, userDisplayName, userProfilePicURL) => {

    const requestBody = {
        userEmail: userEmail,
        userPassword: userPassword,
        userFullName: userFullName,
        userDisplayName: userDisplayName,
        userProfilePicURL: userProfilePicURL
    }

    console.log(requestBody);

    const requestRespone = await fetch(APIBASEURL + 'v1/user/newAccount', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return requestRespone.json()

}

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

// * This function will send the values required to validate the user account email

export const validateAccountEmail = async (userReference) => {

    const requestBody = {
        referenceCode: userReference
    }

    const requestRespone = await fetch(APIBASEURL + 'v1/user/validate/email', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return requestRespone.json()

}