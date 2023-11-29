import clsx from "clsx";

import Header from "./header/Header";
import styles from "./styles.module.scss";
import { useCheckToken } from "../../hooks/useCheckToken";

const Layout = ({ children, bgImage, heading = "", backLink = "/" }) => {
  useCheckToken();

  return (
    <section
      className={clsx(styles.wrapper, {
        [styles.otherPage]: !!heading,
      })}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Header backLink={backLink} />

      {heading && <h1 className={styles.heading}>{heading}</h1>}

      {children && <div>{children}</div>}
    </section>
  );
};

export default Layout;
