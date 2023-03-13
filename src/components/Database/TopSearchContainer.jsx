// * Dependencies Required 

import { useContext, useState } from "react";
import { MdExpandMore } from "react-icons/md";

// * Modules Required

import { AppContext } from "../../app/Context";
import { getDatabaseNodeContent } from "../../services/databaseNodes";

// * view Styles

import './styles/TopSearchContainer.css'

// * view to Return

const TopSearchContainer = () => {

    const { context } = useContext(AppContext);

    const [displaySelectorList, setdisplaySelectorList] = useState(false)

    const handlerDatabaseSelectorClick = () => {

        setdisplaySelectorList(!displaySelectorList)

    }    

    return (

        <div className="Top-SearchBar-Container">

            <div className="Top-SearchBar-Database-SelectBox" onClick={handlerDatabaseSelectorClick}>

                <div className="Top-SearchBar-Database-SelectedBox">

                    <p className="Database-SelectBox-Current-Label">{context.databaseNode.name}</p>

                    <div className="Top-SearchBar-Database-SelectBox-Expand">

                        <MdExpandMore color="#ffffff" size={24} />

                    </div>

                </div>

                {displaySelectorList == true ? <SelectBoxListContainer selectBoxOptionsList={context.workspace.databaseNodes} /> : null}

            </div>

            <div className="Top-SearchBar-Database-Input-Container">

                <input className="Top-SearchBar-Database-Input" type="text" placeholder="Buscar en Ordenes" />

            </div>

            <div className="Top-SearchBar-New-Element-Button">

                <p className="Top-SearchBar-New-Element-Button-Label">Nueva Orden</p>

            </div>

        </div>

    )

}

const SelectBoxListContainer = ({ selectBoxOptionsList }) => {

    const { context, setContext } = useContext(AppContext);

    const handleChangeDatabase = async (databaseSeed) => {

        const databaseNodeData = await getDatabaseNodeContent(context.user.user_Token, context.workspace._id || 0 ,databaseSeed)

        console.log(databaseNodeData);

        if(databaseNodeData.isDatabaseContentFetched) {

            setContext( { ...context, databaseNode: databaseNodeData.message.databaseContent })

        }

    }

    return (

        <div className="Top-SearchBar-Database-SelectBox-List-Container">

            {

                selectBoxOptionsList.map((databaseData, index) => {

                    return (

                        <div className="SelectBox-List-Option-Container" onClick={() => { handleChangeDatabase(databaseData.databaseNodeSeed) }} key={databaseData.databaseNodeName + '_' + index} >

                            <p className="Database-SelectBox-Current-Label">{databaseData.databaseNodeName}</p>

                        </div>

                    )

                })

            }

        </div>

    )

}

export default TopSearchContainer