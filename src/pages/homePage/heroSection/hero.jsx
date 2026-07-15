import React, { useState, useEffect } from 'react';

const HeroSlider = () => {
  const images = [
    '/img/slide1.PNG',
    '/img/slide2.PNG',
    '/img/slide3.PNG',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // ৪ সেকেন্ড পর পর ইমেজ পরিবর্তনের লজিক
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval); // কম্পোনেন্ট আনমাউন্ট হলে টাইমার পরিষ্কার করবে
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* স্লাইডার কন্টেইনার */}
      <div 
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img 
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* ডট নেভিগেশন */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-white scale-125' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;