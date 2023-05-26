
// * Dependencies Required

import { MdDashboard, MdChat, MdChromeReaderMode, MdViewSidebar, MdDescription, MdAutoAwesomeMotion, MdList, MdSupportAgent } from "react-icons/md";
import { AiFillCalendar } from "react-icons/ai";
import { useNavigate } from 'react-router-dom'

// * Styles Required

import './index.css'

const views = [

    {
        label: 'Dashboard',
        nav: 'dashboard',
        pendingNotifications: 1
    }, {
        label: 'Chat',
        nav: 'chat',
        pendingNotifications: 0
    }, {
        label: 'Calendario',
        nav: 'calendar',
        pendingNotifications: 0
    }, {
        label: 'Base de datos',
        nav: 'databases',
        pendingNotifications: 0
    }, {
        label: 'Documentos',
        nav: 'cloud',
        pendingNotifications: 0
    }, {
        label: 'Caja Segura',
        nav: 'safetyBox',
        pendingNotifications: 0
    }, {
        label: 'Respaldos',
        nav: 'backups',
        pendingNotifications: 0
    }, {
        label: 'Tareas Pendientes',
        nav: 'pendingTasks',
        pendingNotifications: 0
    }, {
        label: 'Soporte Tecnico',
        nav: 'support',
        pendingNotifications: 0
    }]

// * Component Returned

const SideNavBar = ({ updateAppViewState, updateAppViewLabel }) => {

    const navigate = useNavigate();

    const handleSideNavBarOptionClicked = event => {

        const navOptionClicked = event.target
        const navValue = navOptionClicked.getAttribute('navto')
        const navLabel = navOptionClicked.getAttribute('navtolabel')

        navigate(navValue)
        updateAppViewState(navValue)
        updateAppViewLabel(navLabel)

    }

    return (

        <div className="Side-Nav-Bar-Container">

            <div className="Side-Nav-Bar-Options-Container">

                {

                    views.map(menuView => {

                        return (

                            <div className="Side-Nav-Bar-Option-Container" onClick={handleSideNavBarOptionClicked} navto={menuView.nav} navtolabel={menuView.label} key={menuView.nav}>

                                <div className="Side-Nav-Bar-Option-Icon-Container">

                                    {menuView.pendingNotifications > 0 ? <div className="Side-Nav-Bar-Option-Icon-Notification-Bubble-Container"></div> : null }

                                    {

                                        MenuOptionIcon(menuView.label)

                                    }

                                </div>

                                <p className="Side-Nav-Bar-Option-Label" navto={menuView.nav} navtolabel={menuView.label} >{menuView.label}</p>

                            </div>

                        )

                    })

                }

            </div>

        </div>

    )

}

const MenuOptionIcon = (menuOptionName) => {

    switch (menuOptionName) {

        case 'Dashboard': return <MdDashboard className="Side-Nav-Bar-Option-Icon" size={30} color={'#06113C'} />
        case 'Chat': return <MdChat className="Side-Nav-Bar-Option-Icon" size={30} color={'#06113C'} />
        case 'Calendario': return <AiFillCalendar className="Side-Nav-Bar-Option-Icon" size={30} color={'#06113C'} />
        case 'Base de datos': return <MdChromeReaderMode className="Side-Nav-Bar-Option-Icon" size={30} color={'#06113C'} />
        case 'Documentos': return <MdDescription className="Side-Nav-Bar-Option-Icon" size={30} color={'#06113C'} />
        case 'Caja Segura': return <MdViewSidebar className="Side-Nav-Bar-Option-Icon" size={30} color={'#06113C'} />
        case 'Respaldos': return <MdAutoAwesomeMotion className="Side-Nav-Bar-Option-Icon" size={30} color={'#06113C'} />
        case 'Tareas Pendientes': return <MdList className="Side-Nav-Bar-Option-Icon" size={30} color={'#06113C'} />
        case 'Soporte Tecnico': return <MdSupportAgent className="Side-Nav-Bar-Option-Icon" size={30} color={'#06113C'} />

    }

}

export default SideNavBar