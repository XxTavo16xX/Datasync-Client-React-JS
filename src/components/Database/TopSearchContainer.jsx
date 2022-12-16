import { MdExpandMore } from "react-icons/md";
import { useContext } from "react";
import { AppContext } from '../AppContext';

import './styles/TopSearchContainer.css'

const TopSearchContainer = () => {

    const { globalContext, setGlobalContext } = useContext(AppContext);

    return <div className="Top-Search-Container">

        <div className="Top-Search-Current-Collection-Container">

            <button className="Top-Search-Select-Collection-Button">

                <p className="Top-Search-Current-Collection-Name-Label">{globalContext.currentDatabaseCollectionSelected}</p>

                <MdExpandMore />

            </button>

        </div>

        <div className="Top-Search-Input-Container">

            <input type="text" placeholder={'Buscar en ' + globalContext.currentDatabaseCollectionSelected}/>

        </div>

    </div>

}

export default TopSearchContainer