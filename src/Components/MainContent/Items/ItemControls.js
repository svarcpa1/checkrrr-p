import React from "react";

import Button from "../../UI/Button";

import styles from "./ItemControls.module.css";

const ItemControls = (props) => {
  //return list of categories
  return (
    <div>
      <Button
        className={styles.button_item_controls}
        text="Uncomplete all"
      ></Button>
      <Button
        className={styles.button_item_controls}
        text="Complete all"
      ></Button>
    </div>
  );
};

export default ItemControls;
