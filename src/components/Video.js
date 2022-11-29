import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import "./Video.css";

const Video = () => {
  const { id } = useParams();

  const [comments, setComments] = useState([]);

  const [commentInput, setCommentInput] = useState({
    commenter: "",
    comment: "",
  });

  const handleTextChange = (e) => {
    setCommentInput({ ...commentInput, [e.target.id]: e.target.value });
  };

  const commentsFromStorage = JSON.parse(window.localStorage.getItem(id));

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, commentInput]);
    setCommentInput({
      commenter: "",
      comment: "",
    });
  };

  useEffect(() => {
    window.localStorage.setItem(id, JSON.stringify(comments));
  }, [id, comments]);

  return (
    <div className="video">
      <YouTube videoId={id} />;
      <form onSubmit={handleSubmit}>
        <label htmlFor="commenter">
          Name:{" "}
          <input
            type="text"
            id="commenter"
            value={commentInput.commenter}
            onChange={handleTextChange}></input>
        </label>
        <label htmlFor="comment">
          {" "}
          Comment:{" "}
          <input
            type="text"
            id="comment"
            value={commentInput.comment}
            onChange={handleTextChange}></input>{" "}
        </label>
        <button type="submit">Add Comment</button>
        <ul id="commentsUl"></ul>
      </form>
      <ul>
        {commentsFromStorage?.map((comment, indexId) => {
          return (
            <li id={indexId}>
              <p>
                {comment.commenter} - {comment.comment}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Video;
