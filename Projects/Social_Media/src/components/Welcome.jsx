import { usePostContext } from "../store/PostContext";

const Welcome = () => {
  const { FatchPosts } = usePostContext();

  const handleFetch = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => FatchPosts(data.posts));
  };

  return (
    <>
      <h1 className="text-center">WELCOME</h1>
      <p className="text-center">
        Currently no post available. Click on the "Get Posts" button to fetch posts
        from the server.
      </p>
      <button className="btn btn-primary" onClick={handleFetch}>
        Get Posts
      </button>
    </>
  );
};

export default Welcome;