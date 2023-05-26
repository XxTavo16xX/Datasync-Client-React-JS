
// * Dependencies Required

import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// * Context Required

import { App_Context } from '../../app/contexts/app_context'
import { Session_Context } from '../../app/contexts/session_context'
import { User_Context } from '../../app/contexts/user_context'

import { Notification_Context } from '../../app/contexts/notification_context'

// * Styles Required

import './index.css'

// * Components Required

import { Player } from '@lottiefiles/react-lottie-player'

import TopNavBar from '../../components/shared/TopNavBar'
import Auth_Login_Form from '../../components/Auth/Form/Login'
import Auth_Register_Form from '../../components/Auth/Form/Register'
import Auth_Forgot_Password_Form from '../../components/Auth/Form/ForgotPassword'

// * View Controller

import * as viewController from './controller'

// * View Exported

const Home_view = () => {

    const { notificationContext, setNotificationContext } = useContext(Notification_Context)
    const { appContext, setAppContext } = useContext(App_Context)
    const { sessionContext, setSessionContext } = useContext(Session_Context)
    const { userContext, setUserContext } = useContext(User_Context)
    const navigate = useNavigate();

    const [formSelected, setFormSelected] = useState('login')

    useEffect(() => {

        viewController.onComponentMounted(
            { value: appContext, updateFunction: setAppContext },
            { value: sessionContext, updateFunction: setSessionContext },
            navigate
        )

    }, [])

    return (

        <div className="Home-Page-Container">

            <TopNavBar />

            <div className="Home-Page-Margin">

                <div className="Home-Page-Text-Content-Container">

                    <h1 className='Home-Page-Title'>Tu area de trabajo ideal.</h1>

                    <p className="Home-Page-Subtitle">Inicia sesion para acceder a todas las herramientas que puedas necesitar.</p>

                    <div className="Home-Page-Animation-Player-Container">

                        <Player
                            autoplay={true}
                            loop={true}
                            controls={false}
                            src="/assets/animations/working.json"
                            style={{ height: '550px', width: '550px' }} />

                    </div>

                </div>

                <div className="Home-Page-Auth-Form-Container">

                    <div className="Auth-Form-Margin">

                        <div id='Auth-Forms-Container' className="Auth-Form-Section-Container">

                            { formSelected === 'login' ? <Auth_Login_Form setFormSelected={setFormSelected} sessionContextValues={{ value: sessionContext, updateFunction: setSessionContext }} userContextValues={{ value: userContext, updateFunction: setUserContext }} notificationContextValues={{ value: notificationContext, updateFunction: setNotificationContext }} /> : null}
                            { formSelected === 'register' ? <Auth_Register_Form setFormSelected={setFormSelected} notificationContextValues={{ value: notificationContext, updateFunction: setNotificationContext }} /> : null } 
                            { formSelected === 'forgotPassword' ? <Auth_Forgot_Password_Form setFormSelected={setFormSelected} /> : null } 

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default Home_view