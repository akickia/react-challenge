import colorsImg from "../images/colors.png";
import me2Img from "../images/jag2.jpg";
import ReadMore from "./ReadMore";
import ReadMore2 from "./Readmore2";
import ReadMore3 from "./Readmore3";
import { useState } from "react";
import List from "./List";

const About = () => {
  const myInterest = [
    {interest: "My family"},
    {interest: "Equality"},
    {interest: "Jigsaw-puzzels"},
    {interest: "Walks in nature"},
    {interest: "Learning new things"},
    {interest: "Music"},
    {interest: "Strawberries"},
    {interest: "Spring"},
    {interest: "Coffee!"},
  ]

  const noInterest = [
    {noInt: "Injustice"},
    {noInt: "Mushrooms (eating them - looking for them in the forest is nice!)"},
    {noInt: "Intolerance"},
    {noInt: "Winter"},
    {noInt: "Spiders"},
    {noInt: "Phone calls"},
    {noInt: "Wasps"},
  ]
  const [firstList, SetFirstList] = useState(myInterest)
  const [secondList, SetSecondList] = useState(noInterest)

  
  return (
    <div className="container">
      <h1>About me</h1>
      <div className="card section__facts">
        <div className="section__facts-content">
          <h2>Facts</h2>
          <p><u>Name:</u> Kicki Lindstrand</p>
          <p><u>Age:</u> 40 years old</p>
          <p><u>Location:</u> Eskilstuna, Sweden</p>
          <p><u>Status:</u> Married to Martin since 2016</p>
          <p><u>Children:</u> Ronja - 12 years, Lukas - 9 years and Ebba - 5 years old</p>
        </div>
        <div className="section__facts-img">
          <img className="img" src={me2Img} alt="Kicki" />
        </div>
      </div>
      
      <div className="section__fun-fact about">
        <div className="card fun-fact">
          <h2>I like </h2>
          <ul>
        {firstList.map((n, i) => {
          return (
            <List key={i} interest={n.interest} />
          )
        }) 
      }
          </ul>
        </div>
        <div className="card fun-fact">
          <h2>I don't like </h2>
          <ul>
          {secondList.map((n, i) => {
          return (
            <List key={i} noInt={n.noInt} />
          )
        }) 
      }
          </ul>
        </div>
      </div>

      <img className="img" src={colorsImg} alt="different colors" />
      
      <div className="section__more about">
        <ReadMore />
        <ReadMore2 />
        
      </div> 
      <div className="section__more about">
          <ReadMore3 />
      </div>
      <div className="section__qualities about">
        <div className="card qual qualities-1">
          <h2>Pros</h2>
          <ul>
            <li>Ambitious</li>
            <li>Fast learner</li>
            <li>Problem solver</li>
            <li>Curious</li>
            <li>Flexible</li>
            <li>Stable and has life-experience</li>
            <li>Not afraid to take the lead in groups</li>
          </ul>
        </div>
        <div className="card qual qualities-2">
          <h2>Cons</h2>
          <ul>
            <li>Beginner</li>
            <li>Non-experienced in the field</li>
            <li>Needs hybrid or remote work</li>
          </ul>
        </div>
        <div className="card qual qualities-3">
          <h2>Skills</h2>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>Basics in React and Python</li>
            <li>Git and Github</li>
            <li>Can present in front of others</li>
            <li>Service-minded</li>
            <li>Works well both in groups and individually</li>
          </ul>
        </div>
      </div>
      <img className="img" src={colorsImg} alt="different colors" />
    </div>  )
}

export default About