// Script to set context with React:

import React from 'react';

const AppContext = React.createContext();

const AppProvider = (props) => {
    const [state, setState] = React.useState({
        currentViewToDisplay: 'Dashboard',
        value2: 'another initial value',
    });

    return (
        <AppContext.Provider value={{ state, setState }}>
            {props.children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };