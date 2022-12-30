
// * view Styles

import './styles/TopSection.css'

// * Components Required

import ResumenWidget from './ResumenWidget'
import BackupWidget from './BackupWidget'

const TopSection = () => {

    return (

        <div className="Top-Section-Container">

            <div className="Top-Section-Container-Margin">

                <ResumenWidget />

                <BackupWidget />

            </div>

        </div>

    )

}

export default TopSection