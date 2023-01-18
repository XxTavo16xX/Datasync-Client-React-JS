
// * Dependencies Required 

import { useContext } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

// * Modules Required

import { AppContext } from "../../app/Context";

// * view Styles

import './styles/SearchBar.css'

// * Components Required

// * view to Return

const SearchBar = () => {

    const { context, setContext } = useContext(AppContext)

    return (

        <div className="Database-SearchBar-Container">

            <div className="Database-SearchBar-Collection-Selected-Button">

                <p>{ context.app.database.default_collection }</p>

                <MdKeyboardArrowDown />

            </div>


        </div>

    )

}

export default SearchBar