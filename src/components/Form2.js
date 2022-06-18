import { useState } from "react";

const Form2 = () => {
  const [inputData, setInputData] = useState({
    YourName: "",
    Mail: "",
    message: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputData ({...inputData, [name]: value})
  }

  const [userInput, setUserInput] = useState([]);
    
  const handleSubmit = (e) => {
    e.preventDefault();

    const newInput = {
      ...inputData,
    }

    setUserInput ([...userInput, newInput])
    
    setInputData ({
      YourName: "",
      Mail: "",
      message: "",
    })
   }
  
  return (
  <>
  <form onSubmit={handleSubmit} method="POST" data-netlify="true" data-netlify-recaptcha="true">
    <input onChange={handleChange} type="text" id="Yourname" name="YourName" value={inputData.YourName} placeholder="Your Name" />
    <input onChange={handleChange} type="email" id="Mail" name="Mail" value={inputData.Mail} placeholder="Your Email" />
    <input onChange={handleChange} type="text" name="message" id="message" value={inputData.message} placeholder="Your message" />
    <button className="form-btn btn" type="submit" >SEND MESSAGE</button> 
    <div data-netlify-recaptcha="true"></div>             
  </form>
  {userInput.map((user, i) => {
    const {YourName, Mail, message} = user;
    return (
      <div className="submitMessage" key={i}>
      <p>Thank you, {YourName} for your message.  </p>
      <p>I will get back to you at: {Mail}</p>
      <p>Your message: {message}</p>
      </div>)
  })}
  </>
  )
}

export default Form2