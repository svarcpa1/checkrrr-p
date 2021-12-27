import React from "react";
import { useState } from "react";

import Item from "./Item";
import AddItemModal from "./AddItemModal";

import styles from "./ItemList.module.css";
import Button from "../../UI/Button";
import ItemControls from "./ItemControls";

const ItemList = (props) => {
  const PLACEHOLDER_NO_ITEM = "No item added";
  const PLACEHOLDER_NO_CATEGORY_SELECTED = "Please select a category";

  //to display modal to add item to the selected category
  const [isAddItemModal, setIsAddItemModal] = useState(false);

  const addItemHandler = () => {
    setIsAddItemModal(true);
  };

  const cancelModalHandler = (event) => {
    setIsAddItemModal(false);
  };

  const addItemModalHandler = (item) => {
    props.addItem(item, props.actualCategory);
    setIsAddItemModal(false);
  };

  if (props.actualCategory === "") {
    return <h2>{PLACEHOLDER_NO_CATEGORY_SELECTED}</h2>;
  }

  if (props.listOfFilteredItems.length < 1) {
    return (
      <React.Fragment>
        <Button
          text="New Item"
          className={styles.new_item_button}
          submitHandler={addItemHandler}
        ></Button>
        <h2>{PLACEHOLDER_NO_ITEM}</h2>
      </React.Fragment>
    );
  }

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
