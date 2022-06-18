
import { useState } from "react";

const ReadMore2 = () => {
    
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className="card more">
      <div className={isActive ? "moreHide" : "expand"}>
      <h3> When I'm at home</h3>
          <p> I have learned the importancy of recovery and mindfullness, so when I'm at home I try not to have too much on my schedule. I love to spend my time with a large jigsaw-puzzel, a crossword or playing solitaire. A good movie with the family is also very nice.
            In june 2022 our family grew as our poodle puppy Sixten moved in, and he brings us much joy and love! 
          </p>
          <p> Having three kids and a puppy, there are lots of logistics to take in consideration, and studying at home has been a great help. I can plan my hours so that I can take part in the childrens activities and even go to the gym now and then, and still have enough time to complete my assignments.
              My hopes for the future are therefore to find a remote or hybrid position as a junior frontend developer, or a job in my hometown. I have no problem traveling to for instance Stockholm or Västerås a few days a week, but I also need a few days at home to make everything work. 
          </p>
          <p> As I already mentioned, I am good at structure and organization, and that runs through my personal life as well. I'm diciplined when it comes to study or work, and I do what I'm supposed to do in my workhours. 
              I don't like to deliver work that is sloppy. I work fast and efficient but I'm also thorough and pay attention to details and clean code. 
          </p>
          <p> My family lives in a house in the outskirts of Eskilstuna. We have a caravan that we love to travel with to different locations when we are on vaccation.
          </p>
          </div>
          <div className="readMore">
          <p onClick={handleToggle}>Click to expand or hide</p>
          </div>
        </div>
    
  );
}
 


export default ReadMore2