import { useState, useEffect } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import classes from "./PostsList.module.css";

function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();

      setPosts(resData.posts);
    }
  }, []);

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

  function addPostsHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPost) => [postData, ...existingPost]); // 새로 입력한 포스트가 맨 위로, 그다음 기존 포스트
  }

  return (
    <>
      {/* {modalContent} */}
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostsHandler} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
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
