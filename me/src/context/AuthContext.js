import { createContext, useContext, useState } from "react";


const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [auth, setAuth] = useState(false)

    const login = (e) => {
        setUser(e)
        setAuth(true)
        localStorage.setItem("auth", "true")
        localStorage.setItem("currentUser", JSON.stringify(user))
    }

    const logOut = () => {
        setUser(null)
        setAuth(false)
        localStorage.setItem("auth", false)
        localStorage.removeItem("currentUser")
    }
    return(
        <AuthContext.Provider value={{login, logOut, auth}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)