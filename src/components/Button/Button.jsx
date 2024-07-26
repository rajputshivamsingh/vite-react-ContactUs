import styles from "./Button.module.css";
const Button = (props) => {
  const {isOutline, icon, text,...rest} = props;
  return (
    <>
    <button
      {...rest}
    className={isOutline ? styles.outlines_btn: styles.primary_btn}>
      {icon}
      {text}
    </button>
    </>
  )
}

export default Button
