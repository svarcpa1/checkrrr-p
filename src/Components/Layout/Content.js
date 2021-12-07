import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

import styles from "./Content.module.css";

const Content = (props) => {
  return (
    <div className={styles.content}>
      <LeftSide
        listOfCategories={props.listOfCategories}
        addCategory={props.addCategory}
        filterItems={props.filterItems}
      ></LeftSide>
      <RightSide listOfFilteredItems={props.listOfFilteredItems}></RightSide>
    </div>
  );
};

export default Content;
