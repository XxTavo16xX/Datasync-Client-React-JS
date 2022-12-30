
// import TopSection from './TopContainerBox'
// import DatabaseContainer from "./DatabaseContainer";
// import PendingTasksContainer from './PendingTaskContainer'

import { useContext } from "react";
import { AppContext } from '../../app/Context';

import './styles/DashboardContainer.css'

const DashboardView = () => {

    const { context, setContext } = useContext(AppContext);

    const currentView = context.app.current_view

    return <div className={currentView === 'Dashboard' ? 'Dashboard-Content-Container' : 'Content-Container-Hidded'}>

        <div className="Dashboard-Top-Section-Container">

            {/* <TopSection /> */}

        </div>

        <div className="Dashboard-Bottom-Section-Container">

            {/* <DatabaseContainer /> */}
            {/* <PendingTasksContainer /> */}

        </div>

    </div>

}

export default DashboardView