import { Link, Form, redirect } from "react-router-dom";

import classes from "./NewPost.module.css";
import Modal from "../components/Modal";

function NewPost() {
  // form이 전송되면 브라우저는 요청을 만들어 웹사이트를 서비스하는 서버로 해당 요청을 전송한다.
  // form 대신 Form 요소를 사용하면, 리액트 라우터가 폼 전송을 처리해 브라우저가 요청을 전송하지 못하게 막고
  // 모든 입력 데이터를 수집하고, 해당 데이터를 객체로 구성해줌
  // 그리고 Form라는 폼을 가지고있는 라우트의 action에 할당된 함수를 호출함.

  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={classes.actions}>
          <Link to="/">Cancel</Link>
          <button>Submit </button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

// data는 react router가 자동으로 넘기는것, 폼에서 받은 데이터가 아니라 객체 형식
// data안엔 request라는 프로퍼티가 있음 .
export async function action(data) {
  // Form을 분석해 사용자가 입력한 데이터를 추출한다.
  // formData는 프로미스를 반환함
  const formData = await data.request.formData();
  // formData.get("body");
  // formData.get("author");

  const postData = Object.fromEntries(formData); // 내부에서 일반적인 키-밸류 형태의 객체를 생성 {body: "...", author: "... "}
  const response = await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // 함수의 호출 결과를 반환
  // redirect()를 호출하면 응답 객체가 만들어지고, action함수는 그 객체를 반환한다.
  // 리액트 라우터는 redirect를 호출해 만들어진 응답 일 경우 이동하고자 하는 다른 라우터로 경로를 이동 시켜준다.
  return redirect("/");
}
