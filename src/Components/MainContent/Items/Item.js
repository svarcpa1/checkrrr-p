import React from "react";

import Card from "../../UI/Card";

import styles from "./Item.module.css";

const Item = (props) => {
  //return list of items
  return (
    <li className={styles.item_card_li}>
      <Card className={styles.item_card}>{props.label}</Card>
    </li>
  );
};

export default Item;
