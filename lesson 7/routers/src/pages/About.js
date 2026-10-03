import { use, useEffect, useState } from "react";
import { Link } from "react-router";

const About = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (<div>
    
    
    
    About
    
    {data.map((value)=> {
        return(
            <div>
                <h1>{value.title}</h1>
                <Link to={`/post/${value.id}`}>Read More</Link>
            </div>
        )
    })}
    
    </div>)
};

export default About;
