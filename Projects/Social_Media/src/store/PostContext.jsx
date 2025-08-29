import { createContext, useContext, useReducer, useEffect ,useState, useCallback} from "react";

// Reducer function
const PostReducer = (currentPosts, action) => {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...currentPosts];
    case "DELETE":
      return currentPosts.filter((post) => post.id !== action.payload);
    case "FATCH":
      return action.payload;
    default:
      return currentPosts;
  }
};

// Context
const PostContext = createContext();

// Provider
export const PostProvider = ({ children }) => {
  useEffect(() => {
    FatchPosts();
  }, []);

  const [posts, dispatch] = useReducer(PostReducer, []);

  const [loading, setLoading] = useState(true);
  
  // Add post
  const addPost = (post) => {
    dispatch({ type: "ADD", payload: post });
  };

  // Delete post
  const deletePost = useCallback((id) => {
    dispatch({ type: "DELETE", payload: id });
  },[dispatch]);

  // Fatch post
  const FatchPosts = () => {
    const controller = new AbortController();
    const signal = controller.signal;
    setLoading(true);
    fetch("https://dummyjson.com/posts",{signal})
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "FATCH", payload: data.posts });
        setLoading(false);
      });
    return () => {
      console.log("Cleanup")
      controller.abort();
    }
  };
  return (
    <PostContext.Provider value={{ loading, posts, FatchPosts, addPost, deletePost }}>
      {children}
    </PostContext.Provider>
  );
};

// Custom hook
export const usePostContext = () => useContext(PostContext);
