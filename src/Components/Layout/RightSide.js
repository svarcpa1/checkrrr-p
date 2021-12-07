import styles from "./RightSide.module.css";

import ItemList from "../MainContent/Items/ItemList";

const RightSide = (props) => {
  return (
    <div className={styles.right_side}>
      <ItemList listOfFilteredItems={props.listOfFilteredItems}></ItemList>
    </div>
  );
};

export default RightSide;
