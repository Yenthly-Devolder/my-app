import Fade from 'react-reveal/Fade';

export default function About() {
    return(
        
        <div className="about-section" id="about">
            <Fade right>
            <div className="about-container">
                <div className="about-text">
                    <h2>
                     ABOUT ME 
                    </h2>
                    <p>
                    Glad you’re reading this !<br></br>
                    My name is Yenthly, I am a 20 year<br></br>
                    old student from Flanders, Belgium.<br></br>
                    <br></br>
                    Currently I am in my second year<br></br>
                    of a bachelor in applied computer<br></br>
                    science @<a href="https://www.hogent.be/en/" target="_blank">HOGENT</a><br></br>
                    <br></br>
                    I have a technical secondary<br></br>
                    education degree in Multimedia.<br></br>
                    <br></br>
                    Interests: piano, music, geography and space!
                    </p>
                </div>
                <img src="../ant2.jpg" alt="photo of me"></img>
            </div>
            </Fade>
            
        </div>
    )
}