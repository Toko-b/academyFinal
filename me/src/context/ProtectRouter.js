import { Navigate, Outlet } from "react-router";
import React from 'react'
import { useAuth } from "./AuthContext";

function ProtectRouter() {
    const {auth} = useAuth()
  return (
    auth ? <Outlet/> : <Navigate to="/" replace/>
  )
}

export default ProtectRouter