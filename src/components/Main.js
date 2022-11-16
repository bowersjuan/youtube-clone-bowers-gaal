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

    const result = window.localStorage.getItem(searchBox);

    if (searchBox.length === 0) {
      return setVideos([]);
    }

    if (result) {
      console.log(`retrieving ${searchBox} from local storage`);
      setVideos(JSON.parse(result));
    } else {
      fetch(
        `${BASE_URL}${reactDevYoutubeAPI}${
          searchBox ? `&type=video&q=${searchBox}` : ""
        }`
      )
        .then((res) => res.json())
        .then((res) => {
          console.log(`I ran a fetch for ${searchBox}`);
          window.localStorage.setItem(searchBox, JSON.stringify(res));
          setVideos(res);
        })
        .catch((error) => console.log(error));
    }
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
      {videos.length !== 0 ? (
        <div>You Made a Search</div>
      ) : (
        <div>No Search Results Yet!, Please submit a search above! </div>
      )}
    </div>
  );
};

export default Main;
