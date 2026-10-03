import { useEffect, useState } from "react";

function UseEffect() {
  let [x, setX] = useState(0);
  let [y, setY] = useState(false);

  useEffect(() => {
    if(x === 5){
        setY(true)
    }else{
        setY(false)
    }
  }, [x]);
  return (
    <div>
      UseEffect
      <button disabled={y} onClick={() => setX(x + 1)}>first Click</button>
      {
        y ? <p>You clicked 5 times</p> : <div>{x}</div>
      }
    </div>
  );
}

export default UseEffect;
