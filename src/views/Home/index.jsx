
// * Dependencies Required

import { MdVisibility, MdArrowBackIosNew } from 'react-icons/md'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// * Context Required

import { AppContext } from '../../app/context'

// * Styles Required

import './index.css'

// * Components Required

import TopNavBar from '../../components/shared/Home/TopNavBar'
import CheckBox from '../../components/shared/Form/Checkbox'

import { Profile_Picture_Explorer_Selector } from '../../components/shared/Explorer-Selector'
import { Player } from '@lottiefiles/react-lottie-player'

import { buttonOnPress, buttonUnpress } from '../../components/shared/controllers/Form'

// * Libraries Required

import { handleInputKeyDown, handleRegisterInputKeyDown, switchPasswordInputType, switchPasswordsInputType, handleAuthFormLogin, handleAuthFormRegister } from '../../libraries/Auth/form'
import { clearInputError } from '../../components/shared/controllers/Form'

let AvatarPreSelected = 'https://scontent.webdesignnodes.com/datasync/default_profile_pics/unisex/' + Math.floor((Math.random() * (5 - 1 + 1)) + 1) + '.png'

// * Component Exported

const Home_view = () => {

    const { context, setContext } = useContext(AppContext)
    const navigate = useNavigate();

    const [ProfilePictureExplorerState, setProfilePictureExplorerState] = useState(true)

    useEffect(() => {

        if (context.session.token != '') { navigate('/app') }

    }, [])

    const displayLoginForm = async event => {

        console.log('displayLoginForm');

        const formTitleLabel = document.getElementById('Form-Subtitle')
        const formsContainer = document.getElementById('Auth-Forms-Container')

        formTitleLabel.style.opacity = '0'
        formsContainer.style.opacity = '0'

        setTimeout(() => {

            formTitleLabel.innerText = 'Ingresa tus credenciales para acceder a tu cuenta.'
            formsContainer.scrollLeft = 0

        }, 200)

        setTimeout(() => {

            formTitleLabel.style.opacity = '1'
            formsContainer.style.opacity = '1'

        }, 250)


    }

    const handleFormLoginButton = async event => {

        const loginResult = await handleAuthFormLogin()

        if (loginResult === true) navigate('/app')

    }

    const displayRegisterView = () => {

        const formTitleLabel = document.getElementById('Form-Subtitle')
        const formsContainer = document.getElementById('Auth-Forms-Container')

        formTitleLabel.style.opacity = '0'
        formsContainer.style.opacity = '0'

        setTimeout(() => {

            formTitleLabel.innerText = 'Crear una cuenta nueva.'
            formsContainer.scrollLeft = 580

        }, 200)

        setTimeout(() => {

            formTitleLabel.style.opacity = '1'
            formsContainer.style.opacity = '1'

        }, 250)

    }

    const handleRegisterFormRegisterButton = async () => {

        const registerResult = await handleAuthFormRegister()

        console.log('handleRegisterFormRegisterButton');
        console.log(registerResult);
        console.log('handleRegisterFormRegisterButton');

        if (registerResult === true) {

            displayLoginForm()

            // ! Implement SUCCESSFULL ACCOUNT CREATION

        }

    }

    const handleFormChangeProfilePictureButton = () => {

        setProfilePictureExplorerState(!ProfilePictureExplorerState)
    }

    const updateUserProfilePictureSelected = event => {

        AvatarPreSelected = event.target.src
        document.getElementById('Register-Form-Avatar-Image').setAttribute('src', AvatarPreSelected)

    }

    const displayForgotPasswordView = () => {

        const formTitleLabel = document.getElementById('Form-Subtitle')
        const formsContainer = document.getElementById('Auth-Forms-Container')

        formTitleLabel.style.opacity = '0'
        formsContainer.style.opacity = '0'

        setTimeout(() => {

            formTitleLabel.innerText = 'Restablece tu contraseña'
            formsContainer.scrollLeft = 1160

        }, 200)

        setTimeout(() => {

            formTitleLabel.style.opacity = '1'
            formsContainer.style.opacity = '1'

        }, 250)

    }

    return (

        <div className="Home-Page-Container">

            <TopNavBar />

            <div className="Home-Page-Margin">

                <div className="Home-Page-Text-Content-Container">

                    <p className='Home-Page-Name'>Datasync</p>
                    
                    <h1 className='Home-Page-Title'>Tu area de trabajo ideal.</h1>

                    <p className="Home-Page-Subtitle">Inicia sesion para acceder a todas las herramientas que puedas necesitar.</p>

                    <div className="Home-Page-Animation-Player-Container">

                        <Player
                            autoplay={true}
                            loop={true}
                            controls={false}
                            src="/assets/animations/working.json"
                            style={{ height: '550px', width: '550px' }}
                        ></Player>

                    </div>

                </div>

                <div className="Home-Page-Auth-Form-Container">

                    <div className="Auth-Form-Margin">

                        <div className="Auth-Form-Top-Section-Container">

                            <p id='Form-Subtitle' className='Auth-Form-SubLabel'>Ingresa tus credenciales para acceder a tu cuenta.</p>

                        </div>

                        <div id='Auth-Forms-Container' className="Auth-Form-Section-Container">

                            <Profile_Picture_Explorer_Selector isHidde={ProfilePictureExplorerState} onClose={handleFormChangeProfilePictureButton} onSelect={updateUserProfilePictureSelected} />

                            <div className="Auth-Form-Login-Container">

                                <div className="Auth-Form-App-Logo-Container">

                                    <div className="Logo-Container">

                                        <img src="assets/icons/logo.svg" alt="" />

                                    </div>

                                </div>

                                <div className="Form-Section">

                                    <p className="Form-Section-Name">Correo electronico</p>

                                    <div id='auth_login_form_email_input_container' className="Form-Input-Container" onClick={clearInputError}>

                                        <input id='auth_login_form_email_input' className='Form-Text-Input' type="text" placeholder='you@company.com' onKeyDown={handleInputKeyDown} />

                                    </div>

                                    <p id='auth_login_form_email_input_message_label' className="Form-Input-Message-Label"></p>

                                </div>

                                <div className="Form-Section">

                                    <p className="Form-Section-Name">Contraseña</p>

                                    <div className="Form-Switch-Input-Container">

                                        <div id='auth_login_form_password_input_container' className="Form-Password-Input-Container" onClick={clearInputError}>

                                            <input id='auth_login_form_password_input' className='Form-Password-Input' type="password" placeholder='****************' onKeyDown={handleInputKeyDown} />

                                        </div>

                                        <div id='auth_login_form_password_switch_button' className="Form-Password-Input-Type-Switch-Button" onMouseDown={buttonOnPress} onMouseUp={buttonUnpress} onClick={switchPasswordInputType} >

                                            <MdVisibility id='auth_login_form_password_switch_button' color='#000d41' size={18} />

                                        </div>

                                    </div>

                                    <p id='auth_login_form_password_input_message_label' className="Form-Input-Message-Label"></p>

                                </div>

                                <div className="Form-Session-Action-Buttons-Container">

                                    <CheckBox checkboxLabel='Mantener sesion abierta' />

                                    <div id='auth_login_form_login_forgot_password_button' className="Form-Forgot-Password-Button" onClick={displayForgotPasswordView} onMouseDown={buttonOnPress} onMouseUp={buttonUnpress}>

                                        <p id='auth_login_form_login_forgot_password_button' className="Button-Label">¿No recuerda su contraseña?</p>

                                    </div>

                                </div>

                                <div className="Form-Action-Buttons-Container">

                                    <div id='auth_login_form_login_button' className="Auth-Form-Login-Button" tabIndex={0} onMouseDown={buttonOnPress} onMouseUp={buttonUnpress} onClick={handleFormLoginButton} >

                                        <p id='auth_login_form_login_button' className="Button-Label">Iniciar Sesion</p>

                                    </div>

                                    <div id='auth_login_form_register_button' className="Auth-Form-Register-Button" tabIndex={0} onMouseDown={buttonOnPress} onMouseUp={buttonUnpress} onClick={displayRegisterView} >

                                        <p id='auth_login_form_register_button' className="Button-Label">Crear cuenta</p>

                                    </div>

                                </div>

                            </div>

                            <div className="Auth-Form-Register-Container">

                                <div className="Form-Session-Action-Buttons-Container">

                                    <div id='auth_register_form_forgot_go_login_button' className="Icon-Button" onClick={displayLoginForm} onMouseDown={buttonOnPress} onMouseUp={buttonUnpress}>

                                        <MdArrowBackIosNew id='auth_register_form_forgot_go_login_button' size={14} color='#000' />

                                        <p id='auth_register_form_forgot_go_login_button' className="Button-Label">Volver a inicio de sesion</p>

                                    </div>

                                </div>

                                <div className="Register-Form-Avatar-Selector-Container">

                                    <div className="Register-Avatar-Selected-Container" onClick={handleFormChangeProfilePictureButton}>

                                        <img id='Register-Form-Avatar-Image' src={AvatarPreSelected} />

                                        <div className="Avatar-Select-Button">

                                            <p className="Avatar-Select-Button-Label">Cambiar Foto de Perfil</p>

                                        </div>

                                    </div>

                                </div>

                                <div className="Doble-Form-Section-Container">

                                    <div className="Regiter-Form-Section">

                                        <p className="Form-Section-Name">Nombre</p>

                                        <div id='auth_register_form_name_input_container' className="Form-Input-Container" onClick={clearInputError}>

                                            <input id='auth_register_form_name_input' className='Form-Text-Input' type="text" placeholder='Tu Nombre' onKeyDown={handleRegisterInputKeyDown} />

                                        </div>

                                        <p id='auth_register_form_name_input_message_label' className="Form-Input-Message-Label"></p>

                                    </div>

                                    <div className="Regiter-Form-Section">

                                        <p className="Form-Section-Name">Apellido</p>

                                        <div id='auth_register_form_lastname_input_container' className="Form-Input-Container" onClick={clearInputError}>

                                            <input id='auth_register_form_lastname_input' className='Form-Text-Input' type="text" placeholder='Tus Apellidos' onKeyDown={handleRegisterInputKeyDown} />

                                        </div>

                                        <p id='auth_register_form_lastname_input_message_label' className="Form-Input-Message-Label"></p>

                                    </div>

                                </div>

                                <div className="Regiter-Form-Section">

                                    <p className="Form-Section-Name">Nombre de usuario</p>

                                    <div id='auth_register_form_username_input_container' className="Form-Input-Container" onClick={clearInputError}>

                                        <input id='auth_register_form_username_input' className='Form-Text-Input' type="text" placeholder='Nombre de usuario' onKeyDown={handleRegisterInputKeyDown} />

                                    </div>

                                    <p id='auth_register_form_username_input_message_label' className="Form-Input-Message-Label"></p>

                                </div>

                                <div className="Regiter-Form-Section">

                                    <p className="Form-Section-Name">Correo Electronico</p>

                                    <div id='auth_register_form_email_input_container' className="Form-Input-Container" onClick={clearInputError}>

                                        <input id='auth_register_form_email_input' className='Form-Text-Input' type="text" placeholder='you@company.com' onKeyDown={handleRegisterInputKeyDown} />

                                    </div>

                                    <p id='auth_register_form_email_input_message_label' className="Form-Input-Message-Label"></p>

                                </div>

                                <div className="Doble-Form-Section-Container">

                                    <div className="Regiter-Form-Section">

                                        <p className="Form-Section-Name">Contraseña</p>

                                        <div id='auth_register_form_password_input_container' className="Form-Password-Input-Container Password-Input-Container-Complete" onClick={clearInputError}>

                                            <input id='auth_register_form_password_input' className='Form-Password-Input' type="password" placeholder='****************' onKeyDown={handleRegisterInputKeyDown} />

                                        </div>

                                        <p id='auth_register_form_password_input_message_label' className="Form-Input-Message-Label"></p>

                                    </div>

                                    <div className="Regiter-Form-Section">

                                        <p className="Form-Section-Name">Confirma tu contraseña</p>

                                        <div className="Form-Switch-Input-Container">

                                            <div id='auth_register_form_confirm_password_input_container' className="Form-Password-Input-Container" onClick={clearInputError}>

                                                <input id='auth_register_form_confirm_password_input' className='Form-Password-Input' type="password" placeholder='****************' onKeyDown={handleRegisterInputKeyDown} />

                                            </div>

                                            <div id='auth_form_password_switch_button' className="Form-Password-Input-Type-Switch-Button" onMouseDown={buttonOnPress} onMouseUp={buttonUnpress} onClick={switchPasswordsInputType}>

                                                <MdVisibility id='auth_form_password_switch_button' color='#000d41' size={18} />

                                            </div>

                                        </div>

                                        <p id='auth_register_form_confirm_password_input_message_label' className="Form-Input-Message-Label"></p>

                                    </div>

                                </div>

                                <div className="Form-Action-Buttons-Container">

                                    <div id='auth_register_form_login_button' className="Auth-Form-Login-Button" tabIndex={0} onMouseDown={buttonOnPress} onMouseUp={buttonUnpress} onClick={handleRegisterFormRegisterButton}>

                                        <p id='auth_register_form_login_button' className="Button-Label">Crear cuenta</p>

                                    </div>

                                </div>

                            </div>

                            <div className="Auth-Form-Forgot-Password-Container">

                                <div className="Form-Session-Action-Buttons-Container">

                                    <div id='auth_form_forgot_go_login_button' className="Icon-Button" onClick={displayLoginForm} onMouseDown={buttonOnPress} onMouseUp={buttonUnpress}>

                                        <MdArrowBackIosNew id='auth_form_forgot_go_login_button' size={14} color='#000' />

                                        <p id='auth_form_forgot_go_login_button' className="Button-Label">Volver a inicio de sesion</p>

                                    </div>

                                </div>

                                <p className="Form-Section-Text-Label">Ingresa la dirección de correo electrónico asociada con tu cuenta en el siguiente campo para recibir un codigo de seguridad.</p>

                                <div className="Form-Section">

                                    <p className="Form-Section-Name">Correo electronico</p>

                                    <div id='auth_form_email_input_container' className="Form-Input-Container" onClick={clearInputError}>

                                        <input id='auth_form_email_input' className='Form-Text-Input' type="text" placeholder='you@company.com' onKeyDown={handleInputKeyDown} />

                                    </div>

                                    <p id='auth_form_email_input_message_label' className="Form-Input-Message-Label"></p>

                                </div>

                                <div className="Form-Action-Buttons-Container">

                                    <div id='auth_form_forgot_send_security_code_button' className="Auth-Form-Login-Button" tabIndex={0} onClick={handleFormLoginButton} onMouseDown={buttonOnPress} onMouseUp={buttonUnpress} >

                                        <p id='auth_form_forgot_send_security_code_button' className="Button-Label">Enviar codigo de seguridad</p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>




        </div>

    )

}

export default Home_view