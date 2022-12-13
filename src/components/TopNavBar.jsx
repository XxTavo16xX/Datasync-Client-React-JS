import { MdKeyboardArrowDown, MdSubject, MdArrowForwardIos } from "react-icons/md";
import './styles/Components/TopNavBar.css'

const TopNavBar = () => {

    return <div className="Header">

        <MenuButton />
        <Logo />
        <ViewInfo />
        <UserContainer />

    </div>


}

const MenuButton = () => {

    return <button className="Header-Lateral-Menu-Button">

        <MdSubject size={20} />

    </button>

}

const Logo = () => {

    return <div className="Header-Logo-Container">

        <h1>Datasync</h1>

    </div>

}

const ViewInfo = () => {

    return <div className="Header-View-Info-Container">

        <MdArrowForwardIos size={18} color={'#06113c74'} />

        <p className="Header-Current-View-Label">Dashboard</p>

    </div>

}

const UserContainer = () => {

    return <div className="Header-User-Container">

        <div className="User-Container">

            <div className="User-Photo-Container">

                <img src="./src/assets/components/TopNavBar/defaultUser.png" />

            </div>

            <p className="User-Name-Label">User Name</p>

            <button className="User-Options-Button">

                <MdKeyboardArrowDown size={24} />

            </button>


        </div>


    </div>

}

export default TopNavBar