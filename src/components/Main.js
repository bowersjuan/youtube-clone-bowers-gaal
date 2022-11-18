import { useState } from "react";
import { Link } from "react-router-dom";
import NoSearch from "./NoSearch";
import { BASE_URL, queryParam1, queryParam2, queryParam3 } from "../API/url";
import "./Main.css";

const Main = ({ videos, setVideos }) => {
  const [showModalBool, setShowModalBool] = useState(false);

  // HAS TO BE PASSED DOWN AS PROPS to MAIN & VIDEO

  //*************** SUBMIT **************/

  const handleSubmit = e => {
    e.preventDefault();

    //************* LOCAL STORAGE *********/
    const result = window.localStorage.getItem(searchBox);

    if (searchBox.length === 0) {
      setShowModalBool(true);
      return;
    }

    if (result) {
      console.log(`retrieving ${searchBox} from local storage`);
      setVideos(JSON.parse(result));
      setSearchBox("");
    } else {
      fetch(
        `${BASE_URL}${queryParam1}&${queryParam2}&${queryParam3}${
          searchBox ? `${searchBox}` : ""
        }`
      )
        .then(res => res.json())
        .then(res => {
          console.log(`I ran a fetch for ${searchBox}`);
          window.localStorage.setItem(searchBox, JSON.stringify(res));
          setVideos(res);
          setSearchBox("");
        })
        .catch(error => console.log(error));
    }
  };

  //*********** SEARCHBOX ************/

  const [searchBox, setSearchBox] = useState("");

  const handleTextChange = e => {
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
          type="text"></input>
        <button type="submit">Search</button>
        <NoSearch
          showModalBool={showModalBool}
          setShowModalBool={setShowModalBool}
        />
      </form>
      {videos.length !== 0 ? (
        <div>
          {videos.items.map(video => {
            return (
              <Link key={video.id.videoId} to={`/video/${video.id.videoId}`}>
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
