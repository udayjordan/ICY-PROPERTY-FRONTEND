import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import LoginForm from "../components/Forms/LoginForm";
import Footer from "../components/Layout/Footer";

const Login = () => {
  const divRef = useRef();
  const mode = useSelector(store => store.properties.mode);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <>
      <section className={`mx-auto ${mode === "light" ? "bg-silver" : "bg-black"} pb-80`} ref={divRef}>
        <LoginForm />
      </section>
      <Footer />
    </>
  );
};

export default Login;
