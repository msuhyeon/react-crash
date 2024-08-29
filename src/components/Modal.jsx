import classes from "./Modal.module.css";

function Modal({ children, onClose }) {
  return (
    <>
      {/* 클릭 이벤트 리스너와 hideModalHandler가 연결됨 */}
      <div className={classes.backdrop} onClick={onClose} />
      <dialog open={true} className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
