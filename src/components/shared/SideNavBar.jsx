
// * Dependencies Required 

import { MdDashboard, MdChat, MdChromeReaderMode, MdViewSidebar, MdDescription, MdAutoAwesomeMotion, MdList } from "react-icons/md";
import { AiFillCalendar } from "react-icons/ai";
import React, { useContext } from 'react';

// * Modules Required

import { AppContext } from '../../app/Context';

// * view Styles

import './styles/SideNavBar.css'

const views = ['Dashboard', 'Chat', 'Calendario', 'Base de datos', 'Documentos', 'Caja Segura', 'Respaldos', 'Tareas Pendientes']

// * View to return

const SideNavBar = () => {

    const { context, setContext } = useContext(AppContext);

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

    // * Component to return

    return (

        <div className="SideNavBar-Option" onClick={() => { testClickHangler() }}>

            <button className="SideNavBar-Option-Container">

                {MenuOptionIcon(menuOptionName)}

                <p className="SideNavBar-Option-Name-Label-Selected">{menuOptionName}</p>

            </button>

        </div>

    )


}

const MenuOptionContainer = ({ menuOptionName }) => {

    const { context, setContext } = useContext(AppContext);

    // * This function will handle the sideNavBar menu option selected by update the context saving current values.


    const clickHandler = (viewToDisplay) => {

        if (!viewToDisplay) return

        setContext({ app: { ...context.app, current_view: viewToDisplay }, workspace: { ...context.workspace}, user: { ...context.user } })

    }

    // * Component to return

    return (

        <div className="SideNavBar-Option" onClick={() => { clickHandler(menuOptionName) }}>

            <button className="SideNavBar-Option-Container">

                {MenuOptionIcon(menuOptionName)}

                <p className="SideNavBar-Option-Name-Label">{menuOptionName}</p>

            </button>

        </div>

    )

}

// * This function will return the icon depending of the menuOptionName in creation

const MenuOptionIcon = (menuOptionName) => {

    switch (menuOptionName) {

        case 'Dashboard': return <MdDashboard size={24} color={'#06113C'} />
        case 'Chat': return <MdChat size={24} color={'#06113C'} />
        case 'Calendario': return <AiFillCalendar size={24} color={'#06113C'} />
        case 'Base de datos': return <MdChromeReaderMode size={24} color={'#06113C'} />
        case 'Documentos': return <MdDescription size={24} color={'#06113C'} />
        case 'Caja Segura': return <MdViewSidebar size={24} color={'#06113C'} />
        case 'Respaldos': return <MdAutoAwesomeMotion size={24} color={'#06113C'} />
        case 'Tareas Pendientes': return <MdList size={24} color={'#06113C'} />

    }

}

export default SideNavBar