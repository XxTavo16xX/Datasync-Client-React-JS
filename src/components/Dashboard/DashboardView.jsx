
import TopSection from './TopContainerBox'
import DatabaseContainer from "./DatabaseContainer";
import PendingTasksContainer from './PendingTaskContainer'

const DashboardView = () => {

    return <div className="mainViewContainer">

        <TopSection/>

        <div className="bottomSectionContainer">

            <DatabaseContainer />
            <PendingTasksContainer />

        </div>

    </div>

}

export default DashboardView