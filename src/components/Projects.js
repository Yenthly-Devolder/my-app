import Fade from 'react-reveal/Fade';
import Chessnest from '../images/chessnest.png'
export default function Projects() {
  return (
    <div className="projects-section" id="projects">
      <Fade right>
      <div className="projects-container">
        <h2>PROJECTS</h2>
        <div className="projects-list">
          <Fade right>
          <div className="project">
            <a href="https://yenthly.github.io/chessnest/">
           
              <img src={Chessnest} alt="chessnest-website"></img>
              
              <h3>Chessnest</h3>

              <p>
                Website for a conceptional<br></br>
                chess organisation that gives<br></br>
                chess courses and organises<br></br>
                championships.
              </p>
            </a>
          </div>
          </Fade>
        </div>
      </div>
      </Fade>
    </div>
  );
}
