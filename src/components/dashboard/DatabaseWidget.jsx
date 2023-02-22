
// * Dependencies Required 

import { useContext } from "react";
import { MdMoreVert } from 'react-icons/md'
import Lottie from "lottie-react";

// * Modules Required

import { AppContext } from '../../app/Context';
import { getDateInHumanFormatByTimestamp } from "../../lib/Calendar";
import emptyBoxAnimation from '../../assets/animations/emptyBoxAnimation.json'

// * view Styles

import './styles/DatabaseWidget.css'

// * view to Return

const DatabaseWidget = ({ databaseNodes }) => {

    const { setContext } = useContext(AppContext);

    return <div className="Database-Widget-Content-Container">

        <div className="Database-Content-Container-Margin">

            <p className='Database-Content-Title-Label'>Bases de datos</p>

            <div className="Database-Windows-Container">

                <div className={databaseNodes.length === 0 ? "Database-Windows-Empty-Content-Margin" : "Database-Windows-Content-Margin"}>

                    {

                        databaseNodes.length === 0 ?

                            <div className="Database-Nodes-Empty-Message-Container">

                                <div className="Database-Nodes-Empty-Animation-Container">

                                    <Lottie animationData={emptyBoxAnimation} loop={true} />

                                </div>

                                <p className="Database-Nodes-Empty-Message-Label">Aun no haz creado ninguna base de datos</p>

                                <div className="Database-Nodes-Empty-Create-Database-Button">

                                    <p className="Create-Database-Button-Label">Crear base de datos</p>

                                </div>

                                <div className="Database-Nodes-Empty-Report-Error-Button">

                                    <p className="Create-Database-Error-Button-Label">Reportar problema</p>

                                </div>

                            </div>

                            :

                            // * Populating Database-Windows-Container with the Data recived by Datasync-API

                            databaseNodes.map((currentDBNode, index) => {

                                return <div className="Database-Window-Container" key={index} onClick={() => { goDatabaseViewInCollection(currentDBNode.dbName) }}>

                                    <div className="Database-Window-Content-Margin">

                                        <div className="Database-Window-Top-Container">

                                            <div className="Database-Window-Last-Date-User-Container">

                                                <p className="Database-Window-Last-Date-User-Label">{getDateInHumanFormatByTimestamp(currentDBNode.dbUpdatedAt)}</p>

                                            </div>

                                            <div className="Database-Window-Options-Button">

                                                <MdMoreVert size={16} color={'#000d41'} />

                                            </div>

                                        </div>

                                        <div className="Database-Window-Center-Container">

                                            <p className="Database-Window-Center-Name-Label">{currentDBNode.dbName}</p>

                                        </div>

                                        <div className="Database-Window-Bottom-Container">

                                            <div className="Database-Window-Last-Users-Container">

                                                <div className="Database-Window-User-Snippet">

                                                    {

                                                        currentDBNode.lastUpdateUser.map((currentUser, index) => {

                                                            return <div className="Database-Window-User-Image-Container" key={index} >

                                                                <img className='Databa-Window-User-Image' src={currentUser.userPhotoProfile} />

                                                            </div>

                                                        })

                                                    }


                                                </div>

                                            </div>

                                            <div className="Database-Window-Storage-Space-Container">

                                                <div className="Database-Window-Storage-Space-Snippet">

                                                    <p className="Database-Window-Storage-Space-Label">{currentDBNode.dbName}</p>

                                                </div>

                                            </div>


                                        </div>

                                    </div>

                                </div>

                            })

                    }

                </div>

            </div>

        </div>

    </div>

}

export default DatabaseWidget