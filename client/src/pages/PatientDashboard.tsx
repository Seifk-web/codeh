import React from 'react';

const PatientDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Patient Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2">Your Medical ID</h3>
          <p className="text-gray-600 mb-4">QR Code: XXXX-XXXX-XXXX</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">View ID</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2">Appointments</h3>
          <p className="text-gray-600 mb-4">3 upcoming appointments</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">View All</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2">Health Points</h3>
          <p className="text-2xl font-bold text-green-600">2,450</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded mt-2">Redeem</button>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
