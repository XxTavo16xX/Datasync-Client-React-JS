
// * Dependencies Required

import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Player } from '@lottiefiles/react-lottie-player'

// * Context Required

import { AppContext } from '../../app/context'

// * Styles Required

import './index.css'

// * Components Required

import TopNavBar from '../../components/shared/TopNavBar'
import Auth_Login_Form from '../../components/Auth/Form/Login'
import Auth_Register_Form from '../../components/Auth/Form/Register'
import Auth_Forgot_Password_Form from '../../components/Auth/Form/ForgotPassword'

// * Component Exported

const Home_view = () => {

    const { context, setContext } = useContext(AppContext)
    const [ formSelected, setFormSelected ] = useState('login')
    const navigate = useNavigate();

    useEffect(() => {

        if (context.session.token != '') { navigate('/app') }

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
                            style={{ height: '550px', width: '550px' }}
                        ></Player>

                    </div>

                </div>

                <div className="Home-Page-Auth-Form-Container">

                    <div className="Auth-Form-Margin">

                        <div id='Auth-Forms-Container' className="Auth-Form-Section-Container">

                            { formSelected === 'login' ? <Auth_Login_Form context={context} setContext={setContext} setFormSelected={setFormSelected} /> : null } 
                            { formSelected === 'register' ? <Auth_Register_Form context={context} setContext={setContext} setFormSelected={setFormSelected} /> : null } 
                            { formSelected === 'forgotPassword' ? <Auth_Forgot_Password_Form context={context} setContext={setContext} setFormSelected={setFormSelected} /> : null } 

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default Home_view