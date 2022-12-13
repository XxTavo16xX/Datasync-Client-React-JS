import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const userSessionState = localStorage.getItem('userSessionID')

import TopNavBar from './components/TopNavBar'
import SideNavBar from './components/SideNavBar'

import DashboardView from './components/Dashboard/DashboardView'
import DatabaseView from './components/Database/DatabaseView'


const currentViewSelected = 'Database'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <TopNavBar/>
    <SideNavBar/>

    <div className="App-Content">

      <div className="Content-Container">
      </div>

    </div>

  </React.StrictMode>

)
