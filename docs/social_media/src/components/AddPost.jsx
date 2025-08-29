import { useRef } from "react";
import { usePostContext } from "../store/PostContext";

const AddPost = () => {
  const { addPost } = usePostContext();

  const titleRef = useRef();
  const bodyRef = useRef();
  const tagsRef = useRef();
  const userIdRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

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
      .then((Object)=>{addPost(Object)});

    /*addPost(newPost);*/
    // clear inputs
    titleRef.current.value = "";
    bodyRef.current.value = "";
    tagsRef.current.value = "";
    userIdRef.current.value = "";
  };

  return (
    <div className="container mt-4">
      <h3 className="mb-3">Add New Post</h3>
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
