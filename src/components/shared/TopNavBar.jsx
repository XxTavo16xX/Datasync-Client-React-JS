
// * Dependencies Required 

import { useContext } from "react";
import { MdKeyboardArrowDown, MdSubject, MdArrowForwardIos, MdAdd } from "react-icons/md";

// * Modules Required

import { AppContext } from '../../app/Context';
import { getWorkspaceNodeContext } from "../../services/workspace";

// * view Styles

import './styles/TopNavBar.css'

// * Components Required

// * view to Return

const TopNavBar = () => {

    const { context, setContext } = useContext(AppContext);

    return <div className="Header" id="appHeader">

        <MenuButton />
        <Logo appName={context.app.app_name} />
        <ViewInfo />
        <UserContainer userName={context.userData.userDisplayName} user_profile_photo_url={context.userData.userProfilePhotoURL} />

    </div>

}

const MenuButton = () => {

    return <button className="Header-Lateral-Menu-Button">

        <MdSubject size={20} />

    </button>

}

const Logo = ({ appName }) => {

    return <div className="Header-Logo-Container">

        <h1>{appName}</h1>

    </div>

}

const ViewInfo = () => {

    const { context, setContext } = useContext(AppContext);

    const displayWorkspaceConnectionList = () => {

        const workspaceListContainer = document.getElementById('Header-Account-Workspaces-Connected-List-Container')

        if (workspaceListContainer.style.display == '' || workspaceListContainer.style.display == 'none') {

            workspaceListContainer.style.display = 'flex'

            console.log();

            setTimeout(() => { document.getElementById('Header-Account-Workspaces-Connected-List-Container').style.height = [40 * workspaceListContainer.childElementCount] + 'px' }, 10)

            return

        } else if (workspaceListContainer.style.display == 'flex') {

            document.getElementById('Header-Account-Workspaces-Connected-List-Container').style.height = '0px'

            setTimeout(() => { document.getElementById('Header-Account-Workspaces-Connected-List-Container').style.display = 'none' }, 300)

            return

        }

    }

    const displayCreateWorkspace = () => {

        setContext({ ...context, app: { ...context.app, display_workspace_Widget: true, display_create_workspace_view: true } })
        setTimeout(() => { document.getElementById('Workspace-Connection-Widget').style.top = '0' }, 10)
        return

    }

    const displayWorkspaceJoin = () => {

        setContext({ ...context, app: { ...context.app, display_workspace_Widget: true, display_create_workspace_view: false } })
        setTimeout(() => { document.getElementById('Workspace-Connection-Widget').style.top = '0' }, 10)
        return

    }

    const changeToWorkspace = async (workspaceID) => {

        const requestResponse = await getWorkspaceNodeContext(context.userData.userToken, workspaceID)

        if (requestResponse.workspaceLogin == true) { setContext({ ...context, workspaceData: requestResponse.workspaceNodeContextData }) }

        return

    }

    return <div className="Header-View-Info-Container">

        <div className="Header-Account-Workspace-Selector" onClick={displayWorkspaceConnectionList}>

            <div className="Header-Account-Current-Workspace-Container">

                <p className="Header-Account-Workspace-Label">{context.workspaceData.name}</p>

                <div className="Header-Account-Workspace-Button">


                    <MdKeyboardArrowDown color="ffffff" size={24} style={{ marginLeft: 10, marginTop: 3 }} />

                </div>

            </div>

            <div className="Header-Account-Workspaces-Connected-List-Container" id="Header-Account-Workspaces-Connected-List-Container">

                {

                    context.userData.workspaceNodes.map((element, i) => {

                        return (

                            <div className="Header-Account-Workpace-List-Option-Container" key={'top_nav_bar_' + i} onClick={() => { changeToWorkspace(element._id) }}>

                                <p className="Header-Account-Workspace-List-Option-Label">{element.name}</p>

                            </div>

                        )

                    })

                }

                <div className="Header-Account-Workpace-List-Option-Container Workpace-List-Option-New" onClick={displayWorkspaceJoin}>

                    <p className="Header-Account-Workspace-List-Option-Label">Unirse a un Workspace</p>

                    <MdAdd size={18} color={'#fff'} />

                </div>

                <div className="Header-Account-Workpace-List-Option-Container Workpace-List-Option-New" onClick={displayCreateWorkspace}>

                    <p className="Header-Account-Workspace-List-Option-Label">Crear un nuevo Workspace</p>

                    <MdAdd size={18} color={'#fff'} />

                </div>

            </div>

        </div>

        <MdArrowForwardIos size={18} color={'#06113c74'} style={{ marginLeft: '20px' }} />

        <p className="Header-Current-View-Label">{context.app.current_view}</p>

    </div>

}

const UserContainer = ({ userName, user_profile_photo_url }) => {

    const { context, setContext } = useContext(AppContext);

    const displayAppPreferenceWidget = () => {

        setContext({ ...context, app: { ...context.app, display_app_pref_widget: !context.app.display_app_pref_widget } })

    }

    return <div className="Header-User-Container">

        <div className="User-Container">

            <div className="User-Photo-Container">

                <img src={user_profile_photo_url != 'defaultApp' ? user_profile_photo_url : 'https://scontent.webdesignnodes.com/datasync/default_profile_pics/male/0.png'} />

            </div>

            <p className="User-Name-Label">{userName}</p>

            <button className="User-Options-Button" onClick={displayAppPreferenceWidget}>

                <MdKeyboardArrowDown size={24} />

            </button>


        </div>


    </div>

}

export default TopNavBar