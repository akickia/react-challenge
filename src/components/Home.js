import SectionMe from './SectionMe';
import strongWoman from "../images/strong-woman.jpg";
import ExtButton from './ExternalButton';


const Home = () => {
  return (
    <div className='container'>
      <div className="card section-welcome">
        <h1>Welcome!</h1>
        <p>My name is Kicki Lindstrand and I'm a junior frontend developer. I love learning new things and this is parts of my portfolio created with React.</p>
        <p>To visit my original portfolio - press <a href="https://akickia.netlify.app" target="_blank"><u>HERE</u></a></p>
      </div>
      <SectionMe />
    
      <img className="img-small woman" src={strongWoman} alt="strong woman" />
      
      <div className="card section__edu">
        <div>
          <h2>Education</h2>
          <p>I've recently completed the course <b>IT:Tech for women</b> at Sundsgårdens folkhögskola. This is an intensive education for becoming a frontend developer working with HTML, CSS, JavaScript, agile working methods and libraries/frameworks like Bootstrap and React.</p>
          <p><small className="small-text">Press the button to checkout Sundgårdens webbpage in a new window.</small></p>
          <ExtButton name="IT:Tech for women" link="https://sundsgarden.se/utbildningar-kurser/langa-kurser/yrkesutbildningar/it-tech-for-women/"></ExtButton>
        </div>
      </div>
  </div>
  )
}

export default Home