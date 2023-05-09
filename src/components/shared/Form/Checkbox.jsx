
// * Dependencies Required

import { useState } from 'react'
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md'

// * Styles Required

import './CheckBox.css'

const CheckBox = ({ checkboxLabel }) => {

    const [ checkBoxState, setCheckBoxState ] = useState(false)

    const handleCheckBoxClick = () => {

        setCheckBoxState(!checkBoxState)

    }

    return (

        <div className="sharedComponent-Checkbox-Container" onClick={handleCheckBoxClick} >

            { checkBoxState === false ? <MdCheckBoxOutlineBlank size={20} color='#000d41' /> : <MdCheckBox size={20} color='#000d41' />  }
            <label htmlFor="auth-form-session-checkbox">{checkboxLabel}</label>

        </div>

    )


}

export default CheckBox