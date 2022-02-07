import React from "react";

import Card from "../../UI/Card";
import Button from "../../UI/Button";

import styles from "./Item.module.css";

const Item = (props) => {
  const clickItemHandler = () => {
    props.setItemDoneOrUndone(props.id);
  };

  //return list of items
  return (
    <li className={styles.item_card_li}>
      <Card
        onClickHandler={clickItemHandler}
        className={props.isDone ? styles.item_card_done : styles.item_card}
        children={
          <div className={styles.item_content}>
            <div>{props.label}</div>
            <Button text="Remove Item"></Button>
          </div>
        }
      ></Card>
    </li>
  );
};

export default Item;
