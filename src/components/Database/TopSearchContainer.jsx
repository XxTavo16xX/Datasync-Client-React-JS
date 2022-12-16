import { MdExpandMore } from "react-icons/md";
import { useContext } from "react";
import { AppContext } from '../AppContext';

import './styles/TopSearchContainer.css'

const showCollectionsOptionsContainer = () => {

    const databaseCollectionsOptionsContainer = document.getElementById('collectionsAvailableContainer')

    if (databaseCollectionsOptionsContainer.style.height == '' || databaseCollectionsOptionsContainer.style.height == '0px') {

        databaseCollectionsOptionsContainer.style.boxShadow = '0px 10px 15px 6px rgba(0,0,0,0.1)'
        databaseCollectionsOptionsContainer.style.borderRadius = '15px'
        databaseCollectionsOptionsContainer.style.top = '10px'
        databaseCollectionsOptionsContainer.style.height = '180px'
        return

    }

    if (databaseCollectionsOptionsContainer.style.height == '180px') {

        databaseCollectionsOptionsContainer.style.boxShadow = '0px 10px 15px -10px rgba(0,0,0,0.1)'
        databaseCollectionsOptionsContainer.style.borderRadius = '50px 0px 0px 50px'
        databaseCollectionsOptionsContainer.style.top = '5px'
        databaseCollectionsOptionsContainer.style.height = '0px'
        return

    }

}

const databaseCollectionEnable = ["Ordenes", "Cobranza", "Catalogo", "Presupuesto", "Ventas", "Listados"]

const TopSearchContainer = () => {

    const { globalContext, setGlobalContext } = useContext(AppContext);

    const changeCurrentDBCollectionSelected = (collectionToDisplay) => {

        setGlobalContext({
            ...globalContext,
            currentDatabaseCollectionSelected: collectionToDisplay
        });

        showCollectionsOptionsContainer()

    }

    return <div className="Top-Search-Container">

        <div className="Top-Search-Current-Collection-Container">

            <button className="Top-Search-Select-Collection-Button" onClick={showCollectionsOptionsContainer}>

                <p className="Top-Search-Current-Collection-Name-Label">{globalContext.currentDatabaseCollectionSelected}</p>

                <MdExpandMore />

            </button>

            <div className="Top-Search-Select-Collection-Options-Container" id="collectionsAvailableContainer">

                {

                    databaseCollectionEnable.map(collectionOptionName => {

                        if(collectionOptionName == globalContext.currentDatabaseCollectionSelected)  return

                        return <button className="Top-Search-Option-Button" onClick={() => { changeCurrentDBCollectionSelected(collectionOptionName) }} key={collectionOptionName}>

                            <p className="Top-Search-Option-Collection-Name-Label">{collectionOptionName}</p>

                        </button>

                    })

                }

            </div>

        </div>

        <div className="Top-Search-Input-Container">

            <input type="text" placeholder={'Buscar en ' + globalContext.currentDatabaseCollectionSelected} />

        </div>

    </div>

}

export default TopSearchContainer