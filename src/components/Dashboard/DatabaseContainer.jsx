import { MdMoreVert } from 'react-icons/md'
import './styles/DatabaseContainer.css'

// ! Dont user direct user photo url, use userID.ProfilePhoto insted

const databaseConecctionData = [

    {
        lastDatabaseChangeDate: 1670329001,
        databaseName: "Ordenes",
        lastDatabaseUsersChangePhotoURL: ['/src/assets/components/TopNavBar/me.jpg', '/src/assets/components/TopNavBar/oskar.jpg', '/src/assets/components/TopNavBar/defaultUser.png'],
        databaseStoreSpace: "15 MB"
    },
    {
        lastDatabaseChangeDate: 1670329001,
        databaseName: "Cobranza",
        lastDatabaseUsersChangePhotoURL: ['/src/assets/components/TopNavBar/me.jpg', '/src/assets/components/TopNavBar/oskar.jpg', '/src/assets/components/TopNavBar/defaultUser.png'],
        databaseStoreSpace: "15 MB"
    },
    {
        lastDatabaseChangeDate: 1670329001,
        databaseName: "Catalogo",
        lastDatabaseUsersChangePhotoURL: ['/src/assets/components/TopNavBar/me.jpg', '/src/assets/components/TopNavBar/oskar.jpg', '/src/assets/components/TopNavBar/defaultUser.png'],
        databaseStoreSpace: "15 MB"
    },
    {
        lastDatabaseChangeDate: 1670329001,
        databaseName: "Presupuesto",
        lastDatabaseUsersChangePhotoURL: ['/src/assets/components/TopNavBar/me.jpg', '/src/assets/components/TopNavBar/oskar.jpg', '/src/assets/components/TopNavBar/defaultUser.png'],
        databaseStoreSpace: "15 MB"
    },
    {
        lastDatabaseChangeDate: 1670329001,
        databaseName: "Ventas",
        lastDatabaseUsersChangePhotoURL: ['./src/assets/components/SIdeNavBar/me.jpg', './src/assets/components/SIdeNavBar/oskar.jpg', '/src/assets/components/TopNavBar/defaultUser.png'],
        databaseStoreSpace: "15 MB"
    },
    {
        lastDatabaseChangeDate: 1670329001,
        databaseName: "Listados",
        lastDatabaseUsersChangePhotoURL: ['./src/assets/components/SIdeNavBar/me.jpg', './src/assets/components/SIdeNavBar/oskar.jpg', './src/assets/components/SIdeNavBar/defaultUser.png'],
        databaseStoreSpace: "15 MB"
    }

]

function DatabaseContainer() {

    return <div className="Database-Content-Container">

        <div className="Database-Content-Container-Margin">

            <p className='Database-Content-Title-Label'>Bases de datos</p>

            <div className="Database-Windows-Container">

                <div className="Database-Windows-Content-Margin">{

                    // * Populating Database-Windows-Container with the Data recived by Datasync-API

                    databaseConecctionData.map(({ lastDatabaseChangeDate, databaseName, lastDatabaseUsersChangePhotoURL, databaseStoreSpace }) => {

                        return <div className="Database-Window-Container" key={databaseName}>

                            <div className="Database-Window-Content-Margin">

                                <div className="Database-Window-Top-Container">

                                    <div className="Database-Window-Last-Date-User-Container">

                                        <p className="Database-Window-Last-Date-User-Label">{new Date(lastDatabaseChangeDate * 1000).toLocaleDateString('SP-MX').replaceAll('/', '-')}</p>

                                    </div>

                                    <button className="Database-Window-Options-Button">

                                        <MdMoreVert size={16} color={'#000000'} />

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

                                                    return <div className="Database-Window-User-Image-Container">

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

export default DatabaseContainer