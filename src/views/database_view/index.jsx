// * Dependencies Required 

import { useContext } from "react";

// * Modules Required

import { AppContext } from '../../app/Context';
import { getDateInHumanFormatByTimestamp } from "../../lib/Calendar";

// * view Styles

import '../styles/Database_view.css'

// * Components Required

import TopSearchContainer from '../../components/database/TopSearchContainer'

// * view to Return

const DatabaseView = () => {

    const { context } = useContext(AppContext)

    if (context.app.current_view == 'Base de datos') return (

        <div className="Database-View-Container">

            <div className="Database-View-Navegation-Container">

                <TopSearchContainer />

                <div className="Database-View-Results-Table-Container">

                    <div className="Database-View-Results-Table-Background">



                    </div>

                    <div className="Database-View-Results-Table-Content">

                        <div className="Database-View-Results-Table-Columns-Headers-Container">

                            {

                                context.databaseNode.dataTitle.map((columnHeaderText, index) => {

                                    return (

                                        <div className="Database-View-Results-Table-Column-Header-Cells" key={columnHeaderText + '_' + index}>

                                            <p className="Database-View-Results-Table-Column-Header-Label">{columnHeaderText}</p>

                                        </div>

                                    )

                                })

                            }

                        </div>

                        <div className="Database-View-Results-Table-Rows-Cells-Container">

                            {

                                context.databaseNode.databaseNodeEntries.map((element, index) => {

                                    return (

                                        <div className="Database-View-Results-Table-Row-Cells-Container" key={'databaseNodeResultRow' + index}>

                                            <div className="Database-View-Result-Table-Cell">

                                                <p className="Database-View-Result-Table-Cell-Label">{'#' + element.header.numberCOP}</p>

                                            </div>

                                            <div className="Database-View-Result-Table-Cell">

                                                <p className="Database-View-Result-Table-Cell-Label">{element.header.status}</p>

                                            </div>

                                            <div className="Database-View-Result-Table-Cell">

                                                <p className="Database-View-Result-Table-Cell-Label">{getDateInHumanFormatByTimestamp(element.header.orderDate)}</p>

                                            </div>

                                            <div className="Database-View-Result-Table-Cell">

                                                <p className="Database-View-Result-Table-Cell-Label">{element.provider.name}</p>

                                            </div>

                                            <div className="Database-View-Result-Table-Cell">

                                                <p className="Database-View-Result-Table-Cell-Label">{element.invoice.name}</p>

                                            </div>

                                            <div className="Database-View-Result-Table-Cell">

                                                <p className="Database-View-Result-Table-Cell-Label">{element.consign.name}</p>

                                            </div>

                                        </div>

                                    )

                                })

                            }


                        </div>

                    </div>

                </div>

            </div>

            <div className="Database-View-Element-View-Container">

                <div className="Database-View-Element-View-Background"></div>

                <div className="Database-View-Element-View-Content">

                    <p className="Database-View-Element-View-Content-Clear-Label">Seleccina un elemento para mostrar el contenido.</p>

                </div>

            </div>

        </div>

    )

}

export default DatabaseView