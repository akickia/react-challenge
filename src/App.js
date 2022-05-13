import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";



function App() {
  return (
    <div className="wrap">
      <Header/>
      <div className="container">
      
      <Home />
      <Button />
      
      </div>
      <Footer />
    </div>
  );
}

export default App;
