import { useState } from "react";
import socketIO from "socket.io-client";

const socket = socketIO.connect("http://127.0.0.1:4444");

const Comments = () => {
  const [comment, setComment] = useState("");

  const addComment = (e) => {
    e.preventDefault();
    console.log({
      comment,
      userId: localStorage.getItem("userId"),
    });
    setComment("");
  };
  return (
    <div className="comments__container">
      <form className="comment__form" onSubmit={addComment}>
        <label htmlFor="comment">Add a comment</label>
        <textarea
          placeholder="Type your comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={5}
          id="comment"
          required
        />
        <button className="commentBtn">ADD COMMENT</button>
      </form>
      <div className="comments__section">
        <h2> Existing Comments</h2>
        <div></div>
      </div>
    </div>
  );
};
export default Comments;
