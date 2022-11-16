import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./common/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Video from "./components/Video";
import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Main videos={videos} setVideos={setVideos} />}
        />
        <Route path="/about" element={<About setVideos={setVideos} />} />
        <Route path="/:id" element={<Video videos={videos} />} />
      </Routes>
    </div>
  );
}

export default App;
