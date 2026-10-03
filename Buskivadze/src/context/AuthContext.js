import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    }, [])

    const login = () => {
        setAuth(true)
    }
    const logOut = () => {
        setAuth(false)
    }
    return(
        <AuthContext.Provider value={{login, logOut, auth, loading}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)