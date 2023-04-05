// * Dependencies Required 

import { useContext, useEffect } from "react";

// * Modules Required

import { AppContext } from '../../app/Context';
import { getDatabaseNodeContext } from '../../services/databaseNodes'

// * view Styles

import './styles/Form_Table_Document_Preview.css'

// * Components Required

import TopSearchContainer from '../../components/Database/TopSearchContainer'
import DatabaseContentTable from '../../components/Database/DatabaseContentTable';
import DatabaseForm from '../../components/Database/DatabaseForm';

const Form_Table_Document_Preview = () => {

    const { context, setContext } = useContext(AppContext)

    useEffect(() => {

        if (context.databaseNodeData_updatedAt != 0) {

            // * Ping Database Node for Updates



        } {

            getDatabaseNodeContext(context.userData.userToken, context.workspaceData._id, context.workspaceData.databaseNodes[0] != null ? context.workspaceData.databaseNodes[0]['databaseNodeSeed'] : '')
                .then(data => {

                    if(data.isDatabaseNodeContextFetcned === true){

                        setContext({ ...context, databaseNodeData: data.databaseNodeContext.databaseNodeContext, databaseNodeContentSchemaData: data.databaseNodeContext.databaseNodeContentSchemaContext, databaseNodeDocuments: data.databaseNodeContext.databaseNodeDocuments })

                    }
                })
        }

    }, [])

    return (

        <>

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

            <DatabaseForm />

        </>

    )

}

export default Form_Table_Document_Preview



