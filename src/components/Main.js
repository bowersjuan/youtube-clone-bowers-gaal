import { useState } from "react";

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
