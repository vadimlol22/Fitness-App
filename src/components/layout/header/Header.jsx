import { FaArrowLeft } from "react-icons/fa";
import { SlUser } from "react-icons/sl";

import Hamburger from "../hamburger/Hamburger";
import styles from "./styles.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

const Header = ({ backLink = "/" }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { isAuth } = useAuth();

  return (
    <header className={styles.header}>
      {isAuth && (
        <>
          {pathname === "/" && isAuth ? (
            <button
              onClick={() => {
                navigate("/profile");
              }}
            >
              <SlUser />
            </button>
          ) : (
            <button
              onClick={() => {
                navigate(isAuth ? backLink : "/auth");
              }}
            >
              <FaArrowLeft />
            </button>
          )}
          <Hamburger />
        </>
      )}
    </header>
  );
};

export default Header;
