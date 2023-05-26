
// * Dependencies Required

const API_BASE_URL = 'http://localhost:2279/datasync/v1/'

export class DATASYNC_API {

    constructor(notificationContextValues) {        

        // * Declaring API Routes

        this.routes = {
            auth: {
                token: 'auth/token',
                restorePasswordAccount: 'auth/restorePassword',
                validateAuthenticationCode: 'auth/restorePassword/validate',
                saveNewPasswordAccount: 'auth/restorePassword/update'
            },
            user: {
                newAccount: 'user/newAccount',
                loginAccount: 'user/login',
                getAccountPublicDataByEmail: 'user/get',
                ping: 'user/ping',
                validateAccountEmailLinked: 'user/validate/email'
            }

        }

        const requestErrorHandler = (error) => {
            
            if (error) {

                const setNotificationContext = notificationContextValues.updateFunction

                setNotificationContext([...notificationContextValues.value, {title:'Datasync', message:'Hay un problema de conexión. inténtalo nuevamente más tarde.'} ])

                console.log('ERROR CONECTING TO SERVER');
            }

        }

        // * Send Request Private Function

        const sendRequest = async (url, method, data) => {

            return fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify(data),
            }).then(async (response) => { return {status: response.status, response: await response.json()} }).catch( requestErrorHandler );
        }

        // * Auth Endpoints

        this.auth = {
            token: (requestBody) => { return sendRequest(API_BASE_URL + this.routes.auth.token, 'POST', requestBody) }
        }

        // * User Endpoints

        this.user = {
            login: (requestBody) => { return sendRequest(API_BASE_URL + this.routes.user.loginAccount, 'POST', requestBody) },
            newAccount: (requestBody) => { return sendRequest(API_BASE_URL + this.routes.user.newAccount, 'POST', requestBody) }
        }

    }

}