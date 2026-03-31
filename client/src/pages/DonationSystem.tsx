import React from 'react';

const DonationSystem: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Health Points & Donations</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Donate & Earn Health Points</h2>
        <p className="text-gray-600 mb-4">
          Support healthcare initiatives and earn redeemable credits.
        </p>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-blue-700">
          Make a Donation
        </button>
      </div>
    </div>
  );
};

export default DonationSystem;
