import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { useAuth } from './AuthContext'

function ProtectedRoute() {
    const {auth} = useAuth()
  return auth ? <Outlet/> : <Navigate to="/" replace/>
}

export default ProtectedRoute;