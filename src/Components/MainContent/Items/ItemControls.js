import React from "react";

import Button from "../../UI/Button";

import styles from "./ItemControls.module.css";

const ItemControls = (props) => {
  const undoneAll = () => {
    props.setAllItemsDoneOrUndone(false, props.actualCategory);
  };

  const doneAll = () => {
    props.setAllItemsDoneOrUndone(true, props.actualCategory);
  };

  return (
    <div>
      <Button
        submitHandler={undoneAll}
        className={styles.button_item_controls}
        text="Uncomplete all"
      ></Button>
      <Button
        submitHandler={doneAll}
        className={styles.button_item_controls}
        text="Complete all"
      ></Button>
    </div>
  );
};

export default ItemControls;
