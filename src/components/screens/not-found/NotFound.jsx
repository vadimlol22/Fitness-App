import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Layout from "../../layout/Layout";
import { useAuth } from "../../../hooks/useAuth";

const NotFound = () => {
  const { isAuth } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/auth");
    }
  }, []);

  return (
    <>
      <Layout heading="Page not found" />
      <div className="wrapper-inner-page">404 page not found</div>
    </>
  );
};

export default NotFound;
