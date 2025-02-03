import React from "react";
import { Link } from "react-router-dom";
import { RiHotelBedFill } from "react-icons/ri";
import { FaBath } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";

const PropertiesItem = ({ property }) => {
  if (!property) return null; // Handle missing property data

  const {
    _id,
    propertyLocation,
    propertyImages,
    propertyPrice,
    bedRooms,
    bathRooms,
  } = property;

  const formatPrice = (price) => {
    if (price >= 10000000) {
      return `${(price / 10000000).toFixed(1)} Crore`;
    } else if (price >= 100000) {
      return `${(price / 100000).toFixed(1)} Lakh`;
    } else if (price >= 1000) {
      return `${(price / 1000).toFixed(1)} K`;
    }
    return price;
  };

  return (
    <li className="w-auto lg:w-1/4 m-2 flex flex-col bg-white dark:bg-black rounded-3xl shadow-md">
      <div>
        <div className="py-2 px-2">
          <div className="w-auto p-1">
            <img
              className="h-60 lg:h-40 xl:h-52 w-full object-cover rounded-2xl"
              src={propertyImages[0]}
              alt="real estate"
            />
          </div>
          <div className="flex px-1 mt-2 mb-1">
            <div className="mr-1">
              <HiOutlineLocationMarker className="font-Poppins text-ash" />
            </div>
            <Link to={{ pathname: `listings/${_id}`, state: property }}>
              <div className="truncate">
                <h1 className="font-Poppins text-xs text-ash truncate capitalize">
                  {propertyLocation?.address || "Unknown Location"}
                </h1>
              </div>
            </Link>
          </div>
        </div>

        <div className="flex justify-between px-4 mb-3">
          <div className="flex items-center">
            <RiHotelBedFill className="text-medium text-yellow mr-1" />
            <p className="text-xs text-ash">{bedRooms} Bed</p>
          </div>
          <div className="flex items-center">
            <FaBath className="text-medium text-yellow mr-1" />
            <p className="text-xs text-ash">{bathRooms} Bath</p>
          </div>
        </div>

        <div className="flex flex-wrap justify-between px-4 pb-3 mb-4">
          <Link to={{ pathname: `listings/${_id}`, state: property }}>
            <button className="bg-yellow text-ash font-bold text-xs px-4 py-2 rounded-lg shadow-lg">
              View Details
            </button>
          </Link>
          <h1 className="font-Poppins text-md text-yellow font-semibold pl-1 py-1">
            {`Rs ${formatPrice(propertyPrice.lb)} - Rs ${formatPrice(
              propertyPrice.ub
            )}`}
          </h1>
        </div>
      </div>
    </li>
  );
};

export default PropertiesItem;
