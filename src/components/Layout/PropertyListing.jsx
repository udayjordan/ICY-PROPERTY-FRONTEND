import React, { Fragment, useEffect, useState } from "react";
import PropertiesItem from "../Data/PropertiesItem";
import Loader from "../UI/Loader";
import Error from "../UI/Error";
import { useDispatch, useSelector } from "react-redux";
import { setAllProperties } from "../../redux/propertiesSlice"; // New action to set all properties
import axios from "axios";

const PropertyListing = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const allProperties = useSelector((store) => store.properties.allProperties); // Select all properties

  const fetchProperties = async () => {
    setError(false);
    setIsFetching(true);
    try {
      const endpoint = "https://icy-property-backend-1.onrender.com/v1/property/all-properties";

      await axios.get(endpoint).then((res) => {
        if (res.status === 200) {
          dispatch(setAllProperties(res.data)); // Dispatch all properties to store
        }
      });
    } catch (error) {
      setError(true);
      console.error("Error occurred while fetching properties:", error.message);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const mappedList = allProperties.map((property) => (
    <PropertiesItem key={property._id} property={property} />
  ));

  return (
    <Fragment>
      <section className="mx-auto bg-silver dark:bg-darkBg px-10 md:px-16 lg:px-20 py-20 pt-20 md:py-16">
        <div className="px-auto lg:px-32">
          <h1 className="font-Poppins font-bold text-4xl text-center tracking-wider mb-4 dark:text-ash">
            List of <span className="text-yellow">All Properties</span>
          </h1>
        </div>
        <div>
          <ul className="flex justify-center flex-col lg:flex-row lg:flex-wrap">
            {isFetching && <Loader />}
            {!isFetching && !error && mappedList}
            {!isFetching && mappedList?.length === 0 && (
              <Error message="No properties found." />
            )}
            {error && !isFetching && (
              <Error message="Error occurred while fetching properties." />
            )}
          </ul>
        </div>
      </section>
    </Fragment>
  );
};

export default PropertyListing;
