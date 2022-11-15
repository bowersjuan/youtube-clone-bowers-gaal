import { useState } from "react";
import "./Main.css";

const BASE_URL =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=";
const reactDevYoutubeAPI = process.env.REACT_APP_YOUTUBE_API;

const Main = () => {
  const [videos, setVideos] = useState([]);
  const [searchBox, setSearchBox] = useState("");

  const handleTextChange = (e) => {
    setSearchBox(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    fetch(`${BASE_URL}${reactDevYoutubeAPI}&type=video&q=avicii`)
      .then((res) => res.json())
      .then((res) => {
        setVideos(res);
      })
      .catch((error) => console.log(error));

    console.log(videos);
    // window.localStorage.setItem("searchBox", JSON.stringify(searchBox));
  };

  return (
    <div>
      <form onSubmit={handleClick}>
        <label htmlFor="search"></label>
        <input
          className="searchBox"
          value={searchBox}
          onChange={handleTextChange}
          id="search"
          placeholder="Search..."
          type="text"
        ></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Main;
