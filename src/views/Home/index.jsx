
// * Dependencies Required

import { MdVisibility } from 'react-icons/md'

// * Styles Required

import './index.css'

// * Components Required

import TopNavBar from '../../components/shared/Home/TopNavBar'
import CheckBox from '../../components/shared/Form/Checkbox'

// * Assets Required

import logo from '/assets/icons/logo.svg'

// * Libraries Required

import { handleAuthFormLogin } from '../../libraries/Auth/form'
import { clearInputError } from '../../components/shared/controllers/Form'

// * Component Exported

const Home_view = () => {

    const handleInputKeyDown = event => {

        if (event.key === 'Enter' && event.target.id === 'auth_form_email_input') return document.getElementById('auth_form_password_input').focus()
        
        if (event.key === 'Enter' && event.target.id === 'auth_form_password_input') return handleAuthFormLogin()

    }

    const switchPasswordInputType = () => {

        const formPasswordInput = document.getElementById('auth_form_password_input')

        if (formPasswordInput.type == 'text') return formPasswordInput.type = 'password'
        if (formPasswordInput.type == 'password') return formPasswordInput.type = 'text'

    }

    return (

        <div className="Home-Page-Container">

            <TopNavBar />

            <div className="Home-Page-Margin">

                <div className="Home-Page-Text-Content-Container">

                    <h1 className='Home-Page-Title'>Tu area de trabajo ideal.</h1>

                    <p className="Home-Page-Subtitle">Inicia sesion para acceder a todas las herramientas que puedas necesitar.</p>

                </div>

                <div className="Home-Page-Auth-Form-Container">

                    <div className="Auth-Form-Margin">

                        <div className="Auth-Form-Top-Section-Container">

                            <div className="WebApp-Icon-Container">

                                <img className='WebApp-Icon' src={logo} />

                            </div>

                            <p className='Auth-Form-SubLabel' >Ingresa tus credenciales para acceder a tu cuenta.</p>

                        </div>

                        <div className="Auth-Form-Section-Container">

                            <div className="Form-Section">

                                <p className="Form-Section-Name">Correo electronico</p>

                                <div id='auth_form_email_input_container' className="Form-Input-Container" onClick={clearInputError}>

                                    <input id='auth_form_email_input' className='Form-Text-Input' type="text" placeholder='someone@example.com' onKeyDown={handleInputKeyDown} />

                                </div>

                                <p id='auth_form_email_input_message_label' className="Form-Input-Message-Label"></p>

                            </div>

                            <div className="Form-Section">

                                <p className="Form-Section-Name">Contraseña</p>

                                <div className="Form-Switch-Input-Container">

                                    <div id='auth_form_password_input_container' className="Form-Password-Input-Container" onClick={clearInputError}>

                                        <input id='auth_form_password_input' className='Form-Password-Input' type="password" placeholder='****************' onKeyDown={handleInputKeyDown} />

                                    </div>

                                    <div className="Form-Password-Input-Type-Switch-Button" onClick={switchPasswordInputType}>

                                        <MdVisibility color='#000d41' size={18} />

                                    </div>

                                </div>

                                <p id='auth_form_password_input_message_label' className="Form-Input-Message-Label">Verfica tu correo</p>

                            </div>

                            <div className="Form-Session-Action-Buttons-Container">

                                <CheckBox checkboxLabel='Mantener sesion abierta' />

                                <div className="Form-Forgot-Password-Button">

                                    <p className="Button-Label">¿No recuerda su contraseña?</p>

                                </div>

                            </div>

                            <div className="Form-Action-Buttons-Container">

                                <div className="Auth-Form-Login-Button" tabIndex={0} onClick={handleAuthFormLogin}>

                                    <p className="Button-Label">Iniciar Sesion</p>

                                </div>

                                <div className="Auth-Form-Register-Button" tabIndex={0}>

                                    <p className="Button-Label">Crear cuenta</p>

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