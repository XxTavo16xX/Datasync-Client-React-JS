import { MdExpandMore } from "react-icons/md";
import './styles/TopSearchContainer.css'

const TopSearchContainer = () => {

    return <div className="topSearchContainer">

        <div className="topCurrentSearchInCollectionContainer">

            <div className="selectDatabaseButton">

                <p className="currentDBNameLabel">Ordenes</p>

                <MdExpandMore />

            </div>

        </div>

        <div className="topSearchInputContainer">

            <input type="text" placeholder="Buscar en ordenes"/>

        </div>

    </div>

}

export default TopSearchContainer