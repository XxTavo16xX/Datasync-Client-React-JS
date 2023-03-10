// * Dependencies Required 

import { useContext } from "react";

// * Modules Required

import { AppContext } from '../../app/Context';

// * view Styles

import '../styles/Database_view.css'

// * Components Required

import TopSearchContainer from '../../components/database/TopSearchContainer'
import DatabaseContentTable from "../../components/Database/DatabaseContentTable";

// * view to Return

const DatabaseView = () => {

    const { context } = useContext(AppContext)

    if (context.app.current_view == 'Base de datos') return (

        <div className="Database-View-Container">

            <div className="Database-View-Navegation-Container">

                <TopSearchContainer />

                <DatabaseContentTable />

            </div>

            <div className="Database-View-Element-View-Container">

                <div className="Database-View-Element-View-Background"></div>

                <div className="Database-View-Element-View-Content">

                    <p className="Database-View-Element-View-Content-Clear-Label">Seleccina un elemento para mostrar el contenido.</p>

                </div>

            </div>

        </div>

    )

}



export default DatabaseView