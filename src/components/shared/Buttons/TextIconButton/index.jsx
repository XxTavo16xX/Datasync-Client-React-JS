
// * Importing styles requied

import './index.css'

// * Importing Button Behavior

import { buttonPressedDown, buttonPressedReleased } from '../'

// * Exported Button

export const Transparent_Text_Icon_Button = ({ buttonID, buttonIcon, buttonLabel, buttonOnClick, onPressed }) => {

    const buttonOnPressed = event => {
        if (event.key === 'Enter') {

            onPressed()

        }
    }

    return (

        <div id={buttonID} button_reference={buttonID} tabIndex={0} onKeyDown={buttonOnPressed} className="ds-Text-Icon-Button ds-Transparent-Icon-Button" onMouseDown={buttonPressedDown} onMouseUp={buttonPressedReleased} onClick={buttonOnClick}>

            {buttonIcon}

            <p button_reference={buttonID} className="ds-Icon-Text-Label">{buttonLabel}</p>

        </div>

    )

}