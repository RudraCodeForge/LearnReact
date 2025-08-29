import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./Routes/App.jsx";
import PostList from "./components/PostList";
import AddPost from "./components/AddPost";
import { FatchPosts } from "./components/PostList";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <PostList />,
        loader: FatchPosts,
      },
      {
        path: "add-post",
        element: <AddPost />
      },
    ],
  }
], { basename: "/LearnReact/social_media" });
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider 
      router={router} 
      hydrateFallback={
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      }
    />
  </StrictMode>,
);
