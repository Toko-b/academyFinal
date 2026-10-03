import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null)
    const [auth, setAuth] = useState(false)

    const login = (e) => {
        setUser(e)
        setAuth(true)
        localStorage.setItem("user", e)
        localStorage.setItem("auth", "true")
    }
    const logOut = () => {
        setUser(null)
        setAuth(false)
        localStorage.removeItem(user)
        localStorage.removeItem(auth)
    }
    return(
        <AuthContext.Provider value={{login, logOut, auth}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);