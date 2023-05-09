// * Global App Context

// * Dependencies Required

import React from 'react';

// * Creating context

const AppContext = React.createContext();

const defaultContext = {
    app: { app_name: 'Datasync', current_view: 'Dashboard' },
    session: { token: '', refresh: '' },
    user: { displayName: '', email: '', profilePhotoURL: '', gnder: '', workspaceNodes: [], ping: null }
}

const AppProvider = (props) => {

    const sessionContextSaved = JSON.parse(localStorage.getItem('ds-session'))
    const usersContextSaved = JSON.parse(localStorage.getItem('ds-account-contenxt'))

    const loadedContext = {
        app: defaultContext.app,
        session: sessionContextSaved != null ? sessionContextSaved : defaultContext.session,
        user: usersContextSaved != null ? usersContextSaved : defaultContext.user
    }

    const [context, updateReactContext] = React.useState(loadedContext)

    const setContext = (newContext) => {

        // * Updates React Context

        updateReactContext(newContext)

        // * Updates Local Context storage

        localStorage.setItem('ds-session', JSON.stringify(newContext.session))
        localStorage.setItem('ds-account-contenxt', JSON.stringify(newContext.user))

    }

    return (

        <AppContext.Provider value={{ context, setContext }}>

            {props.children}

        </AppContext.Provider>

    )

}

const saveLocalContext = (accountContext, userToken, userRefreshToken) => {

    localStorage.setItem('ds-session', JSON.stringify({ token: userToken, refresh: userRefreshToken }))
    localStorage.setItem('ds-account-contenxt', JSON.stringify(accountContext))

}

export { AppContext, AppProvider, saveLocalContext }