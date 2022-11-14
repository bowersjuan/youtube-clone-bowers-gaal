import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <h1>YouTube Clone</h1>
      <Link to="/">Home</Link> <Link to="/about">About</Link>
    </div>
  );
}
