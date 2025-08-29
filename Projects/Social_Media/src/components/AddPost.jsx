import { useRef, useState } from "react";
import { usePostContext } from "../store/PostContext";
import ALERT from "./ALERT";
import {useNavigate} from "react-router-dom";
const AddPost = () => {
  const { addPost } = usePostContext();
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [alertData, setAlertData] = useState({});

  const titleRef = useRef();
  const bodyRef = useRef();
  const tagsRef = useRef();
  const userIdRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userIdRef.current.value > 100) {
      setAlertData({ name: "ADD POST", body: "USER ID MUST BE LESS THAN OR EQUAL TO 100", type: "danger" });
      setShowAlert(true);
      return;
    } else {
      fetch("https://dummyjson.com/posts/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: titleRef.current.value,
          body: bodyRef.current.value,
          tags: tagsRef.current.value
            .split(",")
            .map((tag) => tag.trim())
            .filter((tag) => tag !== ""),
          reactions: { likes: 0, dislikes: 0 },
          views: 0,
          userId: parseInt(userIdRef.current.value) || 0,
          /* other post data */
        }),
      })
        .then((res) => res.json())
        .then((Object) => {
          addPost(Object);
          navigate("/");
        });
      // clear inputs
      titleRef.current.value = "";
      bodyRef.current.value = "";
      tagsRef.current.value = "";
      userIdRef.current.value = "";
      
      // Show success alert
      setAlertData({ name: "SUCCESS", body: "Post added successfully!", type: "success" });
      setShowAlert(true);
    }

    /*addPost(newPost);*/
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Add New Post</h3>
      
      {showAlert && (
        <ALERT 
          name={alertData.name}
          body={alertData.body}
          type={alertData.type}
          onClose={() => setShowAlert(false)}
        />
      )}
      <form
        onSubmit={handleSubmit}
        className="p-3 border rounded shadow-sm bg-light"
      >
        {/* Title */}
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            ref={titleRef}
            className="form-control"
            placeholder="Enter post title"
            required
          />
        </div>

        {/* Body */}
        <div className="mb-3">
          <label className="form-label">Body</label>
          <textarea
            ref={bodyRef}
            className="form-control"
            placeholder="Enter post body"
            rows="3"
            required
          />
        </div>

        {/* Tags */}
        <div className="mb-3">
          <label className="form-label">Tags (comma separated)</label>
          <input
            type="text"
            ref={tagsRef}
            className="form-control"
            placeholder="e.g. history, fiction, english"
          />
        </div>

        {/* User ID */}
        <div className="mb-3">
          <label className="form-label">User ID</label>
          <input
            type="number"
            ref={userIdRef}
            className="form-control"
            placeholder="Enter user ID"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;
