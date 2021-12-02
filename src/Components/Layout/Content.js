import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

import styles from "./Content.module.css";

const Content = (props) => {
  //comment
  return (
    <div className={styles.content}>
      <LeftSide
        listOfCategories={props.listOfCategories}
        addCategory={props.addCategory}
      ></LeftSide>
      <RightSide></RightSide>
    </div>
  );
};

export default Content;
