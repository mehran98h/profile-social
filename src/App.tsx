import React from 'react';
import Hero from './components/Hero';
import Profile from './components/Profile';
import ContactLinks from './components/ContactLinks';
import Skills from './components/Skills';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Hero />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="p-8">
            <Profile />
            <ContactLinks />
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;