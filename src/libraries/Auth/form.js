
// *  Dependencies Required

import { useNavigate } from 'react-router-dom'

// * Services Required

import { loginUser } from "../../services/API/user";

// * Component Controller Required

import { setInputError } from "../../components/shared/controllers/Form";
import { saveLocalContext } from "../../app/context";

// * This function will check if the email format match with azAZ09-.azAZ09@azAZ09.azAZ09

const isEmailValueInFormat = (emailValue) => {

    const emailCustomRegex = /^[a-zA-ZñÑ0-9]+([.-]?[a-zA-ZñÑ0-9]+)*@[a-zA-ZñÑ0-9]+(-[a-zA-ZñÑ0-9]+)*(\.[a-zA-ZñÑ0-9]+(-[a-zA-ZñÑ0-9]+)*)+$/;
    return emailCustomRegex.test(emailValue);

}

// * This function will get the form values, validate them, send the request and validate the response

export const handleAuthFormLogin = async () => {

    const authFormEmailInput = document.getElementById('auth_form_email_input')
    const authFormPasswordInput = document.getElementById('auth_form_password_input')

    // * Validating Values Received

    const authFormEmailValue = authFormEmailInput.value.trim()

    if (!authFormEmailValue) return setInputError('auth_form_email_input', 'Ingresa tu Correo electronico')
    if (isEmailValueInFormat(authFormEmailValue) === false) return setInputError('auth_form_email_input', 'Caracter Invalido')

    const authFormPasswordValue = authFormPasswordInput.value.trim()

    if (!authFormPasswordValue) return setInputError('auth_form_password_input', 'Ingresa tu Contraseña')
    if (authFormPasswordValue.length < 8) return setInputError('auth_form_password_input', 'Tu contraseña debe contener 8 caracteres')

    // * Making API Request

    loginUser(authFormEmailValue, authFormPasswordValue)
        .then(requestResponse => {

            if (requestResponse.isLoginAproved == false) {

                if (requestResponse.message == "Can´t find an Account with the email provided") {

                    authFormPasswordInput.value = ''
                    return setInputError('auth_form_email_input', 'No pudimos encontrar tu cuenta.')

                }

                if (requestResponse.message == "Wrong Password") {

                    authFormPasswordInput.value = ''
                    return setInputError('auth_form_password_input', 'Verifica tu contraseña.')

                }

            }

            if (requestResponse.isLoginAproved == true) {

                saveLocalContext(requestResponse.AccountContext, requestResponse.WorkspaceContext, requestResponse.userToken, requestResponse.userRefreshToken)
                

            }

        })
        .catch(error => {

            // ! Implement ERROR NOTIFICATION

        })

}