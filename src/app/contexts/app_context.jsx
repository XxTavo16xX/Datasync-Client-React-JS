// * Global App Context

// * Dependencies Required

import { createContext, useState } from "react"

// * Creating context

const App_Context = createContext();

const default_app_context = {
    currentView: 'Dashboard',
    theme: 'Light',
    lenguange: 'ES-MX'
}

const App_Context_Provider = (props) => {

    const [appContext, setAppContext] = useState(default_app_context)    

    return (

        <App_Context.Provider value={{ appContext, setAppContext }}>

            {props.children}

        </App_Context.Provider>

    )

}

export { App_Context, App_Context_Provider }