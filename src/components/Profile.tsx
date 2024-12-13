import React from 'react';

const Profile = () => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <img
        src="https://www.pahnepars.ir/wp-content/uploads/2024/12/dariushHeidaryan.jpg"
        alt="Profile"
        className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg"
      />
      <div className="mt-6 md:mt-0 md:ml-8 text-center md:text-left">
        <h1 className="text-3xl font-bold text-gray-900">Dariush Heidaryan</h1>
        <p className="mt-2 text-xl text-gray-600">Professional Engineer & Architect</p>
        <p className="mt-4 text-gray-600 max-w-2xl">
          Passionate about creating innovative solutions through engineering and architectural design. 
          Specializing in sustainable development and modern architectural concepts.
        </p>
      </div>
    </div>
  );
};

export default Profile;