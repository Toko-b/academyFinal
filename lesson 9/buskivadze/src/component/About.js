import React from 'react'
import { Link, useNavigate } from 'react-router'

export default function About() {
  const navigate = useNavigate()
  return (
    <div>
      About
        <Link to="/home">Home</Link>
        <button onClick={() => navigate("/", {replace:true})}>Log out</button>
    </div>
  )
}
