import { createContext } from "react";

const AppContext = createContext()

export function AppContextProvider({children}) {
    return (
        <AppContext.Provider value={{currenViewSelected:'Base de datos'}}>{children}</AppContext.Provider>
    )
}

export default AppContext