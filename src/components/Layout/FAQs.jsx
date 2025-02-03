import React, { Fragment } from "react";

import FAQsItem from "../Data/FAQsItem";

const faqsData = [
  {
    id: "q1",
    que: "Can I list my property for rent or sale on this website?",
    ans: " Yes! Simply go to the List Property section, and fill in the necessary details like email, name, ownerdetails and property details to add your property.",
  },
  {
    id: "q2",
    que: "Are the properties verified?",
    ans: "We strive to ensure that listed properties are genuine. However, we recommend users verify details before making any commitments.",
  },
  {
    id: "q3",
    que: "Can I schedule a property visit?",
    ans: "Yes! Once you find a property you like, you can contact the seller/agent via the provided contact form to schedule a visit.",
  },
  {
    id: "q4",
    que: "Are there any additional charges apart from the listed property price?",
    ans: "Additional charges such as maintenance fees, registration fees, or taxes may apply. Please discuss these with the property owner or agent.",
  },
];

const FAQs = () => {
  const mappedList = faqsData.map((item) => (
    <FAQsItem key={item.id} id={item.id} que={item.que} ans={item.ans} />
  ));

  return (
    <Fragment>
      <section className="mx-auto bg-silver dark:bg-darkBg px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
        <h1 className="font-Poppins font-bold text-3xl text-center mb-10 dark:text-ash">
          Frequently Asked <span className="text-yellow">Questions</span>
        </h1>
        <div className="lg:mx-28 mx-0">{mappedList}</div>
      </section>
    </Fragment>
  );
};

export default FAQs;
