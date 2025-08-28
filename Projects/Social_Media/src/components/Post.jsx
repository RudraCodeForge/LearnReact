import {usePostContext} from "../store/PostContext"
const Post = ({ post }) => {
  const { deletePost } = usePostContext();

  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <div className="post-meta">
        <div className="post-tags">
          {post.tags.map((tag, index) => (
            <span key={index} className="tag">#{tag}</span>
          ))}
        </div>
        <div>
          <span style={{ marginRight: '15px', color: '#666' }}>
            👍 {post.reactions.likes} ❤️ {post.reactions.dislikes}
          </span>
          <button className="delete-btn" onClick={() => deletePost(post.id)}>
            🗑️ Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default Post;