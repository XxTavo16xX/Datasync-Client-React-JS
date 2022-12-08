
import './styles/DatabaseView.css'

import TopSearchContainer from './TopSearchContainer'
import AcentButtonForDBTools from './AcentButtonForDBTools'

const selectAllElementsInList = () => {

    const table = document.getElementById('dbResultsTable')

    const globalCheckBox = table.querySelector('input[type=checkbox]');

    const checkBoxes = table.querySelectorAll('input[type=checkbox]');

    // * Checking if the globalCheckBox is checked

    if (globalCheckBox.checked) {
        
        for (var i = 0; i < checkBoxes.length; i++) {
            checkBoxes[i].checked = true;
        }

        return


    } else {
        
        for (var i = 0; i < checkBoxes.length; i++) {
            checkBoxes[i].checked = false;
        }

    }

}

const DatabaseView = () => {

    return <div className="databaseViewContainer">

        <div className="databaseToolsContainer">

            <div className="databaseToolsTopContainer">

                <TopSearchContainer />

                <AcentButtonForDBTools />

            </div>

            <div className="databaseResultsContainer">

                <table id='dbResultsTable' >
                    <tr>
                        <th><input type="checkbox" name="" id="" onClick={selectAllElementsInList} /></th>
                        <th>Copnum</th>
                        <th>Fecha</th>
                        <th>Estado</th>
                        <th>Provedor</th>
                        <th>Facturado</th>
                        <th>Consignado</th>
                    </tr>
                    <tr>
                        <td><input type="checkbox" name="" id="" /></td>
                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ducimus exercitationem repellendus vero, debitis blanditiis.</td>
                        <td>Row 1, Cell 3</td>
                        <td>Row 1, Cell 4</td>
                        <td>Row 1, Cell 5</td>
                        <td>Row 1, Cell 6</td>
                        <td>Row 1, Cell 7</td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" name="" id="" /></td>
                        <td>Row 2, Cell 2</td>
                        <td>Row 2, Cell 3</td>
                        <td>Row 2, Cell 4</td>
                        <td>Row 2, Cell 5</td>
                        <td>Row 2, Cell 6</td>
                        <td>Row 2, Cell 7</td>
                    </tr>

                </table>

            </div>

        </div>

        <div className="databaseReadContainer">

            <img src="src\assets\dev_image.jpg" alt="" srcset="" />

        </div>


    </div>

}

export default DatabaseView