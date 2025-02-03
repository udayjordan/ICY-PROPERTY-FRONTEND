import React, { useEffect, useRef } from "react";
import Footer from "../components/Layout/Footer";
import PropertyListing from "../components/Layout/PropertyListing";
import FAQs from "../components/Layout/FAQs";
import { useSelector } from "react-redux";

const Listings = () => {
  const divRef = useRef();

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });
  return (
    <div className={`bg-silver dark:bg-darkBg pt-20`} ref={divRef}>
      <PropertyListing />
      <FAQs />
      <Footer />
    </div>
  );
};

export default Listings;
