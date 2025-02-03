import React, { Fragment, useRef } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import FAQs from "../components/Layout/FAQs";

const ListingDetail = () => {
  const divRef = useRef();
  const location = useLocation();
  const property = location.state;

  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleCarouselChange = (direction) => {
    if (direction === "next") {
      setCurrentIndex((prevIndex) =>
        prevIndex === property.propertyImages.length - 1 ? 0 : prevIndex + 1
      );
    } else if (direction === "prev") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? property.propertyImages.length - 1 : prevIndex - 1
      );
    }
  };

  const formatPrice = (price) => {
    return price >= 100000 ? `${(price / 100000).toFixed(1)} Lakh` : price;
  };

  const {
    propertyLocation,
    propertyImages,
    propertyPrice,
    bedRooms,
    bathRooms,
  } = property;

  return (
    <Fragment>
      <section
        ref={divRef}
        className="mx-auto bg-silver dark:bg-darkBg px-4 md:px-16 lg:px-20 pt-24 md:pt-28"
      >
        <div className="property-details max-w-4xl mx-auto">
          <h1 className="font-Poppins font-bold text-3xl text-center mb-10 dark:text-ash">
            Property <span className="text-yellow">Details</span>
          </h1>

          {/* Image Carousel */}
          <div className="carousel relative w-full h-96 rounded-lg overflow-hidden mb-8">
            <div
              className="carousel-images flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {propertyImages.map((image, index) => (
                <div
                  key={index}
                  className="carousel-image-wrapper flex-shrink-0 w-full h-full flex items-center justify-center"
                >
                  <img
                    src={image}
                    alt={`Property Image ${index + 1}`}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              ))}
            </div>

            {/* Carousel Navigation */}
            <div
              className="absolute top-1/2 left-2 transform -translate-y-1/2 
              cursor-pointer"
            >
              <button
                className="text-white text-3xl bg-black bg-opacity-50 w-12 h-12 
                flex items-center justify-center hover:bg-opacity-75 transition-all"
                onClick={() => handleCarouselChange("prev")}
              >
                &#8249;
              </button>
            </div>
            <div
              className="absolute top-1/2 right-2 transform -translate-y-1/2 
              cursor-pointer"
            >
              <button
                className="text-white text-3xl bg-black bg-opacity-50 w-12 h-12 
                flex items-center justify-center hover:bg-opacity-75 transition-all"
                onClick={() => handleCarouselChange("next")}
              >
                &#8250;
              </button>
            </div>
          </div>

          {/* Property Information */}
          <div className="property-info bg-yellow-50 dark:bg-gray-800 border-2 border-yellow-500 dark:border-gray-700 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-semibold text-darkBg dark:text-yellow mb-4 pb-2">
              Location: {propertyLocation?.address || "Unknown Location"}
            </h2>
            <div className="space-y-2">
              <p className="text-lg text-darkBg dark:text-yellow pb-2">
                <span className="font-medium text-darkBg dark:text-yellow">
                  Price:
                </span>{" "}
                Rs {formatPrice(propertyPrice.lb)} - Rs{" "}
                {formatPrice(propertyPrice.ub)}
              </p>
              <p className="text-lg text-darkBg dark:text-yellow pb-2">
                <span className="font-medium text-darkBg dark:text-yellow">
                  Bedrooms:
                </span>{" "}
                {bedRooms}
              </p>
              <p className="text-lg text- dark:text-yellow">
                <span className="font-medium text-darkBg dark:text-yellow">
                  Bathrooms:
                </span>{" "}
                {bathRooms}
              </p>
            </div>

            {/* Contact Information */}
            <div className="mt-6 pt-4 border-t-2 border-yellow dark:border-gray-700">
              <h3 className="font-semibold text-xl text-darkBg dark:text-yellow mb-2">
                Contact Information
              </h3>
              <p className="text-lg text-darkBg dark:text-yellow">
                For more details, contact:{" "}
                <a
                  href="mailto:Vikastiwari1814@gmail.com"
                  className="font-extrabold text-black dark:text-yellow hover:underline"
                >
                  Vikastiwari1814@gmail.com
                </a>{" "}
                or
                <strong className="text-darkBg dark:text-yellow">
                  +91 99532-46875
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>
      <FAQs />
      <Footer />
    </Fragment>
  );
};

export default ListingDetail;
