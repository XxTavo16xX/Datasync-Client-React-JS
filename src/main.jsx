
// * Dependencies Required 

import React from 'react'
import ReactDOM from 'react-dom/client'

// * Modules Required

import { AppProvider } from './app/Context'

// * view Styles

import './index.css'

// * Components Required

import NotificationWidget from './components/shared/NotificationWidget'

import TopNavBar from './components/shared/TopNavBar'
import SideNavBar from './components/shared/SideNavBar'

import DashboardView from './components/dashboard_view/'
import DatabaseView from './components/Database/DatabaseView'

import SafetyBoxView from './components/safety_box_view'

// * view to Return

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <AppProvider>

      <TopNavBar />
      <SideNavBar />
      <NotificationWidget />

      <div className="App-Content">

        <div className="App-Content-Container">

          <DashboardView />
          <DatabaseView />
          <SafetyBoxView />

        </div>

      </div>

    </AppProvider>

  </React.StrictMode>

)
