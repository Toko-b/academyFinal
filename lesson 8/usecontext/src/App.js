import Header from "./components/Header";
import { useTheme } from "./components/ThemeContext";
import Main from "./components/Main";

function App() {
  const {theme} = useTheme()
  console.log(theme)
  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
