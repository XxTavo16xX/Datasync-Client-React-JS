
// * Dependencies Required

import React from 'react'

// * Importing styles requied

import './index.css'

// * Importing Button Behavior

import { buttonPressedDown, buttonPressedReleased } from '../'

// * Exported Button

export const IconButton = ({ buttonID, buttonOnClick, iconReference }) => {

    return (

        <div id={buttonID} button_reference={buttonID} className="ds-Icon-Button ds-Simple-Icon-Button" onMouseDown={buttonPressedDown} onMouseUp={buttonPressedReleased} onClick={buttonOnClick}>

            {React.cloneElement(iconReference, { onClick: buttonOnClick, button_reference: buttonID })}

        </div>

    )

}

export const Reactive_Icon_Button = ({ buttonID, buttonOnClick, iconReference, buttonTitle, buttonReference }) => {

    return (

        <div id={buttonID} className="ds-Reactive-Icon-Button" onClick={buttonOnClick} title={buttonTitle} button_reference={buttonReference}>
            {React.cloneElement(iconReference, { onClick: buttonOnClick, button_reference: buttonReference })}
        </div>

    )

}