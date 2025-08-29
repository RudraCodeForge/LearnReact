import PostList from './PostList';
import AddPost from './AddPost';
import { useSelectContext } from '../store/SelectContext';
const Hero = () => {
  return (
    <div className="hero">
      <h2>Welcome to Social Media Hub</h2>
      <p>Connect with friends, share your thoughts, and discover amazing content from around the world!</p>
    </div>
  );
};
export default Hero;