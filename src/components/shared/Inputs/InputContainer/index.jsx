
// * Styles Required

import './index.css'

// * Component Exported

const InputContainer = ({ inputID, type, placeholder, onSend }) => {

    const clearInvalidInputErrors = event => {

        const inputContainerID = event.target.id

        const InputContainer = document.getElementById(inputContainerID + '_container')

        InputContainer.classList.remove('ds-sc-Invalid-Input')
        InputContainer.setAttribute('title', '')

    }

    const handleInputKeyDown = event => {

        if (document.getElementById(event.target.id + '_container').classList.contains('ds-sc-Input-Container-ds-sc-Invalid-Input')) return clearInvalidInputErrors(event)

        if (onSend) {

            if (event.key === 'Enter') onSend()

        }

    }

    return (

        <div id={inputID + '_container'} className="ds-sc-Input-Container">

            <input id={inputID} className="ds-sc-Input" type={type} placeholder={placeholder} onKeyDown={handleInputKeyDown} onClick={clearInvalidInputErrors}/>

        </div>

    )

}

export default InputContainer