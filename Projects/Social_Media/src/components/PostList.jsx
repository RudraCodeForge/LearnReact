import Welcome from "./Welcome";
import Spinner from "./Spinner";
import { usePostContext } from "../store/PostContext";
import Post from "./Post";
import {useLoaderData} from "react-router-dom";
import { useEffect } from "react";
const PostList = () => {
  const {loading, setLoading} = usePostContext();
  const posts = useLoaderData();
  
  // ✅ CORRECT: Use useEffect instead of direct setState in render
  useEffect(() => {
    if (loading && posts && posts.length >= 0) {
      setLoading(false);
    }
  }, [loading, posts, setLoading]);
  
  return (
    <div className="PostList">
      {loading && <Spinner />}
      {posts.length === 0 ? (
        <Welcome />
      ) : (
        posts.map((post) => {
          return (
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
          );
        })
      )}
    </div>
  );
};

export const FatchPosts = () =>{
  return fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        return data.posts;
      });
}
export default PostList;

