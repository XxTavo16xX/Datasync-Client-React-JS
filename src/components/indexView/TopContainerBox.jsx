import { MdMoreVert } from 'react-icons/md'
import './styles/TopSection.css'

function TopContainerBox({ currentViewtitle }) {

    return <div className="backgroundContainer">

        <div className="topSectionContainer">


        </div>

        <div className="bottomSectionContainer">

            <div className="bottomSectionDatabasesContainer">

                <div className="bottomContentContainerMargin">

                    <p>Bases de datos</p>

                    <div className="databasesContainer">

                        <div className="databaseShortCutContainer">

                            <div className="databaseTopContainer">

                                <p className='databaseLastModDate'>06, Diciembre, 2022</p>

                                <MdMoreVert size={15} />

                            </div>

                            <div className="databaseContentContainer">

                                <p className='databaseName'>Ordenes</p>

                            </div>

                            <div className="databaseBottomContainer">



                            </div>

                        </div>
                        <div className="databaseShortCutContainer">

                            <div className="databaseTopContainer">



                            </div>

                        </div>
                        <div className="databaseShortCutContainer">

                            <div className="databaseTopContainer">



                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className="bottomSectionPendingTaskContainer">

                <div className="bottomContentContainerMargin">

                    <p>Tareas Pendientes</p>

                </div>

            </div>

        </div>


    </div>

}

export default TopContainerBox