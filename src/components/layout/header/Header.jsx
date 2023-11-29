import { FaArrowLeft } from "react-icons/fa";
import { SlUser } from "react-icons/sl";

import Hamburger from "../hamburger/Hamburger";
import styles from "./styles.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

const Header = ({ backLink = "" }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { isAuth } = useAuth();

  return (
    <header className={styles.header}>
      {pathname !== "/" || pathname !== "/auth" ? (
        <button
          onClick={() => {
            navigate(isAuth ? backLink : "/auth");
          }}
        >
          <FaArrowLeft />
        </button>
      ) : (
        <button
          onClick={() => {
            navigate("/profile");
          }}
        >
          <SlUser />
        </button>
      )}
      {isAuth && <Hamburger />}
    </header>
  );
};

export default Header;
