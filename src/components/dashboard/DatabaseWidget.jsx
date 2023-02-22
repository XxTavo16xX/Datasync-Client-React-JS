
// * Dependencies Required 

import { useContext } from "react";
import { MdMoreVert } from 'react-icons/md'

// * Modules Required

import { AppContext } from '../../app/Context';
import { getDateInHumanFormatByTimestamp } from "../../lib/Calendar";

// * view Styles

import './styles/DatabaseWidget.css'

// * Fetched data example 
// ! Must replace with data received by module

const databaseConecctionData = [

    {
        lastDatabaseChangeDate: 1675068318,
        databaseName: "DevLabel",
        databaseKey: 1,
        lastDatabaseUsersChangePhotoURL: ['https://scontent.webdesignnodes.com/datasync_dev/images/muffin.png', 'https://scontent.webdesignnodes.com/datasync_dev/images/me.jpg', 'https://scontent.webdesignnodes.com/datasync_dev/images/elon.png'],
        databaseStoreSpace: "15 MB"
    },
    {
        lastDatabaseChangeDate: 1674682258,
        databaseName: "DevLabel",
        databaseKey: 2,
        lastDatabaseUsersChangePhotoURL: ['https://scontent.webdesignnodes.com/datasync_dev/images/elon.png', 'https://scontent.webdesignnodes.com/datasync_dev/images/me.jpg', 'https://scontent.webdesignnodes.com/datasync_dev/images/muffin.png'],
        databaseStoreSpace: "13.3 MB"
    },
    {
        lastDatabaseChangeDate: 1674595858,
        databaseName: "DevLabel",
        databaseKey: 3,
        lastDatabaseUsersChangePhotoURL: ['https://scontent.webdesignnodes.com/datasync_dev/images/me.jpg', 'https://scontent.webdesignnodes.com/datasync_dev/images/muffin.png', 'https://scontent.webdesignnodes.com/datasync_dev/images/elon.png'],
        databaseStoreSpace: "121 MB"
    },
    {
        lastDatabaseChangeDate: 1670323001,
        databaseName: "DevLabel",
        databaseKey: 4,
        lastDatabaseUsersChangePhotoURL: ['https://scontent.webdesignnodes.com/datasync_dev/images/muffin.png', 'https://scontent.webdesignnodes.com/datasync_dev/images/elon.png', 'https://scontent.webdesignnodes.com/datasync_dev/images/me.jpg'],
        databaseStoreSpace: "19.3 MB"
    },
    {
        lastDatabaseChangeDate: 1661459458,
        databaseName: "DevLabel",
        databaseKey: 5,
        lastDatabaseUsersChangePhotoURL: ['https://scontent.webdesignnodes.com/datasync_dev/images/elon.png', 'https://scontent.webdesignnodes.com/datasync_dev/images/me.jpg', 'https://scontent.webdesignnodes.com/datasync_dev/images/muffin.png'],
        databaseStoreSpace: "10.7 MB"
    },
    {
        lastDatabaseChangeDate: 1656189058,
        databaseName: "DevLabel",
        databaseKey: 6,
        lastDatabaseUsersChangePhotoURL: ['https://scontent.webdesignnodes.com/datasync_dev/images/me.jpg', 'https://scontent.webdesignnodes.com/datasync_dev/images/elon.png', 'https://scontent.webdesignnodes.com/datasync_dev/images/muffin.png'],
        databaseStoreSpace: "15 MB"
    }

]

// * view to Return

const DatabaseWidget = ({ databaseNodes }) => {

    const { setContext } = useContext(AppContext);

    return <div className="Database-Widget-Content-Container">

        <div className="Database-Content-Container-Margin">

            <p className='Database-Content-Title-Label'>Bases de datos</p>

            <div className="Database-Windows-Container">

                <div className="Database-Windows-Content-Margin">{

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