import {usePostContext} from "../store/PostContext";
import Post from "./Post";
const PostList = () => {
  const {posts} = usePostContext();
  return (
    <div className="PostList">
      {posts.map((posts) =>{
        return <Post key={posts.id} id={posts.id} title={posts.title} discription={posts.body} tags={posts.tags} reactions={posts.reactions} views={posts.views} userId={posts.userId}/>
      })}
    </div>
    );
};
export default PostList;
 