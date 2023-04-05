
// * Dependencies Required 

import React from 'react'
import ReactDOM from 'react-dom/client'

// * Modules Required

import { AppProvider } from './app/Context'
import { iniRightClickListener } from './app' 

// * view Styles

import './index.css'

// * Components Required

import NotificationWidget from './components/shared/NotificationWidget'

import LoginView from './views/login_view'
import AppView from './views/app_view'

// * Starting app config

iniRightClickListener()

// * view to Return

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <AppProvider>

      <NotificationWidget />
      <LoginView />

      <AppView />

    </AppProvider>

  </React.StrictMode>

)
