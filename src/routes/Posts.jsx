import { Outlet } from "react-router-dom";
import PostsList from "../components/PostsList";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const resData = await response.json();

  //  리액트 라우터는 loader()에서 반환한 데이터에 Posts 라우터 요소, 또는 중첩된 컴포넌트가 접근할 수 있도록 해준다.
  // 즉, <PostsList />에서도 접근이 가능하다.
  return resData.posts;
}
