import React from 'react';

export default function ServicesSection(){ 
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Private Classes */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Private Classes
              </h3>
              <p className="text-gray-600 mb-4">
                Personalized one-on-one sessions with expert tutors tailored to your learning goals.
              </p>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Group Classes */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Group Classes
              </h3>
              <p className="text-gray-600 mb-4">
                Join small groups and learn Spanish in a collaborative and fun environment.
              </p>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Free Practice */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Free Practice
              </h3>
              <p className="text-gray-600 mb-4">
                Access free resources and exercises to practice your Spanish anytime, anywhere.
              </p>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};