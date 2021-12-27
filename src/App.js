import React, { useState } from "react";
import ReactDOM from "react-dom";

import Header from "./Components/Layout/Header";
import Content from "./Components/Layout/Content";

function App() {
  const INITIAL_CATEGORIES = [
    {
      id: "id_cat_1638476783006",
      label: "Climbing trip (one day)",
      description: "",
    },
    {
      id: "id_cat_1638476783007",
      label: "Weekend in hometown",
      description: "Things to ge to...",
    },
  ];

  const INITIAL_ITEMS = [
    {
      id: "id_it_1638476783006",
      categoryID: "id_cat_1638476783006",
      label: "Rope",
      description: "At least 40m",
      isDone: false,
    },
    {
      id: "id_it_1638476783007",
      categoryID: "id_cat_1638476783006",
      label: "Climbing shoes",
      description: "",
      isDone: false,
    },
    {
      id: "id_it_1638476783008",
      categoryID: "id_cat_1638476783007",
      label: "Underwear",
      description: "",
      isDone: false,
    },
    {
      id: "id_it_1638476783009",
      categoryID: "id_cat_1638476783007",
      label: "Toothbrush",
      description: "",
      isDone: false,
    },
    {
      id: "id_it_1638476783010",
      categoryID: "id_cat_1638476783007",
      label: "Patience",
      description: "",
      isDone: false,
    },
  ];

  const [categories, setCategories] = useState(INITIAL_CATEGORIES);
  const [items, setItems] = useState([]);

  const addCategory = (categoryLabel, categoryDescription) => {
    setCategories((previousState) => {
      return [
        ...previousState,
        {
          id: "id_cat_" + new Date().getTime(),
          label: categoryLabel,
          description: categoryDescription,
        },
      ];
    });
  };

  const filterItems = (categoryID) => {
    let filteredItemsLoc = INITIAL_ITEMS.filter(
      (i) => i.categoryID === categoryID
    );
    setItems(filteredItemsLoc);
  };

  return (
    <React.Fragment>
      <Header></Header>
      <Content
        addCategory={addCategory}
        listOfCategories={categories}
        filterItems={filterItems}
        listOfFilteredItems={items}
      ></Content>
    </React.Fragment>
  );
}

export default App;
