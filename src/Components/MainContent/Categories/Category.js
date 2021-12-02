import React from "react";
import Card from "../../UI/Card";

import styles from "./Category.module.css";

const Category = (props) => {
  //return list of users
  return (
    <li>
      <Card
        className={styles.category_card}
        children={
          <div className={styles.category_card_content}>
            <label>{props.label + " | " + props.description}</label>
          </div>
        }
      ></Card>
    </li>
  );
};

export default Category;
