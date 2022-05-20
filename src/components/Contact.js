import ExtButton from "./ExternalButton"
import ContImg from "../images/silhouette.png"



const Contact = () => {
  
  return (
    
    <div className="container">
        <h1>Contact</h1>
        <img className="img-small" src={ContImg} alt="man and woman working" />
        <div className="card section__contact" id="contact-form">
          <h4><u>To get in touch with me: </u></h4>
          <div>
            <p>Send me an email..</p>
            <form name="contact-form">
              <input type="text" id="your-name" name="name" placeholder="Your Name" required />
              <input type="email" id="email" name="email" placeholder="Your Email" required />
              <input type="text" id="your-subject" name="subject" placeholder="Subject" />
              <input name="message" id="message" cols="30" rows="6" placeholder="Your message" required></input>
              <button className="form-btn btn" type="submit">SEND MESSAGE</button>              
            </form>
          </div>
          <div className="contact-social">
            <p>..or check me out at:</p>
            <div className="social-links">
            <ExtButton name="Linkedin" link="http://www.linkedin.com/in/kicki-lindstrand"></ExtButton>
            <ExtButton name="Instagram" link="https://instagram.com/akickias_hemsidor/"></ExtButton>
            <ExtButton name="Github" link="https://github.com/akickia/"></ExtButton>
            </div>
          </div>
        </div>
    </div>
    
  )
}

export default Contact