import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <img src="/logo.jpg" alt="Code H" className="h-10 w-auto mb-4 brightness-0 invert" />
            <p className="text-gray-400 text-sm">
              An integrated healthcare framework enhancing patient safety and efficiency across the healthcare system.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/specialists" className="hover:text-white">Find Specialists</a></li>
              <li><a href="/therapy-services" className="hover:text-white">Mental Health</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li><a href="/campaign" className="hover:text-white">Campaign Info</a></li>
              <li><a href="/donate" className="hover:text-white">Donate</a></li>
              <li><a href="#" className="hover:text-white">Help Center</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-gray-400 text-sm mb-2">Email: info@codeh.health</p>
            <p className="text-gray-400 text-sm">Phone: +20 (XXX) XXXX-XXXX</p>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-800 my-8" />

        {/* Copyright */}
        <div className="flex justify-between items-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Code H. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
