import { MdMoreVert } from 'react-icons/md'
import './styles/DatabaseContainer.css'

// ! Dont user direct user photo url, use userID.ProfilePhoto insted

const databaseConecctionData = [

    {
        lastDatabaseChangeDate: 1670329001,
        databaseName: "Ordenes",
        lastDatabaseUsersChangePhotoURL: ['./src/assets/components/SIdeNavBar/me.jpg', './src/assets/components/SIdeNavBar/oskar.jpg', './src/assets/components/SIdeNavBar/defaultUser.png'],
        databaseStoreSpace: "15 MB"
    },
    {
        lastDatabaseChangeDate: 1670329001,
        databaseName: "Cobranza",
        lastDatabaseUsersChangePhotoURL: ['./src/assets/components/SIdeNavBar/me.jpg', './src/assets/components/SIdeNavBar/oskar.jpg', './src/assets/components/SIdeNavBar/defaultUser.png'],
        databaseStoreSpace: "15 MB"
    },
    {
        lastDatabaseChangeDate: 1670329001,
        databaseName: "Catalogo",
        lastDatabaseUsersChangePhotoURL: ['./src/assets/components/SIdeNavBar/me.jpg', './src/assets/components/SIdeNavBar/oskar.jpg', './src/assets/components/SIdeNavBar/defaultUser.png'],
        databaseStoreSpace: "15 MB"
    },
    {
        lastDatabaseChangeDate: 1670329001,
        databaseName: "Presupuesto",
        lastDatabaseUsersChangePhotoURL: ['./src/assets/components/SIdeNavBar/me.jpg', './src/assets/components/SIdeNavBar/oskar.jpg', './src/assets/components/SIdeNavBar/defaultUser.png'],
        databaseStoreSpace: "15 MB"
    },
    {
        lastDatabaseChangeDate: 1670329001,
        databaseName: "Ventas",
        lastDatabaseUsersChangePhotoURL: ['./src/assets/components/SIdeNavBar/me.jpg', './src/assets/components/SIdeNavBar/oskar.jpg', './src/assets/components/SIdeNavBar/defaultUser.png'],
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

                <div className="Database-Windows-Content-Margin">

                    <div className="Database-Window-Container">

                        <div className="Database-Window-Content-Margin">

                            <div className="Database-Window-Top-Container">

                                <div className="Database-Window-Last-Date-User-Container">

                                    <p className="Database-Window-Last-Date-User-Label"> Diciembre 16 2022 </p>

                                </div>

                                <button className="Database-Window-Options-Button">

                                    <MdMoreVert size={16} color={'#000000'} />

                                </button>

                            </div>

                            <div className="Database-Window-Center-Container">

                                <p className="Database-Window-Center-Name-Label">Ordenes</p>

                            </div>

                            <div className="Database-Window-Bottom-Container">

                                <div className="Database-Window-Last-Users-Container">

                                    <div className="Database-Window-User-Snippet">

                                        <div className="Database-Window-User-Image-Container">

                                            <img className='Databa-Window-User-Image' src="/src/assets/components/TopNavBar/me.jpg" />

                                        </div>

                                        <div className="Database-Window-User-Image-Container">

                                            <img className='Databa-Window-User-Image' src="/src/assets/components/TopNavBar/oskar.jpg" />

                                        </div>

                                        <div className="Database-Window-User-Image-Container">

                                            <img className='Databa-Window-User-Image' src="/src/assets/components/TopNavBar/defaultUser.png" />

                                        </div>


                                    </div>

                                </div>

                                <div className="Database-Window-Storage-Space-Container">

                                    <div className="Database-Window-Storage-Space-Snippet">

                                        <p className="Database-Window-Storage-Space-Label">2 GB</p>

                                    </div>

                                </div>


                            </div>

                        </div>

                    </div>



                </div>

                {/*

                <div className="databaseShortCutContainer">

                    <div className="databaseTopContainer">

                        <p className='databaseLastModDate'>06, Diciembre, 2022</p>

                        <MdMoreVert size={15} />

                    </div>

                    <div className="databaseContentContainer">

                        <p className='databaseName'>Ordenes</p>

                    </div>

                    <div className="databaseBottomContainer">

                        <div className="lastModificationFromUsersContainer">

                            <div className="lastUserModificationImageContainer">

                                <img src="./src/assets/components/SIdeNavBar/me.jpg"/>

                            </div>

                            <div className="lastUserModificationImageContainer">

                                <img src="./src/assets/components/SIdeNavBar/oskar.jpg"/>

                            </div>

                            <div className="lastUserModificationImageContainer">

                                <img src="./src/assets/components/SIdeNavBar/defaultUser.png"/>

                            </div>


                        </div>

                    </div>

                </div>

                <div className="databaseShortCutContainer">

                    <div className="databaseTopContainer">

                        <p className='databaseLastModDate'>02, Diciembre, 2022</p>

                        <MdMoreVert size={15} />

                    </div>

                    <div className="databaseContentContainer">

                        <p className='databaseName'>Facturas</p>

                    </div>

                    <div className="databaseBottomContainer">

                        <div className="lastModificationFromUsersContainer">

                            <div className="lastUserModificationImageContainer">

                                <img src="./src/assets/components/SIdeNavBar/me.jpg"/>

                            </div>

                            <div className="lastUserModificationImageContainer">

                                <img src="./src/assets/components/SIdeNavBar/oskar.jpg"/>

                            </div>

                            <div className="lastUserModificationImageContainer">

                                <img src="./src/assets/components/SIdeNavBar/defaultUser.png"/>

                            </div>


                        </div>

                    </div>

                </div>

                <div className="databaseShortCutContainer">

                    <div className="databaseTopContainer">

                        <p className='databaseLastModDate'>07, Diciembre, 2022</p>

                        <MdMoreVert size={15} />

                    </div>

                    <div className="databaseContentContainer">

                        <p className='databaseName'>Servicios</p>

                    </div>

                    <div className="databaseBottomContainer">

                        <div className="lastModificationFromUsersContainer">

                            <div className="lastUserModificationImageContainer">

                                <img src="./src/assets/components/SIdeNavBar/me.jpg"/>

                            </div>

                            <div className="lastUserModificationImageContainer">

                                <img src="./src/assets/components/SIdeNavBar/oskar.jpg"/>

                            </div>

                            <div className="lastUserModificationImageContainer">

                                <img src="./src/assets/components/SIdeNavBar/defaultUser.png"/>

                            </div>


                        </div>

                    </div>

                </div>

                <div className="databaseShortCutContainer">

                    <div className="databaseTopContainer">

                        <p className='databaseLastModDate'>06, Diciembre, 2022</p>

                        <MdMoreVert size={15} />

                    </div>

                    <div className="databaseContentContainer">

                        <p className='databaseName'>Ordenes</p>

                    </div>

                    <div className="databaseBottomContainer">

                        <div className="lastModificationFromUsersContainer">

                            <div className="lastUserModificationImageContainer">

                                <img src="./src/assets/components/SIdeNavBar/me.jpg"/>

                            </div>

                            <div className="lastUserModificationImageContainer">

                                <img src="./src/assets/components/SIdeNavBar/oskar.jpg"/>

                            </div>

                            <div className="lastUserModificationImageContainer">

                                <img src="./src/assets/components/SIdeNavBar/defaultUser.png"/>

                            </div>


                        </div>

                    </div>

                </div>

                <div className="databaseShortCutContainer">

                    <div className="databaseTopContainer">

                        <p className='databaseLastModDate'>02, Diciembre, 2022</p>

                        <MdMoreVert size={15} />

                    </div>

                    <div className="databaseContentContainer">

                        <p className='databaseName'>Facturas</p>

                    </div>

                    <div className="databaseBottomContainer">

                        <div className="lastModificationFromUsersContainer">

                            <div className="lastUserModificationImageContainer">

                                <img src="./src/assets/components/SIdeNavBar/me.jpg"/>

                            </div>

                            <div className="lastUserModificationImageContainer">

                                <img src="./src/assets/components/SIdeNavBar/oskar.jpg"/>

                            </div>

                            <div className="lastUserModificationImageContainer">

                                <img src="./src/assets/components/SIdeNavBar/defaultUser.png"/>

                            </div>


                        </div>

                    </div>

                </div>

                <div className="databaseShortCutContainer">

                    <div className="databaseTopContainer">

                        <p className='databaseLastModDate'>07, Diciembre, 2022</p>

                        <MdMoreVert size={15} />

                    </div>

                    <div className="databaseContentContainer">

                        <p className='databaseName'>Servicios</p>

                    </div>

                    <div className="databaseBottomContainer">

                        <div className="lastModificationFromUsersContainer">

                            <div className="lastUserModificationImageContainer">

                                <img src="./src/assets/components/SIdeNavBar/me.jpg"/>

                            </div>

                            <div className="lastUserModificationImageContainer">

                                <img src="./src/assets/components/SIdeNavBar/oskar.jpg"/>

                            </div>

                            <div className="lastUserModificationImageContainer">

                                <img src="./src/assets/components/SIdeNavBar/defaultUser.png"/>

                            </div>


                        </div>

                    </div>

                </div>

                */}

            </div>

        </div>

    </div>

}

export default DatabaseContainer