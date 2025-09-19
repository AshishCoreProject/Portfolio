import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    "/Images/frondend.jpg",
    "/Images/backend.jpg",
    "/Images/MobileApp.jpg",
    "/Images/Webapp.jpg",
    "/Images/fullStack.jpg"
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full mb-10 mx-auto overflow-hidden rounded-2xl shadow-lg">
      {/* Images */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className="w-full flex-shrink-0 object-cover"
          />
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 
             bg-white/70 text-gray-800 hover:bg-white 
             dark:bg-gray-800/70 dark:text-white dark:hover:bg-gray-700 
             p-2 rounded shadow-md transition">
        <ChevronLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 
             bg-white/70 text-gray-800 hover:bg-white 
             dark:bg-gray-800/70 dark:text-white dark:hover:bg-gray-700 
             p-2 rounded shadow-md transition"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
