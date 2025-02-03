import React, { useState, useEffect } from "react";
import HeroImage from "../../assets/HeroImage.svg";
import HeroForm from "../Forms/HeroForm";

const Hero = () => {
  const words = ["Property", "Home", "Estate"];
  const [currentWord, setCurrentWord] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const fullWord = words[wordIndex];

      if (!isDeleting) {
        // Typing
        if (currentWord.length < fullWord.length) {
          setCurrentWord(fullWord.slice(0, currentWord.length + 1));
        } else {
          // Finished typing, start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (currentWord.length > 0) {
          setCurrentWord(currentWord.slice(0, -1));
        } else {
          // Finished deleting, move to next word
          setIsDeleting(false);
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }
    };

    const typingSpeed = isDeleting ? 50 : 100;
    const timer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, wordIndex]);

  return (
    <section className="mt-16 w-full bg-silver dark:bg-darkBg h-auto pb-10 lg:pt-6">
      <div className="lg:flex lg:justify-between px-10">
        <div className="lg:px-16 pt-20 lg:pr-0 lg:w-1/2">
          <h2 className="font-Poppins text-3xl font-semibold mb-4 text-gray-900">
            Time to Meet Your
          </h2>
          <h1 className="text-5xl mb-4 text-amber1 font-bold tracking-widest font-Poppins">
            New
          </h1>
          <h1 className="text-5xl mb-4 text-amber1 font-bold tracking-widest font-Poppins">
            {currentWord}
            <span className="animate-pulse">|</span>
          </h1>
          <p className="font-Poppins text-ash mb-6">
            Discover, rent, or buy – effortlessly with <b>ICY Properties.</b>
          </p>
          <div className="flex items-center mb-10">
            <a href="mailto:Vikastiwari1814@gmail.com">
              <button className="bg-amber1 text-white text-base p-3 px-7 rounded-lg mr-6 shadow-lg">
                Contact Us
              </button>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-9/12 xl:w-full lg:px-16 lg:pl-0 lg:pt-20">
          <img src={HeroImage} alt="Hero" className="w-auto h-auto " />
        </div>
      </div>
      <HeroForm />
    </section>
  );
};

export default Hero;
