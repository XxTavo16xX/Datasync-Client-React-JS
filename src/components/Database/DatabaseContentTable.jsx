// * Dependencies Required 

import { useContext, useState, useEffect } from "react";
import Lottie from "lottie-react";

// * Modules Required

import { AppContext } from '../../app/Context';
import { getDateByTimestamp } from "../../lib/Calendar";
import { MdCheckBoxOutlineBlank } from 'react-icons/md'
import { getDatabaseNodeDocuments, getDatabaseNodeContext } from "../../services/databaseNodes";
import { displayAppNotification } from "../../lib/System";

// * Animations required

import loadingDocumentsAnimation from '../../assets/animations/loadingDocuments.json'
import emptyBoxAnimation from '../../assets/animations/emptyBoxAnimation.json'
import accessDenied from '../../assets/animations/accessDenied.json'

// * view Styles

import './styles/DatabaseContentTable.css'

// * Components Required

// * view to Return

const DatabaseContentTable = () => {

    const { context, setContext } = useContext(AppContext)
    
    const [accessAproved, setAccessAproved] = useState(null)
    const [tableHeaderList, setTableHeaderList] = useState(null)
    const [tableRowList, setTableRowList] = useState(null)
    const [tableDocuments, setTableDocuments] = useState(null)

    useEffect(() => {

        setContext({ ...context, app: { ...context.app, is_fetching_data_from_api: true } })

        // * Getting database node context

        getDatabaseNodeContext(context.userData.userToken, context.workspaceData._id, context.workspaceData.databaseNodes[0] != null ? context.workspaceData.databaseNodes[0]['databaseNodeSeed'] : '')
            .then(data => {

                if (data.isDatabaseNodeContextFetcned === true) {

                    setContext({ ...context, databaseNodeData: data.databaseNodeContext.databaseNodeContext, databaseNodeContentSchemaData: data.databaseNodeContext.databaseNodeContentSchemaContext })

                    const tableHeader = data.databaseNodeContext.databaseNodeContentSchemaContext.databaseTableSchema.databaseColumnsTitle
                    const tableDocReference = data.databaseNodeContext.databaseNodeContentSchemaContext.databaseTableSchema.databaseRowsEntrySchemaReference

                    setTableHeaderList(tableHeader.split(','))
                    setTableRowList(tableDocReference.split(','))

                    // * Getting database node documents

                    getDatabaseNodeDocuments(context.userData.userToken, context.workspaceData._id, context.workspaceData.databaseNodes[0] != null ? context.workspaceData.databaseNodes[0]['databaseNodeSeed'] : '')
                        .then(data => {

                            if (data.isDatabaseContentFetched == true) {

                                setAccessAproved(true)
                                setTableDocuments(data.databaseDocuments)

                            }

                        })

                } else {

                    setAccessAproved(false)
                    displayAppNotification('Base de datos', 'No tienes permisos para acceder a esta informacion.')
                    setContext({ ...context, app: { ...context.app, is_fetching_data_from_api: false } })

                }
            })

    }, [])

    return (

        <>{

            accessAproved == false ? <TableAccessDenied /> : tableDocuments == null || tableHeaderList == null || tableRowList == null && accessAproved == true ? <TableSkeleton /> : <TableResult tableHeaderList={tableHeaderList} tableRowList={tableRowList} tableDocuments={tableDocuments} />

        }</>


    )

}

const TableSkeleton = () => {

    return (

        <div className="Database-View-Results-Table-Container">

            <div className="Database-View-Results-Table-Content-Skeleton">

                <div className="Table-Content-Animation-Container">

                    <Lottie animationData={loadingDocumentsAnimation} loop={true} />

                    <div className="Table-Content-Animation-Text-Container">

                        <p className="Table-Title-Label">Cargando documentos</p>

                    </div>

                </div>


            </div>

        </div>

    )

}

