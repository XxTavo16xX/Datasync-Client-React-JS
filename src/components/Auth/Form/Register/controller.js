
// * Importing API

import { DATASYNC_API } from "../../../../services/API";

// * Variables Required

let setFormSelected;
let setNewAccountState;
let notificationContextValues;

// * This function will be launched after the component is mounted

export const onComponentMounted = (updateHomeFormSelected, updateNewAccountState, notificationContexts) => {

    // * Setting Values Required

    setFormSelected = updateHomeFormSelected
    setNewAccountState = updateNewAccountState

    notificationContextValues = notificationContexts

    // * Init Form Animation

    document.getElementById('auth_register_form_container').style.opacity = '1'

}

// * This function will change the form selected to login form

export const switchToLoginForm = () => {

    document.getElementById('auth_register_form_container').style.opacity = '0'
    setTimeout(() => setFormSelected('login'), 200)

}

// * This function will generate an default username

export const handleLastnameInputEnter = () => {

    const inputNameValue = document.getElementById('auth_register_form_name_input').value
    const inputLastnameValue = document.getElementById('auth_register_form_lastname_input').value

    const firstName = inputNameValue.split(' ')[0]
    const firstLastname = inputLastnameValue.split(' ')[0]

    document.getElementById('auth_register_form_username_input').value = firstName + ' ' + firstLastname

}

// * This function will set the invalid state in an EditText

const setInvalidInputError = (InputContainerID, inputErrorMessage) => {

    document.getElementById(InputContainerID + '_container').classList.add('ds-sc-Invalid-Input')
    document.getElementById(InputContainerID + '_error_label').innerText = inputErrorMessage

}

// * This function will handle the Register process

export const handleRegisterProcess = async () => {

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
        return

    }

    // * Validating Lastname Input Value

    const Register_Form_Lastname_Input_Value = Register_Form_Lastname_Input.value

    if (!Register_Form_Lastname_Input_Value) {

        setInvalidInputError('auth_register_form_lastname_input', 'Escribe tus apellidos')
        document.getElementById('auth_register_form_lastname_input').focus()
        return

    }

    // * Validating Username Input Value

    const Register_Form_Username_Input_Value = Register_Form_Username_Input.value

    if (!Register_Form_Username_Input_Value) {

        setInvalidInputError('auth_register_form_username_input', 'Escribe tu nombre de usuario')
        document.getElementById('auth_register_form_username_input').focus()
        return

    }

    // * Validating Email Input Value

    const Register_Form_Email_Input_Value = Register_Form_Email_Input.value

    if (!Register_Form_Email_Input_Value) {

        setInvalidInputError('auth_register_form_email_input', 'Escribe tu correo electronico')
        document.getElementById('auth_register_form_email_input').focus()
        return

    }

    // * Validating Password Input Value

    const Register_Form_Passsword_Input_Value = Register_Form_Password_Input.value

    if (!Register_Form_Passsword_Input_Value) {

        setInvalidInputError('auth_register_form_password_input', 'Escribe una contraseña nueva')
        document.getElementById('auth_register_form_password_input').focus()
        return

    }

    // * Making API Request

    const Datasync_API = new DATASYNC_API(notificationContextValues)

    const requestBody = {
        userEmail: Register_Form_Email_Input_Value,
        userPassword: Register_Form_Passsword_Input_Value,
        userFullName: Register_Form_Name_Input_Value + ' ' + Register_Form_Lastname_Input_Value,
        userDisplayName: Register_Form_Username_Input_Value,
        userProfilePicURL: 'https://scontent.webdesignnodes.com/datasync/default_profile_pics/abstract/2.png'
    }

    const requestResponse = await Datasync_API.user.newAccount(requestBody)

    // * Validating Unsuccessful Request Response

    if (requestResponse.status === 209) {

        if (requestResponse.response.isAccountCreated == false && requestResponse.response.message == "The email Provided is already in use. Login or Try another Email" ){

            setInvalidInputError('auth_register_form_email_input', 'Esta dirreccion de correo electronico ya esta asociada a una cuenta. Inicia Sesion')
            document.getElementById('auth_register_form_email_input').focus()
            return 

        }

    }

    // * Validating Successful Request Response

    if (requestResponse.status === 200) {

        if (requestResponse.response.isAccountCreated == true && requestResponse.response.message == "User Account created successfully, verificate your email to avoid the deletion of your account in the next 72h") {

            document.getElementById('auth_register_form_container').style.opacity = '0'
            setTimeout(() => { setNewAccountState(true) }, 300)
            setTimeout(() => { document.getElementById('auth_register_form_container').style.opacity = '1' }, 600)
            return

        }

    }
}