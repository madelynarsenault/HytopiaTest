import React, { useState, useEffect, useRef } from 'react';
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const SettingsToggle = ({ title, items, onChange, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      const percentage = (currentIndex / (items.length - 1)) * 100;
      sliderRef.current.style.setProperty('--slider-progress', `${percentage}%`);
    }
  }, [currentIndex, items.length]);

  const handleSliderChange = (event) => {
    const newIndex = Number(event.target.value);
    setCurrentIndex(newIndex);
    onChange(newIndex);
  };

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    onChange(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    onChange(newIndex);
  };

  const buttonClasses = "text-white h-10 w-10 sm:h-12 sm:w-12 bg-white bg-opacity-10 rounded-xl flex justify-center items-center hover:bg-opacity-30";
  const mainContainerClasses = "w-full sm:w-[650px] md:w-[750px] lg:w-[857px] h-[60px] sm:h-[65px] lg:h-[72px] flex items-center justify-between p-2 sm:p-3 md:p-4 mb-2.5 rounded-[10px] border border-customWhite/10 shadow-lg backdrop-blur-[50px]";
  const sliderContainerClasses = "relative w-full sm:w-[450px] md:w-[500px] lg:w-[553px] h-[40px] sm:h-[45px] lg:h-[50px] rounded-2xl";
  const currentItemClasses = `w-full sm:w-[350px] md:w-[400px] lg:w-[431px] h-[40px] sm:h-[45px] lg:h-[50px] rounded-xl text-sm sm:text-base md:text-lg lg:text-xl font-bold flex items-center justify-center ${items[currentIndex] === 'Off' ? 'bg-toggleDark text-white text-opacity-50' : 'bg-white text-primary'}`;

  return (
    <div className={mainContainerClasses}>
      <div className="text-base sm:text-lg md:text-xl font-bold text-white">{title}</div>
      <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
        {title === "Mipmap Levels" || title === 'Render Distance' ? (
          <div className={sliderContainerClasses}>
            <input
              ref={sliderRef}
              type="range"
              min="0"
              max={items.length - 1}
              value={currentIndex}
              onChange={handleSliderChange}
              className="slider"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-sm sm:text-base md:text-lg font-bold text-white">
              {items[currentIndex]}
            </div>
          </div>
        ) : (
          <>
            <button onClick={handlePrevious} className={buttonClasses}>
              <IoChevronBackOutline size={15} />
            </button>
            <div className={currentItemClasses}>
              {items[currentIndex]}
            </div>
            <button onClick={handleNext} className={buttonClasses}>
              <IoChevronForwardOutline size={15} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default SettingsToggle;