const TableAccessDenied = () => {

    return (

        <div className="Database-View-Results-Table-Container">

            <div className="Database-View-Results-Table-Content-Denied">

                <div className="Table-Content-Animation-Container">

                    <Lottie animationData={accessDenied} loop={false} />

                    <div className="Table-Content-Animation-Text-Container">

                        <p className="Table-Title-Label">Acceso Negado</p>

                    </div>

                </div>


            </div>

        </div>

    )

}

const TableResult = ({ tableHeaderList, tableRowList, tableDocuments }) => {

    return (

        <div className="Database-View-Results-Table-Container">

            <div className="Database-View-Results-Table-Content">

                <TableHeaderContainer tableHeaderList={tableHeaderList} />

                <TableRowsContainer tableRowList={tableRowList} tableDocuments={tableDocuments} />


            </div>

        </div>

    )

}

const TableCellComponent = ({ tableCellContent }) => {

    if (tableCellContent == 'DS-BDT-SELECTOR-COMPONENT') {

        return (

            <MdCheckBoxOutlineBlank size={18} color='#000' />

        )

    } else if (tableCellContent == 'DS-DBT-STATE-COMPONENT') {

        return (

            <p className="Table-Title-Label">Estado</p>

        )


    } else {

        return (

            <p className="Table-Title-Label">{tableCellContent}</p>

        )

    }

}

const TableHeaderContainer = ({ tableHeaderList }) => {

    return (

        <div className="Table-Header-Container">

            <div className="Table-Header-Content-Margin">

                {
                    tableHeaderList.map((TableHeaderCell, index) => {


                        return (

                            <div className={'Table-Header-Cell-Container Content-Cell-' + TableHeaderCell.replaceAll('.', '-')} key={'ds-db-table-' + index}>

                                <TableCellComponent tableCellContent={TableHeaderCell} />

                            </div>

                        )


                    })

                }

            </div>

        </div>

    )

}

const TableRowsContainer = ({ tableRowList, tableDocuments }) => {

    return (

        <> {tableDocuments.length == 0 ? <TableRowsContainerEmpty /> : <TableRowsContainerResult tableRowList={tableRowList} tableDocuments={tableDocuments} />} </>

    )

}

const TableRowsContainerEmpty = () => {

    return (

        <div className="Table-Content-Container">

            <div className="Table-Content-Container-Empty-Container">

                <div className="Table-Content-Animation-Container">

                    <Lottie animationData={emptyBoxAnimation} loop={true} />

                    <div className="Table-Content-Animation-Text-Container">

                        <p className="Table-Title-Label">Sin registros</p>
                        <p className="Table-Text-Label">Agrega una orden nueva</p>

                    </div>

                </div>

            </div>

        </div>

    )

}

const TableRowsContainerResult = ({ tableRowList, tableDocuments }) => {

    return (

        <div className="Table-Content-Container">

            {

                tableDocuments.map((document, documentIndex) => {

                    return (

                        <div className="Table-Row-Container" key={'ds-dbn-ts-dcr-' + documentIndex} >

                            <div className="Table-Header-Content-Margin">

                                {

                                    tableRowList.map((rowElement, rowElementIndex) => {

                                        const docReferenceValue = getDocumentReferenceValue(document, rowElement)

                                        return (

                                            <div className={'Table-Content-Cell-Container Content-Cell-' + rowElement.replaceAll('.', '-')} key={'ds-dbn-tc-dcr' + documentIndex + ':' + rowElementIndex}>

                                                {

                                                    rowElement == 'DS-DBT-SELECTOR-COMPONENT' ? <MdCheckBoxOutlineBlank size={18} color='#000' /> : rowElement == 'header.status' ? <TableStatusSnippet databaseEntrieValue={docReferenceValue} /> : rowElement == 'header.numberCOP' ? <p className="Table-Text-Label">{'#' + docReferenceValue}</p> : rowElement == 'header.orderDate' ? <p className="Table-Text-Label">{getDateByTimestamp(docReferenceValue)}</p> : rowElement == '_createdBy' ? <p className="Table-Text-Label">{docReferenceValue.userDisplayName}</p> : <p className="Table-Text-Label">{docReferenceValue}</p>


                                                }

                                            </div>

                                        )

                                    })

                                }

                            </div>

                        </div>

                    )

                })

            }

        </div>

    )

}

