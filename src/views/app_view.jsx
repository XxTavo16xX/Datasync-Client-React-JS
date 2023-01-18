
// * Dependencies Required 

import { useContext } from "react";

// * Modules Required

import { AppContext } from '../app/Context';

// * view Styles

import './style/AppView.css'

// * Components Required

import TopNavBar from '../components/shared/TopNavBar'
import SideNavBar from '../components/shared/SideNavBar'

import DashboardView from '../views/dashboard_view'

// * view to Return

const AppView = () => {

    const { context } = useContext(AppContext)

    if (context.user.is_session_created === true) return (

        <div className="App-View-Container">

            <div className="App-View-Background">

                <div className="App-View-Sphere-shape-1"></div>
                <div className="App-View-Sphere-shape-2"></div>

            </div>

            <div className="App-View-Content-Container">

                <TopNavBar />
                <SideNavBar />

                <div className="App-Content-Container">

                    <div className="App-Content-Margin">

                        <DashboardView />

                    </div>

                </div>

            </div>

        </div>

    )

}

export default AppView