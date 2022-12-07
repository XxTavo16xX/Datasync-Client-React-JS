import { MdDashboard, MdChromeReaderMode, MdViewSidebar, MdAutoAwesomeMotion, MdList } from "react-icons/md";
import './styles/SideNavBar.css'

function SideNavBar({ userName, userPhotoURL, currentViewSelected }) {

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

                <div className={currentViewSelected == 'Dashboard' ? 'navOptionIconContainer optionSelected' : 'navOptionIconContainer'}>

                    <MdDashboard size={28} color={currentViewSelected == 'Dashboard' ? '#ffffff' : '#8B98A4'}/>

                </div>

            </div>

            <div className="navOptionContainer" title='Base de datos'>

                <div className={currentViewSelected == 'Database' ? 'navOptionIconContainer optionSelected' : 'navOptionIconContainer'}>

                    <MdChromeReaderMode size={28} color={currentViewSelected == 'Database' ? '#ffffff' : '#8B98A4'}/>

                </div>

            </div>

            <div className="navOptionContainer" title='Caja Fuerte'>

                <div className={currentViewSelected == 'SafetyBox' ? 'navOptionIconContainer optionSelected' : 'navOptionIconContainer'}>

                    <MdViewSidebar size={28} color={currentViewSelected == 'SafetyBox' ? '#ffffff' : '#8B98A4'}/>

                </div>

            </div>

            <div className="navOptionContainer" title='Respaldos'>

                <div className={currentViewSelected == 'Backup' ? 'navOptionIconContainer optionSelected' : 'navOptionIconContainer'}>

                    <MdAutoAwesomeMotion size={28} color={currentViewSelected == 'Backup' ? '#ffffff' : '#8B98A4'}/>

                </div>

            </div>

            <div className="navOptionContainer" title='Tareas Pendientes'>

                <div className={currentViewSelected == 'PendingTasks' ? 'navOptionIconContainer optionSelected' : 'navOptionIconContainer'}>

                    <MdList size={28} color={currentViewSelected == 'PendingTasks' ? '#ffffff' : '#8B98A4'}/>

                </div>

            </div>

        </div>


    </div>

}

export default SideNavBar