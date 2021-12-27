import React from "react";

import styles from "./LeftSide.module.css";

import AddCategory from "../MainContent/Categories/AddCategory";
import CategoryList from "../MainContent/Categories/CategoryList";

const LeftSide = (props) => {
  return (
    <div className={styles.left_side}>
      <AddCategory addCategory={props.addCategory}></AddCategory>
      <CategoryList
        listOfCategories={props.listOfCategories}
        filterItems={props.filterItems}
      ></CategoryList>
    </div>
  );
};

export default LeftSide;
