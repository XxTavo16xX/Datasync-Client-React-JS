
// * Dependencies Required 

import { useContext } from "react";
import { MdAccountCircle, MdSettings, MdLogout } from "react-icons/md";

// * Modules Required

import { AppContext } from '../../app/Context';

// * view Styles

import './styles/AppWidget.css'

// * Components Required

// * view to Return

const AppWidget = () => {

    const { context, setContext } = useContext(AppContext)

    if (context.app.display_AppWidget === true) return (

        <div className="App-Widget-Container" id="App-Widget-Container">

            <div className="App-Widget-Margin">

                <div className="App-Widget-Top-Container">

                    <div className="User-Info-Photo-Container">

                        <img className="User-Info-Photo" src={context.user.user_profile_photo_url != 'defaultApp' ? context.user.user_profile_photo_url : 'https://scontent.webdesignnodes.com/datasync/default_profile_pics/male/0.png'} />

                    </div>

                    <div className="User-Info-Text-Container">

                        <p className="App-Widget-User-Name-Label">{context.user.user_display_name}</p>

                        <p className="App-Widget-User-Email-Label">{context.user.user_email}</p>

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

                    <div className="App-Widget-Option-Container">

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

export default AppWidget