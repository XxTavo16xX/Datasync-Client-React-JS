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

const localContext = JSON.parse(localStorage.getItem('localContext'))

if (!localContext) {
    localStorage.setItem('localContext', JSON.stringify(defaultContext));
}

const AppProvider = (props) => {

    const [context, updateReactContext] = React.useState(localContext || defaultContext);

    const setContext = (newContext) => {
     
        localStorage.setItem('localContext', JSON.stringify(newContext))
        updateReactContext(newContext)
    }

    return (
        <AppContext.Provider value={{ context, setContext  }}>

            {props.children}

        </AppContext.Provider>
    )

}

export { AppContext, AppProvider }