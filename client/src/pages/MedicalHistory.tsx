import React from 'react';

const MedicalHistory: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Medical History</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Your Health Records</h2>
        <p className="text-gray-600">Medical history records would be displayed here.</p>
      </div>
    </div>
  );
};

export default MedicalHistory;
