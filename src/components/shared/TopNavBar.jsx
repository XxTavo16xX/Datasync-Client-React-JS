import { MdKeyboardArrowDown, MdSubject, MdArrowForwardIos } from "react-icons/md";

import { useContext } from "react";
import { AppContext } from '../../app/Context';

import './styles/TopNavBar.css'

const TopNavBar = ({currentViewName}) => {

    const { context, setContext } = useContext(AppContext);

    return <div className="Header">

        <MenuButton />
        <Logo appName={context.app.app_name} />
        <ViewInfo current_view_name={context.app.current_view}/>
        <UserContainer />

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

const ViewInfo = ({current_view_name}) => {

    return <div className="Header-View-Info-Container">

        <MdArrowForwardIos size={18} color={'#06113c74'} style={{marginLeft: '20px'}} />

        <p className="Header-Current-View-Label">{current_view_name}</p>

    </div>

}

const UserContainer = () => {

    return <div className="Header-User-Container">

        <div className="User-Container">

            <div className="User-Photo-Container">

                <img src="./src/assets/components/TopNavBar/me.jpg" />

            </div>

            <p className="User-Name-Label">Armando Peralta</p>

            <button className="User-Options-Button">

                <MdKeyboardArrowDown size={24} />

            </button>


        </div>


    </div>

}

export default TopNavBar