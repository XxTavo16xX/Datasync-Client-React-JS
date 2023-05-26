
// * Importing styles requied

import './index.css'

// * Importing Button Behavior

import { buttonPressedDown, buttonPressedReleased } from '../'

// * Exported Buttons

export const PrimaryButton = ({ buttonID, buttonLabel, onPressed, buttonOnClick }) => {

    const buttonOnPressed = event => { if (event.key === 'Enter') onPressed() }

    return (

        <div id={buttonID} button_reference={buttonID} className="ds-TextButton ds-Primary-Button" tabIndex={0} onKeyDown={buttonOnPressed} onMouseDown={buttonPressedDown} onMouseUp={buttonPressedReleased} onClick={buttonOnClick}>

            <p button_reference={buttonID} className="ds-Button-Label ds-Primary-Button-Label">{buttonLabel}</p>

        </div>

    )

}

export const AccentTextButton = ({ buttonID, buttonLabel, buttonOnClick, onPressed }) => {

    const buttonOnPressed = event => { if (event.key === 'Enter') onPressed() }

    return (

        <div id={buttonID} button_reference={buttonID} className="ds-TextButton ds-Accent-Button" tabIndex={0} onKeyDown={buttonOnPressed} onMouseDown={buttonPressedDown} onMouseUp={buttonPressedReleased} onClick={buttonOnClick}>

            <p button_reference={buttonID} className="ds-Button-Label ds-Accent-Button-Label">{buttonLabel}</p>

        </div>

    )

}

export const TransparentButton = ({ buttonID, buttonLabel, buttonOnClick, onPressed }) => {

    const buttonOnPressed = event => { if (event.key === 'Enter') onPressed() }

    return (

        <div id={buttonID} button_reference={buttonID} className="ds-TextButton ds-Transparent-Button" tabIndex={0} onKeyDown={buttonOnPressed} onMouseDown={buttonPressedDown} onMouseUp={buttonPressedReleased} onClick={buttonOnClick}>

            <p button_reference={buttonID} className="ds-Button-Label ds-Accent-Button-Label">{buttonLabel}</p>

        </div>

    )

}