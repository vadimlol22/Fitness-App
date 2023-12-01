import clsx from "clsx";

import styles from "./styles.module.scss";

const Alert = ({ type = "success", text }) => {
  return <div className={clsx(styles.alert, styles[type])}>{text}</div>;
};

export default Alert;
