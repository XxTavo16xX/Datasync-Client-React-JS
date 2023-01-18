
// * Dependencies Required 

import { useContext } from "react";

// * Modules Required

import { AppContext } from "../../app/Context";

// * view Styles

import './styles/index.css'

// * Components Required

import SearchBar from "./SearchBar";

// * view to Return

const DatabaseView = () => {

    const { context, setContext } = useContext(AppContext)

    return (

        <div className={context.app.current_view === 'Base de datos' ? 'Database-Content-Container' : 'Content-Container-Hidded'}>

            <div className="Database-Content-Results-Container">

                <SearchBar />

            </div>

            <div className="Database-Content-Result-View">

                

            </div>




        </div>

    )

}

export default DatabaseView