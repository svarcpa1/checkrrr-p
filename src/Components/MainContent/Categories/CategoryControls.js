import React from "react";

import Button from "../../UI/Button";

import styles from "./CategoryControls.module.css";

const CategoryControls = (props) => {
  //return list of categories
  return (
    <div className={styles.category_controls}>
      <Button
        text="Edit Category"
        className={styles.button_category_controls}
      ></Button>
      <Button
        text="Remove Category"
        className={styles.button_category_controls}
      ></Button>
    </div>
  );
};

export default CategoryControls;
