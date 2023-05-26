
// * Importing API

import { DATASYNC_API } from "../../../../services/API";

// * Libraries Required

import { isEmailValueInFormat } from "../../../../libraries/Auth/form";

// * Variables Required

let sessionContext, setSessionContext;
let userContext, setUserContext;
let notificationContextValues;
let setFormSelected;
let useNavigate;

// * This function will be launched after the component is mounted

export const onComponentMounted = (sessionContextValues, userContextValues, updateHomeFormSelected, notificationContexts, navigate) => {

    // * Setting Values Required

    sessionContext = sessionContextValues.value;
    setSessionContext = sessionContextValues.updateFunction;

    userContext = userContextValues.value;
    setUserContext = userContextValues.updateFunction;

    notificationContextValues = notificationContexts

    setFormSelected = updateHomeFormSelected

    useNavigate = navigate;

    // * Init Form Animation

    document.getElementById('auth_login_form_container').style.opacity = '1';

}

// * This function will change the form selected to forgot password form

export const switchToForgotPasswordForm = () => {

    setFormSelected('forgotPassword')

}

// * This function will change the form selected to register form

export const switchToRegisterForm = () => {
    
    document.getElementById('auth_login_form_container').style.opacity = '0'
    setTimeout(() => setFormSelected('register'), 200)

}

// * This function will set the invalid state in an EditText

const setInvalidInputError = (InputContainerID, inputErrorMessage) => {

    document.getElementById(InputContainerID + '_container').classList.add('ds-sc-Invalid-Input')
    document.getElementById(InputContainerID + '_error_label').innerText = inputErrorMessage

}

// * This function will handle the Login process

export const handleLoginProcess = async () => {

    const Login_Form_Email_Input = document.getElementById('auth_login_form_email_input')
    const Login_Form_Password_Input = document.getElementById('auth_login_form_password_input')
    const Login_Form_Session_Checkbox = document.getElementById('auth_login_form_keep_session_checkbox')

    // * Validating Email Input Value

    const Login_Form_Email_Input_Value = Login_Form_Email_Input.value

    if (!Login_Form_Email_Input_Value) {

        setInvalidInputError('auth_login_form_email_input', 'Escribe el correo electrónico asociado a tu cuenta')
        document.getElementById('auth_login_form_email_input').focus()
        return { isSuccessfull: false }

    }

    const emailValidationResult = isEmailValueInFormat(Login_Form_Email_Input_Value)

    if (emailValidationResult === false) {

        setInvalidInputError('auth_login_form_email_input', 'Escribe un correo electrónico válido')
        document.getElementById('auth_login_form_email_input').focus()
        return { isSuccessfull: false }

    }

    // * Validating Password Input Value

    const Login_Form_Password_Input_Value = Login_Form_Password_Input.value

    if (!Login_Form_Password_Input_Value) {

        setInvalidInputError('auth_login_form_password_input', 'Escribe la contraseña de tu cuenta')
        document.getElementById('auth_login_form_password_input').focus()
        return { isSuccessfull: false }

    }

    if (Login_Form_Password_Input_Value.length < 8) {

        setInvalidInputError('auth_login_form_password_input', 'La contraseña de tu cuenta debe contener mínimo 8 caracteres')
        document.getElementById('auth_login_form_password_input').focus()
        return { isSuccessfull: false }

    }

    // * Getting Checkbox state

    let Login_Form_Session_Checkbox_Input_Value = Login_Form_Session_Checkbox.getAttribute('checkboxcurrentstate')

    if (Login_Form_Session_Checkbox_Input_Value == 'false') Login_Form_Session_Checkbox_Input_Value = false
    if (Login_Form_Session_Checkbox_Input_Value == 'true') Login_Form_Session_Checkbox_Input_Value = true

    // * Making API Request

    const Datasync_API = new DATASYNC_API(notificationContextValues)

    const requestBody = {
        userEmail: Login_Form_Email_Input_Value,
        userPassword: Login_Form_Password_Input_Value,
        keepSession: Login_Form_Session_Checkbox_Input_Value
    }

    const requestResponse = await Datasync_API.user.login(requestBody)

    // * Validating Unsuccessful Request Response

    if (requestResponse.status === 209) {

        if (requestResponse.response.isLoginAproved == false && requestResponse.response.message == "Can´t find an Account with the email provided" ){

            setInvalidInputError('auth_login_form_email_input', 'No encontramos ninguna cuenta con este correo asociado')
            document.getElementById('auth_login_form_email_input').focus()
            return 

        }

    }

    // * Validating Successful Request Response
    
    if (requestResponse.status === 200) {

        if (requestResponse.response.isLoginAproved == false && requestResponse.response.message == "Wrong Password" ){

            setInvalidInputError('auth_login_form_password_input', 'Contraseña incorrecta')
            document.getElementById('auth_login_form_password_input').focus()
            return 

        }

        if (requestResponse.response.isLoginAproved == true && requestResponse.response.message == "login successfull" ){

            // * Saving Sessino Context

            setSessionContext({ token: requestResponse.response.userToken, refreshToken: requestResponse.response.userRefreshToken, status: sessionContext.status })

            // * Saving User Context

            setUserContext({ public: { email: requestResponse.response.AccountContext.email, displayName: requestResponse.response.AccountContext.displayName, profilePhotoURL: requestResponse.response.AccountContext.profilePhotoURL }, defaultWorkspace: requestResponse.response.AccountContext.defaultWorkspace , workspaceNodes: requestResponse.response.AccountContext.workspaceNodes, ping: requestResponse.response.AccountContext._updatedAt })

            // * nav to app

            return useNavigate('/app')            

        }

    }

}