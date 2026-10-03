import { createContext, useContext, useEffect, useState } from "react";


const Authcontext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [auth, setAuth] = useState(false)
    useEffect(() => {
        const storedUser = localStorage.getItem("currentUser")
        const storedAuth = localStorage.getItem("auth")

        if(storedAuth === "true" && storedUser){
            setAuth(true)
            setUser(JSON.parse(storedAuth))
        }
    }, [])
    const login = (e) => {
        setAuth(true)
        setUser(e)
        localStorage.setItem("auth", "true")
        localStorage.setItem("currentUser", JSON.stringify(e))
    }
    const logout = () => {
        setAuth(false)
        setUser(null)
        localStorage.removeItem("auth")
        localStorage.removeItem("currentUser")
    }
    return(
        <Authcontext.Provider value={{login, logout, auth}}>
            {children}
        </Authcontext.Provider>
    )
}

export const useAuth = () => {
    return useContext(Authcontext)
}