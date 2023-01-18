
// * Dependencies Required 

import { useContext } from "react";
import { MdMoreVert } from 'react-icons/md'

// * Modules Required

import { AppContext } from '../../app/Context';
import { getDateInHumanFormat } from "../../lib/Calendar";

// * view Styles

import './styles/DatabaseWidget.css'

// * Fetched data example 
// ! Must replace with data received by module

const databaseConecctionData = [

    {
        lastDatabaseChangeDate: 1670329001,
        databaseName: "Ordenes",
        lastDatabaseUsersChangePhotoURL: ['/public/assets/images/muffin.png', '/public/assets/images/me.jpg', '/public/assets/images/elon.png'],
        databaseStoreSpace: "15 MB"
    },
    {
        lastDatabaseChangeDate: 1670329001,
        databaseName: "Cobranza",
        lastDatabaseUsersChangePhotoURL: ['/public/assets/images/elon.png', '/public/assets/images/me.jpg', '/public/assets/images/muffin.png'],
        databaseStoreSpace: "13.3 MB"
    },
    {
        lastDatabaseChangeDate: 1670329001,
        databaseName: "Catalogo",
        lastDatabaseUsersChangePhotoURL: ['/public/assets/images/me.jpg', '/public/assets/images/muffin.png', '/public/assets/images/elon.png'],
        databaseStoreSpace: "121 MB"
    },
    {
        lastDatabaseChangeDate: 1670329001,
        databaseName: "Presupuesto",
        lastDatabaseUsersChangePhotoURL: ['/public/assets/images/muffin.png', '/public/assets/images/elon.png', '/public/assets/images/me.jpg'],
        databaseStoreSpace: "19.3 MB"
    },
    {
        lastDatabaseChangeDate: 1670329001,
        databaseName: "Ventas",
        lastDatabaseUsersChangePhotoURL: ['/public/assets/images/elon.png', '/public/assets/images/me.jpg', '/public/assets/images/muffin.png'],
        databaseStoreSpace: "10.7 MB"
    },
    {
        lastDatabaseChangeDate: 1670329001,
        databaseName: "Listados",
        lastDatabaseUsersChangePhotoURL: ['/public/assets/images/me.jpg', '/public/assets/images/elon.png', './public/assets/images/muffin.png'],
        databaseStoreSpace: "15 MB"
    }

]

// * view to Return

const DatabaseWidget = () => {

    const { setContext } = useContext(AppContext);

    return <div className="Database-Widget-Content-Container">

        <div className="Database-Content-Container-Margin">

            <p className='Database-Content-Title-Label'>Bases de datos</p>

            <div className="Database-Windows-Container">

                <div className="Database-Windows-Content-Margin">{

                    // * Populating Database-Windows-Container with the Data recived by Datasync-API

                    databaseConecctionData.map(({ lastDatabaseChangeDate, databaseName, lastDatabaseUsersChangePhotoURL, databaseStoreSpace }) => {

                        return <div className="Database-Window-Container" key={databaseName} onClick={() => { goDatabaseViewInCollection(databaseName) }}>

                            <div className="Database-Window-Content-Margin">

                                <div className="Database-Window-Top-Container">

                                    <div className="Database-Window-Last-Date-User-Container">

                                        <p className="Database-Window-Last-Date-User-Label">{getDateInHumanFormat(lastDatabaseChangeDate)}</p>

                                    </div>

                                    <button className="Database-Window-Options-Button">

                                        <MdMoreVert size={16} color={'#ffffff'} />

                                    </button>

                                </div>

                                <div className="Database-Window-Center-Container">

                                    <p className="Database-Window-Center-Name-Label">{databaseName}</p>

                                </div>

                                <div className="Database-Window-Bottom-Container">

                                    <div className="Database-Window-Last-Users-Container">

                                        <div className="Database-Window-User-Snippet">

                                            {

                                                lastDatabaseUsersChangePhotoURL.map((currentUserImageURL) => {

                                                    return <div className="Database-Window-User-Image-Container" key={currentUserImageURL} >

                                                        <img className='Databa-Window-User-Image' src={currentUserImageURL} />

                                                    </div>

                                                })

                                            }


                                        </div>

                                    </div>

                                    <div className="Database-Window-Storage-Space-Container">

                                        <div className="Database-Window-Storage-Space-Snippet">

                                            <p className="Database-Window-Storage-Space-Label">{databaseStoreSpace}</p>

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