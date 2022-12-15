import { MdDashboard, MdChromeReaderMode, MdViewSidebar, MdAutoAwesomeMotion, MdList } from "react-icons/md";
import AppContext from "./AppContext";
import { useContext } from "react";

import './styles/SideNavBar.css'

const SideNavBar = () => {

    // ! App Context

    const contextApp = useContext(AppContext)
    console.log(contextApp.currenViewSelected);

    return <div className='SideNavBar'>

        <p className="SideNavBar-Title-Section">Menu</p>

        <SideNavBarOptionContainer OptionName='Dashboard' />
        <SideNavBarOptionContainer OptionName='Base de datos' />
        <SideNavBarOptionContainer OptionName='Caja Segura' />
        <SideNavBarOptionContainer OptionName='Respaldos' />
        <SideNavBarOptionContainer OptionName='Tareas Pendientes' />

    </div>

}

const SideNavBarOptionContainer = ({ OptionName }) => {    

    return <div className="SideNavBar-Option">

        <button className="SideNavBar-Option-Container">

            {OptionName == 'Dashboard' ? <MdDashboard size={24} color={'#06113C'} /> : null}
            {OptionName == 'Base de datos' ? <MdChromeReaderMode size={24} color={'#06113C'} /> : null}
            {OptionName == 'Caja Segura' ? <MdViewSidebar size={24} color={'#06113C'} /> : null}
            {OptionName == 'Respaldos' ? <MdAutoAwesomeMotion size={24} color={'#06113C'} /> : null}
            {OptionName == 'Tareas Pendientes' ? <MdList size={24} color={'#06113C'} /> : null}



            <p className="SideNavBar-Option-Name-Label">{OptionName}</p>

        </button>

    </div>

}

export default SideNavBar