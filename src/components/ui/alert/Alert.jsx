import cn from "clsx";

import styles from "./styles.module.scss";

const Alert = ({ type = "success", text }) => {
  return <div className={cn(styles.alert, styles[type])}>{text}</div>;
};

export default Alert;
