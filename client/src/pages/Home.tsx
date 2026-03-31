import React from 'react';
import { Heart, Shield, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 rounded-lg">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Code H: Health & Help</h1>
          <p className="text-xl mb-8 opacity-90">
            Integrated Healthcare Framework for Enhanced Patient Safety and Efficiency
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/register" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
              Get Started
            </Link>
            <Link to="/campaign" className="border-2 border-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <Heart className="w-12 h-12 text-red-500 mb-4" />
          <h3 className="font-bold text-lg mb-2">Patient Care</h3>
          <p className="text-gray-600 text-sm">
            Secure Medical ID with instant access to health records and specialist referrals.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <Shield className="w-12 h-12 text-blue-500 mb-4" />
          <h3 className="font-bold text-lg mb-2">Data Security</h3>
          <p className="text-gray-600 text-sm">
            Government-regulated, centralized health data management with strict oversight.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <Users className="w-12 h-12 text-green-500 mb-4" />
          <h3 className="font-bold text-lg mb-2">Community Support</h3>
          <p className="text-gray-600 text-sm">
            Mental health services and support for patients, families, and healthcare professionals.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <TrendingUp className="w-12 h-12 text-purple-500 mb-4" />
          <h3 className="font-bold text-lg mb-2">Points & Rewards</h3>
          <p className="text-gray-600 text-sm">
            Transparent donation system with redeemable credits for healthcare contributions.
          </p>
        </div>
      </section>

      {/* Key Perspectives */}
      <section className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-8">Serving All Perspectives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-blue-600">For Patients</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>✓ Secure Medical ID and QR code</li>
              <li>✓ Complete health history access</li>
              <li>✓ Specialist appointment booking</li>
              <li>✓ Mental health support services</li>
              <li>✓ Health points and donations</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-green-600">For Medical Providers</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>✓ Instant patient history via QR scan</li>
              <li>✓ AI-powered diagnostic tools</li>
              <li>✓ Specialist referral system</li>
              <li>✓ Professional wellness support</li>
              <li>✓ Device compliance tracking</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-purple-600">For Government</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>✓ Centralized health oversight</li>
              <li>✓ Medical device registration</li>
              <li>✓ Healthcare facility monitoring</li>
              <li>✓ Regulatory compliance tracking</li>
              <li>✓ National health analytics</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-orange-600">For Society</h3>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>✓ Public awareness campaigns</li>
              <li>✓ Health education materials</li>
              <li>✓ Counterfeit prevention</li>
              <li>✓ Community engagement</li>
              <li>✓ Nationwide health improvement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 p-8 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Join Code H?</h2>
        <p className="text-gray-700 mb-6 text-lg">
          Be part of a nationwide initiative to improve healthcare quality and safety.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/register" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700">
            Register Now
          </Link>
          <Link to="/campaign" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold border-2 border-blue-600 hover:bg-gray-50">
            View Campaign
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
