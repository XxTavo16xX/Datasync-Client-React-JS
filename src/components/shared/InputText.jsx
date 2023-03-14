
// * Dependencies Required 

import { useState } from "react";

// * Modules Required

// * view Styles

import './styles/InputText.css'

// * view to Return

function InputText({inputPlaceHolder}) {

    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (

        <div className="Input-Text-Container">

            <input className="Input-Text-Input" type="text" value={inputValue} onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} />

            <label className={isFocused || inputValue ? "Input-Text-Placeholder active" : "Input-Text-Placeholder " } htmlFor="text-view-input" >{inputPlaceHolder}</label>

        </div>

    );
}

export default InputText;
