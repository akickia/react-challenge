import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";



function App() {
  return (
    <div className="wrap">
      <Header/>
      <div className="container">
      <Home />
      </div>
      <div className="container">
      <About />
      </div>
      <div className="container">
      <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
