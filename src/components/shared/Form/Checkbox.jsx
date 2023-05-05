
// * Styles Required

import './CheckBox.css'

const CheckBox = ({ checkboxLabel }) => {

    return (

        <div className="sharedComponent-Checkbox-Container">

            <input type="checkbox" name="" id="auth-form-session-checkbox" />
            <label htmlFor="auth-form-session-checkbox">{ checkboxLabel }</label>

        </div>

    )


}

export default CheckBox