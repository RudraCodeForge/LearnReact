import { createContext, useContext, useReducer } from "react";


// Reducer function
const PostReducer = (currentPosts, action) => {
  switch (action.type) {
    case "ADD":
      return [...currentPosts, action.payload];
    case "DELETE":
      return currentPosts.filter((post) => post.id !== action.payload);
    case "FATCH":
      return currentPosts = action.payload;
    default:
      return currentPosts;
  }
};

// Context
const PostContext = createContext();

// Provider
export const PostProvider = ({ children }) => {
  const [posts, dispatch] = useReducer(PostReducer, []);

  // Add post
  const addPost = (post) => {
    dispatch({ type: "ADD", payload: post });
  };

  // Delete post
  const deletePost = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  // fatch posts
  const FatchPosts = (InitialPosts)=>{
    dispatch({type:"FATCH", payload:InitialPosts})
  }

  return (
    <PostContext.Provider value={{ posts,FatchPosts, addPost, deletePost }}>
      {children}
    </PostContext.Provider>
  );
};

// Custom hook
export const usePostContext = () => useContext(PostContext);