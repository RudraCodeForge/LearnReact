import Welcome from "./Welcome";
import Spinner from "./Spinner";
import { usePostContext } from "../store/PostContext";
import Post from "./Post";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
const PostList = () => {
  const { setLoading, loading, usersposts } = usePostContext();

  const posts = useLoaderData();

  useEffect(() => {
    if (loading && posts && posts.length >= 0) {
      setLoading(false);
    }
  }, [loading, posts, setLoading]);

  return (
    <div className="PostList">
      {loading && <Spinner />}
      {usersposts.map((post) => {
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
      })}
      {!loading && posts.length === 0 ? (
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

export const FatchPosts = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
