import { useState } from "react";
import { Link } from "react-router-dom";
import NoSearch from "./NoSearch";
import { BASE_URL, urlSnippet, urlKey, urlTypeVideo } from "../API/url";
import "./Main.css";

const Main = ({ videos, setVideos }) => {
  const [maxResults, setMaxResults] = useState(5);

  const [showModalBool, setShowModalBool] = useState(false);

  // HAS TO BE PASSED DOWN AS PROPS to MAIN & VIDEO

  //*************** SUBMIT **************/

  const handleSubmit = (e) => {
    e.preventDefault();

    //************* LOCAL STORAGE *********/
    const result = window.localStorage.getItem(searchBox);

    if (searchBox.length === 0) {
      setShowModalBool(true);
      return;
    }

    if (result) {
      if (JSON.parse(result).items.length > maxResults) {
        console.log(JSON.parse(result));
        setVideos(JSON.parse(result.items.splice(0, maxResults + 1)));
      }

      console.log(`retrieving ${searchBox} from local storage`);
      setVideos(JSON.parse(result));
      // console.log(JSON.parse(result));

      setSearchBox("");
    } else {
      fetch(
        `${BASE_URL}${urlSnippet}${
          maxResults ? `&maxResults=${maxResults}` : ""
        }&${urlTypeVideo}${searchBox ? `${searchBox}` : ""}&${urlKey}`
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

  const handleMaxResultsChange = (e) => {
    setMaxResults(e.target.value);
  };

  //****************** RETURN ***************/

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search"></label>

        <label htmlFor="maxSearchResults">
          {" "}
          Set number of search results:{" "}
          <input
            id="maxSearchResults"
            type="number"
            min="5"
            max="50"
            value={maxResults}
            onChange={handleMaxResultsChange}></input>
        </label>

        <input
          className="searchBox"
          value={searchBox}
          onChange={handleTextChange}
          id="search"
          placeholder="Search..."
          type="text"></input>

        <button type="submit">Search</button>
        <NoSearch
          showModalBool={showModalBool}
          setShowModalBool={setShowModalBool}
        />
      </form>
      {videos.length !== 0 ? (
        <div className="mainSection">
          {videos.items.map((video) => {
            return (
              <Link key={video.id.videoId} to={`/videos/${video.id.videoId}`}>
                <img
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                />
                <h4>{video.snippet.title}</h4>
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
