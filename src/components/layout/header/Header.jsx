import { FaArrowLeft } from "react-icons/fa";
import { SlUser } from "react-icons/sl";

import { useAuth } from "../../../hooks/useAuth";
import Hamburger from "../hamburger/Hamburger";
import styles from "./styles.module.scss";
import { useLocation, useNavigate } from "react-router-dom";

const Header = ({ backLink = "" }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { isAuth } = useAuth();

  return (
    <header className={styles.header}>
      {pathname !== "/" ? (
        <button
          onClick={() => {
            navigate(backLink);
          }}
        >
          <FaArrowLeft />
        </button>
      ) : (
        <button
          onClick={() => {
            navigate(isAuth ? "/profile" : "/auth");
          }}
        >
          <SlUser />
        </button>
      )}
      <Hamburger />
    </header>
  );
};

export default Header;
