
import TopSection from './TopContainerBox'
import DatabaseContainer from "./DatabaseContainer";
import PendingTasksContainer from './PendingTaskContainer'

import './styles/DashboardContainer.css'

const DashboardView = () => {

    return <div className="Dashboard-Content-Container">

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