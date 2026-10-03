import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function SinglePost() {
    const {id} = useParams()
    const [currentData, setCurrentData] = useState({})
    console.log(id)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((data) => setCurrentData(data))
    }, [])
  return (
    <div>
        SinglePost
        
        <h2>{currentData.title}</h2>    
        <p>{currentData.body}</p>
    </div>
  )
}
