
// * Dependencies Required

import { useEffect, useState, useRef, useContext } from 'react'
import { MdClose, MdContacts } from 'react-icons/md'

// * Components Required

import InputContainer from '../../shared/Inputs/InputContainer'
import { IconButton } from '../../shared/Buttons/IconButton'
import { UserProfilePictureButtons } from '../../shared/Buttons/ImageButton'
import { SelectBox } from '../../shared/SelectBox'
import { AccentTextButton } from '../../shared/Buttons/TextButton'

// * Component Controller Required

import * as WorkspaceNodeCreator_Controller from './workspaceNodeCreator'
import * as MembersListContainer_Controller from './membersListContainer'

// * Styles Required

import './index.css'

// * Importing Notification Context

import { Notification_Context } from '../../../app/contexts/notification_context'

const userRoles = [ { label: 'Usuario' }, { label: 'Lector' }, { label: 'Escritor' }, { label: 'Administrador' }, { label: 'Propietario' }] 

// * Component Exported

const WorkspaceNodeCreator = ({ contextMenuStates, updateWorkspaceNodeState, ownerData }) => {
    
    const [membersList, setMembersList] = useState([])
    const { notificationContext, setNotificationContext } = useContext(Notification_Context)

    useEffect( () => { WorkspaceNodeCreator_Controller.onComponentMounted(updateWorkspaceNodeState, membersList, setMembersList, notificationContext, setNotificationContext ) }, [])

    return (

        <div id='workspace_node_creator' className="Workspace-Node-Creator">

            <div className="Workspace-Node-Creator-Margin">

                <div className="Workspace-Node-Creator-Title-Bar">

                    <p className="Title-Bar-Name-Label">Crea un nuevo Workspace</p>

                    <div className="Title-Bar-Close-Icon-Button" onClick={WorkspaceNodeCreator_Controller.closeWorkspaceNodeCreator}>

                        <MdClose size={24} fill='#000d41' style={{ cursor: 'pointer' }} />

                    </div>

                </div>

                <div className="Workspace-Node-Creator-Form-Section">

                    <p className="Workspace-Node-Form-Section-Title-Label">Nombre del Workspace</p>

                    <p className="Workspace-Node-Section-Description-Label">Este sera visible para todos los miembros.</p>

                    <div className="Workspace-Node-Creator-Name-Input-Container">

                        <InputContainer inputID="workspace_node_creator_form_name" type="text" placeholder="Nombre del Workspace" onSend={WorkspaceNodeCreator_Controller.handleNameInputEnter} />

                    </div>

                </div>

                <div className="Workspace-Node-Creator-Form-Section">

                    <p className="Workspace-Node-Form-Section-Title-Label">Miembros del Workspace</p>

                    <p className="Workspace-Node-Section-Description-Label">Define quien tendra acceso a tu Workspace y cual sera su role.</p>

                    <div className="Workspace-Node-Members-List-Container">

                        <div className="Workspace-Node-Members-List-Top-Container">

                            <p className="Workspace-Members-Info-Label">Miembro</p>
                            <p className="Workspace-Members-Role-Label">Role</p>

                        </div>

                        <MembersListContainer contextMenuStates={contextMenuStates} ownerData={ownerData} membersList={membersList} updateMembersList={setMembersList} />

                        <div className="Workspace-Node-Members-List-Controlls">

                            <div className="Workspace-Node-Members-Add-Input-Container">

                                <InputContainer inputID="workspace_node_creator_form_add_member_input" type="text" placeholder="someone@company.com" onSend={WorkspaceNodeCreator_Controller.addNewMemberToList} />

                            </div>

                            <div className="Workspace-Node-Members-Action-Buttons-Container">

                                <IconButton buttonID="workspace_member_add_from_contacts_button" buttonOnClick={WorkspaceNodeCreator_Controller.displayContactList} iconReference={<MdContacts size={20} fill='#000d41' style={{ cursor: 'pointer' }} />} buttonTitle="Buscar en contactos" size="45" />

                                <div className="Workspace-Node-Members-Add-Button" onClick={WorkspaceNodeCreator_Controller.addNewMemberToList}>

                                    <p>Agregar</p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <AccentTextButton buttonID="workspace_node_create_form_button" buttonLabel="Crear Workspace" buttonOnClick={WorkspaceNodeCreator_Controller.createWorkspaceNode} onPressed={WorkspaceNodeCreator_Controller.createWorkspaceNode} />

            </div>

        </div>

    )

}

const MembersListContainer = ({ ownerData, membersList, updateMembersList, contextMenuStates }) => {

    const scrollRef = useRef(null);

    useEffect(() => { MembersListContainer_Controller.onComponentMounted(scrollRef, contextMenuStates) }, []);

    return (

        <div className="Workspace-Node-Member-List" ref={scrollRef}>

            <div className="Workspace-Member-Container">

                <div className="Workspace-Member-Info-Container">

                    <div className="Workspace-Member-Image-Container">

                        <UserProfilePictureButtons imagesrc={ownerData.profilePhotoURL} imagetitle='User photo' />

                    </div>

                    <div className="Workspace-Member-User-Info-Container">

                        <p className="Workspace-Member-Display-Name-Label">{ownerData.displayName}</p>
                        <p className="Workspace-Member-Email-Label">{ownerData.email}</p>

                    </div>

                </div>

                <div className="Workspace-Member-Role-Container">

                    <p className="Workspace-Member-Role-Selected-Label">Propietario</p>

                </div>

            </div>

            {

                membersList.map((memberData, memberIndex) => {

                    return (

                        <div className="Workspace-Member-Container" key={'workpace_creator_member' + memberIndex} onContextMenu={MembersListContainer_Controller.handleContextMenu} context_type="edit" id={'Workspace_member_' + memberIndex} >

                            <div className="Workspace-Member-Info-Container">

                                <div className="Workspace-Member-Image-Container" >

                                    <UserProfilePictureButtons imagesrc={memberData.profilePhotoURL} imagetitle='User photo' />

                                </div>

                                <div className="Workspace-Member-User-Info-Container">

                                    <p className="Workspace-Member-Display-Name-Label">{memberData.displayName}</p>
                                    <p className="Workspace-Member-Email-Label">{memberData.email}</p>

                                </div>

                            </div>

                            <div className="Workspace-Member-Role-Container">


                                <div className="Workspace-Member-Role-Selector-Container">

                                    <SelectBox selectBoxStyle="White-SelectBox" selectBoxID={"workspace_node_creator_role_selector_" + memberIndex} defaultOption={0} selectListOptions={userRoles} optionLabelReference="label" />

                                </div>

                            </div>

                        </div>

                    )

                })

            }


        </div>


    )

}

export default WorkspaceNodeCreator