
// * Dependencies Required

import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md'
import { useState } from 'react'

// * Styles Required

import './index.css'

// * Exported Checkbox

export const Transparent_Checkbox = ({ checkBoxLabel, checkBoxState, checkBoxID }) => {

    const [checkboxState, setcheckboxState] = useState(checkBoxState)

    const switchCheckBoxState = () => { setcheckboxState(!checkboxState) }

    const buttonOnPressed = event => {
        if (event.key === 'Enter') {

            switchCheckBoxState()

        }
    }

    return (

        <div className="ds-Checkbox" onClick={switchCheckBoxState}>

            {
                checkboxState === false ?

                    <MdCheckBoxOutlineBlank id={checkBoxID} className='ds-checkbox-icon-container' fill='#000d41' tabIndex={0} onKeyDown={buttonOnPressed} size={24} style={{ cursor: 'pointer' }} checkboxcurrentstate={checkboxState.toString()} />
                    :
                    <MdCheckBox id={checkBoxID} className='ds-checkbox-icon-container' fill='#000d41' tabIndex={0} onKeyDown={buttonOnPressed} size={24} style={{ cursor: 'pointer' }} checkboxcurrentstate={checkboxState.toString()} />
            }

            <p className="ds-Checkbox-Label">{checkBoxLabel}</p>

        </div>

    )

}