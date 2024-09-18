import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from "./routes/root";
import ErrorPage from "./erro-page";
import MyBlogs, {loader as myBlogsLoader} from "./routes/myBlogs";
import Blog, {loader as blogLoader, action as blogAction} from "./routes/blog";
import EditBlog, {loader as editBlogLoader, action as editBlogAction} from "./routes/blog-editor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "editor/MyBlogPosts",
        element: <MyBlogs />,
        loader: myBlogsLoader
      },
      {
        path: "editor/blog/:blogId",
        element: <Blog />,
        loader: blogLoader,
        action: blogAction,
      },
      {
        path: "editor/blogEdit/:blogId",
        element: <EditBlog />,
        loader: editBlogLoader,
        action: editBlogAction
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);