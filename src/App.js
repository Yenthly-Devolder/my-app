import "./App.css";

import JumboTron from "./components/JumboTron";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";


function App() {
  return (
    <div className="App">
      <JumboTron />
      <About />
      <Projects />
      <Contact/>
    </div>
  );
}

export default App;
