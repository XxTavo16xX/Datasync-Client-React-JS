// * Dependencies Required 

import { useContext, useEffect } from "react";

// * Modules Required

import { AppContext } from '../../app/Context';

// * view Styles

import '../styles/Database_view.css'

// * Components Required

import TopSearchContainer from '../../components/database/TopSearchContainer'
import DatabaseContentTable from "../../components/Database/DatabaseContentTable";
import DatabaseForm from "../../components/Database/DatabaseForm";
import { getDatabaseNodeData } from "../../services/databaseNodes";

// * view to Return

const DatabaseView = () => {

    const { context, setContext } = useContext(AppContext)

    useEffect( () => {

        console.log('useEffect called');

        if (context.databaseNode.name == '') {

            if (context.workspace._id != null) {

                // * Loading by default the first db connection from workspace

                const userToken = context.user.user_Token
                const originSeed = context.workspace._id
                const databaseSeed = context.workspace.databaseNodes[0] != null ? context.workspace.databaseNodes[0]['databaseNodeSeed'] : ''

                getDatabaseNodeData(userToken, originSeed, databaseSeed)
                .then(data => {
                    console.log(data);
                    // setContext({...context, databaseNode: data.message.})
                })

            } else {

                console.log('load personal db');

            }

        }

    }, [])

    return (

        <div className="Database-View-Container">

            <div className="Database-View-Navegation-Container">

                {/* <TopSearchContainer /> */}

                {/* <DatabaseContentTable /> */}

            </div>

            <div className="Database-View-Element-View-Container">

                <div className="Database-View-Element-View-Background"></div>

                <div className="Database-View-Element-View-Content">

                    <p className="Database-View-Element-View-Content-Clear-Label">Seleccina un elemento para mostrar el contenido.</p>

                </div>

            </div>

            {/* <DatabaseForm /> */}

        </div>

    )

}



export default DatabaseView