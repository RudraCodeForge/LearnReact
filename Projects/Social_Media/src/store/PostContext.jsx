import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
  useCallback,
} from "react";

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
  /* useEffect(() => {
    FatchPosts();
  }, []);*/

  const [usersposts, dispatch] = useReducer(PostReducer, []);

  const [loading, setLoading] = useState(true);

  // Add post
  const addPost = (post) => {
    dispatch({ type: "ADD", payload: post });
  };

  // Delete post
  const deletePost = useCallback(
    (id) => {
      dispatch({ type: "DELETE", payload: id });
    },
    [dispatch],
  );

  // Fatch post
  const FatchPost = (InitialPosts) => {
    const controller = new AbortController();
    setLoading(true);
    dispatch({ type: "FATCH", payload: InitialPosts });
    setLoading(false);
    return () => {
      console.log("Cleanup");
      controller.abort();
    };
  };
  return (
    <PostContext.Provider
      value={{ loading, setLoading, usersposts, addPost, deletePost,FatchPost }}
    >
      {children}
    </PostContext.Provider>
  );
};

// Custom hook
export const usePostContext = () => useContext(PostContext);
