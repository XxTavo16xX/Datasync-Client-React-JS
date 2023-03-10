// * Dependencies Required 

import { useContext, useState, useEffect } from "react";

// * Modules Required

import { AppContext } from '../../app/Context';
import { getDateByTimestamp } from "../../lib/Calendar";
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'

// * view Styles

import './styles/DatabaseContentTable.css'

// * Components Required

// * view to Return

const DatabaseContentTable = () => {

    const { context } = useContext(AppContext)

    return (

        <div className="Database-View-Results-Table-Container">

            <div className="Database-View-Results-Table-Background"></div>

            <div className="Database-View-Results-Table-Content">

                <div className="Database-View-Results-Table-Columns-Headers-Container">

                    {

                        context.databaseNode.dataTitle.map((columnHeaderText, index) => {

                            return (

                                <div className={'Database-View-Results-Table-Column-Header-Cells Column-Header-Cell-' + columnHeaderText} key={columnHeaderText + '_' + index}>

                                    {columnHeaderText != 'Selector' ? <p className="Database-View-Results-Table-Column-Header-Label">{columnHeaderText}</p> : <MdCheckBoxOutlineBlank size={18} color='#000' />}


                                </div>

                            )

                        })

                    }

                </div>

                <DatabaseResults databaseNodeEntries={context.databaseNode.databaseNodeEntries} databaseEntriesKeys={context.databaseNode.dataKeys} databaseEntriesTitle={context.databaseNode.dataTitle} />

            </div>

        </div>

    )

}

const DatabaseResults = ({ databaseNodeEntries, databaseEntriesKeys, databaseEntriesTitle }) => {

    const [databaseEntries, setDatabaseEntries] = useState([])

    useEffect(() => {

        const databaseEntriesList = databaseNodeEntries.map((databaseEntriData) => {
            return { ...databaseEntriData, checked: false };
        });

        setDatabaseEntries(databaseEntriesList);

    }, [])

    const handleEntrieCheckBox = (entrieIndex) => {

        const databaseEntriesListUpdated = [...databaseEntries];
        databaseEntriesListUpdated[entrieIndex].checked = !databaseEntriesListUpdated[entrieIndex].checked;
        setDatabaseEntries(databaseEntriesListUpdated);

    }


    return (

        <div className="Database-View-Results-Table-Rows-Cells-Container">

            {

                databaseEntries.map((databaseDocument, index) => {


                    return (

                        <div className="Database-View-Results-Table-Row-Cells-Container" key={index} onClick={() => { handleEntrieCheckBox(index) }}>

                            {
                                databaseEntriesKeys.map((documentKeyLocation, documentEntryIndex) => {

                                    const databaseEntrieDataLabel = databaseEntriesTitle[documentEntryIndex]
                                    const databaseEntrieValue = documentKeyLocation.split('.').reduce((obj, key) => obj[key], databaseDocument)

                                    if (databaseEntrieDataLabel == 'Selector') {

                                        return (

                                            <div className="Database-View-Result-Table-Cell Row-Cell-Container" key={index + '-' + documentEntryIndex}>

                                                {databaseDocument.checked == false ? <MdCheckBoxOutlineBlank size={18} color='#000' /> : <MdCheckBox size={18} color='#000' />}

                                            </div>

                                        )

                                    }

                                    if (databaseEntrieDataLabel == 'Estado') {

                                        return (

                                            <div className={'Database-View-Result-Table-Cell Row-Cell-' + databaseEntrieDataLabel} key={index + '-' + documentEntryIndex} >

                                                <StatusSnippet databaseEntrieValue={databaseEntrieValue} />

                                            </div>

                                        )

                                    }

                                    return (

                                        <div className={'Database-View-Result-Table-Cell Row-Cell-' + databaseEntrieDataLabel} key={index + '-' + documentEntryIndex} >

                                            <p className="Database-View-Result-Table-Cell-Label">{databaseEntrieDataLabel == 'Fecha' ? getDateByTimestamp(databaseEntrieValue) : databaseEntrieDataLabel == 'CopNum' ? '#' + databaseEntrieValue : databaseEntrieValue}</p>

                                        </div>

                                    )



                                })
                            }

                        </div>

                    )

                })

            }

        </div>

    )

}

const StatusSnippet = ({ databaseEntrieValue }) => {

    if (databaseEntrieValue == 'completed') { return (<div className={'Database-View-Result-Table-Cell-Status-Snippet Snippet-Status-' + databaseEntrieValue}><p className="Snippet-Label">Archivada</p></div>) }
    if (databaseEntrieValue == 'activa') { return (<div className={'Database-View-Result-Table-Cell-Status-Snippet Snippet-Status-' + databaseEntrieValue}><p className="Snippet-Label">Activa</p></div>) }
    if (databaseEntrieValue == 'canceled') { return (<div className={'Database-View-Result-Table-Cell-Status-Snippet Snippet-Status-' + databaseEntrieValue}><p className="Snippet-Label">cancelada</p></div>) }

}

export default DatabaseContentTable