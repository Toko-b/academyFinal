import Header from "./components/Header"
import Team from "./components/Team";
import News from "./components/News";

function App() {
  return (
    <div className="w-full h-dvh bg-amber-600">
      <Header/>

      <Team/>

      <News/>
    </div>
  );
}

export default App;
