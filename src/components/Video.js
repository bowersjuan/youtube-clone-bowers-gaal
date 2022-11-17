import { useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

const Video = ({ videos, setVideos }) => {
  const { id } = useParams();

  // const [commentsInput, setCommentsInput] = useState({
  //   commenter: "",
  //   comment: "",
  // });

  const video = videos.items.find((vid) => {
    return vid.id.videoId === id;
  });

  return (
    <div className="video">
      <YouTube videoId={video.id.videoId} />;
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
