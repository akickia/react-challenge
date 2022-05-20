
import { useState } from "react";
import binary from "../images/binary.png"

const ReadMore3 = () => {
    
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className="card more">
      <div className={isActive ? "moreHide" : "expand"}>
      <h3>Why I'm coding</h3>
          <p> In September 2021 I took the hard decision to leave preeschool, due to the amount of stress the workload was causing me. I had no idea what to do instead and looked into different options. My husband, Martin, works in cyber security and he suggested that I should look into coding since I'm a fast learner, logical and structured. 
              I thought he was nuts. I had no experience and felt like I didn't understand anything about computers, even if I've always been a frequent and interested user and used digital tools a lot at work. I started searching for information online, asking Martin all kinds of questions I could think of, and took a few online classes. 
              I got a bit used to the thought that coding might acctually be someting that could suit me very well! 
          </p>
          <p> In the winter 2021 I gathered a lot of knowledge and facts, and in January 2022 I took a leave from work to attend the intense course "IT: Tech for women" that is a frontend education for women and non-binary. I've also recently finnished "programing 1" through Hermods. 
          </p>
          <p> Of course I'm still a beginner, but by now I've learned the basics of CSS and HTML, Python and JavaScript. I know how to use Sass, SEO, Figma, Git and Github amongs other things. I have recently started to learn React. 
          </p>
          <p> Besides from this education I've attended courses online covering JavaScript, Python and HTML/CSS.
          </p>
          <p> I know that I have <b>SOOO</b> much left to learn, but I'm starting to get a sense of how this works, get a lot of credit from my teacher that I'm getting the hang of this fast, and I hope to land an internship, a spot in a trainee program or a junior position anytime soon. In the meantime I'll keep studying and learning new things.
          </p>
          <p><b> Please let me know if I can be of interest for your company. </b></p><p><b>I'm also constantly working on my portfolio, so if you need help making or remaking a smaller webbsite - send me an email.</b></p>
          <img src={binary} className="img" alt="Code" />
          </div>
          <div className="readMore">
          <p onClick={handleToggle}>Click to expand or hide</p>
          </div>
          
        </div>
    
  );
}
 


export default ReadMore3