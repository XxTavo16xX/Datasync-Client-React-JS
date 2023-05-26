
// * Dependencies Required

import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

// * Form Styles

import './index.css'

// * Components Required

import EditText from '../../../shared/Inputs/EditText'
import { PrimaryButton, AccentTextButton, TransparentButton } from '../../../shared/Buttons/TextButton'
import { Transparent_Checkbox } from '../../../shared/Inputs/CheckBox'

// * Form Controllers

import * as Auth_Login_Form_Controller from './controller'

// * Exporting Datasync Auth Login Form

const Auth_Login_Form = ({ sessionContextValues, userContextValues, setFormSelected, notificationContextValues }) => {

    const navigate = useNavigate();
    
    useEffect(() => { Auth_Login_Form_Controller.onComponentMounted(sessionContextValues, userContextValues, setFormSelected, notificationContextValues, navigate) })

    return (

        <div id='auth_login_form_container' className="Auth-Form-Login-Container">

            <div className="Auth-Form-App-Logo-Container">

                <div className="Logo-Container">

                    <img src="assets/icons/logo.svg" alt="" />

                </div>

            </div>

            <p className="Auth-Form-Login-Title-Label">Ingresa tus credenciales para acceder a tu cuenta</p>

            <EditText inputID='auth_login_form_email_input' inputType='text' Title='Correo Electronico' placeholder='you@company.com' onEnter='auth_login_form_password_input' />
            <EditText inputID='auth_login_form_password_input' inputType='password' Title='Contraseña' placeholder='**********' onSend={Auth_Login_Form_Controller.handleLoginProcess} />

            <div className="Form-User-Session-Action-Buttons">

                <div className="Form-User-Sesion-Checkbox-Container">

                    <Transparent_Checkbox checkBoxID='auth_login_form_keep_session_checkbox' checkBoxLabel='Mantener Sesion Abierta' checkBoxState={false} />

                </div>

                <div className="Form-User-Session-Forgot-Password-Container">

                    <TransparentButton buttonID='auth_login_form_forgot_password_button' buttonLabel='¿No recuerdas tu contraseña?' onPressed={Auth_Login_Form_Controller.switchToForgotPasswordForm} buttonOnClick={Auth_Login_Form_Controller.switchToForgotPasswordForm} />

                </div>

            </div>

            <PrimaryButton buttonID='auth_login_form_login_button' buttonLabel='Iniciar Sesion' onPressed={Auth_Login_Form_Controller.handleLoginProcess} buttonOnClick={Auth_Login_Form_Controller.handleLoginProcess} />
            <AccentTextButton buttonID='auth_login_form_register_button'  buttonLabel='Crear nueva cuenta' onPressed={Auth_Login_Form_Controller.switchToRegisterForm} buttonOnClick={Auth_Login_Form_Controller.switchToRegisterForm} />
            
        </div>

    )

}

export default Auth_Login_Form