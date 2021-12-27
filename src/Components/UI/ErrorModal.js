import React from "react";
//for portal
import ReactDOM from "react-dom";

import styles from "./ErrorModal.module.css";

import Card from "./Card";
import Button from "./Button";
import Backdrop from "./Backdrop";

//splitting component to use Portals
const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <h2>{props.title || "Error"}</h2>
      <div className={styles.content}>
        {props.text || "Something went wrong"}
      </div>
      <div className={styles.actions}>
        <Button
          className={styles.modalButton}
          text="Okay"
          submitHandler={props.closeModalHandler}
        ></Button>
      </div>
    </Card>
  );
};

// Modal contains backdrop
const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop backdropClick={props.closeModalHandler} />,
        document.getElementById("error-backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          text={props.text}
          closeModalHandler={props.closeModalHandler}
        />,
        document.getElementById("error-modal-root")
      )}
    </React.Fragment>
  );
};

export default Modal;
