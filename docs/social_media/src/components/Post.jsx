import {usePostContext} from "../store/PostContext"
const Post = (props) => {
  const {deletePost} = usePostContext();
  const HandleDelete = (id) =>{
    deletePost(id);
  }
  return (
    <div className="Post container">
      <h2>{props.userId}</h2>
      <h4>{props.title}</h4>
      <p>{props.discription}</p>
      <div className="reactions">
        <span className="like">Likes : {props.reactions.likes}</span>
        <span className="dislike">Dislikes : {props.reactions.dislikes}</span>
      </div>
      <p className="views">Total {props.views} people view this post</p>
      {props.tags.map((tag, index) => {
        return (
          <span key={index} className="badge text-bg-primary ba">
            {tag}
          </span>
        );
      })}
      <button 
        className="btn btn-danger m-2"
        onClick={()=>HandleDelete(props.id)}>
        Delete
      </button>
    </div>
  );
};
export default Post;
