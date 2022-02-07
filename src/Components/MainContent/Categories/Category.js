import React from "react";

import Card from "../../UI/Card";
import Label from "../../UI/Label";
import CategoryControls from "./CategoryControls";

import styles from "./Category.module.css";

const Category = (props) => {
  const filterCategoryHandler = (event) => {
    props.filterItems(props.id);
    props.expandCategory(props.id);
  };

  //return list of categories
  return (
    <li onClick={filterCategoryHandler} className={styles.category_card_li}>
      <Card
        className={
          props.isCategoryExpanded
            ? styles.category_card_selected
            : styles.category_card
        }
        children={
          <div className={styles.category_card_content}>
            <Label
              className={styles.category_label_strong}
              text={props.label}
            ></Label>
            {props.isCategoryExpanded && (
              <React.Fragment>
                {props.description !== "" && <p>{props.description}</p>}
                <CategoryControls></CategoryControls>
              </React.Fragment>
            )}
          </div>
        }
      ></Card>
    </li>
  );
};

export default Category;
