
// * Dependencies Required 

import { useContext } from "react";

// * Modules Required

import { AppContext } from "../../app/Context";

// * view Styles

import '../styles/Login_view.css'

// * Components Required

import WebTopNavBar from '../../components/shared/WebTopNavBar'
import LoginForm from '../../components/Login/LoginForm'

// * view to Return

const LoginView = () => {

    const { context, setContext } = useContext(AppContext)

    if (context.user.is_session_created === false) {

        return (

            <div className='Login-View-Container'>

                <div className="Login-View-Background">

                    <div className="Login-View-Background-Shape-1"></div>
                    <div className="Login-View-Content-Container-Background-Shape-1"></div>

                </div>

                <div className="Login-View-Content">

                    <WebTopNavBar />

                    <div className="Login-View-Content-Container">

                        <div className="Login-View-Content-Container-Text-Container">

                            <div className="Login-View-Content-Container-Text-Background"></div>

                            <div className="Login-View-Content-Container-Text-Content">

                                <p className="Login-View-Title-Label"><a className="Login-View-Title-AppName-Label">Datasync</a>, Tu area de trabajo ideal.</p>
                                <p className="Login-View-Greatings-Label">Bienvenido, Inicia sesión con tu cuenta para acceder a todas las herramientas que adoras.</p>

                                <div className="Login-View-Animation-Container">

                                    <lottie-player autoplay loop mode="normal" src="https://assets7.lottiefiles.com/packages/lf20_3jmvq04g.json"></lottie-player>

                                </div>

                            </div>

                        </div>

                        <div className="Login-View-Content-Container-Form-Container">

                            <div className="Login-View-Content-Form-Container">

                                <div className="Login-View-Content-Form-Container-Background">

                                </div>

                                <LoginForm />

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        )

    }

}

export default LoginView