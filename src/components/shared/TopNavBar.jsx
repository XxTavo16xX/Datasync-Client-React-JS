import { MdKeyboardArrowDown, MdSubject, MdArrowForwardIos } from "react-icons/md";

import { useContext } from "react";
import { AppContext } from '../../app/Context';

import './styles/TopNavBar.css'

const TopNavBar = ({currentViewName}) => {

    const { context, setContext } = useContext(AppContext);

    return <div className="Header" id="appHeader">

        <MenuButton />
        <Logo appName={context.app.app_name} />
        <ViewInfo current_workspace={ context.app.workspace } current_view_name={ context.app.current_view }/>
        <UserContainer userName={context.user.user_display_name} user_profile_photo_url={context.user.user_profile_photo_url} />

    </div>


}

const MenuButton = () => {

    return <button className="Header-Lateral-Menu-Button">

        <MdSubject size={20} />

    </button>

}

const Logo = ({appName}) => {

    return <div className="Header-Logo-Container">

        <h1>{appName}</h1>

    </div>

}

const ViewInfo = ({current_view_name, current_workspace}) => {

    return <div className="Header-View-Info-Container">

        <div className="Header-Account-Workspace-Selector">

            <p className="Header-Account-Workspace-Label">{ current_workspace }</p>

            <div className="Header-Account-Workspace-Button">

                <MdKeyboardArrowDown color="ffffff" size={24} style={{ marginLeft: 10, marginTop: 3 }} />

            </div>

        </div>

        <MdArrowForwardIos size={18} color={'#06113c74'} style={{marginLeft: '20px'}} />

        <p className="Header-Current-View-Label">{current_view_name}</p>

    </div>

}

const UserContainer = ({userName, user_profile_photo_url}) => {

    return <div className="Header-User-Container">

        <div className="User-Container">

            <div className="User-Photo-Container">                

                <img src={ user_profile_photo_url != 'defaultApp' ? user_profile_photo_url : 'https://scontent.webdesignnodes.com/datasync/default_profile_pics/male/0.png' } />

            </div>

            <p className="User-Name-Label">{userName}</p>

            <button className="User-Options-Button">

                <MdKeyboardArrowDown size={24} />

            </button>


        </div>


    </div>

}

export default TopNavBar