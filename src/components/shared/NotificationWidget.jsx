
// * Dependencies Required 

import { MdNotificationImportant } from "react-icons/md";

// * Modules Required

// * view Styles

import './styles/NotificationWidget.css'

// * view to Return

const NotificationWidget = () => {

    return (

        <div className="Nofitication-Widget-Container" id="Nofitication-Widget-Container-ID">

            <div className="Nofitication-Widget-Container-Margin">

                <div className="Nofitication-Widget-Action-Icons-Container">

                    <div className="Notification-Widget-Icon-Container">

                        <MdNotificationImportant size={'26px'} color='#00eabe' />

                    </div>

                </div>

                <div className="Notification-Widget-Text-Container">

                    <p className="Notification-Widget-Title-Label" id="Notification-Widget-Title-Label"></p>

                    <p className="Notification-Widget-Description-Label" id="Notification-Widget-Description-Label"></p>

                </div>

            </div>

        </div>

    )

}

export default NotificationWidget