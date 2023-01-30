
// * Dependencies Required 

import { useContext } from "react";

// * Modules Required

import { AppContext } from '../../app/Context';

// * view Styles

import '../styles/SafetyBox_view.css'

// * Components Required

// * view to Return

const SafetyBoxView = () => {

    const { context } = useContext(AppContext)

    if (context.app.current_view == 'Caja Segura') return (

        <div className="SafetyBox-View-Container">


        </div>

    )


}

export default SafetyBoxView