
// * Dependencies Required 

import React from 'react'
import ReactDOM from 'react-dom/client'

// * Modules Required

import { AppProvider } from './app/Context'

// * view Styles

import './index.css'

// * Components Required

import NotificationWidget from './components/shared/NotificationWidget'

import LoginView from './components/Login'

// * view to Return

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <AppProvider>

      <NotificationWidget />
      <LoginView />

      {/* <TopNavBar /> */}
      {/* <SideNavBar /> */}

      

    </AppProvider>

  </React.StrictMode>

)
