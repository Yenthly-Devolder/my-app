import "./App.css";

import JumboTron from "./components/JumboTron";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";


function App() {
  return (
    <div className="App">
      <JumboTron />
      <About />
      <Projects />
      <Skills />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
