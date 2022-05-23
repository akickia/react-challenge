import { Link } from "react-router-dom";
import ExtButton from "./ExternalButton";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
          <div className="foot">
          <h3><Link to="/contact#contactStart">Contact</Link></h3>
          </div>

        <div className="foot social-links">
        <ExtButton name="Linkedin" link="http://www.linkedin.com/in/kicki-lindstrand"></ExtButton>
        <ExtButton name="Instagram" link="https://instagram.com/akickias_hemsidor/"></ExtButton>
        <ExtButton name="Github" link="https://github.com/akickia/"></ExtButton>
        </div>
        <div className="foot">
            <p className="small-text">Made by akickia</p>
          </div>
      </div>
    </footer>
  )
}

export default Footer