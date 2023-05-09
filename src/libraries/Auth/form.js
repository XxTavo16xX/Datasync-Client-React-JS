
// * Context Required

import { saveLocalContext } from "../../app/context";

// * Services Required

import { loginUser, createNewAccount } from "../../services/API/user";

// * Component Controller Required

import { setInputError } from "../../components/shared/controllers/Form";

// * This function will check if the email format match with azAZ09-.azAZ09@azAZ09.azAZ09

const isEmailValueInFormat = (emailValue) => {

    const emailCustomRegex = /^[a-zA-ZñÑ0-9]+([.-]?[a-zA-ZñÑ0-9]+)*@[a-zA-ZñÑ0-9]+(-[a-zA-ZñÑ0-9]+)*(\.[a-zA-ZñÑ0-9]+(-[a-zA-ZñÑ0-9]+)*)+$/;
    return emailCustomRegex.test(emailValue);

}

// * This funcion will detect when a Enter is enter into an input

export const handleInputKeyDown = event => {

    if (event.key === 'Enter' && event.target.id === 'auth_form_email_input') return document.getElementById('auth_form_password_input').focus()

    if (event.key === 'Enter' && event.target.id === 'auth_form_password_input') return handleAuthFormLogin()

}

// * This function will detect when a Enter is enter into an register input

export const handleRegisterInputKeyDown = event => {

    if (event.key === 'Enter' && event.target.id === 'auth_register_form_name_input') return document.getElementById('auth_register_form_lastname_input').focus()

    if (event.key === 'Enter' && event.target.id === 'auth_register_form_lastname_input') {

        const name = document.getElementById('auth_register_form_name_input').value.trim()
        const lastname = document.getElementById('auth_register_form_lastname_input').value.trim()

        const names = name.split(' ')
        const lastnames = lastname.split(' ')

        document.getElementById('auth_register_form_username_input').value = names[0] + ' ' + lastnames[0]
        return document.getElementById('auth_register_form_username_input').focus()

    }

    if (event.key === 'Enter' && event.target.id === 'auth_register_form_username_input') return document.getElementById('auth_register_form_email_input').focus()
    if (event.key === 'Enter' && event.target.id === 'auth_register_form_email_input') return document.getElementById('auth_register_form_password_input').focus()
    if (event.key === 'Enter' && event.target.id === 'auth_register_form_password_input') return document.getElementById('auth_register_form_confirm_password_input').focus()
    if (event.key === 'Enter' && event.target.id === 'auth_register_form_confirm_password_input') console.log('send');


}

// * This funcion will switch the inputType of password in login form view

export const switchPasswordInputType = () => {

    const formPasswordInput = document.getElementById('auth_login_form_password_input')

    if (formPasswordInput.type == 'text') return formPasswordInput.type = 'password'
    if (formPasswordInput.type == 'password') return formPasswordInput.type = 'text'

}

// * This function will switch the inputType for the passwords in register form view

export const switchPasswordsInputType = () => {

    const formPasswordInput = document.getElementById('auth_register_form_password_input')
    const formConfirmPasswordInput = document.getElementById('auth_register_form_confirm_password_input')

    if (formPasswordInput.type == 'text') {

        formPasswordInput.type = 'password'
        formConfirmPasswordInput.type = 'password'

        return
    }

    if (formPasswordInput.type == 'password') {

        formPasswordInput.type = 'text'
        formConfirmPasswordInput.type = 'text'
        return

    }

}

// * This function will get the form values, validate them, send the request and validate the response

export const handleAuthFormLogin = async () => {

    return new Promise(async resolve => {

        const authFormEmailInput = document.getElementById('auth_login_form_email_input')
        const authFormPasswordInput = document.getElementById('auth_login_form_password_input')

        // * Validating Values Received

        const authFormEmailValue = authFormEmailInput.value.trim()

        if (!authFormEmailValue) return setInputError('auth_login_form_email_input', 'Ingresa tu Correo electronico')
        if (isEmailValueInFormat(authFormEmailValue) === false) return setInputError('auth_login_form_email_input', 'Correo invalido')
        resolve(false)

        const authFormPasswordValue = authFormPasswordInput.value.trim()

        if (!authFormPasswordValue) return setInputError('auth_login_form_password_input', 'Ingresa tu Contraseña')
        if (authFormPasswordValue.length < 8) return setInputError('auth_login_form_password_input', 'Tu contraseña debe contener 8 caracteres')
        resolve(false)

        // * Making API Request

        loginUser(authFormEmailValue, authFormPasswordValue)
            .then(requestResponse => {

                if (requestResponse.isLoginAproved == false) {

                    if (requestResponse.message == "Can´t find an Account with the email provided") {

                        authFormPasswordInput.value = ''
                        setInputError('auth_login_form_email_input', 'No pudimos encontrar tu cuenta.')
                        return resolve(false)

                    }

                    if (requestResponse.message == "Wrong Password") {

                        authFormPasswordInput.value = ''
                        setInputError('auth_login_form_password_input', 'Verifica tu contraseña.')
                        return resolve(false)

                    }

                }

                if (requestResponse.isLoginAproved == true) {

                    console.log('success login');

                    saveLocalContext(requestResponse.AccountContext, requestResponse.userToken, requestResponse.userRefreshToken)
                    resolve(true)

                    window.location.href = '/app';

                }

            })
            .catch(error => {

                // ! Implement ERROR NOTIFICATION
                resolve(false)
                console.log(error);

            })

    })

}

