import Image from './binary.png';
import Button from './Button';

const Home = () => {
  return (
    <>
    
    <h1>Welcome!</h1>
      <div className="content">
        <div className="card">
          <h3>This is the first section</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, dignissimos, dolorem, tenetur veniam sed earum a dicta voluptatibus saepe excepturi quisquam. 
            Reprehenderit iusto similique explicabo atque assumenda dolor alias incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga pariatur beatae officia 
            voluptatum nemo, veritatis ad distinctio ab assumenda aliquid, quo porro soluta, ipsam iure vel voluptate. Quae, adipisci dolorum? Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Officia incidunt ratione, aliquam maxime doloremque voluptate eligendi accusantium harum vero dolores ut velit assumenda quis est omnis eaque earum 
            facilis nobis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quod sunt tempore nobis maxime harum facere error laborum, dolor repellat soluta vel? </p>
        </div>
        <div className="card">
          <h3>This is the second section</h3>
            <img className="img" src={Image} alt="binary" />
        </div>
        <div className="card">
          <h3>This is the third section</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis at accusamus quam, quos laborum eius officia reprehenderit doloribus! Temporibus deserunt sequi 
            quas nemo magni molestiae itaque pariatur. Quo, maiores totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id praesentium saepe totam voluptas ullam, dolore 
            vel placeat distinctio doloremque repellat in neque, asperiores dolorem fuga. Magni ducimus perferendis esse voluptatem? Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Officia saepe, placeat quam aut sequi aliquid dolorem, in natus magni mollitia nobis omnis eos animi dignissimos similique excepturi iste? Delectus, corporis. Lorem ipsum 
            dolor sit amet, consectetur adipisicing elit. Accusamus repellendus facere neque dolorum ipsam velit quidem repudiandae ut officia sapiente dolor amet, alias, expedita sequi? 
            Ipsum eos eius eum inventore!</p>
        </div>
      </div>
      <Button name="Click me!" link="https://akickia.netlify.app/" ></Button>
    
  </>
  )
}

export default Home