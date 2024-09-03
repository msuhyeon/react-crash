import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Posts, { loader as postLoader } from "./routes/Posts";
import NewPost, { action as newPostAction } from "./routes/NewPost";
import RootLayout from "./routes/RootLayout";
import PostDetails, { loader as postDetailsLoader } from "./routes/PostDetails";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        // loader: react-router-dom 6.4 버전 이상에서, 해당 라우터가 활성화 될 때 마다 loader에 있는 함수를 실행
        // 그래서 이 컴포넌트가 실행될 때 필요한 데이터를 미리 로드할 수 있음, component 밖에서 실행되니 상태를 바꿀 수 없음
        loader: postLoader,
        children: [
          {
            path: "/create-post",
            element: <NewPost />,
            action: newPostAction,
          },
          {
            path: "/:id",
            element: <PostDetails />,
            loader: postDetailsLoader,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
