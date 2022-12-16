import { MdKeyboardArrowDown, MdSubject, MdArrowForwardIos } from "react-icons/md";

import { useContext } from "react";
import { AppContext } from './AppContext';

import './styles/Components/TopNavBar.css'

const TopNavBar = ({currentViewName}) => {

    const { state, setState } = useContext(AppContext);

    return <div className="Header">

        <MenuButton />
        <Logo />
        <ViewInfo viewTitle={state.currentViewToDisplay}/>
        <UserContainer />

    </div>


}

const MenuButton = () => {

    return <button className="Header-Lateral-Menu-Button">

        <MdSubject size={20} />

    </button>

}

const Logo = () => {

    return <div className="Header-Logo-Container">

        <h1>Datasync</h1>

    </div>

}

const ViewInfo = ({viewTitle}) => {

    return <div className="Header-View-Info-Container">

        <MdArrowForwardIos size={18} color={'#06113c74'} />

        <p className="Header-Current-View-Label">{viewTitle}</p>

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