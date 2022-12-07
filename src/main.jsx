import React from 'react'
import ReactDOM from 'react-dom/client'
import SideNavBar from './components/SideNavBar'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SideNavBar userName='Armando Peralta' userPhotoURL='./src/assets/components/SIdeNavBar/me.jpg' />
  </React.StrictMode>
)
