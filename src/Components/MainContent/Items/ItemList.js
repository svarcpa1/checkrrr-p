import React from "react";

import Item from "./Item";

import styles from "./ItemList.module.css";

const ItemList = (props) => {
  const PLACEHOLDER = "No item added";

  if (props.listOfFilteredItems.length < 1) {
    return <h2>{PLACEHOLDER}</h2>;
  }

  //return list of items
  return (
    <ul>
      {props.listOfFilteredItems[0].categoryItems.map((i) => (
        <Item
          key={i.id}
          label={i.label}
          description={i.description}
          isDone={i.isDone}
        ></Item>
      ))}
    </ul>
  );
};

export default ItemList;
