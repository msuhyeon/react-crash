import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost({ onCancel, onAddPost }) {
  const [enteredBody, setEnteredBody] = useState(" ");
  const [enteredAuthor, setEnteredAuthor] = useState(" ");

  /**
    * 
    const stateData = useState("");
    stateData[0]; // current value
    stateData[1]; // state updating function

    // 항상 새로운 상수임.  상태가 업데이트가 되면 매번 컴포넌트 함수가 처음인 것 처럼 실행이되니 상수로 선언
  const [enteredBody, setEnteredBody] = useState(" ");
    */

  function bodyChangeHandler(e) {
    setEnteredBody(e.target.value);
  }

  function authorChangeHandler(e) {
    setEnteredAuthor(e.target.value);
  }

  function submitHandler(e) {
    // 브라우저가 자동으로 HTTP 요청을 만들어 전송하는 것을 막을 수 있음
    e.preventDefault();

    const postData = {
      author: enteredAuthor,
      body: enteredBody,
    };

    onAddPost(postData);
    onCancel();
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={authorChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit </button>
      </p>
    </form>
  );
}

export default NewPost;
