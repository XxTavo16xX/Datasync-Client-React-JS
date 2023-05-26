
// * Dependencies Required

import { createContext, useState } from "react"

// * Creating notification context

const Notification_Context = createContext();

const Notification_Context_Provider = (props) => {

    const [notificationContext, setNotificationContext ] = useState([])

    return (

        <Notification_Context.Provider value={{ notificationContext, setNotificationContext }}>

        { props.children }

        </Notification_Context.Provider>

    )

}

export { Notification_Context, Notification_Context_Provider }