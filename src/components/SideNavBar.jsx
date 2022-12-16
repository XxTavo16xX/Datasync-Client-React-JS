import { MdDashboard, MdChromeReaderMode, MdViewSidebar, MdAutoAwesomeMotion, MdList } from "react-icons/md";

import React, { useContext } from 'react';
import { AppContext } from './AppContext';

import './styles/SideNavBar.css'

const SideNavBar = () => {

    return <div className='SideNavBar'>

        <p className="SideNavBar-Title-Section">Menu</p>

        <SideNavBarOptionContainer currentViewSelected='Dashboard' />
        <SideNavBarOptionContainer currentViewSelected='Base de datos' />
        <SideNavBarOptionContainer currentViewSelected='Caja Segura' />
        <SideNavBarOptionContainer currentViewSelected='Respaldos' />
        <SideNavBarOptionContainer currentViewSelected='Tareas Pendientes' />

    </div>

}

const SideNavBarOptionContainer = ({ currentViewSelected }) => {

    const { globalContext, setGlobalContext } = useContext(AppContext);

    const handleChange = (newViewToDisplay) => {
        setGlobalContext({
            ...globalContext,
            currentViewToDisplay: newViewToDisplay,
        });
    };

    return (
        <div className={globalContext.currenViewSelected == currentViewSelected ? "SideNavBar-Option SideNavBar-Option-Selected" : "SideNavBar-Option"}
            onClick={() => {
                handleChange(currentViewSelected)
            }}>

            <button className="SideNavBar-Option-Container">

                {currentViewSelected == 'Dashboard' ? <MdDashboard size={24} color={'#06113C'} /> : null}
                {currentViewSelected == 'Base de datos' ? <MdChromeReaderMode size={24} color={'#06113C'} /> : null}
                {currentViewSelected == 'Caja Segura' ? <MdViewSidebar size={24} color={'#06113C'} /> : null}
                {currentViewSelected == 'Respaldos' ? <MdAutoAwesomeMotion size={24} color={'#06113C'} /> : null}
                {currentViewSelected == 'Tareas Pendientes' ? <MdList size={24} color={'#06113C'} /> : null}



                <p className="SideNavBar-Option-Name-Label">{currentViewSelected}</p>

            </button>

        </div>
    )

}

export default SideNavBar