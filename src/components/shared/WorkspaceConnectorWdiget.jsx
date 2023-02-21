
// * Dependencies Required 

import { useContext } from "react";
import { MdClose } from "react-icons/md";

// * Modules Required

import { AppContext } from '../../app/Context';

// * view Styles

import './styles/WorkspaceConnectionWidget.css'

// * Components Required

// * view to Return


const WorkspaceConnectionWidget = () => {

    const { context, setContext } = useContext(AppContext)

    if (context.app.display_workspace_Widget == true) {

        return (

            <div className="Workspace-Connection-Widget" id="Workspace-Connection-Widget">

                <div className="Workspace-Connection-Widget-Background"></div>

                <div className="Workspace-Connection-Widget-Content">

                    {

                        context.app.display_create_workspace_view === true ? <CreateWorkspaceView user_profile_photo_url={context.user.user_profile_photo_url} userName={context.user.user_display_name} userEmail='nombre@ejemplo.com' /> : <JoinWorkspaceView />

                    }

                </div>

            </div>

        )

    }

}



const CreateWorkspaceView = ({ userName, userEmail, user_profile_photo_url }) => {

    const { context, setContext } = useContext(AppContext)

    const closeWorkspaceWidget = () => {

        document.getElementById('Workspace-Connection-Widget').style.top = '-560px'

        setTimeout(() => { setContext({ app: { ...context.app, display_workspace_Widget: false }, workspace: { ...context.workspace}, user: { ...context.user } }) }, 300)
        return

    }

    return (

        <div className="Workspace-Connection-Widget-Content-Margin">

            <div className="Workspace-Connection-Top-View-Container">

                <p className="Workspace-Widget-View-Title-Label">Crea un Workspace</p>

                <div className="Workspace-Connection-Top-Back-Button" onClick={closeWorkspaceWidget}>

                    <MdClose color="#ffffff" size={28} />

                </div>

            </div>

            <div className="Workspace-Row-Container">

                <div className="Workspace-Row-Text-Container">

                    <p className="Workspace-Row-Title-Label">Nombre</p>

                    <p className="Workspace-Row-Subtitle-Label">Este sera mostrado por default al unirse</p>

                </div>

                <div className="Workpace-Row-Action-Container">

                    <div className="Workspace-Name-Input-Container">

                        <input className="Workspace-Name-Input" type="text" placeholder="Web Design Nodes" id="Workspace-Name-Input" />

                    </div>

                </div>

            </div>

            <div className="Workspace-Members-Container">

                <div className="Workspace-Complete-Row-Text-Container">

                    <p className="Workspace-Row-Title-Label">Miembros</p>

                    <p className="Workspace-Row-Subtitle-Label">Define quienes tendran acceso a este Workspace</p>

                    <div className="Workspace-Member-List-Table-Top">

                        <div className="Workspace-Member-Table-Top-Cell">

                            <p className="Workspace-Member-Table-Top_label">Miembro</p>

                        </div>

                        <div className="Workspace-Roles-Table-Top-Cell">

                            <p className="Workspace-Member-Table-Top_label">Roles</p>

                        </div>

                    </div>

                    <div className="Workspace-Members-List-Container">

                        <div className="Workspace-Member-List-Option-Container">

                            <div className="Workspace-Member-Table-Member-Container">

                                <div className="Workspace-Member-Image-Container">

                                    <img src={user_profile_photo_url != 'defaultApp' ? user_profile_photo_url : 'https://scontent.webdesignnodes.com/datasync/default_profile_pics/male/0.png'} />

                                </div>

                                <div className="Workspace-Member-Info-Container">

                                    <p className="Workspace-Member-Info-Name-Label">{userName}</p>
                                    <p className="Workspace-Member-Info-Email-Label">{userEmail}</p>

                                </div>

                            </div>

                            <div className="Workspace-Member-Table-Member-Roles-Container">

                                <p className="Workspace-Member-Roles-Label">Propietario</p>

                            </div>

                        </div>

                    </div>

                    <div className="Workspace-Add-Member-Container">

                        <div className="Workspace-Add-Member-Input-Container">

                            <input className="Workspace-Add-Member-Input" type="text" placeholder="nombre@ejemplo.com" id="Workspace-Name-Input" />

                        </div>

                        <div className="Workspace-Add-Member-Button">

                            <p className="Workspace-Add-Member-Button-Label">Agregar</p>

                        </div>

                    </div>

                </div>

            </div>

            <div className="Workspace-Create-Button">

                <p className="Workspace-Create-Button-Label">Crear Workspace</p>

            </div>

        </div>

    )

}

const JoinWorkspaceView = () => {

    const { context, setContext } = useContext(AppContext)

    const closeWorkspaceWidget = () => {

        document.getElementById('Workspace-Connection-Widget').style.top = '-560px'

        setTimeout(() => { setContext({ app: { ...context.app, display_workspace_Widget: false }, workspace: { ...context.workspace}, user: { ...context.user } }) }, 300)
        return

    }

    return (

        <div className="Workspace-Connection-Widget-Content-Margin">

            <div className="Workspace-Connection-Top-View-Container">

                <p className="Workspace-Widget-View-Title-Label">Unete a un Workspace</p>

                <div className="Workspace-Connection-Top-Back-Button" onClick={closeWorkspaceWidget}>

                    <MdClose color="#ffffff" size={28} />

                </div>

            </div>

            
        </div>

    )

}

export default WorkspaceConnectionWidget