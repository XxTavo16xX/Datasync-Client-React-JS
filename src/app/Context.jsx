// * Global App Context - UPI ( User Public Info ) and app context will be saved here

// * Dependencies Required

import React from 'react';

// * Creating context

const AppContext = React.createContext();

const defaultContext = {
    app: {
        app_name: 'Datasync',
        current_view: 'Dashboard',
        worksapce: {
            name: 'Personal',
            database: {
                databaseConnections: [],
                databaseDefaultConnection: '',
            },
            safetybox: {
                cryptoBoxConnections: [],
                cryptoBoxDefaultConnection: ''
            }
        }
    },
    user: {
        is_session_created: false,
        user_Token: '',
        user_Workspace_Connection_ID: [],
        user_display_name: '',
        user_profile_photo_url: '/src/assets/images/defaultUser.png',
        user_gender: 'M'
    }
}

const AppProvider = (props) => {

    // * Getting context from LocalStorage

    const localContext = localStorage.getItem('localContext')

    // * In case there´s no context app saved into the localStorage the defaultContext will be saved and returned

    if (localContext == null) {

        // * Saving defaultContext in localStorage

        localStorage.setItem('localContext', JSON.stringify(defaultContext))

        const [context, setContext] = React.useState(defaultContext);

        return (
            <AppContext.Provider value={{ context, setContext }}>

                {props.children}

            </AppContext.Provider>
        )

    }

    // * Returning local context into appContext

    const [context, setContext] = React.useState(JSON.parse(localContext));

    return (
        <AppContext.Provider value={{ context, setContext }}>

            {props.children}

        </AppContext.Provider>
    )

}

export { AppContext, AppProvider }