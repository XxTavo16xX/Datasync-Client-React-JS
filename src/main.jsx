import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import SideNavBar from './components/SideNavBar'

import TopSection from './components/indexView/TopContainerBox'

const currentViewSelected = 'Dashboard'

function getTitleOfView() {

  switch (currentViewSelected) {

    case 'Dashboard':
      return 'Inicio'

    case 'Database':
      return 'Base de datos'

    case 'SafetyBox':
      return 'Caja de Seguridad'

    case 'Backup':
      return 'Respaldos'

    case 'PendingTasks':
      return 'Tareas Pendientes'

  }

}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SideNavBar userName='Armando Peralta' userPhotoURL='./src/assets/components/SIdeNavBar/me.jpg' currentViewSelected={currentViewSelected} />
    <div className="viewContentContainer">
      <TopSection currentViewtitle={getTitleOfView()} />
    </div>
  </React.StrictMode>
)
