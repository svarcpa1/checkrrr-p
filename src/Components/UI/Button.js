import styles from "./Button.module.css";

const Button = (props) => {
  const classes = styles.button_comp + " " + props.className;

  return (
    <button
      className={classes + " " + styles.button}
      onClick={props.submitHandler}
      type={props.type || "button"}
    >
      {props.text}
    </button>
  );
};

export default Button;
