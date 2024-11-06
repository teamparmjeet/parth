"use client";
import { useState } from 'react';

const ReadMore = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full border-gray-100 border mt-5">
      {/* Tab Header */}
      <div className="flex bg-[#e6ecfc]  py-3 px-5 font-bold">
        Description
      </div>

      {/* Description Content */}
      <div className="p-4">
        <p
          className={`text-sm ${!isExpanded ? 'line-clamp-2' : ''}`}
        >
          is a premium residential plots project located on Ajmer Road. It offers well-planned plots in a rapidly developing area, ideal for those seeking to build their dream homes or make a sound investment. The project is designed to provide a blend of modern amenities and serene surroundings, making it a perfect choice for quality living.
        </p>

        {/* Read More/Read Less Button */}
        <button
          className="text-blue-500 text-sm mt-2"
          onClick={toggleReadMore}
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default ReadMore;
