
// * Dependencies Required 

import { useContext } from "react";
import { MdVisibility, MdArrowBackIos } from 'react-icons/md'

// * Modules Required

import { AppContext } from "../../app/Context";

// * view Styles

import './styles/RegisterForm.css'

// * Components Required

// * view to Return

const RegisterForm = () => {

    const { context, setContext } = useContext(AppContext);

    const switchPasswordVisibility = () => {

        if (document.getElementById('Register-Form-Password-Input').type == 'password') return document.getElementById('Register-Form-Password-Input').type = 'text'
        if (document.getElementById('Register-Form-Password-Input').type == 'text') return document.getElementById('Register-Form-Password-Input').type = 'password'

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

    const displayLoginForm = () => {

        const authContainer = document.getElementById('Login-Forms-Container')        

        authContainer.style.opacity = 0

        setTimeout(() => {
            
            authContainer.scrollLeft = 0
            authContainer.style.opacity = 1

        }, 300)

    }

    return (

        <div className="Register-View-Content-Form-Containet-Content" id="Register-View-Container">

            <div className="Register-View-Form-Top-Container">

                <div className="Register-View-Form-Top-Back-Button" onClick={displayLoginForm}>

                    <MdArrowBackIos size={18} color='#000d41' />

                </div>

                <p className="Register-View-Form-Top-Title-Label">Crea una cuenta</p>

            </div>

            <p className="register-View-Form-Subtitle-Label">Crea una cuenta para acceder a todas las herramientas que necesites.</p>

            <div className="Register-View-Content-Form-Container">

                <div className="Register-View-Form-Name-Container">

                    <div className="Register-Form-Name-Input-Container" id="Register-Name-Input-Container">

                        <input className="Register-Form-Input" id="Register-Form-Name-Input" type="text" placeholder="Nombre" />

                    </div>

                    <div className="Register-Form-Name-Input-Container" id="Register-Surnames-Input-Container">

                        <input className="Register-Form-Input" id="Register-Form-Surnames-Input" type="text" placeholder="Apellido" />

                    </div>

                </div>

                <div className="Register-Form-Input-Container" id="Register-Email-Input-Container">

                    <input className="Register-Form-Input" id="Register-Form-Email-Input" type="text" placeholder="Correo electronico" />

                </div>

                <div className="Register-Form-Input-Container Password-Changes" id="Register-Password-Input-Container">

                    <input className="Register-Form-Input" id="Register-Form-Password-Input" type="password" placeholder="Nueva Contraseña" />

                    <div className="Login-Form-Password-Text-Switch" onClick={switchPasswordVisibility}>

                        <MdVisibility size={18} color='#000d41' />

                    </div>

                </div>

                <div className="Register-Form-Join-Now-Button">

                    <p className="Register-Form-Button-Label">Crear cuenta</p>

                </div>

            </div>

        </div>

    )

}

export default RegisterForm