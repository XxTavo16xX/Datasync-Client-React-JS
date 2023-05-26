// * Global App Context

// * Dependencies Required

import { createContext, useState } from "react"

const Session_Context = createContext();

const default_session_context = {
    token: '',
    refreshToken: '',
    status: 'online'
}

// * This function will load the sessionContext saved_locally

const loadLocalSessionContextData = () => {

    return JSON.parse(localStorage.getItem('ds_sc'))

}

// * This function will save the newSessionContext

const saveLocalSessionContextData = (newSessionContext) => {

    localStorage.setItem('ds_sc', JSON.stringify(newSessionContext))

}

const Session_Context_Provider = (props) => {

    const local_session_context = loadLocalSessionContextData()

    const [sessionContext, updateSessionContext] = useState(local_session_context != null ? local_session_context : default_session_context)

    // * This function will save the new context locally then will update the session context

    const setSessionContext = (newSessionContext) => {

        saveLocalSessionContextData(newSessionContext)
        updateSessionContext(newSessionContext)

    }

    return (

        <Session_Context.Provider value={{ sessionContext, setSessionContext }}>

            {props.children}

        </Session_Context.Provider>

    )

}

export { Session_Context, Session_Context_Provider }