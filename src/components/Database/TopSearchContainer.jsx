import { MdExpandMore } from "react-icons/md";
import { useContext } from "react";
import { AppContext } from "../../app/Context";

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

    const { context, setContext } = useContext(AppContext);

    const changeCurrentDBCollectionSelected = (collectionToDisplay) => {

        setContext({
            ...context,
            currentDatabaseCollectionSelected: collectionToDisplay
        });

        showCollectionsOptionsContainer()

    }

    return <div className="Top-Search-Container">

        <div className="Top-Search-Current-Collection-Container">

            <button className="Top-Search-Select-Collection-Button" onClick={showCollectionsOptionsContainer}>

                <p className="Top-Search-Current-Collection-Name-Label">{context.app.database.default_collection}</p>

                <MdExpandMore />

            </button>

            <div className="Top-Search-Select-Collection-Options-Container" id="collectionsAvailableContainer">

                {

                    databaseCollectionEnable.map(collectionOptionName => {

                        if(collectionOptionName == context.currentDatabaseCollectionSelected)  return

                        return <button className="Top-Search-Option-Button" onClick={() => { changeCurrentDBCollectionSelected(collectionOptionName) }} key={collectionOptionName}>

                            <p className="Top-Search-Option-Collection-Name-Label">{collectionOptionName}</p>

                        </button>

                    })

                }

            </div>

        </div>

        <div className="Top-Search-Input-Container">

            <input type="text" placeholder={'Buscar en ' + context.app.database.default_collection} />

        </div>

    </div>

}

export default TopSearchContainer