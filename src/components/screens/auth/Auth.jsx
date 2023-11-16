import { useForm } from "react-hook-form";
import { useState } from "react";

import Layout from "../../layout/Layout";
import Button from "../../ui/button/button";
import Field from "../../ui/field/Field";
import Loader from "../../ui/Loader";

import styles from "./styles.module.scss";

const isLoading = false;
const isLoadingAuth = false;

const Auth = () => {
  const [type, setType] = useState("auth");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Layout heading="Sign In" bgImage={"/images/auth-bg.png"} />
      <div className="wrapper-inner-page">
        {(isLoading || isLoadingAuth) && <Loader />}
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
                setType("auth");
              }}
            >
              Sign In
            </Button>
            <Button
              clickHandler={() => {
                setType("reg");
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
