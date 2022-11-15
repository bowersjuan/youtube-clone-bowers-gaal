import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar">
      <h1 className="header">YouTube Clone</h1>
      <Link to="/">Home</Link> <Link to="/about">About</Link>
    </div>
  );
}
