import React from 'react';

const AdminDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Government Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2">Registered Patients</h3>
          <p className="text-3xl font-bold text-blue-600">125,432</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2">Medical Devices</h3>
          <p className="text-3xl font-bold text-green-600">8,921</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
