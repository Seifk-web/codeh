import React, { useState } from 'react';
import { BookOpen, Video, FileText } from 'lucide-react';

const DoctorDashboard: React.FC = () => {
  const [showLessons, setShowLessons] = useState(false);

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Doctor Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2">Today's Patients</h3>
          <p className="text-2xl font-bold">8</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4">View Schedule</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2">Scan Patient ID</h3>
          <p className="text-gray-600 mb-4">Quick access to patient records</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Start Scan</button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-2">AI Diagnostic</h3>
          <p className="text-gray-600 mb-4">Get instant diagnostic suggestions</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Use Chatbot</button>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <BookOpen className="w-10 h-10 mb-3" />
          <h3 className="font-bold text-lg mb-2">Medical Lessons</h3>
          <p className="text-green-50 mb-4 text-sm">Access training videos and resources</p>
          <button 
            onClick={() => setShowLessons(!showLessons)}
            className="bg-white text-green-600 px-4 py-2 rounded font-semibold hover:bg-green-50"
          >
            View Lessons
          </button>
        </div>
      </div>

      {/* Medical Lessons Section */}
      {showLessons && (
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Medical Education Resources</h2>
            <button 
              onClick={() => setShowLessons(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕ Close
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Video Lessons */}
            <div className="border-2 border-blue-200 rounded-lg p-6 hover:border-blue-400 transition">
              <Video className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">Video Tutorials</h3>
              <p className="text-gray-600 text-sm mb-4">
                Watch comprehensive medical training videos on latest procedures and techniques.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 mb-4">
                <li>• Emergency Protocols</li>
                <li>• Surgical Techniques</li>
                <li>• Patient Communication</li>
                <li>• Medical Device Usage</li>
              </ul>
              <button className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700">
                Browse Videos
              </button>
            </div>

            {/* Reading Materials */}
            <div className="border-2 border-purple-200 rounded-lg p-6 hover:border-purple-400 transition">
              <FileText className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">Study Materials</h3>
              <p className="text-gray-600 text-sm mb-4">
                Access detailed guides, research papers, and case studies.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 mb-4">
                <li>• Clinical Guidelines</li>
                <li>• Research Papers</li>
                <li>• Case Studies</li>
                <li>• Best Practices</li>
              </ul>
              <button className="bg-purple-600 text-white px-4 py-2 rounded w-full hover:bg-purple-700">
                View Documents
              </button>
            </div>

            {/* Interactive Learning */}
            <div className="border-2 border-green-200 rounded-lg p-6 hover:border-green-400 transition">
              <BookOpen className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="font-bold text-lg mb-2">Interactive Courses</h3>
              <p className="text-gray-600 text-sm mb-4">
                Participate in interactive medical courses with certifications.
              </p>
              <ul className="text-sm text-gray-700 space-y-2 mb-4">
                <li>• CPR & First Aid</li>
                <li>• Pharmacology Updates</li>
                <li>• Diagnostic Skills</li>
                <li>• Ethics & Compliance</li>
              </ul>
              <button className="bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-700">
                Start Learning
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-blue-600">24</p>
              <p className="text-sm text-gray-600">Completed Courses</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-purple-600">156</p>
              <p className="text-sm text-gray-600">Video Hours Watched</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <p className="text-2xl font-bold text-green-600">8</p>
              <p className="text-sm text-gray-600">Certifications Earned</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorDashboard;
