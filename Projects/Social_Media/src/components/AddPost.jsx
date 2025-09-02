import { useState, useEffect } from "react";
import ALERT from "./ALERT";
import { Form, useActionData, useNavigate} from "react-router-dom";
import { usePostContext } from "../store/PostContext";
const AddPost = () => {
  const { addPost } = usePostContext();
  const navigate = useNavigate();
  const actionData = useActionData();
  const [alert, setAlert] = useState(false);
  useEffect(() => {
    if (actionData && actionData.error) {
      setAlert(true);
    }
    if (actionData && actionData.name === "SUCCESS") {
      addPost(actionData.posts);
      setTimeout(() =>{
        navigate("/");
      },1000)
    }
  }, [actionData]);

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Add New Post</h3>
      {alert && (
        <ALERT
          name={actionData.name}
          body={actionData.body}
          type={actionData.type}
          onClose={() => setAlert(false)}
        />
      )}
      <Form method="POST" className="p-3 border rounded shadow-sm bg-light">
        {/* Title */}
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            placeholder="Enter post title"
            required
          />
        </div>

        {/* Body */}
        <div className="mb-3">
          <label className="form-label">Body</label>
          <textarea
            name="body"
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
            name="tags"
            className="form-control"
            placeholder="e.g. history, fiction, english"
          />
        </div>

        {/* User ID */}
        <div className="mb-3">
          <label className="form-label">User ID</label>
          <input
            type="number"
            name="userId"
            className="form-control"
            placeholder="Enter user ID"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Add Post
        </button>
      </Form>
    </div>
  );
};

export const AddPostAction = async (data) => {
  const formData = await data.request.formData();
  if (parseInt(formData.get("userId")) > 100) {
    return {
      error: true,
      name: "Invalid User",
      body: "User ID should not be greater than 100",
      type: "danger",
    };
  }

  const newPost = {
    title: formData.get("title"),
    body: formData.get("body"),
    tags: formData
      .get("tags")
      .split(",")
      .map((tag) => tag.trim()),
    userId: parseInt(formData.get("userId")),
    likes: 0,
    dislikes: 0,
    reactions: 0,
  };
  const res = await fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPost),
  });
  const posts = await res.json();
  return {
    posts,
    error: true,
    name: "SUCCESS",
    body: "POST ADDED SUCCESSFULLY ",
    type: "primary",
  };
};

export default AddPost;
