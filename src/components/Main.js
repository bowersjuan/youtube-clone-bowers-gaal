import { useState } from "react";
import "./Main.css";

const Main = () => {
  const [searchBox, setSearchBox] = useState("");

  const handleTextChange = (e) => {
    setSearchBox(e.target.value);
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
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Main;
