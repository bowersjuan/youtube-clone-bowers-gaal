import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./common/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Video from "./components/Video";
import "./App.css";

// const BASE_URL =
//   "https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=";
// const reactDevYoutubeAPI = process.env.REACT_APP_YOUTUBE_API;

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
        <Route path="/about" element={<About />} />
        <Route path="/video/:id" element={<Video />} />
      </Routes>
    </div>
  );
}

export default App;
