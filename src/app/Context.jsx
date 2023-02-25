// * Global App Context - UPI ( User Public Info ) and app context will be saved here

// * Dependencies Required

import React from 'react';

// * Creating context

const AppContext = React.createContext();

const defaultContext = {
    app: {
        app_name: 'Datasync',
        current_view: 'Dashboard',
        display_workspace_Widget: false,
        display_create_workspace_view: false,
        display_AppWidget: false
    },
    workspace: {
        name: 'Personal',
        members: [],
        calendarNodes: [],
        databaseNodes: [],
        cloudNodes: [],
        safetyBoxNodes: [],
        pendingTaskNodes: []
    },
    user: {
        is_session_created: false,
        user_Token: '',
        user_Workspace_Connection_ID: [],
        user_display_name: '',
        user_email: '',
        user_profile_photo_url: '/src/assets/images/defaultUser.png',
        user_gender: ''
    }
}

const compareAndMergeContexts = (defaultContext, localContext) => {

    // * If localContext is null, return defaultContext

    if (!localContext) {
        return defaultContext;
    }

    // * Iiterate over the keys in defaultContext

    Object.keys(defaultContext).forEach(key => {

        // * If localContext doesn't have the same key, add it

        if (!localContext.hasOwnProperty(key)) {

            localContext[key] = defaultContext[key];
        } else {

            //  * If both values are objects, recursively compare and merge them

            if (typeof defaultContext[key] === 'object' && typeof localContext[key] === 'object') {

                localContext[key] = compareAndMergeContexts(defaultContext[key], localContext[key]);

            }

        }

    });

    return localContext;

};

const localContext = JSON.parse(localStorage.getItem('localContext'))

const contextToSet = compareAndMergeContexts(defaultContext, localContext)

localStorage.setItem('localContext', JSON.stringify(contextToSet));

const AppProvider = (props) => {

    const [context, updateReactContext] = React.useState(contextToSet);

    const setContext = (newContext) => {

        localStorage.setItem('localContext', JSON.stringify(newContext))
        updateReactContext(newContext)
    }

    const setDefaultContext = () => {

        setContext({ app: defaultContext.app, workspace: defaultContext.workspace, user: defaultContext.user })
        localStorage.setItem('localContext', JSON.stringify(defaultContext));

    }

    return (

        <AppContext.Provider value={{ context, setContext, setDefaultContext }}>

            {props.children}

        </AppContext.Provider>

    )

}

export { AppContext, AppProvider }