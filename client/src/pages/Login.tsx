import React from 'react';

const Login: React.FC = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input type="email" className="w-full border rounded-lg px-4 py-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Password</label>
          <input type="password" className="w-full border rounded-lg px-4 py-2" required />
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
