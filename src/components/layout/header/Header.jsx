import { FaArrowLeft } from "react-icons/fa";

import { useAuth } from "../../../hooks/useAuth";
import Hamburger from "../hamburger/Hamburger";
import styles from "./styles.module.scss";

const Header = ({ backLink }) => {
  const { isAuth } = useAuth();

  return (
    <header className={styles.header}>
      <button onClick={() => {}}>
        <FaArrowLeft />
      </button>
      <Hamburger />
    </header>
  );
};

export default Header;
