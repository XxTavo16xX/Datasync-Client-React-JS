
// * Dependencies Required 

import { useState } from "react";

// * Modules Required

// * view Styles

import './styles/InputText.css'

// * view to Return

function InputText({inputPlaceHolder, inputDefaultValue}) {

    const [isFocused, setIsFocused] = useState(inputDefaultValue != null ? true : false);
    const [inputValue, setInputValue] = useState("");

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = (e) => {

        if(e.target.value == '') return setIsFocused(false);
        
    };

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (

        <div className="Input-Text-Container">

            <input className="Input-Text-Input" type="text" value={inputDefaultValue} onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} />

            <label className={isFocused || inputValue ? "Input-Text-Placeholder active" : "Input-Text-Placeholder " } htmlFor="text-view-input" >{inputPlaceHolder}</label>

        </div>

    );
}

export default InputText;
