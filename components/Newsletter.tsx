'use client';

import { useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription here
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <div className="pt-20 sm:pt-24 md:pt-28 pb-16 sm:pb-20 md:pb-24" style={{backgroundColor: '#0A0E14'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Left side - Newsletter text */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-white mb-4">
                Blijf op de hoogte van exclusieve aanbiedingen
              </h2>
            </div>

            {/* Right side - Newsletter form */}
            <div>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
                Blijf op de hoogte van het laatste nieuws, exclusieve aanbiedingen en de{' '}
                <span className="text-blue-400">nieuwste modellen</span> door u aan te melden voor onze nieuwsbrief.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Uw e-mailadres"
                  required
                  className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-6 sm:px-8 py-3 transition-colors font-medium text-sm sm:text-base w-full sm:w-auto"
                >
                  AANMELDEN
                </button>
              </form>

              <p className="text-sm text-gray-400 mt-4">
                Door op Aanmelden te klikken, erkent u dat u onze{' '}
                <span className="text-blue-400 cursor-pointer hover:underline">algemene voorwaarden</span>{' '}
                heeft gelezen en geaccepteerd.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}