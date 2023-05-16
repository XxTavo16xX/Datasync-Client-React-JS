
// * Services Required

import { loginUser, createNewAccount } from "../../../services/API/user"

// * Context Function

import { saveLocalContext } from '../../../app/context'

// * Libraries Required

import { isEmailValueInFormat } from "../../../libraries/Auth/form"

// * This function will set the invalid state in an EditText

const setInvalidInputError = (InputContainerID, inputErrorMessage) => {

    document.getElementById(InputContainerID + '_container').classList.add('ds-sc-EditText-Invalid-Input')
    document.getElementById(InputContainerID + '_error_label').innerText = inputErrorMessage

}

// * This function will validate the Login Form values

export const init_Auth_Login_Form = (context, setContext) => {

    return new Promise(async resolve => {

        const Login_Form_Email_Input = document.getElementById('auth_login_form_email_input')
        const Login_Form_Password_Input = document.getElementById('auth_login_form_password_input')
        const Login_Form_Session_Checkbox = document.getElementById('auth_login_form_keep_session_checkbox')

        // * Validating Email Input Value

        const Login_Form_Email_Input_Value = Login_Form_Email_Input.value

        if (!Login_Form_Email_Input_Value) {

            setInvalidInputError('auth_login_form_email_input', 'Escribe el correo electronico asociado a tu cuenta')
            document.getElementById('auth_login_form_email_input').focus()
            return resolve({ isSuccessfull: false })

        }

        const emailValidationResult = isEmailValueInFormat(Login_Form_Email_Input_Value)

        if (emailValidationResult === false) {

            setInvalidInputError('auth_login_form_email_input', 'Esscribe un correo electronico valido')
            document.getElementById('auth_login_form_email_input').focus()
            return resolve({ isSuccessfull: false })

        }

        // * Validating Password Input Value

        const Login_Form_Password_Input_Value = Login_Form_Password_Input.value

        if (!Login_Form_Password_Input_Value) {

            setInvalidInputError('auth_login_form_password_input', 'Escribe la contraseña de tu cuenta')
            document.getElementById('auth_login_form_password_input').focus()
            return resolve({ isSuccessfull: false })

        }

        if (Login_Form_Password_Input_Value.length < 8) {

            setInvalidInputError('auth_login_form_password_input', 'La contraseña de tu cuenta debe contener minimo 8 caracteres')
            document.getElementById('auth_login_form_password_input').focus()
            return resolve({ isSuccessfull: false })

        }

        // * Getting Checkbox state

        let Login_Form_Session_Checkbox_Input_Value = Login_Form_Session_Checkbox.getAttribute('checkboxcurrentstate')

        if (Login_Form_Session_Checkbox_Input_Value == 'false') Login_Form_Session_Checkbox_Input_Value = false
        if (Login_Form_Session_Checkbox_Input_Value == 'true') Login_Form_Session_Checkbox_Input_Value = true

        // * Making API REQUEST

        loginUser(Login_Form_Email_Input_Value, Login_Form_Password_Input_Value, Login_Form_Session_Checkbox_Input_Value).then(async requestResponse => {

            // * Handle of API REQUEST Response

            if (requestResponse.isLoginAproved === false && requestResponse.message === "Can´t find an Account with the email provided") {

                setInvalidInputError('auth_login_form_email_input', 'No encontramos ninguna cuenta con este correo asociado')
                document.getElementById('auth_login_form_email_input').focus()
                return resolve({ isSuccessfull: false })

            }

            if (requestResponse.isLoginAproved === false && requestResponse.message === "Wrong Password") {

                setInvalidInputError('auth_login_form_password_input', 'Contraseña incorrecta')
                document.getElementById('auth_login_form_password_input').focus()
                return resolve({ isSuccessfull: false })

            }

            if (requestResponse.isLoginAproved === true && requestResponse.message === "login successfull") {

                if (requestResponse.userRefreshToken == undefined) {

                    setContext({ ...context, session: { token: requestResponse.userToken, refresh: false }, user: requestResponse.AccountContext })
                    return resolve({ isSuccessfull: true })

                }

                setContext({ ...context, session: { token: requestResponse.userToken, refresh: requestResponse.userRefreshToken }, user: requestResponse.AccountContext })
                return resolve({ isSuccessfull: true })

            }

        })

    })

}

