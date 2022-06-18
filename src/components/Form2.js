import { useState } from "react";

const Form2 = () => {
  

  
  return (
  <>

  <form name="contact" method="POST">
  <input type="hidden" name="form-name" value="contact" />
    <input type="text" id="Yourname" name="YourName" placeholder="Your Name" />
    <input type="email" id="Mail" name="Mail" placeholder="Your Email" />
    <input type="text" name="message" id="message"  placeholder="Your message" />
    <button className="form-btn btn" type="submit" >SEND MESSAGE</button> 
         
  </form>
  
  </>
  )
}

export default Form2