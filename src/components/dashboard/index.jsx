
// * Dependencies Required 

import { useContext } from "react";

// * Modules Required

import { AppContext } from "../../app/Context";

// * view Styles

import './styles/index.css'

// * Components Required

import ResumenWidget from './ResumenWidget'
import BackupWidget from './BackupWidget'

import DatabaseWidget from './DatabaseWidget'
import PendingTaskWidget from './PendingTaskWidget'

// * view to Return

const DashboardView = () => {

    const { context, setContext } = useContext(AppContext)

    return (

        <div className={context.app.current_view === 'Dashboard' ? 'Dashboard-Content-Container' : 'Content-Container-Hidded'}>

            <div className="Dashboard-Top-Section-Container">

                <div className="Top-Section-Container">

                    <div className="Top-Section-Container-Background">

                        <div className="Top-Section-Time-Shape"></div>

                    </div>

                    <div className="Top-Section-Container-Margin">

                        <ResumenWidget />

                        <BackupWidget />

                    </div>

                </div>

            </div>

            <div className="Dashboard-Bottom-Section-Container">

                <DatabaseWidget />
                <PendingTaskWidget />

            </div>

        </div>

    )

}

export default DashboardView