import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import AgentsList from "../components/Layout/AgentsList";
import FAQs from "../components/Layout/FAQs";
import Footer from "../components/Layout/Footer";

const Agent = () => {
  const divRef = useRef();
  const mode = useSelector(store => store.properties.mode);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <div className={`${mode === "light" ? "bg-silver" : "bg-black"} pt-20`} ref={divRef} >
      <AgentsList />
      <FAQs />
      <Footer />
    </div >
  );
};

export default Agent;
