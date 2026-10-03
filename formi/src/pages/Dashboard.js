import React from 'react'
import { useAuth } from '../compo/AuthContext'
import { useNavigate } from 'react-router'

function Dashboard() {
    const {logOut} = useAuth()
    const navigate = useNavigate()
    const logOutHandler = () => {
        navigate("/")
        logOut()
    }
  return (
    <div>
        <h1>Dashboard</h1>
        <button onClick={logOutHandler}>log Out</button>
    </div>
  )
}

export default Dashboard