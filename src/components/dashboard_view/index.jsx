// * Dependencies Required 

import { useContext } from "react";

// * Modules Required

import { AppContext } from "../../app/Context";

// * view Styles

import './styles/index.css'

// * Components Required

import TopSection from './TopSection'
import DatabaseWidget from './DatabaseWidget'
import PendingTaskWidget from './PendingTaskWidget'

// * view to Return

const DashboardView = () => {

    const { context, setContext } = useContext(AppContext)

    return (

        <div className={context.app.current_view === 'Dashboard' ? 'Dashboard-Content-Container' : 'Content-Container-Hidded'}>

            <div className="Dashboard-Top-Section-Container">

                <TopSection />

            </div>

            <div className="Dashboard-Bottom-Section-Container">

                {/* <DatabaseContainer /> */}
                {/* <PendingTasksContainer /> */}

            </div>

        </div>

    )

}

export default DashboardView