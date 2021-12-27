import React from "react";
import { useState } from "react";

import Item from "./Item";
import AddItemModal from "./AddItemModal";

import styles from "./ItemList.module.css";
import Button from "../../UI/Button";
import ItemControls from "./ItemControls";

const ItemList = (props) => {
  const PLACEHOLDER = "No item added";

  //to display modal to add item to the selected category
  const [isAddItemModal, setIsAddItemModal] = useState(false);

  if (props.listOfFilteredItems.length < 1) {
    return <h2>{PLACEHOLDER}</h2>;
  }

  const addItemHandler = () => {
    setIsAddItemModal(true);
  };

  const cancelModalHandler = (event) => {
    setIsAddItemModal(false);
  };

  const addItemModalHandler = (item) => {
    //TODO dynamic value
    props.addItem(item, props.actualCategory);
    setIsAddItemModal(false);
  };

  //return list of items
  return (
    <React.Fragment>
      {isAddItemModal && (
        <AddItemModal
          addItemModalHandler={addItemModalHandler}
          cancelModalHandler={cancelModalHandler}
          title="New Item"
        ></AddItemModal>
      )}

      <Button
        text="New Item"
        className={styles.new_item_button}
        submitHandler={addItemHandler}
      ></Button>
      <ul>
        {props.listOfFilteredItems.map((i) => (
          <Item
            key={i.id}
            label={i.label}
            description={i.description}
            isDone={i.isDone}
          ></Item>
        ))}
      </ul>
      <ItemControls></ItemControls>
    </React.Fragment>
  );
};

export default ItemList;
