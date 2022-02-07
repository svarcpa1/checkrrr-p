import React from "react";
import { useState } from "react";

import styles from "./AddCategory.module.css";

import Card from "../../UI/Card";
import Label from "../../UI/Label";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import ErrorModal from "../../UI/ErrorModal";

const AddCategory = (props) => {
  const [userInput, setUserinput] = useState({
    label: "",
    description: "",
  });

  const [isError, setIsError] = useState({
    error: false,
    errorMessage: "",
  });

  const [isAddingCategoryMode, setIsAddingCategoryMode] = useState(false);

  const addCategoryHandler = (event) => {
    // prevents default behavior = request not send, page not reloaded
    event.preventDefault();

    //validation (trim() to prevent white spaces)
    if (userInput.label.trim() === "") {
      setIsError({
        error: true,
        errorMessage: "The Label is mandatory",
      });
    } else {
      //adding category
      props.addCategory(userInput.label, userInput.description);

      // setting value back to empty after submit
      // two-way binding
      setUserinput({
        label: "",
        description: "",
      });
    }
  };

  const labelChangeHandler = (event) => {
    setUserinput((previousState) => {
      return {
        ...previousState,
        label: event.target.value,
      };
    });
  };

  const descriptionChangeHandler = (event) => {
    setUserinput((previousState) => {
      return {
        ...previousState,
        description: event.target.value,
      };
    });
  };

  const closeModal = (event) => {
    setIsError({
      error: false,
      errorMessage: "",
    });
  };

  const newCategoryHandler = () => {
    setIsAddingCategoryMode(!isAddingCategoryMode);
  };

  return (
    <React.Fragment>
      {isError.error && (
        <ErrorModal
          text={isError.errorMessage}
          title="Error"
          closeModalHandler={closeModal}
        ></ErrorModal>
      )}

      <Button
        text="New Category"
        className={styles.new_category_button}
        submitHandler={newCategoryHandler}
      ></Button>

      {isAddingCategoryMode && (
        <Card
          className={styles.add_category}
          children={
            <form onSubmit={addCategoryHandler}>
              <Label text="Label of the category:" for="label"></Label>
              <Input
                type="text"
                placeholder="Bike trip"
                // two-way binding
                value={userInput.label}
                changeHandler={labelChangeHandler}
                id="label"
              ></Input>
              <Label text="Description category:" for="description"></Label>
              <Input
                type="text"
                placeholder="The list of thing to get to MTB bike trip"
                // two-way binding
                value={userInput.description}
                changeHandler={descriptionChangeHandler}
                id="description"
              ></Input>
              <Button
                text="Submit"
                type="submit"
                className={styles.button_add_category}
              ></Button>
            </form>
          }
        ></Card>
      )}
    </React.Fragment>
  );
};

export default AddCategory;
