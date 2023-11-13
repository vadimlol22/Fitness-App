import { FiArrowLeft } from "react-icons/fi";

import { useAuth } from "../../../hooks/useAuth";
import Hamburger from "../hamburger/Hamburger";
import styles from "./styles.module.scss";

const Header = ({ backLink }) => {
  const { isAuth } = useAuth();

  return (
    <header className={styles.header}>
      <button onClick={() => {}}>
        <FiArrowLeft />
      </button>
      <Hamburger />
    </header>
  );
};

export default Header;
