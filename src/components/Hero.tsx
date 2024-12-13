import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[40vh] bg-gray-900">
      <div className="absolute inset-0 bg-black/50"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://www.pahnepars.ir/wp-content/uploads/2024/12/bg-profile-dariush-heidaryan-1.png')"
        }}
      ></div>
    </div>
  );
};

export default Hero;