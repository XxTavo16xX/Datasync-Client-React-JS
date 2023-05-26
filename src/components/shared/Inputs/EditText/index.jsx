
// * Dependencies Required

import { MdVisibility } from 'react-icons/md'

// * Component Required

import { IconButton } from '../../Buttons/IconButton'

// * Edit Text Style

import './index.css'

// * Component Exported

const EditText = ({ Title, placeholder, inputType, inputID, onEnter, onSend }) => {

    const clearInvalidInputErrors = event => {

        const inputContainerID = event.target.id

        const InputContainer = document.getElementById(inputContainerID + '_container')
        const InputErrorMessageLabel = document.getElementById(inputContainerID + '_error_label')

        InputContainer.classList.remove('ds-sc-Invalid-Input')
        InputErrorMessageLabel.innerText = ''

    }

    const handleInputKeyDown = event => {

        if (document.getElementById(event.target.id + '_container').classList.contains('ds-sc-Invalid-Input')) return clearInvalidInputErrors(event)

        if (onEnter) {

            if (event.key === 'Enter') document.getElementById(onEnter).focus()

        }

        if (onSend) {

            if (event.key === 'Enter') onSend()

        }

    }

    const handlePasswordSwitch = () => {

        const passwordInput = document.getElementById(inputID)

        if (passwordInput.type === 'password') return passwordInput.type = 'text'
        if (passwordInput.type === 'text') return passwordInput.type = 'password'

    }

    if (inputType === 'password') return (

        <div className="ds-sc-EditText">

            <p className="ds-sc-EditText-Title-Label">{Title}</p>

            <div className="ds-sc-Password-EditText-Container">

                <div id={inputID + '_container'} className="ds-sc-Password-EditText-Input-Container" onClick={clearInvalidInputErrors}>

                    <input id={inputID} className='ds-sc-EditText-Input' type={inputType} placeholder={placeholder} onKeyDown={handleInputKeyDown} onClick={clearInvalidInputErrors} />

                </div>

                <IconButton buttonID={inputID + '_icon_button'} iconReference={<MdVisibility button_reference={inputID + '_icon_button'} size={18} color='#000d41' style={{ cursor: 'pointer' }} />} buttonOnClick={handlePasswordSwitch} />

            </div>

            <p id={inputID + '_error_label'} className="ds-sc-EditText-Input-Error-Label"></p>

        </div>

    )

    return (

        <div className="ds-sc-EditText">

            <p className="ds-sc-EditText-Title-Label">{Title}</p>

            <div id={inputID + '_container'} className="ds-sc-EditText-Input-Container" onClick={clearInvalidInputErrors}>

                <input id={inputID} className='ds-sc-EditText-Input' type={inputType} placeholder={placeholder} onKeyDown={handleInputKeyDown} onClick={clearInvalidInputErrors} />

            </div>

            <p id={inputID + '_error_label'} className="ds-sc-EditText-Input-Error-Label"></p>

        </div>

    )

}

export default EditText