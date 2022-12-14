import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const userSessionState = localStorage.getItem('userSessionID')

import TopNavBar from './components/TopNavBar'
import SideNavBar from './components/SideNavBar'

import DashboardView from './components/Dashboard/DashboardView'
import DatabaseView from './components/Database/DatabaseView'


const currentViewSelected = 'Base de datos'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <TopNavBar currentViewName ={currentViewSelected}/>
    <SideNavBar/>

    <div className="App-Content">

      <div className="App-Content-Container">

        { currentViewSelected == 'Dashboard' ? <DashboardView /> : null}
        { currentViewSelected == 'Base de datos' ? <DatabaseView /> : null}

      </div>

    </div>

  </React.StrictMode>

)
