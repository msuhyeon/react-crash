import { useNavigate } from "react-router-dom";

import classes from "./Modal.module.css";

function Modal({ children }) {
  const navigate = useNavigate();

  function closeHandler() {
    navigate("/");
  }

  return (
    <>
      {/* 클릭 이벤트 리스너와 hideModalHandler가 연결됨 */}
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open={true} className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
