
// * Importing styles requied

import './index.css'

// * Importing Button Behavior

import { buttonPressedDown, buttonPressedReleased } from '../'

// * Exported Button

export const IconButton = ({ buttonID, buttonOnClick, buttonIcon }) => {

    return (

        <div id={buttonID} button_reference={buttonID} className="ds-Icon-Button ds-Simple-Icon-Button" onMouseDown={buttonPressedDown} onMouseUp={buttonPressedReleased} onClick={buttonOnClick}>

            {buttonIcon}

        </div>

    )

}