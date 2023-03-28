
// * Dependencies Required 

import { useContext } from "react";

// * Modules Required

import { AppContext } from '../../app/Context';

// * view Styles

import '../styles/Dashboard_view.css'

// * Components Required

import CreateDatabaseNodeWidget from "../../components/dashboard/CreateDatabaseNodeWidget";

import ResumenWidget from '../../components/dashboard/ResumenWidget'
import BackupWidget from '../../components/dashboard/BackupWidget'

import DatabaseWidget from '../../components/dashboard/DatabaseWidget'
import PendingTaskWidget from '../../components/dashboard/PendingTaskWidget'

// * view to Return

const DashboardView = () => {

    const { context } = useContext(AppContext)

    if (context.app.current_view == 'Dashboard') return (

        <div className="Dashboard-View-Container">

            { context.app.display_create_database_node_widget != false ? <CreateDatabaseNodeWidget /> : null}

            <div className="Dashboard-Top-Section-Container">

                <div className="Top-Section-Container">

                    <div className="Top-Section-Container-Background"></div>

                    <div className="Top-Section-Container-Margin">

                        <ResumenWidget />

                        <BackupWidget />

                    </div>

                </div>

            </div>

            <div className="Bottom-Section-Container">

                <div className="Database-Widget-Container">

                    <div className="Database-Widget-Background"></div>

                    <div className="Database-Widget-Content-Container">

                        <DatabaseWidget />

                    </div>

                </div>

                <div className="PendingTask-Widget-Container">

                    <div className="PendingTask-Widget-Background"></div>

                    <div className="PendingTask-Widget-Content-Container">

                        {/* <PendingTaskWidget completedTaskReceived={context.workspace.pendingTaskNodes[0].completed} pendingTaskReceived={context.workspace.pendingTaskNodes[0].pending} /> */}

                    </div>

                </div>

            </div>

        </div>

    )


}

export default DashboardView