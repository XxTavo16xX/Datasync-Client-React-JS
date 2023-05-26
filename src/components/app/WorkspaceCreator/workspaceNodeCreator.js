
// * Importing API

import { DATASYNC_API } from '../../../services/API'

// * Libraries Required

import { isEmailValueInFormat } from '../../../libraries/Auth/form'

let setWorkspaceNodeState
let membersList, setMembersList
let notificationContext, setNotificationContext

// * This function will be launched after the component is mounted

export const onComponentMounted = (updateWorkspaceNodeState, workspaceMembersList, setWorkspaceMembersList, notifyContext, setNotifyContext ) => {

    // * Saving update WorkspaceNode state 

    setWorkspaceNodeState = updateWorkspaceNodeState
    membersList = workspaceMembersList
    setMembersList = setWorkspaceMembersList
    notificationContext = notifyContext
    setNotificationContext = setNotifyContext

    // * COMPONENT ANIMATION IN

    setTimeout(() => { document.getElementById('workspace_node_creator').style.transform = 'translateY(0)' }, 20)
    setTimeout(() => { document.getElementById('workspace_node_creator_form_name').focus() }, 240)

    // * Starting Event Listener 

    document.body.addEventListener('keydown', eventHandler)

}

// * This function will check if the key pressed is ESCAPE 
// * In that case the WorkspaceNode Creator must be hidden.

const eventHandler = event => {

    if (event.key == 'Escape') {

        document.body.removeEventListener('keydown', eventHandler)
        closeWorkspaceNodeCreator()

    }

}

// * This function will start the COMPONENT ANIMATION OUT
// * then will update the WorkspaceNode State as hidden

export const closeWorkspaceNodeCreator = () => {

    // * COMPONENT ANIMATION OUT

    document.getElementById('workspace_node_creator').style.transform = 'translateY(-110%)'

    // * Updating WorkspaceNode State

    setTimeout(() => { setWorkspaceNodeState(false) }, 200)

}

// * This function will focus the addMemberInput after enter

export const handleNameInputEnter = () => {

    document.getElementById('workspace_node_creator_form_add_member_input').focus()

}

// * This function will validate and update the WorkspaceNode 
// * members List

export const addNewMemberToList = async () => {

    const addMemberInput = document.getElementById('workspace_node_creator_form_add_member_input')
    const addMemberValue = addMemberInput.value

    // * Validating value

    const emailFormatValidation = isEmailValueInFormat(addMemberValue)
    if (emailFormatValidation === false) return setInvalidInputError('workspace_node_creator_form_add_member_input', 'Verifica el correo electronico')

    // * Searching for Account Public Data

    const API_Instance = new DATASYNC_API(setNotificationContext)

    const requestResponse = await API_Instance.get_user_public_data_by_email(addMemberValue)

    console.log(requestResponse);

    return

    // * Adding Member to List

    const members = [...membersList]
    members.push({ email: addMemberValue, profilePhotoURL: '', displayName: 'Nuevo miembro' })
    setMembersList(members)

    // * Cleaning Input 

    addMemberInput.value = ''

}

// * This function will set the Invalid Input Error in the
// * addMemberInput

const setInvalidInputError = (InputContainerID, inputErrorMessage) => {

    document.getElementById(InputContainerID + '_container').classList.add('ds-sc-Invalid-Input')
    document.getElementById(InputContainerID + '_container').setAttribute('title', inputErrorMessage)

}

// * This function will display the user contact list

export const displayContactList = () => {


}

// * This function will collect the form data and 
// * create the API request to create the WorkspaceNode

export const createWorkspaceNode = () => {

    console.log('in dev');

}