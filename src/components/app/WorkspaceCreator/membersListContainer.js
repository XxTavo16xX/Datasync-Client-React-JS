
// * Components Required

import Custom_Context_Menu from "../../../libraries/Contextual-Menu";

let contextMenuStates

// * This function will be launched after the component is mounted

export const onComponentMounted = (scrollRef, contextMenuStatesReceived) => {

    contextMenuStates = contextMenuStatesReceived

    const scrollElement = scrollRef.current; scrollElement.scrollTop = scrollElement.scrollHeight;

}

// * This function will remove the members selected from the membersList
/* 
const handleRemoveNewMemberFromList = event => {

    console.log('aasdasdas');

    const buttonClicked = event.target
    const memberToRemove = buttonClicked.getAttribute('button_reference')

    // * Removing Member from List

    const members = [...membersList]
    const newMembersList = members.filter((member, memberIndex) => memberIndex.toString() !== memberToRemove);

    updateMembersList(newMembersList)

} */

// * This function will display the customContextMenu

export const handleContextMenu = event => {
    event.preventDefault()
    Custom_Context_Menu(event, contextMenuStates)

}