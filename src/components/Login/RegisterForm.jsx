
// * Dependencies Required 

import { MdVisibility, MdArrowBackIos } from 'react-icons/md'

// * Modules Required

import { sendRegisterRequest } from '../../services/auth'

// * view Styles

import './styles/RegisterForm.css'

// * Components Required

// * view to Return

const RegisterForm = () => {

    const displayLoginForm = () => {

        const authContainer = document.getElementById('Login-Forms-Container')

        authContainer.style.opacity = 0

        setTimeout(() => {

            authContainer.scrollLeft = 0
            authContainer.style.opacity = 1

        }, 300)

    }

    const switchPasswordVisibility = () => {

        if (document.getElementById('Register-Form-Password-Input').type == 'password') return document.getElementById('Register-Form-Password-Input').type = 'text'
        if (document.getElementById('Register-Form-Password-Input').type == 'text') return document.getElementById('Register-Form-Password-Input').type = 'password'

    }

    const registerUser = async () => {

        const userName = document.getElementById('Register-Form-Name-Input').value
        const userSurnames = document.getElementById('Register-Form-Surnames-Input').value
        const userEmail = document.getElementById('Register-Form-Email-Input').value
        const userPassword = document.getElementById('Register-Form-Password-Input').value

        // * Input validation

        if (!userName) return errorHandler('set', 'Name')
        if (userName.length < 2) return errorHandler('set', 'Name')

        if (!userSurnames) return errorHandler('set', 'Surnames')
        if (userSurnames.length < 3) return errorHandler('set', 'Surnames')

        if (!userEmail) return errorHandler('set', 'Email')
        if (!userEmail.includes('@') || !userEmail.includes('.')) return errorHandler('set', 'Email')
        if (userEmail.length < 6) return errorHandler('set', 'Email')

        if (!userPassword) return errorHandler('set', 'Password')
        if (userPassword.length < 8) return errorHandler('set', 'Password')

        // * Fetching Request

        const requestResponse = await sendRegisterRequest(userEmail.toLowerCase(), userPassword, userName, userSurnames)

        console.log(requestResponse);

        if(requestResponse.message == 'Account already created') {

            return errorHandler('set', 'Email')
        }

        if (requestResponse.message == 'user created successfully') {

            displayLoginForm()

            document.getElementById('Register-Form-Name-Input').value = ''
            document.getElementById('Register-Form-Surnames-Input').value = ''
            document.getElementById('Register-Form-Email-Input').value = ''
            document.getElementById('Register-Form-Password-Input').value = ''

            document.getElementById('Login-View-Content-Form-Content-Subtitle-Label').style.display = 'flex'

        }

    }

    const errorHandler = (handlerAction, handlerID) => {

        if (handlerAction == 'set') {

            const InputContainer = document.getElementById('Register-' + handlerID + '-Input-Container')
            InputContainer.style.border = '1px solid #ff150d'
            return

        }

        if (handlerAction == 'clear') {

            const InputContainer = document.getElementById('Register-' + handlerID + '-Input-Container')
            InputContainer.style.border = '0px solid #ff150d'
            return

        }

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

                    <div className="Register-Form-Name-Input-Container" id="Register-Name-Input-Container" onClick={() => { errorHandler('clear', 'Name', '') }}>

                        <input className="Register-Form-Input" id="Register-Form-Name-Input" type="text" placeholder="Nombre" />

                    </div>

                    <div className="Register-Form-Name-Input-Container" id="Register-Surnames-Input-Container" onClick={() => { errorHandler('clear', 'Surnames', '') }}>

                        <input className="Register-Form-Input" id="Register-Form-Surnames-Input" type="text" placeholder="Apellido" />

                    </div>

                </div>

                <div className="Register-Form-Input-Container" id="Register-Email-Input-Container" onClick={() => { errorHandler('clear', 'Email', '') }}>

                    <input className="Register-Form-Input" id="Register-Form-Email-Input" type="text" placeholder="Correo electronico" />

                </div>

                <div className="Register-Form-Input-Container Password-Changes" id="Register-Password-Input-Container" onClick={() => { errorHandler('clear', 'Password', '') }}>

                    <input className="Register-Form-Input" id="Register-Form-Password-Input" type="password" placeholder="Nueva Contraseña" />

                    <div className="Login-Form-Password-Text-Switch" onClick={switchPasswordVisibility}>

                        <MdVisibility size={18} color='#000d41' />

                    </div>

                </div>

                <div className="Register-Form-Join-Now-Button">

                    <p className="Register-Form-Button-Label" onClick={registerUser}>Crear cuenta</p>

                </div>

            </div>

        </div>

    )

}

export default RegisterForm