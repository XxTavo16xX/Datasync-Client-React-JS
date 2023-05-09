
// * Dependencies Required

import { useSearchParams } from 'react-router-dom'

// * Components Required

import TopNavBar from '../../components/shared/Home/TopNavBar'
import { Player } from '@lottiefiles/react-lottie-player'

// * Libraries Required

import { validateAccountEmail } from '../../services/API/user'

// * Styles Required

import './styles.css'
import { useEffect, useRef, useState } from 'react'

// * Exported View

const Verification_View = () => {

    const [getParameters] = useSearchParams()
    const [animationMode, setAnimationMode] = useState('/assets/animations/email_verification.json')

    const handleAccountValidation = async () => {
        
        const verificationUserReference = getParameters.get('uRef')
        const verificationResult = await validateAccountEmail(verificationUserReference)
        const verificationStateLabel = document.getElementById('email_verification_state_label')
        
        if (!verificationUserReference) {

            setAnimationMode('/assets/animations/error_verification.json')
            verificationStateLabel.innerText = 'Verificacion cancelada'
            return

        }        

        if (verificationResult.isEmailVerificated == false) {

            setAnimationMode('/assets/animations/error_verification.json')
            verificationStateLabel.innerText = 'Verificacion Invalida. Solicita una verificacion nueva.'
            return

        }

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
                            onEvent={event => { if (event === 'complete') handleAccountValidation() }}
                        ></Player>

                    </div>

                    <p id='email_verification_state_label'></p>

                </div>

            </div>

        </div>

    )

}

export default Verification_View