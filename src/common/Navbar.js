import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar">
      <h1 className="header">YouTube Clone</h1>
      <Link id="home" to="/">
        Home
      </Link>{" "}
      <Link id="about" to="/about">
        About
      </Link>
    </div>
  );
}
