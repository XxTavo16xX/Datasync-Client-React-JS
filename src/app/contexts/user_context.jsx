
// * Dependencies Required

import { createContext, useState } from "react"

// * Creating context

const User_Context = createContext();

const default_user_context = {
    public: {
        email: '',
        displayName: '',
        profilePhotoURL: ''
    },
    defaultWorkspace: '',
    workspaceNodes: [],
    ping: 0
}

const User_Context_Provider = (props) => {

    const [userContext, setUserContext] = useState(default_user_context)    

    return (

        <User_Context.Provider value={{ userContext, setUserContext }}>

            {props.children}

        </User_Context.Provider>

    )

}

export { User_Context, User_Context_Provider }