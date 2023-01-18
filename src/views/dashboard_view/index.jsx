
// * Dependencies Required 

import { useContext } from "react";

// * Modules Required

import { AppContext } from '../../app/Context';

// * view Styles

import './style/Dashboard_view/index.css'

// * Components Required

import ResumenWidget from '../../components/dashboard/ResumenWidget'
import BackupWidget from '../../components/dashboard/BackupWidget'

// * view to Return

const DashboardView = () => {

    const { context } = useContext(AppContext)

    if (context.app.current_view == 'Dashboard') return (

        <div className="Dashboard-View-Container">

            <div className="Dashboard-Top-Section-Container">

                <div className="Top-Section-Container">

                    <div className="Top-Section-Container-Background"></div>

                    <div className="Top-Section-Container-Margin">

                        <ResumenWidget />

                        <BackupWidget />

                    </div>

                </div>

            </div>

        </div>

    )


}

export default DashboardView