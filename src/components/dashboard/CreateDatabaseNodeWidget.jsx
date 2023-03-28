
// * Dependencies Required 

import { useContext, useState, useEffect } from "react";
import { MdOutlineClose, MdSearch, MdCheckBox, MdCheckBoxOutlineBlank, MdKeyboardArrowDown, MdKeyboardArrowLeft } from 'react-icons/md'

// * Modules Required

import { AppContext } from '../../app/Context';
import { getMembersInWorkspace } from "../../services/workspace";
import { createDatabaseNodeRequest } from "../../services/databaseNodes";

// * view Styles

import './styles/CreateDatabaseNodeWidget.css'

// * view to Return

const CreateDatabaseNodeWidget = () => {

    const { context, setContext } = useContext(AppContext);

    const [membersData, setMembersData] = useState([])

    useEffect(() => {

        getMembersInWorkspace(context.userData.userToken, context.workspaceData._id)

            .then(data => {

                const membersList = data.workspaceMembersList.map((memberData, index) => {
                    return { ...memberData, checked: index === 0 ? true : false };
                });

                setMembersData(membersList);

            });

    }, [])

    const closeCreateDatabaseWidget = () => {

        if (context.app.display_create_database_node_widget == true) {

            document.getElementById('Create-Database-Node-Widget').style.opacity = '0'
            setTimeout(() => { setContext({ ...context, app: { ...context.app, display_create_database_node_widget: false } }) }, 50)
            return

        }

    }

    const addAllMembers = () => {
        const memberListUpdated = membersData.map((memberData) => {
            return { ...memberData, checked: true };
        });

        setMembersData(memberListUpdated);
    };

    const handleMemberCheckBox = (memberIndex) => {

        const MembersListUpdated = [...membersData];
        MembersListUpdated[memberIndex].checked = !MembersListUpdated[memberIndex].checked;
        setMembersData(MembersListUpdated);

    }

    const formErrorHandler = (handlerTyoe) => {

        const DatabaseNodeNameInputContainer = document.getElementById('Create-Database-Name-Input-Container')

        if (handlerTyoe == 'clear') return DatabaseNodeNameInputContainer.style.border = '0px solid red'

        if (handlerTyoe == 'set') return DatabaseNodeNameInputContainer.style.border = '1px solid red'

    }

    const createDatabaseFormsContainer = document.getElementById('Create-Database-Forms-Container')

    const displayAdvanceSettings = () => {

        createDatabaseFormsContainer.style.opacity = 0

        setTimeout(() => {

            createDatabaseFormsContainer.scrollLeft = createDatabaseFormsContainer.offsetWidth / 1 + 20;
            createDatabaseFormsContainer.style.opacity = 1

        }, 300)        

    }

    const displayBasicSettings = () => {

        createDatabaseFormsContainer.style.opacity = 0

        setTimeout(() => {

            createDatabaseFormsContainer.scrollLeft = 0;
            createDatabaseFormsContainer.style.opacity = 1

        }, 300)

    }

    const createDatabaseNode = async () => {

        const DatabaseNodeNameInout = document.getElementById('Create-Database-Name-Input')
        const databaseName = DatabaseNodeNameInout.value

        if (!databaseName) return formErrorHandler('set')

        // * Filters the elements of the 'members Data' array whose 'checked' property is true, then create a new array with the emails of the members that meet the condition

        const databaseMembersList = membersData.filter((memberElement) => memberElement.checked).map((memberElement) => memberElement.userEmail);

        const requestResponse = await createDatabaseNodeRequest(context.userData.userToken, context.workspace._id || '0', databaseName, databaseMembersList)

        // * If the database node create request has been complete sucessfully then we add the database data to the workspace database list.

        if (requestResponse.databaseNodeCreated === true) {

            const newDatabaseNode = requestResponse.message.databaseNodeData;

            setContext({ app: { ...context.app, display_create_database_node_widget: false }, workspace: { ...context.workspace, databaseNodes: [...context.workspace.databaseNodes, newDatabaseNode], }, user: { ...context.user } })

        }

    }

    return (

        <div className="Create-Database-Node-Widget" id="Create-Database-Node-Widget">

            <div className="Create-Database-Node-Margin">

                <div className="Create-Database-Node-Top-Container">

                    <p className="Create-Database-Node-Title-Lalbel">Crea una base de datos</p>

                    <MdOutlineClose size={24} color='#000d41' onClick={closeCreateDatabaseWidget} style={{ cursor: 'pointer' }} />

                </div>

                <div className="Create-Database-Forms-Container" id="Create-Database-Forms-Container">

                    <div className="Create-Database-Form-Container">

                        <div className="Create-Database-Node-Name-Container">

                            <p className="Create-Database-Title-Label">Nombre</p>

                            <p className="Create-Database-Subtitle-Label">Asigna el nombre te tendra esta base de datos.</p>

                            <div className="Create-Database-Input-Container" id="Create-Database-Name-Input-Container" onClick={() => { formErrorHandler('clear') }} >

                                <input className="Create-Database-Name-Input" id="Create-Database-Name-Input" type="text" placeholder="Registros" />

                            </div>

                        </div>

                        <div className="Create-Database-Node-Members-Container">

                            <p className="Create-Database-Title-Label">Miembros</p>

                            <p className="Create-Database-Subtitle-Label">Define que usuarios del workspace tendran acceso a estos datos.</p>

                            <div className="Members-List-Action-Buttons-Container">

                                <div className="Members-List-Search-Button">

                                    <MdSearch size={18} color='#000d41' />

                                </div>

                                <div className="Members-List-Select-All-Button" onClick={addAllMembers}>

                                    <p className="Members-Select-All-Label">Agregar a todos.</p>

                                </div>

                            </div>

                            <div className="Members-List-Options-Container">

                                {

                                    membersData.map((element, index) => {

                                        return (

                                            <div className="Member-List-Option-Container" key={index} >

                                                <div className="Member-Option-Photo-Container">

                                                    <img className="Member-Option-Photo" src={element.userProfilePhotoURL != 'defaultApp' ? element.userProfilePhotoURL : 'https://scontent.webdesignnodes.com/datasync/default_profile_pics/male/0.png'} />

                                                </div>

                                                <div className="Member-Option-Data-Container">

                                                    <p className="Member-Option-User-Name-Label">{element.userDisplayName}</p>

                                                    <p className="Member-Option-User-Email-Label">{element.userEmail}</p>

                                                </div>

                                                <div className="Member-Option-Checkbox-Container" onClick={() => { handleMemberCheckBox(index) }}>

                                                    {element.checked ? <MdCheckBox size={18} color='#000d41' /> : <MdCheckBoxOutlineBlank size={18} color='#000d41' />}

                                                </div>

                                            </div>

                                        )

                                    })

                                }

                            </div>

                            <div className="Members-List-Action-Buttons-Container Advance-Settings">

                                <div className="Members-List-Select-All-Button" onClick={displayAdvanceSettings} >

                                    <p className="Members-Select-All-Label">Configuracion Avanzada</p>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="Create-Database-Advance-Settings-Form-Container">            

                        <div className="Create-Database-Node-Name-Container">

                            <p className="Create-Database-Title-Label">Estructura de datos</p>

                            <p className="Create-Database-Subtitle-Label">Escribe el esquema de datos en el que se guardaran los datos.</p>

                            <div className="Create-Database-textarea-Container" id="Create-Database-textarea-Container" onClick={() => { formErrorHandler('clear') }} >

                                <textarea className="Create-Database-textarea" id="Create-Database-textarea" type="text" placeholder="{}" />

                            </div>

                        </div>

                        <div className="Create-Database-Node-Name-Container">

                            <p className="Create-Database-Title-Label">Tipo de base de datos</p>

                            <p className="Create-Database-Subtitle-Label">Asigna el tipo de datos que se almacenaran y procesaran.</p>

                            <div className="Create-Database-SelectBox-Container" id="Create-Database-DBtype-SelectBox-Container" onClick={() => { formErrorHandler('clear') }} >

                                <div className="SelectBox-Options-Selected-Container">

                                    <p className="Option-Selected-Label">Formulario, Tabla y Preview de documento.</p>

                                    <MdKeyboardArrowDown color="#ffffff" size={35} />

                                </div>

                                <div className="SelectBox-Options-Container">



                                </div>

                            </div>

                        </div>

                        <div className="Create-Database-Node-Name-Container">

                            <p className="Create-Database-Title-Label">Titulos en tabla</p>

                            <p className="Create-Database-Subtitle-Label">Escribe las columnas que deseas mostrar el la tabla separadas por una coma.</p>

                            <div className="Create-Database-Input-Container" id="Create-Database-Name-Input-Container" onClick={() => { formErrorHandler('clear') }} >

                                <input className="Create-Database-Name-Input" id="Create-Database-Name-Input" type="text" placeholder="ID, Status, Fecha" />

                            </div>

                        </div>

                        <div className="Create-Database-Node-Name-Container">

                            <p className="Create-Database-Title-Label">Contenido en tabla</p>

                            <p className="Create-Database-Subtitle-Label">Escribe el contenido que tendran las celdas separadas por una coma. Debera coincidir con la estructura de datos.</p>

                            <div className="Create-Database-Input-Container" id="Create-Database-Name-Input-Container" onClick={() => { formErrorHandler('clear') }} >

                                <input className="Create-Database-Name-Input" id="Create-Database-Name-Input" type="text" placeholder="ID, Status, Fecha" />

                            </div>

                        </div>

                        <div className="Create-Batabase-Basic-Settings-Button" onClick={displayBasicSettings} >

                                <MdKeyboardArrowLeft color="#ffffff" size={35} />

                                <p className="Create-Batabase-Basic-Settings-Label">Regresar</p>

                            </div>

                    </div>

                </div>

                <div className="Create-Database-Node-Form-Action-Button-Container">

                    <div className="Create-Database-Node-Button" onClick={createDatabaseNode}>

                        <p className="Create-Database-Node-Button-Label">Crear base de datos</p>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default CreateDatabaseNodeWidget