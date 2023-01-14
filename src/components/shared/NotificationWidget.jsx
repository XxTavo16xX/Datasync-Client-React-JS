
// * Dependencies Required 

import { MdCopyAll } from "react-icons/md";

// * Modules Required

// * view Styles

import './styles/NotificationWidget.css'

// * view to Return

const NotificationWidget = () => {

    return(

        <div className="Nofitication-Widget-Container" id="Nofitication-Widget-Container-ID">

            <div className="Nofitication-Widget-Container-Margin">

                <MdCopyAll className="Nofitication-Widget-Icon" color="#0cf063" size={22} />

                <p className="Notification-Widget-Message-Label" id="Notification-Widget-Message-Label-ID"></p>

            </div>

        </div>

    )

}

export default NotificationWidget