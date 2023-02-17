
const APIBASEURL = 'http://localhost:2279/datasync/'

export const sendLoginRequest = (userEmail, userPassword) => {

    return new Promise(async resolve => {

        if (!userEmail) return resolve({ error: true, message: 'userEmail Missing' })
        if (!userPassword) return resolve({ error: true, message: 'userPassword Missing' })

        const requestBody = {
            userEmail: userEmail,
            userPassword: userPassword
        }

        const rawResponse = await fetch(APIBASEURL + 'api/v1/auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        
        resolve(await rawResponse.json())


    })




}