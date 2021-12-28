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
      label: "Patience (a lot)",
      description: "",
      isDone: false,
    },
  ];

  const [categories, setCategories] = useState(INITIAL_CATEGORIES);
  const [items, setItems] = useState(INITIAL_ITEMS);

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

  const addItem = (itemLabel, categoryID) => {
    setItems((previousState) => {
      return [
        ...previousState,
        {
          id: "id_it_" + new Date().getTime(),
          categoryID: categoryID,
          label: itemLabel,
          description: "",
          isDone: false,
        },
      ];
    });
  };

  return (
    <React.Fragment>
      <Header></Header>
      <Content
        addCategory={addCategory}
        addItem={addItem}
        listOfCategories={categories}
        allItems={items}
      ></Content>
    </React.Fragment>
  );
}

export default App;