const getDocumentReferenceValue = (document, reference) => {


    if (reference == 'DS-DBT-SELECTOR-COMPONENT') return ''

    if (reference == '_createdBy') return document['_createdBy']

    const referenceArray = reference.split('.');
    let value = document._content;

    referenceArray.forEach(key => {
        if (value.hasOwnProperty(key)) {
            value = value[key];
        } else {
            value = undefined;
        }
    });

    return value;
}

const TableRowsContent = ({ databaseNodeDocuments, databaseRowsReferences }) => {

    const handleEntrieCheckBox = (entrieIndex) => {

        const databaseEntriesListUpdated = [...databaseEntries];
        databaseEntriesListUpdated[entrieIndex].checked = !databaseEntriesListUpdated[entrieIndex].checked;
        setDatabaseEntries(databaseEntriesListUpdated);

    }

    return (

        <div className="Database-View-Results-Table-Rows-Cells-Container">

            {

                databaseNodeDocuments.map((databaseNodeDocument, index) => {

                    // * Creating Table Rows

                    return (

                        <div className="Database-View-Results-Table-Row-Cells-Container" key={index} onClick={() => { handleEntrieCheckBox(index) }}>

                            {
                                databaseRowsReferences.map((documentKeyLocation, documentEntryIndex) => {

                                    // * Creating Row Cells

                                    const tableRowCell = documentKeyLocation.split('.').reduce((obj, key) => obj[key], databaseDocument)

                                    // if (databaseEntrieDataLabel == 'DS-SELECTOR-COMPONENT') {

                                    //     return (

                                    //         <div className="Database-View-Result-Table-Cell Row-Cell-Container" key={index + '-' + documentEntryIndex}>

                                    //             {databaseDocument.checked == false ? <MdCheckBoxOutlineBlank size={18} color='#000' /> : <MdCheckBox size={18} color='#000' />}

                                    //         </div>

                                    //     )

                                    // }

                                    // if (databaseEntrieDataLabel == 'Estado') {

                                    //     return (

                                    //         <div className={'Database-View-Result-Table-Cell Row-Cell-' + databaseEntrieDataLabel} key={index + '-' + documentEntryIndex} >

                                    //             <StatusSnippet databaseEntrieValue={databaseEntrieValue} />

                                    //         </div>

                                    //     )

                                    // }

                                    // return (

                                    //     <div className={'Database-View-Result-Table-Cell Row-Cell-' + databaseEntrieDataLabel} key={index + '-' + documentEntryIndex} >

                                    //         <p className="Database-View-Result-Table-Cell-Label">{databaseEntrieDataLabel == 'Fecha' ? getDateByTimestamp(databaseEntrieValue) : databaseEntrieDataLabel == 'CopNum' ? '#' + databaseEntrieValue : databaseEntrieValue}</p>

                                    //     </div>

                                    // )



                                })
                            }

                        </div>

                    )

                })

            }

        </div>

    )

}

const EmptyDatabaseNode = () => {

    return (

        <div className="asd">



        </div>

    )

}

const TableStatusSnippet = ({ databaseEntrieValue }) => {

    if (databaseEntrieValue == 'completed') { return (<div className={'Table-Status-Snippet Snippet-Status-' + databaseEntrieValue}><p className="Snippet-Label">Archivada</p></div>) }
    if (databaseEntrieValue == 'activa') { return (<div className={'Table-Status-Snippet Snippet-Status-' + databaseEntrieValue}><p className="Snippet-Label">Activa</p></div>) }
    if (databaseEntrieValue == 'canceled') { return (<div className={'Table-Status-Snippet Snippet-Status-' + databaseEntrieValue}><p className="Snippet-Label">cancelada</p></div>) }

}

const TableAuthorSnippet = ({ userDisplayName, userProfilePhotoURL }) => {


}

export default DatabaseContentTable