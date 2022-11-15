import { Routes, Route } from "react-router-dom";
import Navbar from "./common/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
