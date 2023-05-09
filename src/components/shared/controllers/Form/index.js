
export const buttonOnPress = event => {

    const buttonClicked = document.getElementById(event.target.id)

    buttonClicked.style.transform = 'scale(0.99)'
    buttonClicked.style.boxShadow = '0px 5px 0px 0px rgba(0,0,0,0.1)'

}

export const buttonUnpress = event => {

    const buttonClicked = document.getElementById(event.target.id)

    buttonClicked.style.transform = 'scale(1.01)'
    buttonClicked.style.boxShadow = '0px 20px 15px 0px rgba(0,0,0,0.1)'

    setTimeout(() => {
        
        buttonClicked.style.transform = 'scale(1)'
        buttonClicked.style.boxShadow = '0px 0px 0px 0px rgba(0,0,0,0.1)'

    }, 100)

}

export const setInputError = (targetInputID, errorMessage) => {

    const inputTargetContainer = document.getElementById(targetInputID + '_container')
    const inputTargetMessageLabel = document.getElementById(targetInputID + '_message_label')

    // inputTarget.style.boxShadow = 'inset 0px 0px 0px 2px #ff150d;'
    inputTargetContainer.classList.add('Invalid-Form-Input-Container')
    inputTargetMessageLabel.innerText = errorMessage
    inputTargetMessageLabel.style.opacity = '1'

}

export const clearInputError = event => {

    let inputTarget = event.target.id

    if (inputTarget.includes('_container') === true) inputTarget = inputTarget.replace('_container', '')

    const inputTargetContainer = document.getElementById(inputTarget + '_container')
    const inputTargetMessageLabel = document.getElementById(inputTarget + '_message_label')

    inputTargetContainer.classList.remove('Invalid-Form-Input-Container')
    inputTargetMessageLabel.style.opacity = '0'

}