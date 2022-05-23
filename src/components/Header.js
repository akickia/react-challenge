import {Link} from "react-router-dom";

const Header = () => {
  return (
    <>
    <header className="header">
      <div className="container">
      <h3><Link to="/about">About</Link></h3>
      <div className="homelink" style={{textAlign: "center", lineHeight: 0.5}}><h1><Link to="/">Kicki Lindstrand</Link></h1><p>Front end developer</p></div>
      <h3><Link to="/contact#contactStart">Contact</Link></h3>
      </div>
    </header>
  </>
  )
}

export default Header