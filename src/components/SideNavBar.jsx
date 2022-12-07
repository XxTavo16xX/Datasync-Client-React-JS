import { MdDashboard, MdChromeReaderMode, MdViewSidebar, MdAutoAwesomeMotion, MdList } from "react-icons/md";

import './styles/SideNavBar.css'

const currentOptionSelected = 'Dashboard'

function SideNavBar({ userName, userPhotoURL }) {

    return <div className='sideNavBar'>

        <div className="sideNavBarContainer">

            <div className="topSideNavBarContainer">

                <div className="userPhotoContainer">

                    <img src={userPhotoURL ? userPhotoURL : './src/assets/components/SIdeNavBar/defaultUser.png'} alt="" />

                </div>

            </div>

            <div className="topSlash"></div>

            <p>Menu</p>

            <div className="navOptionContainer" title='Dashboard'>

                <div className={currentOptionSelected == 'Dashboard' ? 'navOptionIconContainer optionSelected' : 'navOptionIconContainer'}>

                    <MdDashboard size={28} color={currentOptionSelected == 'Dashboard' ? '#ffffff' : '#8B98A4'}/>

                </div>

            </div>

            <div className="navOptionContainer" title='Base de datos'>

                <div className={currentOptionSelected == 'Database' ? 'navOptionIconContainer optionSelected' : 'navOptionIconContainer'}>

                    <MdChromeReaderMode size={28} color={currentOptionSelected == 'Database' ? '#ffffff' : '#8B98A4'}/>

                </div>

            </div>

            <div className="navOptionContainer" title='Caja Fuerte'>

                <div className={currentOptionSelected == 'SafetyBox' ? 'navOptionIconContainer optionSelected' : 'navOptionIconContainer'}>

                    <MdViewSidebar size={28} color={currentOptionSelected == 'SafetyBox' ? '#ffffff' : '#8B98A4'}/>

                </div>

            </div>

            <div className="navOptionContainer" title='Respaldos'>

                <div className={currentOptionSelected == 'Backup' ? 'navOptionIconContainer optionSelected' : 'navOptionIconContainer'}>

                    <MdAutoAwesomeMotion size={28} color={currentOptionSelected == 'Backup' ? '#ffffff' : '#8B98A4'}/>

                </div>

            </div>

            <div className="navOptionContainer" title='Tareas Pendientes'>

                <div className={currentOptionSelected == 'PendingTasks' ? 'navOptionIconContainer optionSelected' : 'navOptionIconContainer'}>

                    <MdList size={28} color={currentOptionSelected == 'PendingTasks' ? '#ffffff' : '#8B98A4'}/>

                </div>

            </div>

        </div>


    </div>

}

export default SideNavBar