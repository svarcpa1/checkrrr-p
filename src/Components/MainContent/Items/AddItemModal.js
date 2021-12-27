import React from "react";
//for portal
import ReactDOM from "react-dom";

import styles from "./AddItemModal.module.css";

import Card from "../../UI/Card";
import Button from "../../UI/Button";
import Backdrop from "../../UI/Backdrop";

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
const ItemModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop backdropClick={props.closeModalHandler} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          text={props.text}
          closeModalHandler={props.closeModalHandler}
        />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default ItemModal;
