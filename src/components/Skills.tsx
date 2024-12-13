import React from 'react';

const SKILLS = [
  'Geodetic Surveying ',
  'Topographic Mapping ',
  'GIS Analysis and Mapping ',
  'Renewable Energy Systems Integration ',
  'Urban Energy Planning ',
  'Architectural Energy Simulation '
];

const Skills = () => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SKILLS.map((skill) => (
          <div key={skill} className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-800 font-medium">{skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;