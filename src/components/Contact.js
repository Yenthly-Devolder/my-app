export default function Contact() {
  return (
    <div className="contact-section">
      <div className="contact-container">
        <div className="contact-icons">
          <img src="./icon _instagram_.png"></img>
          <img src="./icon _whatsapp_.png"></img>
        </div>
        <div className="contact-form">
          <form>
            <h1>CONTACT</h1>
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
              Enter text here...
            </textarea>
            <input type="submit" value="Submit"></input>
          </form>
        </div>
      </div>
    </div>
  );
}
