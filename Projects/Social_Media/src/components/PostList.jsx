import Welcome from "./Welcome";
import Spinner from "./Spinner";
import { usePostContext } from "../store/PostContext";
import Post from "./Post";

const PostList = () => {
  const { posts, loading } = usePostContext();

  return (
    <div className="PostList">
      {loading && <Spinner />}
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

export default PostList;