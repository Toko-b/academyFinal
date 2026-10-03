import { useState } from "react"
import InputField from "./InputField"

function Posts() {
    const [post, setPost] = useState({})

    const ReceiveInfo=(data)=>{
        setPost(data)
    }

    return(
        <div>
            Post

            <InputField PostObj={ReceiveInfo}/>

            <div>
                <h2>{post.title}</h2>
                <p>{post.desc}</p>
            </div>
        </div>
    )
}

export default Posts;