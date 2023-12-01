import clsx from "clsx";

import styles from "./styles.module.scss";

const Button = ({ children, clickHandler = null, size = "xl" }) => {
  return (
    <div className={styles.wrapper}>
      <button
        className={clsx(styles.button, styles[size])}
        onClick={clickHandler}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
