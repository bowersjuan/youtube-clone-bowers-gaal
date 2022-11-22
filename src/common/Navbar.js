import { Link } from "react-router-dom";
import logo1 from "../assets/youtube-clone-logo.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar">
      {/* <h1 className="header">YouTube Clone</h1> */}
      <img className="logo" src={logo1} alt="YouClone" />
      <Link id="home" to="/">
        Home
      </Link>{" "}
      <Link id="about" to="/about">
        About
      </Link>
    </div>
  );
}
