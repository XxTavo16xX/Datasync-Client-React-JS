
// * Dependencies Required 

import { useContext } from "react";

// * Modules Required

import { AppContext } from "../../app/Context";

// * view Styles

import './styles/LoginFrom.css'

// * Components Required

import CheckBoxButton from '../shared/CheckBoxButton';

// * view to Return

const LoginForm = () => {

    const loginUser = () => {


        
    }

    return (

        <div className="Login-View-Content-Form-Container-Content">

            <p className="Login-View-Content-Form-Content-Title-Label">Inicia Sesion</p>

            <div className="Login-Form-Input-Container">

                <input className="Login-Form-Input-Container-Input" type="text" placeholder="Ingresa tu Correo Electronico" />

            </div>

            <div className="Login-Form-Input-Container">

                <input className="Login-Form-Input-Container-Input" type="password" placeholder="Ingresa tu Contraseña" />

            </div>

            <div className="Login-Form-Action-Button-Container">

                <div className="Login-Form-Action-Button-Container-Session">

                    <CheckBoxButton checkBoxLabel='Mantener Sesion Abierta' />

                    <button className="Login-Form-Action-Button-Recover-Password">Recuperar Contraseña</button>

                </div>

                <button className="Login-Form-Action-Button-Login" onClick={loginUser}>Iniciar Sesion</button>

                <button className="Login-Form-Action-Button-Register">Unirme</button>

            </div>

        </div>

    )

}

export default LoginForm