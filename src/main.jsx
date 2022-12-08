import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import SideNavBar from './components/SideNavBar'

import DashboardView from './components/Dashboard/DashboardView'
import DatabaseView from './components/Database/DatabaseView'


const currentViewSelected = 'Database'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <SideNavBar userName='Armando Peralta' userPhotoURL='./src/assets/components/SIdeNavBar/me.jpg' currentViewSelected={currentViewSelected} />

    <div className="viewContentContainer">

      {currentViewSelected == 'Dashboard' ? <DashboardView /> : console.log()}
      {currentViewSelected == 'Database' ? <DatabaseView /> : console.log()}
      {currentViewSelected == 'SafetyBox' ? <DashboardView /> : console.log()}
      {currentViewSelected == 'Backup' ? <DashboardView /> : console.log()}
      {currentViewSelected == 'PendingTasks' ? <DashboardView /> : console.log()}

    </div>

  </React.StrictMode>
)
