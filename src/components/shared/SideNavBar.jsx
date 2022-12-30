import { MdDashboard, MdChromeReaderMode, MdViewSidebar, MdAutoAwesomeMotion, MdList } from "react-icons/md";

import React, { useContext } from 'react';
import { AppContext } from '../../app/Context';

import './styles/SideNavBar.css'

const views = ['Dashboard', 'Base de datos', 'Caja Segura', 'Respaldos', 'Tareas Pendientes']

const SideNavBar = () => {

    const { context, setContext } = useContext(AppContext);

    // const handleChange = (newViewToDisplay) => {
    // setGlobalContext({
    // ...globalContext,
    // currentViewToDisplay: newViewToDisplay,
    // });
    // };

    return <div className='SideNavBar'>

        <p className="SideNavBar-Title-Section">Menu</p>

        {

            views.map(viewOptionName => {

                if (viewOptionName == context.app.current_view) {

                    return (
                        <MenuOptionContainerSelected menuOptionName={viewOptionName} key={viewOptionName} />
                    )

                }

                return (

                    <MenuOptionContainer menuOptionName={viewOptionName} key={viewOptionName} />

                )

            })

        }

    </div>

}

const MenuOptionContainerSelected = ({ menuOptionName }) => {

    return (

        <div className="SideNavBar-Option">

            <button className="SideNavBar-Option-Container">

                { MenuOptionIcon(menuOptionName) }

                <p className="SideNavBar-Option-Name-Label-Selected">{menuOptionName}</p>

            </button>

        </div>

    )


}

const MenuOptionContainer = ({ menuOptionName }) => {

    return (

        <div className="SideNavBar-Option">

            <button className="SideNavBar-Option-Container">

                { MenuOptionIcon(menuOptionName) }

                <p className="SideNavBar-Option-Name-Label">{menuOptionName}</p>

            </button>

        </div>

    )

}

// * This function will return the icon depending of the menuOptionName in creation

const MenuOptionIcon = (menuOptionName) => {

    switch (menuOptionName) {

        case 'Dashboard': return <MdDashboard size={24} color={'#06113C'} />
        case 'Base de datos': return <MdChromeReaderMode size={24} color={'#06113C'} />
        case 'Caja Segura': return <MdViewSidebar size={24} color={'#06113C'} />
        case 'Respaldos': return <MdAutoAwesomeMotion size={24} color={'#06113C'} />
        case 'Tareas Pendientes': return <MdList size={24} color={'#06113C'} />

    }

}

export default SideNavBar