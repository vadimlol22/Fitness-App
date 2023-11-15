import clsx from "clsx";
import { Link } from "react-router-dom";

import styles from "./styles.module.scss";
import { menu } from "./menu.data";

const Menu = ({ isShow }) => {
  const logoutHandler = () => {};

  return (
    <nav
      className={clsx(styles.menu, {
        [styles.show]: isShow,
      })}
    >
      <ul>
        {menu.map((item, index) => (
          <li key={`_menu_${index}`}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
        <li>
          <button onClick={logoutHandler}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
