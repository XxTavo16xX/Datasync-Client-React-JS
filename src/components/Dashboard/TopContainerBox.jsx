
import './styles/TopSection.css'

import BackUpHistorial from './BackupHistorial'
import ResumenDataContainer from './ResumenDataContainer.jsx'

function TopContainerBox() {

    return <div className="Top-Section-Container">

        <div className="Top-Section-Container-Margin">

            <ResumenDataContainer />

            <BackUpHistorial />

        </div>

    </div>

}

export default TopContainerBox