import { useEffect } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import {
  BASE_URL,
  reactDevYoutubeAPI,
  queryParam1,
  queryParam2,
  queryParam3,
} from "../API/url";

const Video = () => {
  const { id } = useParams();
  const queryParam3 = `id=${id}`;
  const SINGLEVID_URL = ``;

  useEffect(() => {
    fetch()
      .then()
      .then()
      .catch(err => {
        console.error(err);
      });
  }, []);

  // const [commentsInput, setCommentsInput] = useState({
  //   commenter: "",
  //   comment: "",
  // });

  return (
    <div className="video">
      <YouTube videoId={id} />;
      <form>
        <label htmlFor="commenter">
          Name:
          <input type="text" id="commenter"></input>
        </label>
        <label htmlFor="comment">
          Comment: <input type="text" id="comment"></input>{" "}
        </label>

        <button type="submit">Add Comment</button>
        <ul id="commentsUl"></ul>
      </form>
    </div>
  );
};

export default Video;
