import "./App.css";

import JumboTron from "./components/JumboTron";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <JumboTron />
      <About />
      <Projects />
      <About />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
