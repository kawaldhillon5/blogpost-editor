import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root , {loader as rootLoader}from "./routes/root";
import ErrorPage from "./erro-page";
import MyBlogs, {loader as myBlogsLoader, action as blogsAction} from "./routes/myBlogs";
import Blog, {loader as blogLoader, action as blogAction} from "./routes/blog";
import EditBlog, {loader as editBlogLoader, action as editBlogAction} from "./routes/blog-editor";
import Index, {loader as indexLoader} from "./routes";
import LogIn, {action as logInAction} from "./routes/logIn";
import ProtectedRoute from "./components/ProtectedRoute";
import Requests, {loader as reqsLoader} from "./routes/requests";
import BlogComponent, {loader as blogCompLoader} from "./components/blogComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: indexLoader,
      },
      {
        path: "authenticate/logIn",
        element: <LogIn />,
        action: logInAction
      },
      { 
        element: <ProtectedRoute />,
        children:[
          {
            path: "editor/MyBlogPosts",
            element: <MyBlogs />,
            loader: myBlogsLoader,
            action: blogsAction
          },
          {
            path: "editor/blog/:blogId",
            element:<Blog />,
            loader: blogLoader,
            action: blogAction,
          },
          {
            path: "editor/blogEdit/:blogId",
            element: <EditBlog />,
            loader: editBlogLoader,
            action: editBlogAction
          },
          {
            path: "editor/requests",
            element: <Requests />,
            loader: reqsLoader,
          },
          { 
            path: "editor/publish/:reqId/blog/:blogId",
            element: <BlogComponent ></BlogComponent>,
            loader: blogCompLoader,
          }
        ] 
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);