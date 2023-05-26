
// * Variables Required

let appContext, setAppContext
let sessionContext, setSessionContext
let useNavigate

// * This function will be launched after the component is mounted

export const onComponentMounted = ( appContextValues, sessionContextValues, useNavigateFunction ) => {
    
    // * Setting Values Required

    appContext = appContextValues.value
    setAppContext = appContextValues.updateFunction

    sessionContext = sessionContextValues.value
    setSessionContext = sessionContextValues.updateFunction
    
    useNavigate = useNavigateFunction
    
    // * Validating User Session
    
    console.log(sessionContext.token);
    if (sessionContext.token != '') return useNavigate('/app')

}
