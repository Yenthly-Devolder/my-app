import Fade from "react-reveal/Fade";
import JS from "../images/Javascript_Logo.png"
import Java from "../images/skills/java.webp"
import MySQL from "../images/skills/mysql.png"
import Figma from "../images/skills/figma.png"
import HTML from "../images/skills/html.png"
import CSS from "../images/skills/css.png"
import Python from "../images/skills/python.png"
import Git from "../images/skills/git.png"
import Bootstrap from "../images/skills/bootstrap.png"
import React from "../images/skills/react.png"


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
              <img src={Java} alt="icon"></img>
                <h3>Java</h3> 
              </td>
            </Fade>
            <Fade right>
              <td>
                <img src={MySQL} alt="ico"></img>
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
                <img src={HTML} alt="java-icon"></img>
                <h3>HTML</h3>
              </td>
            </Fade>
          </tr>
          <tr>
            <Fade right>
              <td>
                <img src={CSS} alt="java-icon"></img>
                <h3>CSS</h3>
              </td>
            </Fade>
            <Fade right>
              <td>
                <img src={React} alt="ico"></img>
                <h3>React</h3>
              </td>
            </Fade>
            <Fade right>
              <td>
                <img src={Bootstrap} alt="java-icon"></img>
                <h3>Bootstrap</h3>
              </td>
            </Fade>
            <Fade right>
              <td>
                <img src={Python} alt="java-icon"></img>
                <h3>Python</h3>
              </td>
            </Fade>
          </tr>
          <tr>
            <Fade right>
              <td>
                <img src={Figma} alt="java-icon"></img>
                <h3>Figma</h3>
              </td>
            </Fade>
            <Fade right>
              <td>
                <img src={Git} alt="ico"></img>
                <h3>Git</h3>
              </td>
            </Fade>
            <Fade right>
              <td>
                
                <h3></h3>
              </td>
            </Fade>
            <Fade right>
              <td>
                
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