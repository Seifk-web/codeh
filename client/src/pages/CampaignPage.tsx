import React from 'react';

const CampaignPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-12 rounded-lg">
        <h1 className="text-5xl font-bold mb-4">Code H: Health Comes First</h1>
        <p className="text-xl">National Campaign for Integrated Healthcare</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Campaign Mission</h2>
          <p className="text-gray-600">
            Promote nationwide adoption of the Code H Medical ID system through strategic public awareness and community engagement.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-2xl font-bold mb-4">Key Messages</h2>
          <ul className="text-gray-600 space-y-2">
            <li>✓ Medical safety and patient protection</li>
            <li>✓ Emergency response acceleration</li>
            <li>✓ Counterfeit prevention</li>
            <li>✓ Integrated national healthcare</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CampaignPage;
