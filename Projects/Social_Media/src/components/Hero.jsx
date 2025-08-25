import PostList from './PostList';
import { useSelectContext } from '../store/SelectContext';
const Hero=()=>{
  const {select}=useSelectContext();
  return(
    <div className="Hero">
      {select==="Home"&&<PostList/>}
      {select==="Create Post"&&<h1>Hello</h1>}
    </div>
  )
}
export default Hero;