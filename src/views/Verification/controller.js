// * Importing API

import { DATASYNC_API } from "../../services/API"
let animationCount = 0

// * Labels Required

export const init_Account_Email_Validation_Process = (account_email_verficiation_reference_code, addNewNotification, setAnimationMode) => {

    return new Promise(async resolve => {

        if (!account_email_verficiation_reference_code) return null

        const API_Instance = new DATASYNC_API(addNewNotification)

        const requestResponse = await API_Instance.validate_account_email(account_email_verficiation_reference_code)

        return resolve(requestResponse)

    })

}

export const onAnimationComplete = async (navigate, getParameterFromURL, setAnimationMode, addNewNotification) => {

    if (animationCount > 0) return

    const account_reference_code = getParameterFromURL.get('cRef')
    const verificationStateLabel = document.getElementById('email_verification_state_label')

    // * Validating account_reference_code

    if (!account_reference_code) {

        setAnimationMode('/assets/animations/error_verification.json')
        verificationStateLabel.innerText = 'Verificacion cancelada'
        return

    }

    // * Validating Account Email

    const verificationResult = await init_Account_Email_Validation_Process(account_reference_code, addNewNotification)
    animationCount++

    if (verificationResult == 'invalid') {

        setAnimationMode('/assets/animations/error_verification.json')
        verificationStateLabel.innerText = 'Verificacion Invalida. Solicita una nueva verificacion.'
        return

    }

    if (verificationResult == 'expirated') {

        setAnimationMode('/assets/animations/error_verification.json')
        verificationStateLabel.innerText = 'Verificacion Invalida. Solicita una nueva verificacion.'
        return

    }

    if (verificationResult == 'successfull') {

        setAnimationMode('/assets/animations/successfull_verification.json')
        verificationStateLabel.innerText = 'Verificacion completada. Pronto seras redirigido a la app'
        setTimeout(() => { navigate('/app') }, 3000)
        return

    }

    return

}