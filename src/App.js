import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import FunFact from "./components/FunFact";
import Introduction from "./components/Introduction";
import Portofolio from "./components/Portofolio";

function App() {
  return (
    <div className="App">
      <section className="App-page-one">
        <Introduction />
      </section>
      <section className="App-page-two">
        <About />
      </section>
      <section className="App-page-three">
        <FunFact />
      </section>
      <section className="App-page-four">
        <Portofolio />
      </section>
      <section className="App-page-five">
        <Contact />
      </section>
    </div>
  );
}

export default App;
