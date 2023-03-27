
// * Dependencies Required 

import { useContext } from "react";
import { MdVisibility } from 'react-icons/md'

// * Modules Required

import { AppContext } from "../../app/Context";
import { sendLoginRequest } from "../../services/auth";

// * view Styles

import './styles/LoginFrom.css'

// * Components Required

import CheckBoxButton from '../shared/CheckBoxButton';

// * view to Return

const LoginForm = () => {

    const { context, setContext } = useContext(AppContext);

    const handleInputEnter = (event) => {

        if (event.target.id === 'Login-Form-Email-Input' && event.key === 'Enter') return document.getElementById('Login-Form-Password-Input').focus()

        if (event.target.id === 'Login-Form-Password-Input' && event.key === 'Enter') return loginUser()

    }

    const switchPasswordVisibility = () => {

        if (document.getElementById('Login-Form-Password-Input').type == 'password') return document.getElementById('Login-Form-Password-Input').type = 'text'
        if (document.getElementById('Login-Form-Password-Input').type == 'text') return document.getElementById('Login-Form-Password-Input').type = 'password'

    }

    const errorHandler = (handlerAction, handlerID, handlerMessage) => {

        if (handlerAction == 'set') {

            const InputContainer = document.getElementById(handlerID + '-Input-Container')
            const InputErrorLabel = document.getElementById(handlerID + '-Input-Error-Label')

            InputContainer.style.border = '1px solid #ff150d'
            InputErrorLabel.innerText = handlerMessage

            return
        }

        if (handlerAction == 'clear') {

            const InputContainer = document.getElementById(handlerID + '-Input-Container')
            const InputErrorLabel = document.getElementById(handlerID + '-Input-Error-Label')

            InputContainer.style.border = '0px solid #ff150d'
            InputErrorLabel.innerText = ''

            return
        }

    }

    const loginUser = async () => {

        const userEmail = document.getElementById('Login-Form-Email-Input').value
        const userPassword = document.getElementById('Login-Form-Password-Input').value

        // * Input Verification

        if (!userEmail) return errorHandler('set', 'Email', 'Escribe tu correo electronico')
        if (!userEmail.includes('@') || !userEmail.includes('.')) return errorHandler('set', 'Email', 'Escribe un correo valido')
        if (userEmail.length < 5) return errorHandler('set', 'Email', 'Escribe un correo valido')

        if (userPassword.length < 8) return errorHandler('set', 'Password', 'Tu contraseña debe tener minimo 8 caracteres')

        const requestResponse = await sendLoginRequest(userEmail.toLowerCase(), userPassword)

        if (requestResponse.message == "Account not found") return errorHandler('set', 'Email', 'Verifica tu correo')

        if (requestResponse.message == "Password Incorrect") return errorHandler('set', 'Password', 'Verifica tu contraseña')

        // * If Login Request is complete successfully the user token must be saved in local

        if (requestResponse.isLoginSuccesfull == true) {
            
            setContext({ ...context, userData: requestResponse.userData, workspaceData: requestResponse.workspaceNodeContext })

        }

    }

    const displayRegisterForm = () => {

        const authContainer = document.getElementById('Login-Forms-Container')

        authContainer.style.opacity = 0

        setTimeout(() => {

            authContainer.scrollLeft = authContainer.offsetWidth / 1 + 20;
            authContainer.style.opacity = 1

        }, 300)
    }

    return (

        <div className="Login-View-Content-Form-Container-Content">

            <p className="Login-View-Content-Form-Content-Title-Label">Inicia Sesion</p>

            <p className="Login-View-Content-Form-Content-Subtitle-Label" id="Login-View-Content-Form-Content-Subtitle-Label">Haz creado tu cuenta correctamente.<br />Ahora inicia sesion para continuar.</p>

            <div className="Login-Form-Input-Container" id="Email-Input-Container" onClick={() => { errorHandler('clear', 'Email') }}>

                <input className="Login-Form-Input-Container-Input" id="Login-Form-Email-Input" type="text" placeholder="Ingresa tu Correo Electronico" onKeyDown={handleInputEnter} />

            </div>

            <p className="Login-Input-Error-Label" id="Email-Input-Error-Label"></p>

            <div className="Login-Form-Input-Container Password-Changes" id="Password-Input-Container" onClick={() => { errorHandler('clear', 'Password') }}>

                <input className="Login-Form-Input-Container-Input" id="Login-Form-Password-Input" type="password" placeholder="Ingresa tu Contraseña" onKeyDown={handleInputEnter} />

                <div className="Login-Form-Password-Text-Switch" onClick={switchPasswordVisibility}>

                    <MdVisibility size={18} color='#000d41' />

                </div>

            </div>

            <p className="Login-Input-Error-Label" id="Password-Input-Error-Label"></p>

            <div className="Login-Form-Action-Button-Container">

                <div className="Login-Form-Action-Button-Container-Session">

                    <CheckBoxButton checkBoxLabel='Mantener Sesion Abierta' />

                    <button className="Login-Form-Action-Button-Recover-Password">Recuperar Contraseña</button>

                </div>

                <button className="Login-Form-Action-Button-Login" onClick={loginUser}>Iniciar Sesion</button>

                <button className="Login-Form-Action-Button-Register" onClick={displayRegisterForm} >Unirme</button>

            </div>

        </div>



    )

}

export default LoginForm