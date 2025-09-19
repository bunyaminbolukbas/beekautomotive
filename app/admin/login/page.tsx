'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock } from 'lucide-react';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple password check (in a real app, use proper authentication)
    if (password === 'admin123') {
      localStorage.setItem('adminAuth', 'true');
      router.push('/admin');
    } else {
      setError('Onjuist wachtwoord');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6 sm:p-8 mx-4">
        <div className="text-center mb-6 sm:mb-8">
          <div className="mx-auto w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
            <Lock className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Admin Login</h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">Voer het admin wachtwoord in</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4 sm:space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Wachtwoord
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm sm:text-base"
              placeholder="Voer wachtwoord in..."
              required
            />
          </div>

          {error && (
            <div className="text-red-600 text-sm">{error}</div>
          )}

          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors font-medium text-sm sm:text-base"
          >
            Inloggen
          </button>
        </form>

        <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-gray-500">
          Demo wachtwoord: <code className="bg-gray-100 px-2 py-1 rounded">admin123</code>
        </div>
      </div>
    </div>
  );
}