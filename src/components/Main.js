import { useState } from "react";
import "./Main.css";

// const BASE_URL = process.env.BASE_URL;
// const reactDevYoutubeAPI = process.env.REACT_APP_YOUTUBE_API;

// let queryParam1 = "snippet"
// ?"part=snippet"&

const Main = () => {
  const [searchBox, setSearchBox] = useState("");

  const handleTextChange = (e) => {
    setSearchBox(e.target.value);
  };

  const handleClick = () => {
    // window.localStorage.setItem("searchBox", JSON.stringify(searchBox));
  };

  return (
    <div>
      <form>
        <label htmlFor="search"></label>
        <input
          className="searchBox"
          value={searchBox}
          onChange={handleTextChange}
          id="search"
          placeholder="Search..."
          type="text"
        ></input>
        <button onClick={handleClick} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Main;
