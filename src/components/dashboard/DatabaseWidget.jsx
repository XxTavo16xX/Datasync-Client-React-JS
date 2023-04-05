
// * Dependencies Required 

import { useContext } from "react";
import { MdMoreVert, MdAdd } from 'react-icons/md'
import Lottie from "lottie-react";

// * Modules Required

import { AppContext } from '../../app/Context';
import { getDateInHumanFormatByTimestamp } from "../../lib/Calendar";
import { formatToDisplayNumber } from "../../lib/Display";
import { getDatabaseNodeContent } from "../../services/databaseNodes";
import emptyBoxAnimation from '../../assets/animations/emptyBoxAnimation.json'

// * view Styles

import './styles/DatabaseWidget.css'

// * view to Return

const DatabaseWidget = () => {

    const { context } = useContext(AppContext);

    return <div className="Database-Widget-Content-Container">

        <div className="Database-Content-Container-Margin">

            <p className='Database-Content-Title-Label'>Bases de datos</p>

            <div className="Database-Windows-Container">

                {context.workspaceData.databaseNodes.length === 0 ? <EmptyDatabaseNodeWidget /> : <PopulatedDatabaseNodeWidget databaseNodeList={context.workspaceData.databaseNodes} />}

            </div>

        </div>

    </div>

}

const EmptyDatabaseNodeWidget = () => {

    const displayCreateDatabaseNodeWidget = () => {

        // * Toggle for create Database Widget

        if (context.app.display_create_database_node_widget == false) {

            setContext({ ...context, app: { ...context.app, display_create_database_node_widget: true } })
            setTimeout(() => { document.getElementById('Create-Database-Node-Widget').style.opacity = '1' }, 50)
            return

        }

    }

    return (

        <div className="Database-Windows-Empty-Content-Margin">

            <div className="Database-Nodes-Empty-Message-Container">

                <div className="Database-Nodes-Empty-Animation-Container">

                    <Lottie animationData={emptyBoxAnimation} loop={true} />

                </div>

                <p className="Database-Nodes-Empty-Message-Label">Aun no haz creado ninguna base de datos</p>

                <div className="Database-Nodes-Empty-Create-Database-Button" onClick={displayCreateDatabaseNodeWidget}>

                    <p className="Create-Database-Button-Label">Crear base de datos</p>

                </div>

                <div className="Database-Nodes-Empty-Report-Error-Button">

                    <p className="Create-Database-Error-Button-Label">Reportar problema</p>

                </div>

            </div>

        </div>

    )

}

const PopulatedDatabaseNodeWidget = ({ databaseNodeList }) => {

    const displayCreateDatabaseNodeWidget = () => {

        // * Toggle for create Database Widget

        if (context.app.display_create_database_node_widget == false) {

            setContext({ ...context, app: { ...context.app, display_create_database_node_widget: true } })
            setTimeout(() => { document.getElementById('Create-Database-Node-Widget').style.opacity = '1' }, 50)
            return

        }

    }

    const displayDatabaseNodeContent = async (databaseSeed) => {

        const databaseNodeData = await getDatabaseNodeContent(context.userData.userToken, context.workspaceData._id, databaseSeed)

        if (databaseNodeData.isDatabaseNodeDataFetcned) {

            setContext({ ...context, app: { ...context.app, current_view: 'Base de datos' }, databaseNodeData: databaseNodeData.databaseNodeData })

        }


    }

    return (

        <div className="Database-Windows-Content-Margin">

            {

                databaseNodeList.map((currentDBNode, index) => {

                    return <div className="Database-Window-Container" key={index} onClick={() => { displayDatabaseNodeContent(currentDBNode.databaseNodeSeed) }}>

                        <div className="Database-Window-Content-Margin">

                            <div className="Database-Window-Top-Container">

                                <div className="Database-Window-Last-Date-User-Container">

                                    <p className="Database-Window-Last-Date-User-Label">{getDateInHumanFormatByTimestamp(currentDBNode.databaseNodeLastUpdateAt)}</p>

                                </div>

                                <div className="Database-Window-Options-Button">

                                    <MdMoreVert size={16} color={'#000d41'} />

                                </div>

                            </div>

                            <div className="Database-Window-Center-Container">

                                <p className="Database-Window-Center-Name-Label">{currentDBNode.databaseNodeName}</p>

                            </div>

                            <div className="Database-Window-Bottom-Container">

                                <div className="Database-Window-Last-Users-Container">

                                    <div className="Database-Window-User-Snippet">

                                        {

                                            currentDBNode.databaseNodeLastUpdatesRecords.map((currentUser, index) => {

                                                return <div className="Database-Window-User-Image-Container" key={index} title={currentUser.recordMessage}>

                                                    <img className='Databa-Window-User-Image' src={currentUser.userProfilePhotoURL != 'defaultApp' ? currentUser.userProfilePhotoURL : 'https://scontent.webdesignnodes.com/datasync/default_profile_pics/male/0.png'} />

                                                </div>

                                            })

                                        }


                                    </div>

                                </div>

                                <div className="Database-Window-Storage-Space-Container">

                                    <div className="Database-Window-Storage-Space-Snippet">

                                        <p className="Database-Window-Storage-Space-Label">{formatToDisplayNumber(currentDBNode.databaseNodeDocuments) + ' elementos.'}</p>

                                    </div>

                                </div>


                            </div>

                        </div>

                    </div>

                })

            }

            <div className="Database-Window-Container Database-Node-Container-New" onClick={displayCreateDatabaseNodeWidget}> <div className="Database-Window-Content-Margin-Add"> <MdAdd size={48} color='#000d41' /> </div> </div>

        </div>

    )

}

export default DatabaseWidget