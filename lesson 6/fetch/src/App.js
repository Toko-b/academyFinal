import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [currentPost, setCurrentPost] = useState("")
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const PopupHandler = (val) =>{
    setCurrentPost(val)
    setPopup(true)
  }
  return (
    <div className="App" style={{ display: "flex" }}>
      <div>
        {data.map((val) => {
          return (
            <div key={val.id}>
              <h2>{val.title.slice(0, 9).trim()}...</h2>
              <span onClick={() => PopupHandler(val)}>read more</span>
            </div>
          );
        })}
      </div>

      {popup && (
        <div
          className="popup"
          style={{
            boxShadow: "black 2px 4px 5px 10px",
            maxHeight: "300px",
            height: "150px",
          }}
        >
          <h2>{currentPost.title}</h2>
          <p>{currentPost.body}</p>
          <button onClick={() => setPopup(false)}>X</button>
        </div>
      )}
    </div>
  );
}

export default App;