// * This function will validate the Login Form values

export const init_Auth_Register_Form = (context, setContext) => {

    return new Promise(async resolve => {

        const Register_Form_Name_Input = document.getElementById('auth_register_form_name_input')
        const Register_Form_Lastname_Input = document.getElementById('auth_register_form_lastname_input')
        const Register_Form_Username_Input = document.getElementById('auth_register_form_username_input')
        const Register_Form_Email_Input = document.getElementById('auth_register_form_email_input')
        const Register_Form_Password_Input = document.getElementById('auth_register_form_password_input')

        // * Validating Name Input Value

        const Register_Form_Name_Input_Value = Register_Form_Name_Input.value

        if (!Register_Form_Name_Input_Value) {

            setInvalidInputError('auth_register_form_name_input', 'Escribe tu nombre')
            document.getElementById('auth_register_form_name_input').focus()
            return resolve({ isSuccessfull: false })

        }

        // * Validating Lastname Input Value

        const Register_Form_Lastname_Input_Value = Register_Form_Lastname_Input.value

        if (!Register_Form_Lastname_Input_Value) {

            setInvalidInputError('auth_register_form_lastname_input', 'Escribe tus apellidos')
            document.getElementById('auth_register_form_lastname_input').focus()
            return resolve({ isSuccessfull: false })

        }

        // * Validating Username Input Value

        const Register_Form_Username_Input_Value = Register_Form_Username_Input.value

        if (!Register_Form_Username_Input_Value) {

            setInvalidInputError('auth_register_form_username_input', 'Escribe tu nombre de usuario')
            document.getElementById('auth_register_form_username_input').focus()
            return resolve({ isSuccessfull: false })

        }

        // * Validating Email Input Value

        const Register_Form_Email_Input_Value = Register_Form_Email_Input.value

        if (!Register_Form_Email_Input_Value) {

            setInvalidInputError('auth_register_form_email_input', 'Escribe tu correo electronico')
            document.getElementById('auth_register_form_email_input').focus()
            return resolve({ isSuccessfull: false })

        }

        // * Validating Password Input Value

        const Register_Form_Passsword_Input_Value = Register_Form_Password_Input.value

        if (!Register_Form_Passsword_Input_Value) {

            setInvalidInputError('auth_register_form_password_input', 'Escribe una contraseña nueva')
            document.getElementById('auth_register_form_password_input').focus()
            return resolve({ isSuccessfull: false })

        }

        // * Cleaning Auth Register Form inputs

        Register_Form_Name_Input.value = ''
        Register_Form_Lastname_Input.value = ''
        Register_Form_Username_Input.value = ''
        Register_Form_Email_Input.value = ''
        Register_Form_Password_Input.value = ''

        // * Making API Request

        createNewAccount(Register_Form_Email_Input_Value, Register_Form_Passsword_Input_Value, Register_Form_Name_Input_Value + ' ' + Register_Form_Lastname_Input_Value, Register_Form_Username_Input_Value, 'https://scontent.webdesignnodes.com/datasync/default_profile_pics/abstract/2.png').then(requestResponse => {

            console.log(requestResponse);

            if (requestResponse.isAccountCreated == false && requestResponse.message == "The email Provided is already in use. Login or Try another Email") {

                setInvalidInputError('auth_register_form_email_input', 'Esta dirreccion de correo electronico ya esta asociada a una cuenta. Inicia Sesion')
                document.getElementById('auth_register_form_email_input').focus()
                return resolve({ isSuccessfull: false })

            }

            if (requestResponse.isAccountCreated == true && requestResponse.message == "User Account created successfully, verificate your email to avoid the deletion of your account in the next 72h"){

                return resolve({ isSuccessfull: true })

            }

        })

    })

}