// * This function will the the form values, validate the and send the request to create the new account

export const handleAuthFormRegister = () => {

    return new Promise(async resolve => {

        const authRegisterFormNameInput = document.getElementById('auth_register_form_name_input')
        const authRegisterFormLastnameInput = document.getElementById('auth_register_form_lastname_input')
        const authRegisterFormUsernameInput = document.getElementById('auth_register_form_username_input')
        const authRegisterFormEmailInput = document.getElementById('auth_register_form_email_input')
        const authRegisterFormPasswordInput = document.getElementById('auth_register_form_password_input')
        const authRegisterFormConfirmPasswordInput = document.getElementById('auth_register_form_confirm_password_input')
        const authRegisterFormProfilePicURL = document.getElementById('Register-Form-Avatar-Image').src.toString()

        // * Validating User Name

        const authRegisterFormNameValue = authRegisterFormNameInput.value.trim()

        if (!authRegisterFormNameValue) {

            setInputError('auth_register_form_name_input', '')
            return resolve(false);

        }

        // * Validating User LastName

        const authRegisterFormLastnameValue = authRegisterFormLastnameInput.value.trim()

        if (!authRegisterFormLastnameValue) {

            setInputError('auth_register_form_lastname_input', '')
            return resolve(false);

        }

        // * Validating Username

        const authRegisterFormUsernameValue = authRegisterFormUsernameInput.value.trim()

        if (!authRegisterFormUsernameValue) {

            setInputError('auth_register_form_username_input', '')
            return resolve(false);

        }

        // * Validating User Email

        const authRegisterFormEmailValue = authRegisterFormEmailInput.value.trim()

        if (!authRegisterFormEmailValue) {

            setInputError('auth_register_form_email_input', '')
            return resolve(false);

        }

        // * Validating User Password

        const authRegisterFormPassworValue = authRegisterFormPasswordInput.value.trim()

        if (!authRegisterFormPassworValue || authRegisterFormPassworValue.length < 8) {

            setInputError('auth_register_form_password_input', '')
            return resolve(false);

        }

        // * Validating User Password Confirm

        const authRegisterFormConfirmPasswordValue = authRegisterFormConfirmPasswordInput.value.trim()

        if (!authRegisterFormConfirmPasswordValue || authRegisterFormConfirmPasswordValue.length < 8) {

            setInputError('auth_register_form_confirm_password_input', '')
            return resolve(false);

        }

        // * Validating User Passwords Match

        if (authRegisterFormPassworValue != authRegisterFormConfirmPasswordValue) {
            setInputError('auth_register_form_password_input', '')
            setInputError('auth_register_form_confirm_password_input', '')
            return resolve(false);
        }

        // * Making Request API

        createNewAccount(authRegisterFormEmailInput.value.trim(), authRegisterFormPasswordInput.value.trim(), authRegisterFormNameInput.value.trim() + ' ' + authRegisterFormLastnameInput.value.trim(), authRegisterFormUsernameInput.value.trim(), authRegisterFormProfilePicURL)
            .then(requestResponse => {

                console.log('requestResponse');
                console.log(requestResponse);
                console.log('requestResponse');

                if (requestResponse.isAccountCreated === false && requestResponse.message === 'The email Provided is already in use. Login or Try another Email') {
                    setInputError('auth_register_form_email_input', '')
                    return resolve(false);
                }

                if (requestResponse.isAccountCreated === true && requestResponse.message === "User Account created successfully, verificate your email to avoid the deletion of your account in the next 72h"){
                    return resolve(true)
                }

            })
            .catch(error => {

                // ! Implement ERROR NOTIFICATION
                resolve(false)
                console.log('error');
                console.log(error);
                console.log('error');

            })



    })



}