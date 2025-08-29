import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App.jsx";
import PostList from "./components/PostList";
import AddPost from "./components/AddPost";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      /*childern: [
        {
          path: "/",
          element: <PostList />,
        },
        {
          path: "/add-post",
          element: <AddPost />,
        },
      ],*/
    },
  ],{basename:"/LearnReact/social_media"});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
