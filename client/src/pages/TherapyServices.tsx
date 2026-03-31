import React from 'react';

const TherapyServices: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Therapy & Mental Health Services</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Find Mental Health Support</h2>
        <p className="text-gray-600 mb-4">
          Connect with qualified therapists and mental health professionals.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700">
          Find Therapist
        </button>
      </div>
    </div>
  );
};

export default TherapyServices;
