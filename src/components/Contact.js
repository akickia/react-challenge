import ExtButton from "./ExternalButton"
import ContImg from "../images/silhouette.png"
import Form2 from "./Form2"


const Contact = () => {


  return (
    
    <div className="container">
        <h1 id="contactStart">Contact</h1>
        <img className="img-small" src={ContImg} alt="man and woman working" />
        <div className="card section__contact" id="contact-form">
          <h4><u>To get in touch with me: </u></h4>
          <div>
            <p>Send me an email..</p>
            <Form2 />
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