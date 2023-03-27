
// * Dependencies Required 

import { useContext } from "react";

// * Modules Required

import { AppContext } from '../app/Context';

// * view Styles

import './styles/AppView.css'

// * Components Required

import TopNavBar from '../components/shared/TopNavBar'
import SideNavBar from '../components/shared/SideNavBar'
import WorkspaceConnectionWidget from "../components/shared/WorkspaceConnectorWdiget";
import AppWidget from "../components/shared/AppWidget";

import DashboardView from '../views/dashboard_view'
import ChatView from '../views/chat_view'
import CalendarView from '../views/calendar_view'
import DatabaseView from '../views/database_view'
import SafetyBoxView from "../views/safetybox_view";

// * view to Return

const AppView = () => {

    const { context } = useContext(AppContext)

    if (context.userData.userToken != null) return (

        <div className="App-View-Container">

            <div className="App-View-Background">

                <div className="App-View-Sphere-shape-1"></div>
                <div className="App-View-Sphere-shape-2"></div>
                <div className="App-View-Sphere-shape-3"></div>

            </div>

            <div className="App-View-Content-Container">

                <TopNavBar />
                <SideNavBar />
                

                <div className="App-Content-Container">

                    <div className="App-Content-Margin">

                        <WorkspaceConnectionWidget />
                        <AppWidget />

                        <DashboardView />
                        <ChatView />
                        <CalendarView />
                        { context.app.current_view == 'Base de datos' ? <DatabaseView></DatabaseView> : null }
                        <SafetyBoxView />

                    </div>

                </div>

            </div>

        </div>

    )

}

export default AppView