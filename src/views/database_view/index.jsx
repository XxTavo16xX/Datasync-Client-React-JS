// * Dependencies Required 

import { useContext, useEffect } from "react";

// * Modules Required

import { AppContext } from '../../app/Context';

// * view Styles

import '../styles/Database_view.css'

// * Components Required

import Form_Table_Document_Preview from '../../templates/Database/Form_Table_Document_Preview'

// * view to Return

const DatabaseView = () => {

    const { context, setContext } = useContext(AppContext)

    return (

        <div className="Database-View-Container">

            {

                context.workspaceData.databaseNodes.length != 0 ? <Form_Table_Document_Preview /> : null

            }

        </div>

    )

}





export default DatabaseView