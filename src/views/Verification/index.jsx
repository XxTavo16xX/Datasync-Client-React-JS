
// * Dependencies Required

import { useContext, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'

// * Components Required

import TopNavBar from '../../components/shared/TopNavBar'
import { Player } from '@lottiefiles/react-lottie-player'

// * Context Required

import { Notification_Context } from '../../app/contexts/notification_context'

// * Styles Required

import './styles.css'

// * View Controller

import * as viewController from './controller'

// * Exported View

const Verification_View = () => {

    const { notificationContext, setNotificationContext } = useContext(Notification_Context)
    const navigate = useNavigate();
    const [ getParameters ] = useSearchParams()
    const [ animationMode, setAnimationMode ] = useState('/assets/animations/email_verification.json')

    const addNewNotification = ({ title, message }) => {

        setNotificationContext([...notificationContext, { title, message } ])

    }

    return (

        <div className="Verification-View-Container">

            <TopNavBar />

            <div className="Verification-Text-Container">

                <div className="Verification-Message-Container">

                    <p className="Verification-Title-Label">Verificando el correo electronico asociado a tu cuenta de Datasync</p>

                    <div className="Lottie-Animation-Player" id='Lottie-Animation-Player-Container'>

                        <Player id='email_verification_initial_lottie_animation'
                            autoplay={true}
                            keepLastFrame={true}
                            src={animationMode}
                            style={{ height: '550px', width: '550px' }}
                            onEvent={event => { if (event === 'complete') viewController.onAnimationComplete(navigate, getParameters, setAnimationMode, addNewNotification) }}
                        ></Player>

                    </div>

                    <p id='email_verification_state_label'></p>

                </div>

            </div>

        </div>

    )

}

export default Verification_View