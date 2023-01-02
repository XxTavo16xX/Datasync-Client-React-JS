
// * Dependencies Required 

import { useContext } from "react";

// * Modules Required

import { AppContext } from "../../app/Context";

// * view Styles

import './styles/index.css'

// * Components Required

// * view to Return

const DashboardView = () => {

    const { context, setContext } = useContext(AppContext)

    return (

        <div className={context.app.current_view === 'Caja Segura' ? 'SafetyBox-Content-Container' : 'Content-Container-Hidded'}>

                        

        </div>

    )

}

export default DashboardView