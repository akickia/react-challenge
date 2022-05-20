import SectionMe from './SectionMe';
import strongWoman from "../images/strong-woman.jpg";
import ExtButton from './ExternalButton';


const Home = () => {
  return (
    <div className='container'>
      <div className="card section-welcome">
        <h1>Welcome!</h1>
        <p>My name is Kicki Lindstrand and I'm a junior frontend developer. I love learning new things and this is my portfolio.</p>
      </div>
      <SectionMe />
    
      <img className="img-small woman" src={strongWoman} alt="strong woman" />
      
      <div class="card section__edu">
        <div>
          <h2>Education</h2>
          <p>I'm currently studying <b>IT:Tech for women</b> at Sundsgårdens folkhögskola. This is an intensive course for becoming a frontend developer working with HTML, CSS, JavaScript, agile working methods and libraries like Bootstrap and React.</p>
          <p><small className="small-text">Press the button to checkout Sundgårdens webbpage in a new window.</small></p>
          <ExtButton name="IT:Tech for women" link="https://sundsgarden.se/utbildningar-kurser/langa-kurser/yrkesutbildningar/it-tech-for-women/"></ExtButton>
        </div>
      </div>
      
      
    
  </div>
  )
}

export default Home