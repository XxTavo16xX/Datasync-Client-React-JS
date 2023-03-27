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
        display_AppWidget: false,
        display_create_database_node_widget: false,
        display_database_new_entry_form: false
    },
    userData: {
        userToken: null,
        userDisplayName: '',
        userEmail: '',
        userProfilePhotoURL: '/src/assets/images/defaultUser.png',
        userGender: '',
        workspacesNodes: [],
        _updatedAt: null
    },
    workspaceData: {
        _id: '',
        name: 'Personal',
        calendarNodes: [],
        databaseNodes: [],
        _updatedAt: null
    },
    databaseNodeData: {
        _id: '',
        name: '',
        lastModifications: [],
        _updatedAt: 0
    },
    databaseNodeContentSchemaData: {
        _id: '',
        contentType: '',
        databaseTableSchema: {},
        docPreview: {},
        _updatedAt: 0,
    },
    databaseNodeDocuments : []
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

const userData = JSON.parse(localStorage.getItem('ds-user-data'))
const workspaceNodeData = JSON.parse(localStorage.getItem('ds-workspace-node-data'))
const databaseNodeData = JSON.parse(localStorage.getItem('ds-database-node-data'))
const databaseNodeContentData = JSON.parse(localStorage.getItem('ds-database-node-content-data'))




const AppProvider = (props) => {

    const [context, updateReactContext] = React.useState(defaultContext);

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