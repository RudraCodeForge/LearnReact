import Welcome from "./Welcome";
import Spinner from "./Spinner";
import { usePostContext } from "../store/PostContext";
import Post from "./Post";
import {useLoaderData} from "react-router-dom";
const PostList = () => {
  const {loading, setLoading} = usePostContext();
  const posts = useLoaderData();
  
  // Set loading false when posts are loaded
  if (loading && posts) {
    setLoading(false);
  }
  
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

