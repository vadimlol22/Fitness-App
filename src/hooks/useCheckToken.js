import Cookies from "js-cookie";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import { TOKEN } from "../app.constants";
import { useAuth } from "./useAuth";

export const useCheckToken = () => {
  const { pathname } = useLocation();
  const { isAuth, setIsAuth } = useAuth();

  useEffect(() => {
    const token = Cookies.get(TOKEN);

    if (!token) {
      setIsAuth(false);
    }
  }, [pathname, isAuth]);
};
