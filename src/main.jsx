import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from "./routes/root";
import ErrorPage from "./erro-page";
import MyBlogs, {loader as myBlogsLoader, action as rootAction} from "./routes/myBlogs";
import Blog, {loader as blogLoader, action as blogAction} from "./routes/blog";
import EditBlog, {loader as editBlogLoader, action as editBlogAction} from "./routes/blog-editor";
import Index from "./routes";
import LogIn, {action as logInAction} from "./routes/logIn";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: "authenticate/logIn",
        element: <LogIn />,
        action: logInAction
      },
      {

      },
      { 
        path: "editor/MyBlogPosts",
        element: <ProtectedRoute>
          <MyBlogs />
        </ProtectedRoute>,
        loader: myBlogsLoader,
        action: rootAction
      },
      {
        path: "editor/blog/:blogId",
        element: <ProtectedRoute>
          <Blog />
        </ProtectedRoute>,
        loader: blogLoader,
        action: blogAction,
      },
      {
        path: "editor/blogEdit/:blogId",
        element: <ProtectedRoute>
          <EditBlog />
        </ProtectedRoute>,
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