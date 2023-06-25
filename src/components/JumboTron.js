import NavBar from "./Navbar";
import Fade from "react-reveal/Fade";

export default function JumboTron() {
  return (
    <div className="jumboTron" id="home">
      <NavBar />
      <div className="jumboTron-text">
        <Fade bottom distance="100%" duration={1000}>
          <h1>Yenthly Devolder</h1>
        </Fade>
        <Fade bottom distance="800%" duration={1000}>
          <h2>Full-stack developer & student</h2>
        </Fade>
      </div>
    </div>
  );
}
