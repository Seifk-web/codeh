import React from 'react';

const DeviceRegistry: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Medical Device Registry</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Government Medical Device Database</h2>
        <p className="text-gray-600 mb-4">
          Verify and track registered medical devices with government QR codes.
        </p>
        <input 
          type="text" 
          placeholder="Search device by QR code or name..." 
          className="w-full border rounded-lg px-4 py-2"
        />
      </div>
    </div>
  );
};

export default DeviceRegistry;
