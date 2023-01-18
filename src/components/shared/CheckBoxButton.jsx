
// * Dependencies Required 

import { MdCheckBoxOutlineBlank } from 'react-icons/md'


// * Modules Required

// * view Styles

import './styles/CheckBoxButton.css'

// * Components Required

// * view to Return

const CheckBoxButton = ({ checkBoxLabel }) => {

    return (

        <button className="CheckBox-Button">

            <MdCheckBoxOutlineBlank />

            <p className="CheckBox-Button-Label">{ checkBoxLabel }</p>

        </button>

    )

}

export default CheckBoxButton