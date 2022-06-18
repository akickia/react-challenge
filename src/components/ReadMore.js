
import { useState } from "react";

const ReadMore = () => {
    
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className="card more">
      <div className={isActive ? "moreHide" : "expand"}>
          <h3>When I'm at work </h3> 
            <p> I'm very ambitious in my work and take it seriously. I'm good at structure, organizing and seeing the big picture. I'm a quick learner and if I don't know the answer I will find a way to solve the problem. 
                As a preeschool teacher I'm used to reflect about my actions and achievements in order to improve. 
                I find relations and communication very interesting and have spent a lot of time studying this to make sure my messages are always clear, directed to the right receiver and are understood correctly. I'm also very good at 
                expressing myself in writing. This goes mainly for my first language Swedish, but I'm actively working on my English skills. 
            </p>
            <p> Equality has always been important to me. I've worked a lot with bringing awareness about discrimination against people on the basis of for instance gender, religion, etnicity or sexual orientation. 
                In my opinion, diversity makes us grow and I'm always open to meet new people. 
            </p>
            <p> I've been a mentor for students from the University since 2017 and in 2019 I started to mentor new colleagues in Eskilstuna in an extended introduction program together with three other experienced preschool teachers. 
                I have held lectures during the introduction and in other work-meetings about for instance group dynamics, systematic quality work and LGBTQ (HBTQ).
            </p>
            <p> I will never regret all the experience and the wonderful relationships I've been able to be a part of during my years in preeschool, but now it's time to find new roads ahead! 
            </p>
          </div>
          <div className="readMore">
          <p onClick={handleToggle}>Click to expand or hide</p>
          </div>
        </div>
    
  );
}
 


export default ReadMore

