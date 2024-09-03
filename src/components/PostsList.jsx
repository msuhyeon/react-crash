import { useLoaderData } from "react-router-dom";

import Post from "./Post";
import classes from "./PostsList.module.css";

function PostList() {
  const posts = useLoaderData();
  // posts는 useLoaderData로 부터 데이터를 받고,
  // 이는 현재 활성화되어있는 라우트로부터 호출된 loader()에서 반환된다.

  // 데이터를 loader에서 가져오기 때문에 필요 없음
  // useEffect(() => {
  //   async function fetchPosts() {
  //     setIsFetching(true);

  //     // loader 함수로 옮김
  //     // const response = await fetch("http://localhost:8080/posts");
  //     // const resData = await response.json();

  //     setPosts(resData.posts);
  //     setIsFetching(false);
  //   }

  //   fetchPosts();
  // }, []);

  // let modalContent;
  // if (modalIsVisible) {
  //   modalContent = (
  //     //  함수 이름만 넣으면 함수가 전달되고, 함수()를 넣으면 함수의 반환값이 전달 됨
  // <Modal onClose={hideModalHandler}>
  //   <NewPost
  //     onBodyChange={bodyChangeHandler}
  //     onAuthorChange={authorChangeHandler}
  //   />
  // </Modal>
  //   );
  // }

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              body={post.body}
            />
          ))}
          {/* <Post author="Mayo" body="I am the cutest kitty in the world! " /> */}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some !</p>
        </div>
      )}
    </>
  );
}

export default PostList;
