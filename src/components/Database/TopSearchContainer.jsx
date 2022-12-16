import { MdExpandMore } from "react-icons/md";
import { useContext } from "react";
import { AppContext } from '../AppContext';

import './styles/TopSearchContainer.css'

const TopSearchContainer = () => {

    const { globalContext, setGlobalContext } = useContext(AppContext);

    return <div className="topSearchContainer">

        <div className="topCurrentSearchInCollectionContainer">

            <div className="selectDatabaseButton">

                <p className="currentDBNameLabel">{globalContext.currentDatabaseSelected}</p>

                <MdExpandMore />

            </div>

        </div>

        <div className="topSearchInputContainer">

            <input type="text" placeholder="Buscar en ordenes"/>

        </div>

    </div>

}

export default TopSearchContainer