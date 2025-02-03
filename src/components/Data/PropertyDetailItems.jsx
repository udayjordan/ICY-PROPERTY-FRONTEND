import React, { Fragment, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { RiHotelBedFill } from "react-icons/ri";
import { FaBath } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
// import defaultLogo from "../../assets/Blog1.jpg";
import { Link, useLocation } from "react-router-dom";
// import Loader from "./Loader";
import axios from "axios";
// import { setUnverifiedProperties } from "../redux/propertiesSlice";

const PropertyDetailItems = ({ property }) => {
  const [chosenPhoto, setChosenPhoto] = useState("");
  // const location = useLocation();
  // const property = location.state;
  const shortSize = property.propertyArea.toFixed(3);
  const properties = useSelector(
    (store) => store.properties.unverifiedProperties
  );
  const dispatch = useDispatch();
  const [verifyModal, setVerifyModal] = useState(false);

  const verifyProperty = async () => {
    try {
      await axios
        .post("http://80.65.208.60:5000//v1/property/update-property-status", {
          propertyId: property._id,
          status: "verified",
        })
        .then((res) => {
          if (res.status === 200) {
            setVerifyModal(true);
            property.verified = "verified";
            setTimeout(() => {
              setVerifyModal(false);
            }, 2000);
            console.log("verified property", property);
            const remainingProperties = properties.filter(
              (curr) => curr._id != property._id
            );
            // dispatch(setUnverifiedProperties(remainingProperties));

            console.log("Property updated successfully");
          }
        });
    } catch (error) {
      console.error(
        "Error occured while updating property status",
        error.message
      );
    }
  };
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <div className="w-full lg:w-auto m-0  flex flex-col bg-white dark:bg-black rounded-3xl  shadow-md my-[100px]">
        <div>
          <div className="py-2 px-2">
            <div className="w-auto p-1 ">
              {/* <p className="font-Poppins text-xs lg:text-lg lg:font-medium rounded-full text-[#22c55e]  absolute bg-white p-2 py-1 lg:px-6 mt-2 ml-2">
                                {state}
                            </p> */}
              <img
                className="h-60 md:h-72 lg:h-[25rem] xl:h-[30rem] w-full object-cover rounded-2xl"
                src={chosenPhoto || property.propertyImages[0]}
                alt="real estate"
              />
            </div>
            <div className="my-2 mx-1">
              <div className="flex overflow-scroll">
                {property?.propertyImages?.map((snap, index) => (
                  <img
                    onClick={() => setChosenPhoto(snap)}
                    alt="Properties"
                    key={index}
                    src={snap}
                    className="h-28 w-auto px-1 cursor-pointer"
                  />
                ))}
              </div>
            </div>
            <div className=" px-1 mt-2 mb-1">
              <div className="flex items-center mt-6">
                <div className="mr-2 md:mr-4 ">
                  <HiOutlineLocationMarker className="font-Poppins  text-ash text-sm md:text-lg lg:text-xl" />
                </div>
                <h1 className="font-Poppins text-sm md:text-lg lg:text-2xl text-ash capitalize ">
                  {property.propertyLocation.address}
                </h1>
              </div>
              <div className="flex flex-wrap justify-center my-2">
                {property.facilities?.map((feature, index) => (
                  <span
                    key={index}
                    className="font-Poppins text-center bg-yellow text-[8px] lg:text-[10px] mx-1 p-[2px] my-[2px] lg:my-0 px-2 rounded-full text-white"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-between px-4 md:mx-32 lg:mx-52 xl:mx-60 mb-3">
            <div className="flex items-center ">
              <RiHotelBedFill className="text-lg md:text-2xl lg:text-3xl text-yellow mr-1" />{" "}
              <p className="text-xs text-ash md:text-xl lg:text-xl">
                {property.bedRooms} Bed
              </p>
            </div>
            <div className="flex items-center ">
              <FaBath className="text-medium text-yellow mr-1 md:text-xl lg:text-2xl" />{" "}
              <p className="text-xs text-ash md:text-xl lg:text-xl">
                {property.bathRooms} Bath
              </p>
            </div>
            <div className="flex items-center ">
              <MdSpaceDashboard className="text-medium text-yellow mr-1 md:text-xl lg:text-2xl" />{" "}
              <p className="text-xs text-ash md:text-xl lg:text-xl">
                {property.propertyArea} sqft
              </p>
            </div>
          </div>
          <div className="flex justify-center px-4 md:mx-32 lg:mx-52 xl:mx-60 py-1 my-2 mb-16">
            <h1 className="font-Poppins text-md md:text-lg lg:text-xl text-white font-semibold py-1 px-5 bg-yellow rounded-lg">
              {`Rs ${property.propertyPrice.lb}-${property.propertyPrice.ub}`}
            </h1>
          </div>

          {/* <div>
                        <div className="flex justify-center items-center mb-10">
                            <hr className="w-20 md:w-30 lg:w-52 text-[#ebebeb]" />
                            <h1 className="font-Poppins uppercase font-bold  text-xl text-yellow mx-0 md:mx-10 text-center">
                                Broker's Details
                            </h1>
                            <hr className="w-20 md:w-30 lg:w-52 text-[#ebebeb]" />
                        </div>

                    </div> */}

          <div className="mx-8 mb-6 overflow-hidden">
            <div className="flex justify-center items-center mb-4">
              <hr className="w-20 md:w-30 lg:w-52 text-[#ebebeb]" />
              <h1 className="font-Poppins uppercase font-bold  text-xl text-yellow mx-0 md:mx-10 text-center">
                About this property
              </h1>
              <hr className="w-20 md:w-30 lg:w-52 text-[#ebebeb]" />
            </div>
            <p className="font-Poppins text-ash text-justify">
              {property.propertyDescription}
            </p>
          </div>

          {property?.verified === "unverified" && (
            <div className="flex flex-row justify-center py-10">
              <button
                onClick={() => {
                  verifyProperty();
                }}
                className="py-4 px-60 bg-yellow rounded-xl text-white font-bold text-[18px]"
              >
                Verify Property
              </button>
            </div>
          )}
        </div>
        {verifyModal && (
          <div className="w-1/3 h-1/2 bg-white shadow-2xl fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center rounded-2xl">
            <div className="flex flex-col justify-center items-center">
              <img
                src="https://res.cloudinary.com/kumarvivek/image/upload/v1730718322/success_dxtj1y.png"
                alt="success"
                width={140}
                height={140}
              />
              <div className="text-3xl text-green font-bold mt-6">
                Property Verified
              </div>
              <div className="text-3xl text-green font-bold">Successfully</div>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default PropertyDetailItems;
