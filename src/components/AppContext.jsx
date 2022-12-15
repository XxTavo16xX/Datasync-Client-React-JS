import { createContext } from "react";

const AppContext = createContext()

export function AppContextProvider({children}) {
    return (
        <AppContext.Provider value={{currenViewSelected:'Dashboard'}}>{children}</AppContext.Provider>
    )
}

export default AppContext