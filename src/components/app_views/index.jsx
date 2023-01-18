
// * Dependencies Required 

import React, { useContext } from 'react';

// * Modules Required

import { AppContext } from '../../app/Context';

// * view Styles

import './index.css'

// * Components Required

import TopNavBar from './components/shared/TopNavBar'
import SideNavBar from '../shared/SideNavBar'

// import DashboardView from '../shared/dashboard_view/'
// import DatabaseView from '../shared/Database/DatabaseView'

// import DatabaseView from '../shared/database_view'
// import SafetyBoxView from '../shared/safety_box_view'

// * view to Return

const AppView = () => {

    const [context, setContext] = useContext(AppContext)

    if (context.user.is_session_created) {

        return (

            <div className="App-Content">

                <div className="App-Content-Container">

                    <DashboardView />
                    <DatabaseView />
                    <SafetyBoxView />

                </div>

            </div>

        )

    }


}