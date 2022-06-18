import ExtButton from "./ExternalButton"
import ContImg from "../images/silhouette.png"
import strongWoman from "../images/strong-woman.jpg"


const Contact = () => {


  return (
    
    <div className="container">
        <h1 id="contactStart">Contact</h1>
        <img className="img-small" src={ContImg} alt="man and woman working" />
        <div className="card section__contact" id="contact-form">
          <h4><u>To get in touch with me: </u></h4>
          <div>
          <p>Please visit my portfolio...</p>
          <ExtButton name="Kickis Portfolio" link="https://akickia.netlify.app/" />
          </div>
          <img className="img-small woman" src={strongWoman} alt="strong woman" style={{maxWidth: "50%"}} />
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