import PostList from './PostList';
import AddPost from './AddPost';
import { useSelectContext } from '../store/SelectContext';
const Hero=()=>{
  const {select}=useSelectContext();
  return(
    <div className="Hero">
      {select==="Home"&&<PostList/>}
      {select==="Create Post"&&<AddPost/>}
    </div>
  )
}
export default Hero;