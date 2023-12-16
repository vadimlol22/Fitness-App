import Layout from "../../layout/Layout";
import Button from "../../ui/button/button";
import Field from "../../ui/field/Field";
import Loader from "../../ui/Loader";
import { useAuthPage } from "./useAuthPage";

import styles from "./styles.module.scss";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

const Auth = () => {
  const { errors, handleSubmit, isLoading, onSubmit, register, setType } =
    useAuthPage();

  // const { isAuth } = useAuth();

  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (isAuth) {
  //     navigate("/");
  //   }
  // }, [isAuth, navigate]);

  return (
    <>
      <Layout heading="Sign In" bgImage={"/images/auth-bg.png"} />
      <div className="wrapper-inner-page">
        {isLoading && <Loader />}
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field
            error={errors?.email?.message}
            name="email"
            register={register}
            options={{
              required: "Email is required",
            }}
            type="text"
            placeholder="email"
          />
          <Field
            error={errors?.password?.message}
            name="password"
            autoComplete="off"
            register={register}
            options={{
              required: "Password is required",
            }}
            type="password"
            placeholder="password"
          />
          <div className={styles.wrapperButtons}>
            <Button
              clickHandler={() => {
                setType("login");
              }}
            >
              Sign In
            </Button>
            <Button
              clickHandler={() => {
                setType("register");
              }}
            >
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Auth;
