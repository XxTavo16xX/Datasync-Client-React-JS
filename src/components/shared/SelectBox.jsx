// * Dependencies Required 

import { MdExpandMore } from "react-icons/md";

// * Modules Required

// * view Styles

import './styles/SelectBox.css'

// * Components Required

// * view to Return

const SelectBox = ({defaultOption, optionsList}) => {

    console.log(defaultOption);

    return (

        <div className="SelectBox-Container">

            <div className="SelectBox-Container-Margin">

                <p className="SelectBox-Option-Selected-Label">{optionsList[defaultOption]}</p>

                <MdExpandMore />

            </div>

        </div>

    )

}

export default SelectBox