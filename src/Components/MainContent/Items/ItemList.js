import React from "react";

import Item from "./Item";

import styles from "./ItemList.module.css";
import Button from "../../UI/Button";
import ItemControls from "./ItemControls";

const ItemList = (props) => {
  const PLACEHOLDER = "No item added";

  if (props.listOfFilteredItems.length < 1) {
    return <h2>{PLACEHOLDER}</h2>;
  }

  //return list of items
  return (
    <React.Fragment>
      <Button text="New Item" className={styles.new_item_button}></Button>
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
