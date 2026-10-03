import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState("");
  const [fetched, setFetched] = useState(false);
  const [error, setError] = useState("")

  const submitHandler = (event) => {
    event.preventDefault();
    setError("")
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c0367418149c5f85a2769f3873ba154d&units=metric`,
    )
      .then((res) => res.json())
      .then((data) => {
        if(data.cod !== 200){
          setError("City not found");
          setFetched(false);
          return;
        }
        setData(data);
        setFetched(true)
      });

  setCity("");
  };

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <label>Enter city name:</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </form>
      {error && <h1>{error}</h1>}
      {fetched && (
        <div>
          <h3>Location: {data?.name}</h3>
          <p>Temperature, Celsius: {data?.main?.temp}</p>
          <p>Wind speed kph: {data?.wind?.speed * 3.6}</p>
        </div>
      )}
    </div>
  );
}

export default App;
