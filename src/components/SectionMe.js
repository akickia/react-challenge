import notebook from "../images/notebook.jpg"
import ImgMe from "../images/jag.jpg"
import {Link} from "react-router-dom";
import Button from "./Button"

const SectionMe = () => {
  return (
    <div className="card section__me" 
    style={{
      backgroundImage: `url(${notebook})`,
      backgroundSize: "cover",
      borderRadius: "1%",
      }}>
        <div className="me-content" >
          <h2>Who am I?</h2>
          <p> I'm a problem solving, curious, ambitious and service-minded middle-aged woman with both feet on the ground. 
              I take great interest in education, relations and equality. I worked as a preschool teacher from 2011 to 2022, being responsible for leading my team in practical and pedagogic issues.
              In my professional role I was a mentor for students and for newly examinated preschool teachers in my community. 
          </p>
          <div class="me-content-img">
            <img src={ImgMe} className="img img-me" alt="Kicki" />
          </div>
          <p>I started learn how to program in late 2021 and I've recenly completed an intensive course to become a front end developer.</p>
          <Link to="/about"><Button name="Klick here for more info about me"></Button></Link>
        </div>
    </div>
  
    
    
    
    
  )
}

export default SectionMe