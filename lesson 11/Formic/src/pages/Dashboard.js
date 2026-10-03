import React from 'react'
import { useAuth } from '../components/AuthContext'
import { useNavigate } from 'react-router'

function Dashboard() {
    const {logout} = useAuth()
    const navigate = useNavigate()
    const logoutHandler = () => {
        logout()
        navigate("/")
    }
  return (
    <div>
        <button onClick={logoutHandler}>Log out</button>
    </div>
  )
}

export default Dashboard