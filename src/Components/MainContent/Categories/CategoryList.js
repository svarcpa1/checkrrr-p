import React from "react";

import Category from "./Category";

import styles from "./CategoryList.module.css";

const CategoryList = (props) => {
  const PLACEHOLDER = "No category added";

  if (props.listOfCategories.length < 1) {
    return <h2>{PLACEHOLDER}</h2>;
  }

  //return list of categories
  return (
    <ul>
      {props.listOfCategories.map((c) => (
        <Category
          key={c.id}
          label={c.label}
          description={c.description}
        ></Category>
      ))}
    </ul>
  );
};

export default CategoryList;
