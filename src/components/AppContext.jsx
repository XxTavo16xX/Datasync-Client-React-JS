// * Script to set context with React:

import React from 'react';

const AppContext = React.createContext();

const AppProvider = (props) => {

    const [globalContext, setGlobalContext] = React.useState({
        currentViewToDisplay: 'Dashboard',
        currentDatabaseCollectionSelected: 'Ordenes',
        isNewOrderFormVisible: false
    });

    return (
        <AppContext.Provider value={{ globalContext, setGlobalContext }}>
            {props.children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };