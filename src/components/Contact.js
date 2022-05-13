import Button from "./Button"

const Contact = () => {
  return (
    <>
    
      <h1>Contact!</h1>
      <div className="content">
        <div className="form-container">
          <form className="form" action="submit">
            <label for="name">Name</label>
            <input type="text" name="name" id="name"></input>
            <label for="name">Email</label>
            <input type="email" name="email" id="email"></input>
            <label for="text">Message</label>
            <input type="text" name="text" id="text"></input>
          </form>
        </div> 
        </div>
        <Button name="Send message!" link="https://sundsgarden.se/utbildningar-kurser/langa-kurser/yrkesutbildningar/it-tech-for-women/"></Button>
      
    
  </>
  )
}

export default Contact