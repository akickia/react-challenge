import { useState } from "react"

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const sentMessage = `Hi, ${name}! Thank you for your message: 
    ${message}.
    I will get back to you at ${email}`
  const handleSubmit = (e) => {
    e.preventDefault();
    return {sentMessage}
  }

  return (
  <>
  <form>
    <input onChange={(e) => setName(e.target.value)} type="text" id="name" name="name" value={name} placeholder="Your Name" />
    <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" value={email} placeholder="Your Email" />
    <input onChange={(e) => setMessage(e.target.value)} type="text" name="message" id="message" value={message} placeholder="Your message" />
    <button className="form-btn btn" type="submit" onClick={handleSubmit}>SEND MESSAGE</button>              
  </form>
  <div>{sentMessage}</div>
  </>
  )
}

export default Form