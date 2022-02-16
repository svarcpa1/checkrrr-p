import styles from "./RightSide.module.css";

import ItemList from "../MainContent/Items/ItemList";

const RightSide = (props) => {
  return (
    <div className={styles.right_side}>
      <ItemList
        listOfFilteredItems={props.listOfFilteredItems}
        actualCategory={props.actualCategory}
        addItem={props.addItem}
        setItemDoneOrUndone={props.setItemDoneOrUndone}
        setAllItemsDoneOrUndone={props.setAllItemsDoneOrUndone}
        removeItem={props.removeItem}
      ></ItemList>
    </div>
  );
};

export default RightSide;
