
// * Dependencies Required 

import { MdExpandMore } from "react-icons/md";

// * Modules Required

// * view Styles

import './styles/SafetyBoxSearchBar.css'

// * Components Required

// * view to Return

const SearchBar = () => {

    return <div className="SafetyBox-SearchBar-Container">

        <div className="SafetyBox-SearchBar-Category-Filter-Button">

            <p className="SafetyBox-SarchBar-Category-Filter-Label">Todo</p>

            <MdExpandMore color={'#ffffff'} size={24} />

        </div>

        <div className="SafetyBox-SearchBar-Input-Container">

            <input className="SafetyBox-SearchBar-Input" type="text" placeholder="Buscar contraseña" />

        </div>

        <div className="SafetyBox-SeachBar-Normal-Button">

            <p className="SafetyBox-SearchBar-Button-Label" >Generar Contraseña</p>

        </div>

        <div className="SafetyBox-SeachBar-Normal-Button">

            <p className="SafetyBox-SearchBar-Button-Label" >Guardar Contraseña</p>

        </div>

    </div>


}

export default SearchBar