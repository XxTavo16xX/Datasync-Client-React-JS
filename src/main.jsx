import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { AppProvider } from './components/AppContext'

import TopNavBar from './components/TopNavBar'
import SideNavBar from './components/SideNavBar'

import DashboardView from './components/Dashboard/DashboardView'
import DatabaseView from './components/Database/DatabaseView'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <AppProvider>

      <TopNavBar />
      <SideNavBar />

      <div className="App-Content">

        <div className="App-Content-Container">

          <DashboardView />
          <DatabaseView />

        </div>

      </div>

    </AppProvider>

  </React.StrictMode>

)
