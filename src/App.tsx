import React, { useState } from 'react';
import { Boxes, Eye, EyeOff } from 'lucide-react';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (username === 'Rocky' && password === 'Road') {
      setSuccess(true);
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side with background and logo */}
      <div className="hidden lg:flex lg:w-3/4 bg-gradient-to-br from-slate-800 to-slate-900 p-12 flex-col">
        <div className="flex items-center space-x-3">
          <Boxes className="w-12 h-12 text-blue-500" />
          <h1 className="text-3xl font-bold text-white">Welcome to ABA-MATRIX!</h1>
        </div>
        <p className="text-slate-400 mt-4">The All-in-One Solution for Behavior Analysis Agencies.</p>
      </div>

      {/* Right side with login form */}
      <div className="w-full lg:w-1/4 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8 text-center">
          <h2 className="text-2xl font-semibold text-slate-900">LOGIN TO YOUR ACCOUNT</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 text-red-500 p-3 rounded-md text-sm">
                {error}
              </div>
            )}
            {success && (
              <div className="bg-green-50 text-green-500 p-3 rounded-md text-sm">
                Login successful!
              </div>
            )}
            
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="space-y-2 relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium py-3 rounded-md transition-colors"
            >
              LOGIN
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-slate-500">OR</span>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-slate-600">Can't login?</p>
              <p className="text-sm text-slate-600">Don't have an account?</p>
              <p className="text-sm text-slate-600">
                Contact us at: <br />
                <span className="text-slate-500">support@abamatrix.com</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;