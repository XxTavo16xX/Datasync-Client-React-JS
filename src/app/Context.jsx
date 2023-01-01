// * Global App Context - UPI ( User Public Info ) and app context will be saved here

// * Dependencies Required

import React from 'react';

// * Creating context

const AppContext = React.createContext();

const defaultContext = {
    app: {
        app_name: 'Datasync',
        current_view: 'Dashboard',
        workspace: 'Copinsa',
        database: {
            default_collectino: 'Ordenes',
            save_element_form_is_displayed: false
        }
    },
    user: {
        is_session_created: false,
        user_name: '',
        user_profile_photo_url: '/src/assets/images/defaultUser.png',
        user_gender: 'M'
    }
}

const AppProvider = (props) => {

    // * Setting default context

    // ! Must improve context by saving it into the local Storage, in case there´s no data must set the default context

    const [context, setContext] = React.useState(defaultContext);

    return (
        <AppContext.Provider value={{ context, setContext }}>

            { props.children }

        </AppContext.Provider>
    )

}

export { AppContext, AppProvider }