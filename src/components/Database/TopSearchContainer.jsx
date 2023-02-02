// * Dependencies Required 

import { useContext } from "react";
import { MdExpandMore } from "react-icons/md";

// * Modules Required

import { AppContext } from "../../app/Context";

// * view Styles

import './styles/TopSearchContainer.css'

// * Components Required

import SelectBox from '../../components/shared/SelectBox'

// * view to Return

const TopSearchContainer = () => {

    const { context } = useContext(AppContext);

    return (

        <div className="Top-SearchBar-Container">

            <div className="Top-SearchBar-Database-SelectBox">

                <p className="Database-SelectBox-Current-Label">Ordenes</p>

                <div className="Top-SearchBar-Database-SelectBox-Expand">

                    <MdExpandMore color="#ffffff" size={24} />

                </div>

            </div>

            <div className="Top-SearchBar-Database-Input-Container">

                <input className="Top-SearchBar-Database-Input" type="text" placeholder="Buscar en Ordenes"/>

            </div>

            <div className="Top-SearchBar-New-Element-Button">

                <p className="Top-SearchBar-New-Element-Button-Label">Nueva Orden</p>

            </div>

        </div>

    )

}

export default TopSearchContainer