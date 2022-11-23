import { useState } from "react";
import { Link } from "react-router-dom";
import NoSearch from "./NoSearch";
import { BASE_URL, urlSnippet, urlKey, urlTypeVideo } from "../API/url";
import "./Main.css";

const Main = ({ videos, setVideos }) => {
  const [maxResults, setMaxResults] = useState(50);
  const [showModalBool, setShowModalBool] = useState(false);

  // HAS TO BE PASSED DOWN AS PROPS to MAIN & VIDEO

  //*************** SUBMIT **************/

  const handleSubmit = (e) => {
    e.preventDefault();

    //************* LOCAL STORAGE *********/
    const result = JSON.parse(window.localStorage.getItem(searchBox));

    if (searchBox.length === 0) {
      setShowModalBool(true);
      return;
    }

    if (result) {
      if (result.items.length > maxResults) {
        setVideos({
          ...result,
          items: result.items.slice(0, maxResults),
        });
      }
      console.log(`retrieving ${searchBox} from local storage`);
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
          Total Search Results - <em>default 50</em> (1-50):{" "}
          <input
            className="maxSearchResults"
            type="number"
            min="1"
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
          {videos?.items?.map((video) => {
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
        <div className="noSearchResultsMessage">
          No Search Results Yet!, Please submit a search above!{" "}
        </div>
      )}
    </div>
  );
};

export default Main;
