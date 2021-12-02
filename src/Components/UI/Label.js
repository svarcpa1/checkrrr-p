import styles from "./Label.module.css";

const Label = (props) => {
  const classes = props.className;
  return (
    <label className={classes} htmlFor={props.for}>
      {props.text}
    </label>
  );
};

export default Label;
