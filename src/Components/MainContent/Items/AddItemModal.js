import React from "react";
import { useState } from "react";
//for portal
import ReactDOM from "react-dom";

import styles from "./AddItemModal.module.css";

import Card from "../../UI/Card";
import Button from "../../UI/Button";
import Backdrop from "../../UI/Backdrop";
import Label from "../../UI/Label";
import Input from "../../UI/Input";

//splitting component to use Portals
const ModalOverlay = (props) => {
  const [newlyAddedItem, setNewlyAddedItem] = useState("");

  const newItemInputHandler = (event) => {
    setNewlyAddedItem(event.target.value);
  };

  const addItemHandler = (event) => {
    event.preventDefault();
    props.addItemModalHandler(newlyAddedItem);
    setNewlyAddedItem("");
  };

  return (
    <Card className={styles.modal}>
      <h2>{props.title || "Error"}</h2>
      <div className={styles.content}>
        <Label text="What would you like to add?" for="itemLabel"></Label>
        <Input
          id="itemLabel"
          type="text"
          placeholder="Socks (3 pairs)"
          changeHandler={newItemInputHandler}
          value={newlyAddedItem}
        ></Input>
      </div>
      <div className={styles.actions}>
        <Button
          className={styles.modalButton}
          text="Cancel"
          submitHandler={props.cancelModalHandler}
        ></Button>
        <Button
          className={styles.modalButton}
          text="Add"
          submitHandler={addItemHandler}
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
        <Backdrop backdropClick={props.cancelModalHandler} />,
        document.getElementById("add-item-backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          cancelModalHandler={props.cancelModalHandler}
          addItemModalHandler={props.addItemModalHandler}
        />,
        document.getElementById("add-item-modal-root")
      )}
    </React.Fragment>
  );
};

export default ItemModal;
