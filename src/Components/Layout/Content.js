import React from "react";
import { useState } from "react";

import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

import styles from "./Content.module.css";

const Content = (props) => {
  const [activeCategory, setActiveCategory] = useState("");

  const filterItems = (categoryID) => {
    setActiveCategory(categoryID);
  };

  const filteredItems = props.allItems.filter(
    (i) => i.categoryID + "" === activeCategory + ""
  );

  return (
    <div className={styles.content}>
      <LeftSide
        listOfCategories={props.listOfCategories}
        addCategory={props.addCategory}
        filterItems={filterItems}
      ></LeftSide>
      <RightSide
        listOfFilteredItems={filteredItems}
        actualCategory={activeCategory}
        addItem={props.addItem}
        setItemDoneOrUndone={props.setItemDoneOrUndone}
        setAllItemsDoneOrUndone={props.setAllItemsDoneOrUndone}
      ></RightSide>
    </div>
  );
};

export default Content;
