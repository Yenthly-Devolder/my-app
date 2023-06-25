import Fade from "react-reveal/Fade";
import JS from "../images/Javascript_Logo.png"
export default function () {
  return (
    <div className="skills-section" id="skills">
      <Fade right>
      <div className="skills-container">
        <h2>SKILLS</h2>
        <table>
          <tr>
            <Fade right>
              <td >
                <img src={JS} alt="java-icon"></img>
                <h3>Java</h3>
              </td>
            </Fade>
            <Fade right>
              <td>
                <img src={JS} alt="ico"></img>
                <h3>MySQL</h3>
              </td>
            </Fade>
            <Fade right>
              <td>
                <img src={JS} alt="java-icon"></img>
                <h3>JavaScript</h3>
              </td>
            </Fade>
            <Fade right>
              <td>
                <img src={JS} alt="java-icon"></img>
                <h3>HTML</h3>
              </td>
            </Fade>
          </tr>
          <tr>
            <Fade right>
              <td>
                <img src={JS} alt="java-icon"></img>
                <h3>CSS</h3>
              </td>
            </Fade>
            <Fade right>
              <td>
                <img src={JS} alt="ico"></img>
                <h3>React</h3>
              </td>
            </Fade>
            <Fade right>
              <td>
                <img src={JS} alt="java-icon"></img>
                <h3>JavaFX</h3>
              </td>
            </Fade>
            <Fade right>
              <td>
                <img src={JS} alt="java-icon"></img>
                <h3>Python</h3>
              </td>
            </Fade>
          </tr>
          <tr>
            <Fade right>
              <td>
                <img src={JS} alt="java-icon"></img>
                <h3>Figma</h3>
              </td>
            </Fade>
            <Fade right>
              <td>
                <img src={JS} alt="ico"></img>
                <h3>Git</h3>
              </td>
            </Fade>
            <Fade right>
              <td>
                <img src={JS} alt="java-icon"></img>
                <h3>Bootstrap</h3>
              </td>
            </Fade>
            <Fade right>
              <td>
                <img src={JS} alt="java-icon"></img>
                <h3></h3>
              </td>
            </Fade>
          </tr>
        </table>
      </div>
      </Fade>
    </div>
  );
}