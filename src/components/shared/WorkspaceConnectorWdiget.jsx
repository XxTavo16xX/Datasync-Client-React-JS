
// * Dependencies Required 

import { useContext, useState } from "react";
import { MdClose } from "react-icons/md";

// * Modules Required

import { AppContext } from '../../app/Context';
import { createWorkspaceWithConfig } from "../../services/workspace";

// * view Styles

import './styles/WorkspaceConnectionWidget.css'

// * Components Required

// * view to Return


const WorkspaceConnectionWidget = () => {

    const { context, setContext } = useContext(AppContext)

    if (context.app.display_workspace_Widget == true) {

        return (

            <div className={ context.app.display_create_workspace_view != false ? "Workspace-Connection-Widget" : "Workspace-Connection-Widget Join-Widget-Container" } id="Workspace-Connection-Widget">

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

        setTimeout(() => { setContext({ app: { ...context.app, display_workspace_Widget: false }, workspace: { ...context.workspace }, user: { ...context.user } }) }, 300)
        return

    }

    const [workspaceMembersList, setWorkspaceMembersList] = useState([])

    const addMemberToList = () => {

        const addMemberInput = document.getElementById("Workspace-Add-Member-Email-Input")
        const membersListContainer = document.getElementById('Workspace-Members-List-Container')
        const addMemberInputContainer = document.getElementById('Workspace-Add-Member-Input-Container')

        const newMember = addMemberInput.value;

        if (!newMember.includes('@') || !newMember.includes('.')) return addMemberInputContainer.style.border = '1px solid red'

        if (!workspaceMembersList.includes(newMember) && newMember) {
            setWorkspaceMembersList([...workspaceMembersList, newMember]);
        }

        addMemberInput.value = ''
        setTimeout(() => { membersListContainer.scrollTop = membersListContainer.scrollHeight; }, 100)

    }

    const handleInputEnter = (event) => {
        if (event.key === 'Enter') return addMemberToList()
    }

    const createWorkspace = async () => {

        const workspaceNameInput = document.getElementById('Workspace-Name-Input')
        const workspaceNameInputContainer = document.getElementById('Workspace-Name-Input-Container')

        const workspaceName = workspaceNameInput.value

        if (!workspaceName) return workspaceNameInputContainer.style.border = '1px solid red'

        const requestResponse = await createWorkspaceWithConfig(context.user.user_Token, workspaceName, workspaceMembersList)

        if (requestResponse.error != 'none') { }

        document.getElementById('Workspace-Connection-Widget').style.top = '-560px'

        // * The next line check if the workspace is already saved locally by lookin for workspaceID

        const isWorkspaceAlreadySaved = context.user.user_Workspace_Connection_ID.findIndex(conn => conn.workspaceID === requestResponse.message.workspaceID);

        // * If the workspaceID has been found in local that mean that already exist so no need to save again

        if (isWorkspaceAlreadySaved !== -1) { setTimeout(() => { setContext({ workspace: requestResponse.message.workspaceData, app: { ...context.app, display_workspace_Widget: false }, user: { ...context.user } }) }, 100) }

        // * If the workspaceID has not been found in local must be saved in local data.

        setTimeout(() => { setContext({ workspace: requestResponse.message.workspaceData, app: { ...context.app, display_workspace_Widget: false }, user: { ...context.user, user_Workspace_Connection_ID: [...context.user.user_Workspace_Connection_ID, { workspaceID: requestResponse.message.workspaceData._id, workspaceName: requestResponse.message.workspaceData.name }] } }) }, 100)
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

                    <div className="Workspace-Name-Input-Container" id="Workspace-Name-Input-Container">

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

                    <div className="Workspace-Members-List-Container" id="Workspace-Members-List-Container">

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

                        {

                            workspaceMembersList.map((memberEmail, index) => {

                                return (

                                    <div className="Workspace-Member-List-Option-Container" key={'New-Workspace-Member' + index}>

                                        <div className="Workspace-Member-Table-Member-Container">

                                            <div className="Workspace-Member-Image-Container">

                                                <img src={user_profile_photo_url != 'defaultApp' ? user_profile_photo_url : 'https://scontent.webdesignnodes.com/datasync/default_profile_pics/male/0.png'} />

                                            </div>

                                            <div className="Workspace-Member-Info-Container">

                                                <p className="Workspace-Member-Info-Name-Label">Miembro Nuevo</p>
                                                <p className="Workspace-Member-Info-Email-Label">{memberEmail}</p>

                                            </div>

                                        </div>

                                        <div className="Workspace-Member-Table-Member-Roles-Container">

                                            <p className="Workspace-Member-Roles-Label">Usuario</p>

                                        </div>

                                    </div>

                                )

                            })

                        }

                    </div>

                    <div className="Workspace-Add-Member-Container">

                        <div className="Workspace-Add-Member-Input-Container" id="Workspace-Add-Member-Input-Container">

                            <input className="Workspace-Add-Member-Input" type="text" placeholder="nombre@ejemplo.com" id="Workspace-Add-Member-Email-Input" onKeyDown={handleInputEnter} />

                        </div>

                        <div className="Workspace-Add-Member-Button" onClick={addMemberToList}>

                            <p className="Workspace-Add-Member-Button-Label">Agregar</p>

                        </div>

                    </div>

                </div>

            </div>

            <div className="Workspace-Create-Button" onClick={createWorkspace}>

                <p className="Workspace-Create-Button-Label">Crear Workspace</p>

            </div>

        </div>

    )

}

const JoinWorkspaceView = () => {

    const { context, setContext } = useContext(AppContext)

    const closeWorkspaceWidget = () => {

        document.getElementById('Workspace-Connection-Widget').style.top = '-560px'

        setTimeout(() => { setContext({ app: { ...context.app, display_workspace_Widget: false }, workspace: { ...context.workspace }, user: { ...context.user } }) }, 300)
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

            <div className="Workspace-Complete-Row-Text-Container">

                <p className="Workspace-Row-Subtitle-Label">Ingresa el codigo de invitacion que recibiste.</p>

            </div>

            <div className="Workspace-Name-Input-Container Big-Input-Container" id="Workspace-Name-Input-Container">

                <input className="Workspace-Name-Input Big-Input" type="text" placeholder="63f5df0c4ea4a5eb9758cce7-63f68ba34fe3ba3c50177a90" id="Workspace-Name-Input" />

            </div>

            <div className="Workspace-Create-Button" onClick="">

                <p className="Workspace-Create-Button-Label">Unirme al Workspace</p>

            </div>

        </div>

    )

}

export default WorkspaceConnectionWidget