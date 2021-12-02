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
      id: "id_cat_1638476783006",
      label: "Weekend in hometown",
      description: "Things to ge to...",
    },
  ];

  const INITIAL_ITEMS = [
    {
      categoryId: "id_cat_1638476783006",
      items: [
        {
          id: "id_it_1638476783006",
          label: "Lano",
          description: "At least 40m",
          done: false,
        },
        {
          id: "id_it_1638476783007",
          label: "Climbing shoes",
          description: "",
          done: false,
        },
      ],
    },
  ];

  const [categories, setCategories] = useState(INITIAL_CATEGORIES);

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

  return (
    <React.Fragment>
      <Header></Header>
      <Content
        listOfCategories={categories}
        addCategory={addCategory}
      ></Content>
    </React.Fragment>
  );
}

export default App;
