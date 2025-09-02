import Welcome from "./Welcome";
import Spinner from "./Spinner";
import { usePostContext } from "../store/PostContext";
import Post from "./Post";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const { setLoading, loading, usersposts, addPost,FatchPost } = usePostContext();
  const posts = useLoaderData();
  const data =[];
  useEffect(() => {
    if (loading && posts && posts.length > 0) {
      FatchPost(posts);
      setLoading(false);
    }
  }, [loading, posts, setLoading, addPost]);

  return (
    <div className="PostList">
      {loading && <Spinner />}
      {usersposts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          discription={post.body}
          tags={post.tags}
          reactions={post.reactions}
          views={post.views}
          userId={post.userId}
        />
      ))}
      {!loading && usersposts.length === 0 && <Welcome />}
    </div>
  );
};

export const FatchPosts = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => data.posts);
};

export default PostList;
