
// * Dependencies Required 

import { useContext, useState, useEffect } from "react";
import { MdOutlineClose, MdSearch, MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'

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
        getMembersInWorkspace(context.user.user_Token, context.workspace._id || '0')
            .then(data => {

                const membersList = data.workspaceMembersList.map((memberData) => {
                    return { ...memberData, checked: false };
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

    const createDatabaseNode = async () => {

        const DatabaseNodeNameInout = document.getElementById('Create-Database-Name-Input')
        const databaseName = DatabaseNodeNameInout.value

        if (!databaseName) return formErrorHandler('set')

        // * Filters the elements of the 'members Data' array whose 'checked' property is true, then create a new array with the emails of the members that meet the condition

        const databaseMembersList = membersData.filter((memberElement) => memberElement.checked).map((memberElement) => memberElement.userEmail);

        const requestResponse = await createDatabaseNodeRequest(context.user.user_Token, context.workspace._id || '0', databaseName, databaseMembersList)

        // * If the database node create request has been complete sucessfully then we add the database data to the workspace database list.

        if (requestResponse.databaseNodeCreated === true) {

            const newDatabaseNode = requestResponse.message.databaseNodeData;

            setContext({ app: { ...context.app, display_create_database_node_widget: false }, workspace: { ...context.workspace, databaseNodes: [...context.workspace.databaseNodes, newDatabaseNode], }, user: { ...context.user } })

        }

    }

    if (context.app.display_create_database_node_widget === true) {

        return (

            <div className="Create-Database-Node-Widget" id="Create-Database-Node-Widget">

                <div className="Create-Database-Node-Margin">

                    <div className="Create-Database-Node-Top-Container">

                        <p className="Create-Database-Node-Title-Lalbel">Crea una base de datos</p>

                        <MdOutlineClose size={24} color='#000d41' onClick={closeCreateDatabaseWidget} style={{ cursor: 'pointer' }} />

                    </div>

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

                                <div className="Member-List-Option-Container">

                                    <div className="Member-Option-Photo-Container">

                                        <img className="Member-Option-Photo" src={context.user.user_profile_photo_url != 'defaultApp' ? context.user.user_profile_photo_url : 'https://scontent.webdesignnodes.com/datasync/default_profile_pics/male/0.png'} />

                                    </div>

                                    <div className="Member-Option-Data-Container">

                                        <p className="Member-Option-User-Name-Label">{context.user.user_display_name}</p>

                                        <p className="Member-Option-User-Email-Label">{context.user.user_email}</p>

                                    </div>

                                    <div className="Member-Option-Checkbox-Container" id={'checkBoxMemberNode' + context.user.user_display_name}>

                                        <MdCheckBox size={18} color='#000d41' />

                                    </div>

                                </div>

                                {

                                    membersData.map((element, index) => {

                                        return (

                                            <div className="Member-List-Option-Container" key={index} >

                                                <div className="Member-Option-Photo-Container">

                                                    <img className="Member-Option-Photo" src={element.userProfilePicURL != 'defaultApp' ? element.userProfilePicURL : 'https://scontent.webdesignnodes.com/datasync/default_profile_pics/male/0.png'} />

                                                </div>

                                                <div className="Member-Option-Data-Container">

                                                    <p className="Member-Option-User-Name-Label">{element.userName}</p>

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

                                <div className="Members-List-Select-All-Button">

                                    <p className="Members-Select-All-Label">Configuracion Avanzada</p>

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

            </div>

        )

    }

}

export default CreateDatabaseNodeWidget