import React from 'react'
import { Link, useNavigate } from 'react-router'

export default function Home() {
    const navigate = useNavigate()
  return (
    <div>
        Profile
        <Link to="/about">About</Link>
        <button onClick={() => navigate("/", {replace:true})}>Log out</button>
    </div>
  )
}
