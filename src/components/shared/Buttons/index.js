
// * Buttons Behavior

// * This function will set the behavior of the button to show an animation when the button is pressed

export const buttonPressedDown = event => {

    const eventTarget = event.target
    const buttonPressedID = eventTarget.getAttribute('button_reference')
    const buttonPressedDown = document.getElementById(buttonPressedID)

    buttonPressedDown.classList.add('ds-Button-Pressed')

}

// * This function will set the behavior of the button to show an animation when the button is release

export const buttonPressedReleased = event => {

    const eventTarget = event.target
    const buttonPressedID = eventTarget.getAttribute('button_reference')
    const buttonPressedDown = document.getElementById(buttonPressedID)

    buttonPressedDown.classList.remove('ds-Button-Pressed')
    buttonPressedDown.classList.add('ds-Button-Pressed-Released')

    setTimeout(() => { buttonPressedDown.classList.remove('ds-Button-Pressed-Released') }, 200)

}