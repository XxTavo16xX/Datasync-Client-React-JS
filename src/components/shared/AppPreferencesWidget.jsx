
// * Dependencies Required 

import { useContext, useEffect } from "react";
import { MdAccountCircle, MdSettings, MdLogout } from "react-icons/md";

// * Modules Required

import { AppContext } from '../../app/Context';

// * view Styles

import './styles/AppPreferencesWidget.css'

// * Components Required

// * view to Return

const AppPreferencesWidget = () => {

    const { context, setDefaultContext } = useContext(AppContext)

    useEffect(() => {

        setTimeout(() => { document.getElementById('App-Widget-Container').style.height = '230px' }, 100)

    }, [])

    const closeUserSession = () => {

        setDefaultContext()

    }

    return (

        <div className="App-Widget-Container" id="App-Widget-Container">

            <div className="App-Widget-Margin">

                <div className="App-Widget-Top-Container">

                    <div className="User-Info-Photo-Container">

                        <img className="User-Info-Photo" src={context.userData.userProfilePhotoURL != 'defaultApp' ? context.user.user_profile_photo_url : 'https://scontent.webdesignnodes.com/datasync/default_profile_pics/male/0.png'} />

                    </div>

                    <div className="User-Info-Text-Container">

                        <p className="App-Widget-User-Name-Label">{context.userData.userDisplayName}</p>

                        <p className="App-Widget-User-Email-Label">{context.userData.userEmail}</p>

                    </div>

                </div>

                <div className="App-Widget-Option-List-Container">

                    <div className="App-Widget-Option-Container">

                        <div className="App-Widget-Option-Icon-Container">

                            <MdAccountCircle size={26} color='#06113c' />

                        </div>

                        <div className="User-Info-Text-Container">

                            <p className="App-Widget-Option-Text-Label">Perfil</p>

                        </div>

                    </div>

                    <div className="App-Widget-Option-Container">

                        <div className="App-Widget-Option-Icon-Container">

                            <MdSettings size={26} color='#06113c' />

                        </div>

                        <div className="User-Info-Text-Container">

                            <p className="App-Widget-Option-Text-Label">Configuracion</p>

                        </div>

                    </div>

                    <div className="App-Widget-Option-Container" onClick={closeUserSession}>

                        <div className="App-Widget-Option-Icon-Container">

                            <MdLogout size={26} color='#06113c' />

                        </div>

                        <div className="User-Info-Text-Container">

                            <p className="App-Widget-Option-Text-Label">Cerrar Session</p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default AppPreferencesWidget