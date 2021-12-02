import styles from "./Input.module.css";

const Input = (props) => {
  const classes = props.className;
  return (
    <input
      className={classes}
      placeholder={props.placeholder}
      onChange={props.changeHandler}
      type={props.type}
      value={props.value}
      id={props.id}
    ></input>
  );
};

export default Input;
