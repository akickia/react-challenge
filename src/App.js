import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react"
import Modal from "./components/Modal"



function App() {
  const [show, setShow] = useState(false)
  return (
    <BrowserRouter>
      <div>
        <Header/>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          </Routes>
      </div>
      <div style={{
        margin: "4%",
        textAlign: "center",
      }}>
        <Modal
          activator={({ setShow }) => (
            <button
              style={{backgroundColor: "lightgray", fontWeight: "600", padding: "2% 9%", color: "black", letterSpacing: "0.3rem"}}
              onClick={() => setShow(true)}
            >
              CLICK ME, PLEASE!
            </button>
          )}
        >
        THANK YOU!
        </Modal></div>
      <div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
