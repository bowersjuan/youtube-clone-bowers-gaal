import { useState } from "react";
import { Link } from "react-router-dom";
import NoSearch from "./NoSearch";
import "./Main.css";

import { get } from "../API/fetch";

const Main = ({ videos, setVideos }) => {
  const [maxResults, setMaxResults] = useState(50);
  const [searchBox, setSearchBox] = useState("");
  const [showModalBool, setShowModalBool] = useState(false);

  const params = {
    searchBox: searchBox,
    maxResults: maxResults,
  };

  const setData = (res) => {
    console.log(`I ran a fetch for the search:"${searchBox}"`);
    window.localStorage.setItem(searchBox, JSON.stringify(res));
    setVideos(res);
    setSearchBox("");
  };

  //************* LOCAL STORAGE *************
  const result = JSON.parse(window.localStorage.getItem(searchBox));

  const handleSubmit = (e) => {
    e.preventDefault();

    //************* NO SEARCH MODAL *************
    if (searchBox.length === 0) {
      setShowModalBool(true);
      return;
    }

    if (result) {
      // Get data from Local Storage if available
      if (result.items.length >= maxResults) {
        setVideos({
          ...result,
          items: result.items.slice(0, maxResults),
        });
      } else if (result.items.length < maxResults) {
        // Fetch data if more data is needed than is available in Local Storage
        get(params)
          .then(setData)
          .catch((error) => console.error(error));
      }
      console.log(`retrieving the search:"${searchBox}" from local storage`);
      setSearchBox("");
    } else {
      // Fetch data if it does not exist in local storage
      get(params)
        .then(setData)
        .catch((error) => console.error(error));
    }
  };

  const handleTextChange = (e) => {
    setSearchBox(e.target.value);
  };

  const handleNumChange = (e) => {
    setMaxResults(e.target.value);
  };

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <label htmlFor="maxSearchResults">
          Total Search Results ( 1-50, <em>default 50</em> ):{" "}
          <input
            className="maxSearchResults"
            type="number"
            id="maxSearchResults"
            min="1"
            max="50"
            value={maxResults}
            onChange={handleNumChange}
          />
        </label>
        <label htmlFor="search">
          <input
            className="searchBox"
            type="text"
            id="search"
            placeholder="Search..."
            value={searchBox}
            onChange={handleTextChange}
          />
        </label>
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
