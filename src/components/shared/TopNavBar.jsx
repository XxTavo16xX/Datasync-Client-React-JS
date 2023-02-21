import { MdKeyboardArrowDown, MdSubject, MdArrowForwardIos, MdAdd } from "react-icons/md";

import { useContext } from "react";
import { AppContext } from '../../app/Context';

import './styles/TopNavBar.css'

const TopNavBar = () => {

    const { context, setContext } = useContext(AppContext);

    return <div className="Header" id="appHeader">

        <MenuButton />
        <Logo appName={context.app.app_name} />
        <ViewInfo current_workspace_name={context.app.worksapce.name} current_view_name={context.app.current_view} />
        <UserContainer userName={context.user.user_display_name} user_profile_photo_url={context.user.user_profile_photo_url} />

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

const ViewInfo = ({ current_view_name, current_workspace_name }) => {

    const { context, setContext } = useContext(AppContext);

    const datafetched = [{ id: 'AsdawdWdWd', name: 'Label Name' }, { id: 'AsdawdWaskdjalsk', name: 'Label Name' }]

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

        setContext({ app: { ...context.app, display_workspace_Widget: true, display_create_workspace_view: true }, user: { ...context.user } })
        setTimeout(() => { document.getElementById('Workspace-Connection-Widget').style.top = '0' }, 10)
        return

    }

    const displayWorkspaceJoin = () => {

        setContext({ app: { ...context.app, display_workspace_Widget: true, display_create_workspace_view: false }, user: { ...context.user } })
        setTimeout(() => { document.getElementById('Workspace-Connection-Widget').style.top = '0' }, 10)
        return

    }

    return <div className="Header-View-Info-Container">

        <div className="Header-Account-Workspace-Selector" onClick={displayWorkspaceConnectionList}>

            <div className="Header-Account-Current-Workspace-Container">

                <p className="Header-Account-Workspace-Label">{current_workspace_name}</p>

                <div className="Header-Account-Workspace-Button">


                    <MdKeyboardArrowDown color="ffffff" size={24} style={{ marginLeft: 10, marginTop: 3 }} />

                </div>

            </div>

            <div className="Header-Account-Workspaces-Connected-List-Container" id="Header-Account-Workspaces-Connected-List-Container">

                {

                    datafetched.map(element => {

                        return (

                            <div className="Header-Account-Workpace-List-Option-Container" key={element.id}>

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

        <p className="Header-Current-View-Label">{current_view_name}</p>

    </div>

}

const UserContainer = ({ userName, user_profile_photo_url }) => {

    return <div className="Header-User-Container">

        <div className="User-Container">

            <div className="User-Photo-Container">

                <img src={user_profile_photo_url != 'defaultApp' ? user_profile_photo_url : 'https://scontent.webdesignnodes.com/datasync/default_profile_pics/male/0.png'} />

            </div>

            <p className="User-Name-Label">{userName}</p>

            <button className="User-Options-Button">

                <MdKeyboardArrowDown size={24} />

            </button>


        </div>


    </div>

}

export default TopNavBar