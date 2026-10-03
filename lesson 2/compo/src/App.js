import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Posts from "./components/Posts.js"

function App() {
  return (
    <div className="App">
      <Header/>
      <hr/>

      <Posts/>

      <hr/>
      <Footer/> 
    </div>
  );
}

export default App;
