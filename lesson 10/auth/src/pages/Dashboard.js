import React from 'react'
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../context/Authcontext'

export default function Dashboard() {
    const {logout} = useAuth()
    const navigate = useNavigate()

    const LogoutHandler = () => {
        logout()
        navigate('/')
    }
  return (
    <div>Dashboard

        <button type='button' onClick={LogoutHandler}>

        </button>
    </div>
  )
}
