import React from "react";

import styles from "./LeftSide.module.css";

import AddCategory from "../Controls/AddCategory";
import CategoryList from "../MainContent/Categories/CategoryList";

const LeftSide = (props) => {
  return (
    <div className={styles.left_side}>
      <AddCategory addCategory={props.addCategory}></AddCategory>
      <CategoryList listOfCategories={props.listOfCategories}></CategoryList>
    </div>
  );
};

export default LeftSide;
