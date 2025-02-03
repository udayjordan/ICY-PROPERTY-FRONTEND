import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropertiesItem from "../Data/PropertiesItem";
import Loader from "../UI/Loader";
import Error from "../UI/Error";
import { useDispatch, useSelector } from "react-redux";
import { setAllProperties } from "../../redux/propertiesSlice";
import axios from "axios";

const Properties = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const allProperties = useSelector((store) => store.properties.allProperties);

  const fetchProperties = async () => {
    setError(null); // Reset error state before fetching
    setIsFetching(true); // Indicate loading state

    try {
      const response = await axios.get(
        "https://icy-property-backend-1.onrender.com/v1/property/all-properties"
      );
      if (response.status === 200 && Array.isArray(response.data)) {
        console.log("All properties fetched:", response.data);
        dispatch(setAllProperties(response.data)); // Update Redux state
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (err) {
      setError("Error occurred while fetching properties. Please try again.");
      console.error("Fetch error:", err.message);
    } finally {
      setIsFetching(false); // Reset loading state
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const mappedList = allProperties?.map((property) => (
    <PropertiesItem key={property._id} property={property} />
  ));

  return (
    <Fragment>
      <section className="mx-auto bg-silver dark:bg-darkBg px-10 md:px-16 lg:px-20 py-20">
        <div className="px-auto lg:px-32 mb-6">
          <h1 className="font-Poppins font-bold text-3xl text-center mb-4 dark:text-ash">
            Our Most Popular <span className="text-yellow">Trending</span>
          </h1>
          <p className="text-center text-ash">
            Discover our most trending properties, handpicked for their prime
            locations, exceptional value, and unmatched popularity among buyers
            and renters.
          </p>
        </div>
        <ul className="flex justify-center flex-col lg:flex-row lg:flex-wrap">
          {isFetching && <Loader />}
          {!isFetching && error && <Error message={error} />}
          {!isFetching && !error && mappedList}
          {!isFetching && !error && mappedList?.length === 0 && (
            <Error message="No properties found." />
          )}
        </ul>
        <div className="flex items-center justify-center px-4 pb-3 pt-5">
          <Link to="/listings">
            <button className="font-Poppins bg-silverLite border-2 border-yellow text-yellow font-medium text-base px-8 py-2 rounded-md shadow-lg hover:bg-yellow hover:text-white">
              Explore All
            </button>
          </Link>
        </div>
      </section>
    </Fragment>
  );
};

export default Properties;
