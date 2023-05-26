
// * Dependencies Required

import { useContext } from 'react'
import { Notification_Context } from '../../../app/contexts/notification_context'
import { MdClose } from 'react-icons/md'


// * Styles Required

import './index.css'

const Push_Notification = () => {

    const { notificationContext, setNotificationContext } = useContext(Notification_Context)

    const removeNotification = event => {

        const notificationToRemoveIndex = parseInt(event.currentTarget.getAttribute('notification_index'))

        const updatedContext = [...notificationContext];
        updatedContext.splice(notificationToRemoveIndex, 1); 

        setNotificationContext(updatedContext);

    }

    return (

        <div className="Notifications-Container">

            {

                notificationContext.map((notification, notificationIndex) => {

                    return (

                        <div className="Push-Notification-Container" key={notificationIndex} >

                            <div className="Push-Notification-Margin">

                                <div className="Push-Notification-Close-Button" onClick={removeNotification} notification_index={notificationIndex}>

                                    <MdClose className='Push-Notification-Close-Icon' />

                                </div>

                                <div className="Push-Notification-Top-Container">

                                    <p className="Push-Notification-Title-Label">{notification.title}</p>

                                </div>

                                <div className="Push-Notification-Content-Container">

                                    <p className="Push-Notification-Content-Label">{notification.message}</p>

                                </div>

                            </div>

                        </div>

                    )

                })

            }

        </div>

    )

}

export default Push_Notification