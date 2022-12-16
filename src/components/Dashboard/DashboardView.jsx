
import TopSection from './TopContainerBox'
import DatabaseContainer from "./DatabaseContainer";
import PendingTasksContainer from './PendingTaskContainer'

import AppContext from "../AppContext";
import { useContext } from "react";

import './styles/DashboardContainer.css'

const DashboardView = () => {

    const contextApp = useContext(AppContext)

    return <div className={contextApp.currenViewSelected == 'Dashboard' ? 'Dashboard-Content-Container' : 'Content-Container-Hidded'}>

        <div className="Dashboard-Top-Section-Container">

            <TopSection />

        </div>

        <div className="Dashboard-Bottom-Section-Container">

            <DatabaseContainer />
            <PendingTasksContainer />

        </div>

    </div>

}

export default DashboardView