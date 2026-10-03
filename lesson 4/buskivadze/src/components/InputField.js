import { useState } from "react"

const InputFiled = ({PostObj}) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [lector, setLector] = useState("")

    const titleHandler =(e)=>{
        setTitle(e.target.value)
    }

    const descHandler =(e)=>{
        setDesc(e.target.value)
    }

    const lectorHandler =(e)=>{
        setLector(e.target.value)
    }

    const SubmitHandler = (e) =>{
        e.preventDefault()    
        const obj = {
            title: title,
            desc: desc,
            lector: lector
        }
        PostObj(obj)
        setDesc("")
        setLector("")
        setTitle("") 
    }

    return(
        <form onSubmit={SubmitHandler}>
            <input type="text" value={title} onChange={titleHandler} placeholder="Enter Course Title"/>
            <input type="text" value={desc} onChange={descHandler} placeholder="Enter Course Description"/>
            <input type="text" value={lector} onChange={lectorHandler} placeholder="Enter Lector Name"/>
            <button type="submit">add</button>
        </form>
    )
}

export default InputFiled;