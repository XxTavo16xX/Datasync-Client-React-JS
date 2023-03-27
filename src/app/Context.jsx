// * Global App Context - UPI ( User Public Info ) and app context will be saved here

// * Dependencies Required

import React from 'react';

// * Creating context

const AppContext = React.createContext();

const defaultContext = {
    app: {
        app_name: 'Datasync',
        current_view: 'Dashboard',
        display_app_pref_widget: false,
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
        workspaceNodes: [],
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
    databaseNodeDocuments: []
}

const AppProvider = (props) => {

    const localUserData = JSON.parse(localStorage.getItem('ds-user-data'))
    const localWorkspaceNodeData = JSON.parse(localStorage.getItem('ds-workspace-node-data'))
    const localDatabaseNodeData = JSON.parse(localStorage.getItem('ds-database-node-data'))
    const localDatabaseNodeContentData = JSON.parse(localStorage.getItem('ds-database-node-content-data'))

    const contextSaved = {
        app: defaultContext.app,
        userData: localUserData != null ? localUserData : defaultContext.userData,
        workspaceData: localWorkspaceNodeData != null ? localWorkspaceNodeData : defaultContext.workspaceData,
        databaseNodeData: localDatabaseNodeData != null ? localDatabaseNodeData : defaultContext.databaseNodeData,
        databaseNodeContentSchemaData: localDatabaseNodeContentData != null ? localDatabaseNodeContentData : defaultContext.databaseNodeContentSchemaData
    }

    const [context, updateReactContext] = React.useState(contextSaved);

    const setContext = (newContext) => {

        // * Updates React Context

        updateReactContext(newContext)

        // * Updates Local Context storage

        localStorage.setItem('ds-user-data', JSON.stringify(newContext.userData))
        localStorage.setItem('ds-workspace-node-context-data', JSON.stringify(newContext.workspaceData))
        localStorage.setItem('ds-database-node-data', JSON.stringify(newContext.databaseNodeData))
        localStorage.setItem('ds-database-node-content-data', JSON.stringify(newContext.databaseNodeContentSchemaData))
    }

    const setDefaultContext = () => {

        setContext(defaultContext)

        localStorage.removeItem('ds-user-data')
        localStorage.removeItem('ds-workspace-node-context-data')
        localStorage.removeItem('ds-database-node-data')
        localStorage.removeItem('ds-database-node-content-data')

    }

    return (

        <AppContext.Provider value={{ context, setContext, setDefaultContext }}>

            {props.children}

        </AppContext.Provider>

    )

}

export { AppContext, AppProvider }