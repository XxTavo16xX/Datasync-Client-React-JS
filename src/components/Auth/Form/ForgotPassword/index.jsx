
// * Components Required

// * Form Style

import './index.css'
import { useEffect } from 'react'

// * Exporting Datasync Auth Register Form

const Auth_Forgot_Password_Form = ({ context, setContext, setFormSelected }) => {

    useEffect(() => {

        document.getElementById('auth_forgot_pass_form_container').style.opacity = '1'

    })

    return (

        <div id='auth_forgot_pass_form_container' className="Auth-Form-Forgot-Pass-Container">

            

        </div>

    )

}

export default Auth_Forgot_Password_Form