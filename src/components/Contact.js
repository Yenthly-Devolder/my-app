import Fade from 'react-reveal/Fade';
import Insta from '../images/insta.png';
import Whatsapp from '../images/whatsapp.png';

export default function Contact() {
  return (
    <div className="contact-section" id="contact">
      <Fade right>
      <div className="contact-container">
        <div className="contact-icons">
          <img src={Insta}></img>
          <img src={Whatsapp}></img>
        </div>
        <div className="contact-form">
          <form>
            <h2>CONTACT</h2>
            <label for="fname">Name</label>
            <br></br>
            <input type="text" id="fname" name="fname"></input>
            <br></br>
            <label for="email">Email</label>
            <br></br>
            <input type="email" id="email" name="email"></input>
            <br></br>
            <label for="email">Message</label>
            <br></br>
            <textarea name="comment" form="usrform">
            </textarea>
            <input type="submit" id="submit"value="Submit"></input>
          </form>
        </div>
      </div>
      </Fade>
    </div>
  );
}
