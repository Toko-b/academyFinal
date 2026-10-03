import { useTheme } from "./component/ThemeContext";
import { texts } from "./libs/data";


function App() {
  const {language, changeHandler} = useTheme()
  const current = texts[language]
  return (
    <div className="App">
      <button onClick={changeHandler}>Change language</button>
      <h3>{current.title}</h3>
      <p>{current.text}</p>
    </div>
  );
}

export default App;