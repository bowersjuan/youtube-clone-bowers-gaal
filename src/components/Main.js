import { useState } from "react";
import { Link } from "react-router-dom";
import "./Main.css";

const Main = ({ videos, setVideos }) => {
  const BASE_URL =
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=";
  const reactDevYoutubeAPI = process.env.REACT_APP_YOUTUBE_API;

  // HAS TO BE PASSED DOWN AS PROPS to MAIN & VIDEO

  //*************** SUBMIT **************/

  const handleSubmit = (e) => {
    e.preventDefault();

    //************* LOCAL STORAGE *********/
    const result = window.localStorage.getItem(searchBox);

    if (searchBox.length === 0) {
      return setVideos([]);
    }

    if (result) {
      console.log(`retrieving ${searchBox} from local storage`);
      setVideos(JSON.parse(result));
      setSearchBox("");
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
          setSearchBox("");
        })
        .catch((error) => console.log(error));
    }
  };

  //*********** SEARCHBOX ************/

  const [searchBox, setSearchBox] = useState("");

  const handleTextChange = (e) => {
    setSearchBox(e.target.value);
  };

  //****************** RETURN ***************/

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <div>
          {videos.items.map((video) => {
            return (
              <Link key={video.id.videoId} to={`/${video.id.videoId}`}>
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                />
              </Link>
            );
          })}
        </div>
      ) : (
        <div>No Search Results Yet!, Please submit a search above! </div>
      )}
    </div>
  );
};

export default Main;
