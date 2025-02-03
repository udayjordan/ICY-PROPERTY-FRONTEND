import React, { Fragment } from "react";

const PurposeItem = ({ id, icon, title, description }) => {
  return (
    <Fragment>
      <li className="text-center m-4 font-Poppins flex flex-col bg-white dark:bg-black rounded-2xl  shadow-md">
        <div className="py-16 px-10">
          <div className="flex items-center justify-center pb-6 text-yellow text-6xl border-yellow outline-4 rounded-lg">
            {icon}
          </div>
          <div className="pb-6">
            <h1 className="text-2xl font-medium dark: text-white">{title}</h1>
          </div>
          <div>
            <p className="text-ash text-base">{description}</p>
          </div>
        </div>
      </li>
    </Fragment>
  );
};

export default PurposeItem;
