
// * Dependencies Required

import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

// * Form Styles

import './index.css'

// * Components Required

import EditText from '../../../shared/Inputs/EditText'
import { PrimaryButton, AccentButton, TransparentButton } from '../../../shared/Buttons/TextButton'
import { Transparent_Checkbox } from '../../../shared/Inputs/CheckBox'

// * Form Controllers

import { init_Auth_Login_Form } from '..'

// * Exporting Datasync Auth Login Form

const Auth_Login_Form = ({ context, setContext, setFormSelected }) => {

    useEffect(() => {

        document.getElementById('auth_login_form_container').style.opacity = '1'

    })

    const navigate = useNavigate();

    const auth_login_form_LoginUser = async () => {
        
        const loginResult = await init_Auth_Login_Form(context, setContext)

        if (loginResult.isSuccessfull === true) navigate('/app') 

    }

    const switchToRegisterForm = () => {

        document.getElementById('auth_login_form_container').style.opacity = '0'
        setTimeout(() => setFormSelected('register'), 200)

    }

    const swithToForgotPasswordForm = () => {

        setFormSelected('forgotPassword')

    }

    return (

        <div id='auth_login_form_container' className="Auth-Form-Login-Container">

            <div className="Auth-Form-App-Logo-Container">

                <div className="Logo-Container">

                    <img src="assets/icons/logo.svg" alt="" />

                </div>

            </div>

            <p className="Auth-Form-Login-Title-Label">Ingresa tus credenciales para acceder a tu cuenta</p>

            <EditText inputID='auth_login_form_email_input' inputType='text' Title='Correo Electronico' placeholder='you@company.com' onEnter='auth_login_form_password_input' />
            <EditText inputID='auth_login_form_password_input' inputType='password' Title='Contraseña' placeholder='**********' onSend={auth_login_form_LoginUser} />

            <div className="Form-User-Session-Action-Buttons">

                <div className="Form-User-Sesion-Checkbox-Container">

                    <Transparent_Checkbox checkBoxID='auth_login_form_keep_session_checkbox' checkBoxLabel='Mantener Sesion Abierta' checkBoxState={false} />

                </div>

                <div className="Form-User-Session-Forgot-Password-Container">

                    <TransparentButton buttonID='auth_login_form_forgot_password_button' buttonLabel='¿No recuerdas tu contraseña?' onPressed={swithToForgotPasswordForm} buttonOnClick={swithToForgotPasswordForm} />

                </div>

            </div>

            <PrimaryButton buttonID='auth_login_form_login_button' buttonLabel='Iniciar Sesion' onPressed={auth_login_form_LoginUser} buttonOnClick={auth_login_form_LoginUser} />
            <AccentButton buttonID='auth_login_form_register_button'  buttonLabel='Crear nueva cuenta' onPressed={switchToRegisterForm} buttonOnClick={switchToRegisterForm} />
            
        </div>

    )

}

export default Auth_Login_Form