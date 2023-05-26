
// * Components Required

import EditText from '../../../shared/Inputs/EditText'
import { PrimaryButton } from '../../../shared/Buttons/TextButton'
import { Transparent_Text_Icon_Button } from '../../../shared/Buttons/TextIconButton'
import { UserProfilePictureButtons } from '../../../shared/Buttons/ImageButton'
import { MdOutlineArrowBackIos } from 'react-icons/md'

// * Form Style

import './index.css'
import { useEffect, useState } from 'react'

// * Form Controllers

import * as Auth_Register_Form_Controller from './controller'

// * Exporting Datasync Auth Register Form

const Auth_Register_Form = ({ setFormSelected, notificationContextValues }) => {

    const [isNewAccountSuccessfull, setNewAccountState] = useState(false)

    useEffect(() => { Auth_Register_Form_Controller.onComponentMounted(setFormSelected, setNewAccountState, notificationContextValues) })

    return (

        <div id='auth_register_form_container' className="Auth-Form-Register-Container">

            {

                isNewAccountSuccessfull === false ? (

                    <div className="Auth-Form-Register">

                        <Transparent_Text_Icon_Button buttonID='Register-Auth-Button' buttonIcon={<MdOutlineArrowBackIos color='#000d41' size={20} button_reference='Register-Auth-Button' />} buttonLabel='Iniciar Sesion' onPressed={Auth_Register_Form_Controller.switchToLoginForm} buttonOnClick={Auth_Register_Form_Controller.switchToLoginForm} />

                        <div className="Auth-Form-Register-Title-Container">

                            <p className="Auth-Form-Register-Title-Label">Crea una cuenta nueva</p>

                            <div className="Auth-Form-Register-User-Profile-Picture-Container">

                                <UserProfilePictureButtons imagesrc={'https://scontent.webdesignnodes.com/datasync/default_profile_pics/abstract/2.png'} imagetitle='Foto de cuenta' />

                            </div>

                        </div>


                        <div className="Auth-Form-Register-Names-Container">

                            <EditText inputID='auth_register_form_name_input' inputType='text' Title='Nombre' placeholder='Nombre' onEnter='auth_register_form_lastname_input' />
                            <EditText inputID='auth_register_form_lastname_input' inputType='text' Title='Apellido' placeholder='Apellidos' onEnter='auth_register_form_username_input' onSend={Auth_Register_Form_Controller.handleLastnameInputEnter} />


                        </div>

                        <EditText inputID='auth_register_form_username_input' inputType='text' Title='Nombre de usuario' placeholder='Nombre de usuario' onEnter='auth_register_form_email_input' />

                        <EditText inputID='auth_register_form_email_input' inputType='text' Title='Correo Electronico' placeholder='you@company.com' onEnter='auth_register_form_password_input' />

                        <EditText inputID='auth_register_form_password_input' inputType='password' Title='Contraseña' placeholder='**********' onSend={Auth_Register_Form_Controller.handleRegisterProcess} />

                        <PrimaryButton buttonID='auth_register_form_register_button' buttonLabel='Crear cuenta' onPressed={Auth_Register_Form_Controller.handleRegisterProcess} buttonOnClick={Auth_Register_Form_Controller.handleRegisterProcess} />

                    </div>

                ) : (

                    <div className="Auth-Form-Register-Successfull">

                        <p className="Auth-Form-Register-Title-Label Title-Label-Succesfull-Margin">Cuenta creada exitosamente</p>

                        <p className="Auth-Form-Register-Text-Paragraph">Recuerda que es importante verificar el correo electrónico asociado a tu cuenta en un plazo de 72 horas. La verificación del correo es necesaria para garantizar la seguridad de tu cuenta y evitar su eliminación.</p>

                        <p className="Auth-Form-Register-Text-Paragraph">Por favor, revisa tu bandeja de entrada y sigue las instrucciones proporcionadas para completar este proceso.</p>

                        <p className="Auth-Form-Register-Text-Paragraph">Iniciar sesión para continuar.</p>

                        <PrimaryButton buttonID='auth_register_form_goLogin_button' buttonLabel='Iniciar Sesion' onPressed={Auth_Register_Form_Controller.switchToLoginForm} buttonOnClick={Auth_Register_Form_Controller.switchToLoginForm} />

                    </div>

                )

            }

        </div>

    )

}

export default Auth_Register_Form