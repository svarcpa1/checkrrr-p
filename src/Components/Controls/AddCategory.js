import React from "react";
import ReactDOM from "react-dom";

import styles from "./AddCategory.module.css";

import Card from "../UI/Card";
import Label from "../UI/Label";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Modal from "../UI/Modal";

import { useState } from "react";

const AddCategory = (props) => {
  const [userInput, setUserinput] = useState({
    label: "",
    description: "",
  });

  const [isError, sestIsError] = useState({
    error: false,
    errorMessage: "",
  });

  const addCategoryHandler = (event) => {
    // prevents default behavior = request not send, page not reloaded
    event.preventDefault();

    //validation (trim() to prevent white spaces)
    if (userInput.label.trim() === "") {
      sestIsError({
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
    sestIsError({
      error: false,
      errorMessage: "",
    });
  };

  return (
    <React.Fragment>
      {isError.error && (
        <Modal
          text={isError.errorMessage}
          title="Error"
          closeModalHandler={closeModal}
        ></Modal>
      )}

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
    </React.Fragment>
  );
};

export default AddCategory;
