// * Global App Context - UPI ( User Public Info ) and app context will be saved here

// * Dependencies Required

import React from 'react';

// * Creating context

const AppContext = React.createContext();

const defaultContext = {
    app: {
        app_name: 'Datasync',
        current_view: 'Calendario',
        workspace: 'Personal',
        database: {
            default_collection: 'Ordenes',
            save_element_form_is_displayed: false
        },
        safetybox: {
            password_generator_is_displayed: true,
            password_generator_save_password: false
        }
    },
    user: {
        is_session_created: true,
        user_name: '',
        user_profile_photo_url: '/src/assets/images/defaultUser.png',
        user_gender: 'M'
    }
}

const AppProvider = (props) => {

    // * Getting context from LocalStorage

    const localContext = localStorage.getItem('localContext')

    // * In case there´s no context app saved into the localStorage the defaultContext will be returned

    if (!localContext) {

        const [context, setContext] = React.useState(defaultContext);

        return (
            <AppContext.Provider value={{ context, setContext }}>

                {props.children}

            </AppContext.Provider>
        )

    }

    // * Setting default context

    // ! Must improve context by saving it into the local Storage, in case there´s no data must set the default context



}

export { AppContext, AppProvider }