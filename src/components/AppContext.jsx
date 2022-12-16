// * Script to set context with React:

import React from 'react';

const AppContext = React.createContext();

const AppProvider = (props) => {

    const [globalContext, setGlobalContext] = React.useState({
        currentViewToDisplay: 'Base de datos',
        currentDatabaseSelected: 'Ordenes'
    });

    return (
        <AppContext.Provider value={{ globalContext, setGlobalContext }}>
            {props.children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };