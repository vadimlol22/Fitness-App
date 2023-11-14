import clsx from "clsx";

import Header from "./header/Header";
import styles from "./styles.module.scss";

const Layout = ({ children, bgImage, heading = "", backLink = "/" }) => {
  return (
    <section
      className={clsx(styles.wrapper, {
        [styles.otherPage]: !!heading,
      })}
      styles={{ backgroundImage: `url(${bgImage})` }}
    >
      <Header backLink={backLink} />

      {heading && <h1 className={styles.heading}>{heading}</h1>}

      {children && <div>{children}</div>}
    </section>
  );
};

export default Layout;
