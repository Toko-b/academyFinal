import { Children, createContext, useContext, useState } from "react";


const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [auth, setAuth] = useState(false)


    const login = (e) => {
        setUser(e)
        setAuth(true)
        localStorage.setItem("auth", "true")
        localStorage.setItem("currentuser", JSON.stringify(e))
    }
    const logout = () => {
        setUser(null)
        setAuth(false)
        localStorage.removeItem("currentUser")
        localStorage.removeItem("auth")
    }
    return(
        <AuthContext.Provider value={{login, user, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    return useContext(AuthContext)
}