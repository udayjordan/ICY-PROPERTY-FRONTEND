import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
//import NotFound from "../components/Layout/NotFound";
import SignupForm from "../components/Forms/SignupForm";
import Footer from "../components/Layout/Footer";

const Signup = () => {
  const divRef = useRef();
  const mode = useSelector(store => store.properties.mode);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <>
      <section className={`mx-auto ${mode === "light" ? "bg-silver" : "bg-black"} pb-80`} ref={divRef}>
        <SignupForm />
      </section>
      <Footer />
    </>
  );
};

export default Signup;
