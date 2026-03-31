import React from 'react';

const SpecialistFinder: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Find Specialists</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <input 
          type="text" 
          placeholder="Search by specialty, name, or location..." 
          className="w-full border rounded-lg px-4 py-2 mb-4"
        />
        <p className="text-gray-600">Specialist listings would appear here.</p>
      </div>
    </div>
  );
};

export default SpecialistFinder;
