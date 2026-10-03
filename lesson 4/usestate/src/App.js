import { useState } from "react";
import Posts from "./component/Posts";

function App() {
  const [x, setX] = useState(1);
  const [check, setCheck] = useState(false);

  const HandlerFunc = () => {

    if (x >= 5) {
      setCheck(true);
    }else{
      setX(x + 1);
    }
  };

  return (
    <div className="App">
      <button type="button" disabled={check} onClick={HandlerFunc}>
        Click
      </button>

      {!check ? <p>{x}</p> : "daimala"}

      <Posts/>
    </div>
  );
}

export default App;
