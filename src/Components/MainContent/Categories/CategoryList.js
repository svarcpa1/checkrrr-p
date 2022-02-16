import React from "react";
import { useState } from "react";

import Category from "./Category";

import styles from "./CategoryList.module.css";

const CategoryList = (props) => {
  const [expandedCategory, setExpandedCategory] = useState("");
  const PLACEHOLDER = "No category added";

  if (props.listOfCategories.length < 1) {
    return <h2>{PLACEHOLDER}</h2>;
  }

  const expandCategory = (id) => {
    setExpandedCategory(id);
  };

  //return list of categories
  return (
    <ul>
      {props.listOfCategories.map((c) => (
        <Category
          key={c.id}
          id={c.id}
          label={c.label}
          description={c.description}
          filterItems={props.filterItems}
          expandCategory={expandCategory}
          isCategoryExpanded={expandedCategory === c.id}
          removeCategory={props.removeCategory}
        ></Category>
      ))}
    </ul>
  );
};

export default CategoryList;
