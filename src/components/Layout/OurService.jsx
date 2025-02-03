import React, { Fragment } from "react";
import OurServiceImage from "../../assets/OurService.png";
import { MdOutlineEast } from "react-icons/md";
import { MdOutlineRemoveCircle } from "react-icons/md";

const OurService = () => {
  return (
    <Fragment>
      <section className="mx-auto bg-silverLite dark:bg-darkBg px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="px-auto lg:px-10 lg:mr-6 md:pl-0 lg:pl-0">
            <img className="w-full h-1/2" src={OurServiceImage} alt="Scraper" />
          </div>
          <div className="mt-10 lg:mt-0 lg:mx-10">
            <h3 className="flex items-center font-Poppins text-ash  text-1xl ">
              <MdOutlineEast className="text-ash mr-8" />
              OUR SERVICES
            </h3>

            <h1 className="font-Poppins text-yellow font-bold text-2xl py-2">
              Your Comfort Is Our Priority
            </h1>
            <p className="font-Poppins text-ash mb-4">
              At ICY Properties, we offer seamless buying, selling, renting, and expert property services to make your real estate experience smooth and hassle-free.
            </p>
            <div className="flex mt-2">
              <div className=" pr-5">
                <h2 className="flex items-center text-ash mb-2">
                  <MdOutlineRemoveCircle className="text-yellow mr-2" />Property Buying & Selling
                </h2>
                <h2 className="flex items-center text-ash ">
                  <MdOutlineRemoveCircle className="text-yellow mr-2" />
                  Rentals Made Easy
                </h2>
              </div>
              <div>
                <h2 className="flex items-center text-ash mb-2">
                  <MdOutlineRemoveCircle className="text-yellow mr-2" />
                  Property Listing & Marketing
                </h2>
                <h2 className="flex items-center text-ash">
                  <MdOutlineRemoveCircle className="text-yellow mr-2" />
                  Expert Consultation & Support
                </h2>
              </div>
            </div>
            <div className=" pt-6">
              <button className=" bg-yellow text-white font-bold text-md px-8 py-3 rounded-lg shadow-lg">
                See More
              </button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default OurService;
