import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import BlogPosts from "../components/Layout/BlogPosts";
import FAQs from "../components/Layout/FAQs";
import Footer from "../components/Layout/Footer";

const Blog = () => {
  const divRef = useRef();
  const mode = useSelector(store => store.properties.mode);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <div ref={divRef} className={`${mode === "light" ? "bg-silver" : "bg-black"} pt-20`}>
      <BlogPosts />
      <FAQs />
      <Footer />
    </div>
  );
};

export default Blog;
