
// * Styles Required

import './index.css'

const EditMenuContext = ['Editar miembro', 'Eliminar miembro']

// * This Process will disable the default context menu to display the 

const Custom_Context_Menu = (mouseEvent, contextStates) => {

    console.log(contextStates.ContextMenuState);
    console.log(contextStates.setContextMenuState);

    if (contextStates.ContextMenuState == true) {

        console.log('hidde and show');

        document.body.removeChild(document.getElementById('custom_context_menu'))
        document.removeEventListener("click", handleClickEvent);
        contextStates.setContextMenuState(false)

    }

    const mousePosition = { x: mouseEvent.clientX, y: mouseEvent.clientY }

    const currentTarget = mouseEvent.currentTarget;
    const contextMenuType = currentTarget.getAttribute('context_type');

    function handleClickEvent() {

        document.body.removeChild(document.getElementById('custom_context_menu'))
        document.removeEventListener("click", handleClickEvent);
        contextStates.setContextMenuState(false)
        return

    }

    if (contextMenuType == 'edit') {

        contextStates.setContextMenuState(true)
        const custom_Context_Menu_EDIT = document.createElement('div')

        custom_Context_Menu_EDIT.setAttribute('id', 'custom_context_menu')
        custom_Context_Menu_EDIT.setAttribute('class', 'custom_context_menu_Edit')
        custom_Context_Menu_EDIT.style.top = mousePosition.y + 'px'
        custom_Context_Menu_EDIT.style.left = mousePosition.x + 'px'

        custom_Context_Menu_EDIT.style.height = [EditMenuContext.length * 40] + 'px'

        EditMenuContext.map(menuOption => {

            const custom_Context_Menu_Option = document.createElement('div')
            const custom_Context_Menu_Option_Margin = document.createElement('div')
            const custom_Context_Menu_Option_Label = document.createElement('p')

            custom_Context_Menu_Option.setAttribute('class', 'custom_context_menu_option_container')
            custom_Context_Menu_Option_Margin.setAttribute('class', 'custom_context_menu_option_container_margin')

            custom_Context_Menu_Option_Label.setAttribute('class', 'custom_context_menu_option_label')
            custom_Context_Menu_Option_Label.innerText = menuOption

            custom_Context_Menu_Option_Margin.appendChild(custom_Context_Menu_Option_Label)
            custom_Context_Menu_Option.appendChild(custom_Context_Menu_Option_Margin)
            custom_Context_Menu_EDIT.appendChild(custom_Context_Menu_Option)

        })

        document.body.appendChild(custom_Context_Menu_EDIT)
        
        if (contextStates.ContextMenuState === false) {
            document.addEventListener("click", handleClickEvent);
        }

        return

    }

}

export default Custom_Context_Menu